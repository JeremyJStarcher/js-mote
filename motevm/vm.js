var doCrash = 90000;

// Was const
var OP_DECLARE    = 1;  // OP_DECLARE TYPE NAME
var OP_UNVAR      = 2;  // OP_UNVAR TYPE NAME
var OP_EXIT       = 3;  // OP_EXIT
var OP_COMMENT    = 4;  // Just a comment, to help debug.
var OP_PUSHV      = 5;  // OP_PUSHV var (real variable)
var OP_POP        = 6;  // OP_POP var
var OP_CALLI      = 7;  // OP_CALLI internal function
var OP_CALLE      = 8; // OP_CALLE external function
var OP_BRA_FALSE  = 9; // Branch if false
var OP_BRANCH     = 10; // Branch always
var OP_MAKEREF    = 11; // Turn a variable into a reference.
var OP_NOP        = 12; // Does nothing

var opCodeName = new Array();
opCodeName[OP_DECLARE]   = "var   ";
opCodeName[OP_UNVAR]     = "unvar ";
opCodeName[OP_EXIT]      = "exit  ";
opCodeName[OP_COMMENT]   = ";";
opCodeName[OP_PUSHV]     = "pushv ";
opCodeName[OP_POP]       = "pop   ";
opCodeName[OP_CALLI]     = "calli ";
opCodeName[OP_CALLE]     = "calle ";
opCodeName[OP_BRA_FALSE] = "brf   ";
opCodeName[OP_BRANCH]    = "bra   ";
opCodeName[OP_MAKEREF]   = "toref ";
opCodeName[OP_NOP]       = "nop   ";


var VM_RUN  = 1;
var VM_STOP = 2;
var VM_EXIT = 3;


var VarStack;
var CVarStack;
var timerID;

var twiddleStr = new Array("-", "\\", "|", "/");
var twiddlePos = 0;

function twiddleIt()
{
  twiddlePos++;
  if (twiddlePos > twiddleStr.length-1) twiddlePos = 0;  
  $("msgTwiddle").innerHTML = twiddleStr[twiddlePos];
}

function twiddleClear()
{
  $("msgTwiddle").innerHTML = "&nbsp;";
}


function VMDoIt() {
  twiddleIt();  
  var i = 100;
  if (vmEngine.runProc == undefined) {
    setStatusMsg("Program run complete");
    doVMStop();
  } else {
    while (i-- > 0) {
      vmEngine.opRunOne();
      if (vmEngine.runProc == undefined) break;
    }
    timerID = setTimeout("VMDoIt()", 1);
  }
}

function VMStop()
{
  setStatusMsg("Program stopped by user");
  doVMStop();  
}

function doVMStop()
{
  if (timerID != undefined) clearTimeout(timerID);
  vmEngine = new MoteEngine();
  twiddleClear();
}
function VMRun(func)
{
  
  if (moteCompileError) {
    alert("Can't run program due to compile errors.");
    return;
  }
  
  setStatusMsg("Running program");
  
  VarStack = new Array();
  CVarStack = new Array();
  vmEngine.runFuncStart(func);
  VMDoIt();
}


function MoteProcedure(name, ret_type, args)
{
  this.name = name;
  this.ret_type = ret_type;
  this.args = args;
  
  this.opCodeArray = new Array();
  this.debugmode = false;
}


MoteProcedure.prototype.addOpCode = function(opcode, s1, s2, s3, s4)
{
  //TOFIX:
  // Somewhere my branches got off by one and they are landing
  // on the comments.  Until that is fixed, comments MUST be there.
  //if (opcode != OP_COMMENT) {
    var op = new OpCodeType(opcode, s1, s2, s3, s4);
    this.opCodeArray.push(op);
  //}
}


MoteProcedure.prototype.getOpOffset = function()
{
  return this.opCodeArray.length-1
}

MoteProcedure.prototype.getOpCodes = function(labels)
{
  var out = "";
  var i;
  for(i = 0; i < this.opCodeArray.length; i++) {
    var op = this.opCodeArray[i];
    var dest = "";
    var s = "[ " + i + "] " + op;
    switch (op.opcode) {
      case OP_BRA_FALSE:
      case OP_BRANCH:
      var t  = labels.getByLabel(op.s1)
      if (t == undefined) {
        dest = "???";
      } else { 
        dest = t.value;
      }
      s += "<" + dest + ">";
    }
    
    out += s + "\n";
  }
  return out;
}



/////////////////////////////////////////////////////////////////
function MoteEngine()
{
  this.startTime = 0;
  this.endTime = 0;
	
  this.moteProcList = new Array();
  this.vmState = VM_STOP;
  
  this.funcDepth = -1;  // Zero based, in no function
  
  this.saveRunProc = new Array();
  this.runProc = undefined;
  this.saveOpIdx = new Array(); // The opcode pointer for each depth
  
  this.opIdx = 0;
  
  this.saveVarBase = new Array();
  this.varBase = 0;  
  
}

MoteEngine.prototype.opRunOne = function()
{
  this.runProc.opCodeArray[this.opIdx].execOp(this);
  
  if (this.debugmode) {
    document.demoMatch.pcCounter.value = (this.opCodeidx) + ":" + this.opCodeArray[this.opCodeidx];
    document.demoMatch.VarStack.value = VarStack.toString().replace(/,/g, " ");
    document.demoMatch.CVarStack.value = CVarStack.toString().replace(/,/g, " ");;
  }
}


MoteEngine.prototype.runFuncStart = function(fname)
{
  //do_debug("Entering function: " + fname);
  //do_debug("Depth = " + this.funcDepth);
  this.funcDepth++;
  
  this.vmState = VM_RUN;
  var i = 0;
  
  this.saveOpIdx[this.funcDepth] = this.opIdx;
  this.opIdx = 0;
  
  this.saveVarBase[this.funcDepth] = this.varBase; 
  this.varBase = CVarStack.length; 
  
  this.saveRunProc[this.funcDepth] = this.runProc;
  i = vmEngine.moteProcList.getMoteIdx(fname);
  this.runProc = this.moteProcList[i];
}


MoteEngine.prototype.runFuncEnd = function()
{
  //do_debug("Leaving function:");
  
  this.opIdx = this.saveOpIdx[this.funcDepth];
  this.varBase = this.saveVarBase[this.funcDepth];  
  this.runProc = this.saveRunProc[this.funcDepth];
  
  this.funcDepth--;
  // Leave the old array element, we'll re-use it.
  //do_debug("Depth = " + this.funcDepth);
}

var vmEngine;
function resetVM() {
  vmEngine = new MoteEngine();
}
resetVM();



Array.prototype.getMoteIdx = function (s) {
  s = "" + s;
  var i;
  for (i = 0; i < this.length; i++) {
    var t = this[i].name;
    if (t == s) return i;
  }
  return -1;
};



////////////////////////////////////////////////////////////////

function OpCodeType(opcode, s1, s2, s3, s4) {
  this.opcode = opcode;
  this.s1 = (s1 == undefined) ? "":s1;
	this.s2 = (s2 == undefined) ? "":s2;
	this.s3 = (s3 == undefined) ? "":s3;
	this.s4 = (s4 == undefined) ? "":s4;
	
  /*  if (s1 !== undefined) this.s1 = s1;
  if (s2 !== undefined) this.s2 = s2;
  if (s3 !== undefined) this.s3 = s3;
  if (s4 !== undefined) this.s4 = s4;
	*/
}

// Change the offset for a jump
OpCodeType.prototype.changeDest = function(v) {
  this.s1 = v;
};


OpCodeType.prototype.toString = function() {
  var s = opCodeName[this.opcode];
  
  switch(this.opcode) {
    case OP_CALLI:
    s += reverseLookupMethod(this.s1);
    break;
    default:
    if (this.s1 !== undefined) s += " " + this.s1;
    if (this.s2 !== undefined) s += " " + this.s2;
    if (this.s3 !== undefined) s += " " + this.s3;
    if (this.s4 !== undefined) s += " " + this.s4;
    break;
  }
  
  s = s.replace(/\n/g,"[nl]");
  return s;
};




OpCodeType.prototype.execOp = function(jjsMaster) {
  jjsMaster.opIdx++;
  
  
  if (doCrash-- == 0) killJS("Ran too long");
  var fullLog = false;
  
  if (fullLog) {
    var s = jjsMaster.runProc.name + ":" + jjsMaster.opIdx + ":" + this + "\n";
    $("logOutput").value += s;
  }
  
  
  //do_debug("running: " + this);
  
  switch (this.opcode) {
    case OP_DECLARE:
    var v = createCVar(this.s2, this.s3, this.s4);
    v.varName = this.s1;
    CVarStack.push(v);
    break;
    case OP_MAKEREF:
    var l = VarStack.pop();
    CVarStack.push(l);
    break;
    case OP_UNVAR:
    var i = parseInt(this.s1);
    while (i-- > 0) {
      var v = CVarStack.pop();
      v = null;
    }
    break;
    case OP_POP:
    var i = parseInt(this.s1);
    while (i-- > 0) {
      var v = VarStack.pop();
      v = null;
    }
    break;
    case OP_COMMENT:
    // Do nothing
    break;
    case OP_BRA_FALSE:
    var v1 = VarStack.pop();
    if (v1.value == false) {
      jjsMaster.opIdx = this.s1; 
    }
    break;
    case OP_BRANCH:
    jjsMaster.opIdx = this.s1; 
    break;
    case OP_EXIT:
    jjsMaster.vmState = VM_STOP;
    vmEngine.runFuncEnd();
    break;
    case OP_PUSHV:
    VarStack.push(CVarStack[jjsMaster.varBase + this.s1]);
    break;
    case OP_NOP:
    break;
    case OP_CALLI:
    this.s1();
    break;
    case OP_CALLE:
    vmEngine.runFuncStart(this.s1);
    break;
    default:
    do_err_at("Unknown opcode: " + this.opcode);
  }
  if (fullLog) {
    s = "B = " + jjsMaster.varBase + " C = " + CVarStack + "\nV = " + VarStack + "\n";
    $("logOutput").value += s;
  }
  
};


function sendOutputLn(s)
{
  sendOutput(s + "\n");
}

function sendOutput(s)
{
	textAppend("programOutput", "" + s)
}

function killJS(s)
{
  alert(s); 
  var IntentialError;
  IntentialError.blah;
}
