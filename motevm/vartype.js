//  All of the MUD/SPEC2 variables are held in a large array called
//  CVarStack.
//  Variables are created by commands like:
//     var gold = C_INTEGER(100);
//     var bank = C_INTEGER(150);
//     At which point, gold will be an INTEGER that refers to the
//     array index position.
// The R_ functions are the real function to create a new
// CVAR object and set up default values.
//
// The C_ functions are a wrapper around the R_
// because I ran into scoping issues and couldn't
// put:
//     CVarStack.push(o);
//     return(CVarStack.length);
// in the CVAR function.






/* The generic prototype that all of our variables will use */
function CVAR(value) {
  if ( arguments.length > 0 ) {
  }
}

CVAR.prototype.toString = function() {
  return "[" + this.varName + "=" + this.value + "]";
  //  return "" + "[" + this.value + "][" + this.type + "]";
};

CVAR.prototype.init = function(name, value) {
  this.value = value;
  this.type = undefined;
};


/////////////////////////////////////////////////////////////////////////////
C_INTEGER.prototype = new CVAR();
C_INTEGER.prototype.constructor = CVAR;
C_INTEGER.superclass = CVAR.prototype;

function C_INTEGER(value) {
  if ( arguments.length > 0 ) {
    this.init(value);
    this.type = V_INTEGER;
    this.value = parseInt(value);
    if (isNaN(this.value)) this.value = 0;
    if (this.value == undefined) this.value = 0;
  }
}



/////////////////////////////////////////////////////////////////////////////
C_BOOLEAN.prototype = new CVAR();
C_BOOLEAN.prototype.constructor = CVAR;
C_BOOLEAN.superclass = CVAR.prototype;

function C_BOOLEAN(value) {
  if ( arguments.length > 0 ) {
    this.init(value);
    this.type = V_BOOLEAN;
    this.value = (value == true);
    if (this.value == undefined) this.value = false;
  }
}


/////////////////////////////////////////////////////////////////////////////
C_STRING.prototype = new CVAR();
C_STRING.prototype.constructor = CVAR;
C_STRING.superclass = CVAR.prototype;

function C_STRING(value) {
  if ( arguments.length > 0 ) {
    this.init(value);
    this.type = V_STRING;
    // Replace with a trinary operator
    if (value == undefined) {
      this.value = "";
    } else {
      this.value = "" + value;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////
C_CHAR.prototype = new CVAR();
C_CHAR.prototype.constructor = CVAR;
C_CHAR.superclass = CVAR.prototype;

function C_CHAR(value) {
  this.type = V_CHAR;
  if ( arguments.length > 0 ) {
    this.init(value);
    this.value = undefined
  }
}
/////////////////////////////////////////////////////////////////////////////


function createCVar(type, value) {
  switch (type) {
    case V_INTEGER:
    return new C_INTEGER(value);
    break;
    case V_BOOLEAN:
    return new C_BOOLEAN(value);
    break;
    case V_STRING:
    return new C_STRING(value);
    break;
    case V_CHAR:
    return new C_CHAR(value);
    break;
    default:
    do_err("createCVAR - can't type:" + type)
    return undefined;
  }
	return undefined; // Shut lint up
}

function getCVarIdByName(zname1) {
  // Left in this form for debugging
  var zname = "" + zname1;  // Convert the <bleep> thing to a string.
  var r = CVarNames.indexOf(zname);
  return (r);
}

function getCVarTypeById(id) {
  return (CVarType[id]);
}


/////////////////////////////////////////////////////////////////////////////
// The variable stack, used by all expressions.
/////////////////////////////////////////////////////////////////////////////


function CVarStackArray() 
{ 
  this.instanceOf = function () 
  { 
    var self = new Array();
    self.Add = function ( obj) 
    { 
      if( obj ) 
      { 
        this[this.length] = obj;
      } 
    } 
    return self;
  } 
} 


var CVarStack = (new CVarStackArray()).instanceOf(); // Hold our variables ... all of them

var CVarNames = new Array();                         // Identifier names 
var CVarType = new Array();



function CVarAddDeclare(name, type) {
  CVarNames.push(name);
  CVarType.push(type);
}

function CVarRemoveDeclare() {
  // Used for temporary variables
  CVarNames.pop();
  CVarType.pop();
}

