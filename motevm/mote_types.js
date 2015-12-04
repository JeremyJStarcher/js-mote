// Give these really weird types so they don't conflict
// with variable names later on.


// These are used when doing the compile
// infix->postfix notation.  We do a 'mock' run through the expression,
// changing out variables and constants, replaced by these.  That way we 
// can test for proper types of arguments.
// max(1, myvar)
//   becomes
// 1 myvar max   (post fix)
// _i_  _i_  max (type corrected)
// _i_           (return value)
// Then the _i_ can get passed along down the chain and type checked
// again.
var V_STRING  = '_s_';
var V_INTEGER = '_i_';
var V_FLAG    = '_f_';
var V_ROOM    = '_r_';
var V_CHAR    = '_c_';
var V_OBJECT  = '_o_';
var V_BOOLEAN = '_b_';
var V_ILLEGAL = '_x_';
var V_BUILTIN = '_q_';
var V_REF     = '_?_';



var V_ERR     = '_err_';

var T_NONE     = 0;
var T_FUNCTION = 1;
var T_METHOD   = 2;
var T_OPERATOR = 3;


var V_CHARACTER = V_CHAR;

var VARTYPES = new Array     ( "string", "integer", "flag", "room", "char", "object", "boolean",  "builtin", "illegal");
var VARTYPE_VALUES = new Array(V_STRING, V_INTEGER, V_FLAG, V_ROOM, V_CHAR, V_OBJECT, V_BOOLEAN, V_BUILTIN, V_ILLEGAL);

function shortVarToLong(s)
{
  var i = VARTYPE_VALUES.indexOf(s);
  if (i >= 0) return VARTYPES[i];
}


