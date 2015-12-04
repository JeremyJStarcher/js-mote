var realVarCounter; // How many real variables, function total
var tempVarCounter; // How many temporary vars;
var totalCounter;
var labelCounter;

var branchArray;  // Open branches IF/ELSE/ENDIF and WHILE loops
var labelArray;   //

var CompileTokens;
var CompileSource;
var VmProc;


var expParseError = false;
var moteCompileError = false;

function textAppend(id, s)
{
	var t = $(id);
	t.value += s;
  t.scrollTop = t.scrollHeight; // Scroll to bottom
}


function do_compile(s)
{
  setStatusMsg("Compiling");
  
  var vmStartTime = new Date();
  moteCompile(s);
  var vmEndTime = new Date();
	var totalTime = vmEndTime - vmStartTime;
  if (moteCompileError == false) {
    setStatusMsg("Compile finished: Total time:" + totalTime / 1000);
  } else {
    setStatusMsg("Errors found.  See errors page for details");
  }
  twiddleClear();
}

function moteShowTokens(a)
{
	textAppend("tokenList", "" + a)
}


function do_err(s)
{
  var t = CompileTokens.getToken()
  do_err_at(s, t);
}



var b_space = "                                           ";
b_space = b_space + b_space + b_space + b_space + b_space + b_space;
b_space = b_space + b_space + b_space + b_space + b_space + b_space;
b_space = b_space + b_space + b_space + b_space + b_space + b_space;

function do_err_at(s, t)
{
	var a = CompileSource.split(tokenizeRegex[TOKEN_EOL][1]);
  
	var carrot = b_space.substring(1, t.pos) + "^";
	
	s += "\nLine " + t.line + " position " + t.pos;
  s += "\n" + a[t.line-1];
  s += "\n" + carrot;
	textAppend("errorList", s + "\n")
  moteCompileError = true;
}

function do_debug(s)
{
	textAppend("errorList", "  DEBUG: " + s + "\n")
}


function showOpCodes()
{
	textAppend("opcodeList", "***" + VmProc.name + "\n");
  textAppend("opcodeList", VmProc.getOpCodes(labelArray));
	textAppend("opcodeList", "\n\n");
}



/* 
* The main compile
*/
/*
* To understand this code:
*
* a) Integers, Characters, Booleans, Strings, blah, blah, blah
*    are kept as classes, not primitives.
* b) All constants get turned into a class instance and stuffed
*    on the stack.  These are called 'Temporary Variables'.
*/


function moteCompile(source) {
  var functionName;   // The name of the function
  var returnIdx;      // Return value
  var args = new Array();
  var argtypes = new Array();
  var ii;
  
  branchArray = new Array();
  labelArray = new Array();
  
  moteCompileError = false;  
  
  CompileSource = source;
  CompileTokens = tokenize(source);
  moteShowTokens(CompileTokens);
  
  setStatusMsg("Compiler: Compile stage");
  
  $("opcodeList").value = "";
	
  CompileTokens.initIdx(); //  Initialize
  
  CompileTokens.skipEol();
  
  while (CompileTokens.getToken() != undefined) {
    
    // Build the function header
    if (!(CompileTokens.getToken().getType() == TOKEN_IDENTIFIER && CompileTokens.getToken() == "function")) {
      do_err("'function' keyword expected.");
      return;
    }
    CompileTokens.inc();
    
    // Flag we we have a return value or not
    returnIdx = VARTYPES.indexOf(CompileTokens.getToken());
    if ( returnIdx >= 0) {
      CompileTokens.inc();
    }
    
    if (CompileTokens.getToken().getType() != TOKEN_IDENTIFIER) {
      do_err("function name expected.  Found: " + CompileTokens.getToken());
      return;
    } else {
      functionName = CompileTokens.getToken();
      CompileTokens.inc();
    }
    
    
    if (!(CompileTokens.getToken().getType() == TOKEN_SYMBOL && CompileTokens.getToken() == "(")) {
      do_err("( expected.  Found  " + CompileTokens.getToken());
      return;
    }
    
    if (CompileTokens.getNextToken() != ")") {    
      do {
        CompileTokens.inc(); // Skip the '(' or ','
        moteHandleReference(args, argtypes); 
      } while (CompileTokens.getToken() != ")")
      
    } else {
      // Eat the two parens and continue
      CompileTokens.inc();
      CompileTokens.inc();
    }
    
    CompileTokens.inc(); // Eat the EOL
    
    var retType = (returnIdx == -1) ? V_ILLEGAL:VARTYPE_VALUES[returnIdx];
    
    VmProc = new MoteProcedure(functionName,retType, argtypes);
    // Declare the return value.
    if (returnIdx >= 0) {
      moteIndexVar(VARTYPE_VALUES[returnIdx], functionName);
    }
    
    for (ii = 0; ii < args.length; ii++) {
      moteRefVar(argtypes[ii], args[ii]);
      VmProc.addOpCode(OP_MAKEREF, args.length-ii-1);
    }
    
    moteCompileFunction(source, VmProc);
    
    // Reset things for the next Array
    VmProc.addOpCode(OP_COMMENT, "Undeclaring parameters");
    VmProc.addOpCode(OP_UNVAR, args.length);
    for (ii = 0; ii < args.length; ii++) {
      CVarRemoveDeclare(); // Then nuke it
    }
    
    
    if ( returnIdx >= 0) {
      VmProc.addOpCode(OP_COMMENT, "Process return value");
      VmProc.addOpCode(OP_PUSHV, 0, "; return value"); // Save it on the stack
      VmProc.addOpCode(OP_UNVAR, 1);
      CVarRemoveDeclare(); // Then nuke it
    }
    
    
    VmProc.addOpCode(OP_EXIT);
    showOpCodes();
    moteConvertLabels();
    
    // Reset things back
    args = new Array();
    argtypes = new Array();
    branchArray = new Array();
    labelArray = new Array();
    
    CompileTokens.inc(); // Eat the TOKEN_ENDFUNC
    
    var i = vmEngine.moteProcList.getMoteIdx(functionName);
    if (i == -1) { // Not found -- append
      vmEngine.moteProcList.push(VmProc);
    } else { // Replace existing
      vmEngine.moteProcList[i] = VmProc
    }
    
    CompileTokens.skipEol();
    
  }
}



function moteCompileFunction(source, VmProc) {
  realVarCounter = 0; // How many real 'declared' variables are there?
  tempVarCounter = 0; // How many temporary variables (per expression, deleted afterwords)
  
  totalCounter = 0;   // THe total number of variables, just used to name some of the temp vars.
  labelCounter = 0;   // The label counter for branches
	
  // We''ve just gotten past the function header, so now we start to process each line.
  while (CompileTokens.getToken().getType() != TOKEN_ENDFUNC) {
    twiddleIt();  
    
    /* Process known constants */
    //do_debug("Processing: " + CompileTokens.getToken());
		
    if (CompileTokens.getToken() == "declare") {
      realVarCounter++;
      totalCounter++;;
      CompileTokens.inc();
      moteHandleDeclare();
			
    } else if (CompileTokens.getToken() == "if") {
      moteHandleIf();
			
    } else if (CompileTokens.getToken() == "endif") {
      moteHandleEndif();
			
    } else if (CompileTokens.getToken() == "else") {
      moteHandleElse();
			
    } else if (CompileTokens.getToken() == "do") {
      moteHandleDo();
			
    } else if (CompileTokens.getToken() == "loop") {
      moteHandleLoop();
			
			
    } else if (CompileTokens.getToken().getType() == TOKEN_EOL) {
			//VmProc.addOpCode(OP_COMMENT, "**LINE" + CompileTokens.getNextToken().line);
    } else {
      // We''ve run out of other options, this must be an expression.
      var stack_extra = moteHandleExpression();
			if (expParseError == true) {
				// Do nothing, just eat the expression
			} else if (stack_extra.length == 1) {
				VmProc.addOpCode(OP_COMMENT, "Clean up return value(s)");
				VmProc.addOpCode(OP_POP, stack_extra.length);
			} else if (stack_extra > 1) {
				do_err("Syntax error.  Too many operands left on stack.");
			}
			
    }
    CompileTokens.inc();
  }
  
  checkUnclosedNest(branchArray);	
	
  VmProc.addOpCode(OP_COMMENT, "Undeclaring REAL variables");
  VmProc.addOpCode(OP_UNVAR, realVarCounter);
  
  while (realVarCounter-- > 0) {
    CVarRemoveDeclare();
  }
	
}


function moteHandleDo() {
  CompileTokens.inc();
  var label = "L" + labelCounter++;
	
  if (CompileTokens.getToken() != "while") {
    do_err("'while' expected.");
    return;
  }
  CompileTokens.inc();
	
  var t = new branchType(BRANCH_DOWHILE);
  t.loopLabel = label + "_loop";
  t.doLabel = label + "_do";
	
  var tt = new branchLabelType(t.doLabel,  VmProc.getOpOffset());
  VmProc.addOpCode(OP_COMMENT, ":" + tt.name);
  labelArray.push(tt);
	
  var stack_extra = moteHandleExpression();
  if (stack_extra[0] != V_BOOLEAN) {
    do_err("empty or non-boolean 'do while' statement.")
  }
  if (stack_extra.length == 1) stack_extra.pop(); // Handle the returned value  
	
  branchArray.push(t);
  VmProc.addOpCode(OP_BRA_FALSE, t.loopLabel);
}

function moteHandleLoop()
{
  var t = branchArray.pop();
  if (checkNestErr(t, BRANCH_DOWHILE)) return;
  
  VmProc.addOpCode(OP_BRANCH, t.doLabel);
  var tt = new branchLabelType(t.loopLabel,  VmProc.getOpOffset() +1);
  VmProc.addOpCode(OP_COMMENT, ":" + tt.name);
  labelArray.push(tt);
}


function moteHandleIf() {
  CompileTokens.inc();
  var label = "L" + labelCounter++;
	
  var stack_extra = moteHandleExpression();
  if (stack_extra[0] != V_BOOLEAN) {
    do_err("empty or non-boolean if statement.")
  }
	
  if (stack_extra.length == 1) stack_extra.pop(); // Handle the returned value  
  var t = new branchType(BRANCH_IF);
  t.endifLabel = label + "_endif";
  t.nextElseLabel = label + "_else";
	
  //alert("Burying " + t);
  branchArray.push(t);
  VmProc.addOpCode(OP_BRA_FALSE, t.nextElseLabel);
}


function moteHandleElse()
{
  var t = branchArray[branchArray.length-1];
  if (checkNestErr(t, BRANCH_IF)) return;
  
  CompileTokens.inc();
  
  VmProc.addOpCode(OP_BRANCH, t.endifLabel);
  
  //VmProc.addOpCode(OP_NOP);
  
  var tt = new branchLabelType(t.nextElseLabel,  VmProc.getOpOffset()+1);
  labelArray.push(tt);
  VmProc.addOpCode(OP_COMMENT, ":" + tt.name);

  // Make each 'else' lable unique.  The more elses, the more "_x" added to
  // the end.	
  t.nextElseLabel += "_x";
	
  var stack_extra = moteHandleExpression();
  if (stack_extra.length == 0) {
    // There is no else condition so nothing to do.  Just accept it.
  } else if (stack_extra[0] == V_BOOLEAN) {
    VmProc.addOpCode(OP_BRA_FALSE, t.nextElseLabel);
  } else {
    do_err("non-boolean else statement.")
  }
  if (stack_extra.length == 1) stack_extra.pop(); // Handle the returned value  
  
}


function moteHandleEndif()
{
  var t = branchArray.pop();
  if (checkNestErr(t, BRANCH_IF)) return;
  
  // This will catch any previous 'else' fall through
  var tt = new branchLabelType(t.nextElseLabel,  VmProc.getOpOffset());
  VmProc.addOpCode(OP_COMMENT, ":" + tt.name);
	
  labelArray.push(tt);
	
  // And this will catch the endif itself.
  tt = new branchLabelType(t.endifLabel,  VmProc.getOpOffset());
  VmProc.addOpCode(OP_COMMENT, ":" + tt.name);
  labelArray.push(tt);
}

function moteConvertLabels()
{
  var i;
  var t;
  var tt;
  
  var j;
  for (j = 0; j < VmProc.getOpOffset(); j++) {
    var op = VmProc.opCodeArray[j];
    if (op.opcode == OP_BRA_FALSE || op.opcode == OP_BRANCH) {
      for (i = 0; i < labelArray.length; i++) {
        tt = labelArray[i];
        if (op.s1 == tt.name) {
          op.changeDest(tt.value); 
        }
      }
    }
  }
}




function moteHandleExpression()
{
	expParseError = false;
  
  var expression = moteGetExpression();
  //do_debug("INFIX" + arrayToLine()expression);
  
	if (expParseError == true) return undefined;
	
  var postfix = new InfixToPostfix(expression);
	if (expParseError == true) return undefined;
  
  VmProc.addOpCode(OP_COMMENT, 'INFIX', ""+arrayToLine(expression));
  var ss = arrayToLine(postfix);
  VmProc.addOpCode(OP_COMMENT, 'POSTFIX', "" + ss);
	
  //do_debug("POSTFIX" + ss);
  
	if (expParseError == true) return undefined;
	
  var r = finalizePostfix(postfix);
	
  VmProc.addOpCode(OP_COMMENT, "Undeclaring Temp variables");
  VmProc.addOpCode(OP_UNVAR, tempVarCounter);
	
  while (tempVarCounter-- > 0) {
    VmProc.addOpCode(OP_COMMENT, "; " + CVarNames[CVarNames.length-1]);
    CVarRemoveDeclare();
  }
  tempVarCounter = 0; // Fix the fence-post error above.
  
  return(r);
}


function doCallFunc(meth)
{
  var f = meth[METHOD_FUNC];
  // If its not an internal method/function, it must be a user-defined
  // one.
  if (f == undefined) {
    VmProc.addOpCode(OP_CALLE, meth[METHOD_NAME]);
  } else {
    VmProc.addOpCode(OP_CALLI, f);
  }
}

function doArgCheck(token, inf)
{
  var s;
  if (inf == undefined) {
    s = 'Method "' + token + '" not found.'
    do_err_at(s, token);
    expParseError = true;
  } else if (token.argCount > inf[METHOD_PARAMS].length) {
    s = "Too many arguments given to " + reverseLookupMethod(inf[METHOD_FUNC]);
    do_err_at(s, token);
    expParseError = true;
  } else if (token.argCount < inf[METHOD_PARAMS].length) {
    s = "Too few arguments given to " + reverseLookupMethod(inf[METHOD_FUNC]);
    do_err_at(s, token);
    expParseError = true;
  }
}


function finalizePostfix(pf)
{
  var newpf = new Array();
  var stack = new Array();
  var i;
  var type;
  
	
  for(i = 0; i < pf.length; i++) {
    var token=pf[i];
    var val = token.value;
    
    //do_debug("Token: " + token + " :" + stack);
    
    // *
    // * Loop through the operators first and convert them to first-class
    // * functions.
    // * Right now, assuming all operators take two parameters
    // *
		
    if (isOperator(token)) {
      // Don't check operators if an error
      if(expParseError == true) continue;
      
      // Find the right method for that op_name, first var.
      var op = stack[stack.length-2];
      var type = getOperandType(op);
      var base_method = getOperatorFunc(token);
      var method_info = getMethodInfo(type, base_method);
      
      var r_type = checkParameters(stack, method_info, token);
			if (expParseError == true) 	return(stack);
      token.t_type = T_OPERATOR;
      token.value = method_info[METHOD_FUNC];
      newpf.push(token);
      
      doCallFunc(method_info);      
    } else if (token.t_type == T_FUNCTION) {
			var r_type;
      var inf = getMethodInfo(V_BUILTIN, token.value);
      if (inf == undefined) {
        do_err_at("Can't find function: " + token, token);
        expParseError = true
      } else {
        doArgCheck(token, inf)
        if (!expParseError) {
          r_type = checkParameters(stack, inf, token);
        }
      }
			if (expParseError == true) 	return(stack);
      newpf.push(token);
      doCallFunc(inf);      
      
    } else if (token.t_type == T_METHOD) {
      var r_type;
      var first = stack[stack.length-1];
      var inf = getMethodInfo(getOperandType(first), token);
      doArgCheck(token, inf);
      if (!expParseError) {
        r_type = checkParameters(stack, inf, token);
      }
      if (!expParseError) {
        doCallFunc(inf);
      }      
      
    } else if (token.type == TOKEN_INTEGER) {
      tempVarCounter++;
      totalCounter++;;
      
      var name="CONST" + totalCounter + "_" + tempVarCounter;
      
      moteIndexVar(V_INTEGER, name, val);
      VmProc.addOpCode(OP_PUSHV, getCVarIdByName(name), ";(int)", val);
      stack.push(token);
      newpf.push(token);
      
    } else if (token.type == TOKEN_STRING) {
      tempVarCounter++;
      totalCounter++;;
      // Remove quote marks.
      val = val.substring(1,val.length-1);
      val = val.replace(/\\n/g, "\n");
      val = val.replace(/\\r/g, "\n");
      
      var name="CONST" + totalCounter + "_" + tempVarCounter;
      
      moteIndexVar(V_STRING, name, val);
      VmProc.addOpCode(OP_PUSHV, getCVarIdByName(name), ";(str)", val);
      stack.push(token);
      newpf.push(token);
      
      // And variable names.
    } else if (token.type == TOKEN_IDENTIFIER) {
      var id = getCVarIdByName(val);
      if (id == -1) {
        // This should never print -- caught in the infix routine.
        do_err("XXXXXVariable '" + val + "' not found.");
      } else {
        VmProc.addOpCode(OP_PUSHV, id, ";(var)", val);
        stack.push(token);
        newpf.push(token);
      }
    } else if (isOperand(token)) {
      do_err("Uncaught identifier: " + token + ".");
      stack.push(token);
      newpf.push(token);
    } else {
      do_err_at("Syntax error " + token, token);
      expParseError = true;
    }
  }    
  
  //  do_debug("Stack = " + dumpTokens(stack));
  //  do_debug("newpf = " + dumpTokens(newpf));
  return (stack);
}


function moteHandleDeclare()
{
  var vartype = CompileTokens.getToken();
  CompileTokens.inc();
	
  var varname = CompileTokens.getToken();
  CompileTokens.inc();
	
  var j = VARTYPES.indexOf(vartype);
  moteIndexVar(VARTYPE_VALUES[j], varname);
}


// Not the same as handle_declare because that is
// going to get a big make-over soon
function moteHandleReference(args, argtypes)
{
  var vartype = CompileTokens.getToken();
  CompileTokens.inc();
  
  var varname = CompileTokens.getToken();
  CompileTokens.inc();
  var j = VARTYPES.indexOf(vartype);
  
	argtypes.push(VARTYPE_VALUES[j]);
  args.push(varname);
}


function moteRefVar(type, varname, initvalue) {
  // If init value is undefined, it will be created with the
  // default value
  VmProc.addOpCode(OP_COMMENT, varname, type, initvalue);
	
  //Create an instance of the variable now so we have something we 
  // look up data with
  var v = createCVar(type, initvalue);
	
  CVarAddDeclare(varname, type);
}

function moteIndexVar(type, varname, initvalue) {
  // If init value is undefined, it will be created with the
  // default value
  VmProc.addOpCode(OP_DECLARE, varname, type, initvalue);
	
  //Create an instance of the variable now so we have something we 
  // look up data with
  var v = createCVar(type, initvalue);
	
  CVarAddDeclare(varname, type);
}


/*
* getExpression
*
* Ping-pong back and forth between operators and operands
* and when we find an unexpected token, consider that the 
* end of the expression.
*
* This is a general case routine that handles
* (expressions in parens)
* expressions ending in EOL
*/
function moteGetExpression()
{
  var infix = new Array();
  var parenCount = 0;
	
  while (true)
  {
    if (CompileTokens.getToken().getType() == TOKEN_EOL) break;
		
		
    // Add parens to the output, we don''t count them as operators
    // or operands.
    if (CompileTokens.getToken() == '(') {
      infix.push(CompileTokens.getToken());
      CompileTokens.inc();
      parenCount++;
      continue;
    }
		
    if (CompileTokens.getToken() == ')' && parenCount >= 0) {
      parenCount--;
      infix.push(CompileTokens.getToken());
      CompileTokens.inc();
      continue;
    }
		
    // Save the last operator
    infix.push(CompileTokens.getToken());
		
    if (isOperator(CompileTokens.getToken()) == false && CompileTokens.getNextToken() == ')') {
      // Handle the closing paren on an expression
      CompileTokens.inc();
      continue;
    } else if (isOperator(CompileTokens.getToken()) == false && CompileTokens.getNextToken() == '(') {
      // Handle the <function name> + <opening paren>
      CompileTokens.inc();
      continue;
		} else if (	CompileTokens.getToken().getType() == TOKEN_BAD_STRING) {
      do_err_at("Unterminated string",CompileTokens.getToken());
      expParseError = true;
    } else if (isOperator(CompileTokens.getNextToken()) == isOperator(CompileTokens.getToken())) {
      // The ping-pong broke.  We didn''t expect this.
      if (CompileTokens.getNextToken().getType() != TOKEN_EOL) {
        do_err_at("Unexpected token '" + CompileTokens.getNextToken() + "'",CompileTokens.getNextToken());
        expParseError = true;
      }
      break;
    }		
    CompileTokens.inc();
		
  }
  if (infix.length == 0) {
    // A 'blank' or empty expression is legal 
  }else if (isOperator(infix[infix.length -1])) {
    do_err_at("Operand expected after operator",infix[infix.length -1]);
    expParseError = true;
  } else if (parenCount > 0) {
    do_err_at("Too many ('s",CompileTokens.getNextToken());
    expParseError = true;
  } else if (parenCount < 0) {
    do_err_at("Too many )'s",infix[infix.length -1]);
    expParseError = true;
  }
  return infix;
}

/* Branch stack routines */

var BRANCH_IF = 1;
var BRANCH_DOWHILE = 2;


var BRANCH_WORDS = new Array();
BRANCH_WORDS[BRANCH_IF] = ["if", "endif"];
BRANCH_WORDS[BRANCH_DOWHILE] = ["do while", "loop"];


function branchType(type) {
  this.type = type;
  this.endifLabel = "[none]";
  this.nextElseLabel = "[none]";
  this.loopLabel = "[none]";
  this.doLabel = "[none]";
}

branchType.prototype.toString = function() {
  return("[" + this.type + "]" + this.endifLabel + " " + this.nextElseLabel);
};




function branchLabelType(name, value) {
  this.name = name;
  this.value = value;
}

branchLabelType.prototype.toString = function() {
  return(this.name + " = " + this.value);
};

function array_branchLabel(s) {
  var i;
  for (i = 0; i < this.length; i++) {
    var t = this[i];
    if (t.name == s) return t;
  }
  return undefined;
}
Array.prototype.getByLabel = array_branchLabel;




function checkNestErr(branch, expected) {
  var nestError = false
  var v = CompileTokens.getToken().value
  if (branch == undefined) {
    switch(v)
    {
      case 'loop':
      do_err(v + " without " + BRANCH_WORDS[BRANCH_DOWHILE][0]);
      nestError = true;
      break;
      
      case 'else':
      case 'endif':
      do_err(v + " without " + BRANCH_WORDS[BRANCH_IF][0]);
      nestError = true;
      break;
    }
  } else if (branch.type != expected) {
    switch(expected) {
      case BRANCH_IF:
      do_err(v + " splits " + BRANCH_WORDS[BRANCH_IF][0]);
      nestError = true;
      break;
      
      case BRANCH_DOWHILE:
      do_err(v + " splits " + BRANCH_WORDS[BRANCH_DOWHILE][0]);
      nestError = true;
      break;
    }
  }
  return nestError
}


function checkUnclosedNest(a)
{
  var i;
  for (i = 0; i < a.length; i++)
  {
    var t = a[i];
    do_err("Unbalanced " + BRANCH_WORDS[t.type][0] + "s");
  }
}
