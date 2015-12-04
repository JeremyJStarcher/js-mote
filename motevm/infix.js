
var O_DOT     = 12; 
var O_UNARY   = 11;
var O_MULT    = 10;
var O_ADD     = 9;
var O_RELATE  = 8;
var O_EQUAL   = 7;
var O_LOGICAL = 6;
var O_ASSIGN  = 5;
var O_COMMA   = 4;

var OperatorData = new Array(
/* Operator, length, type, name

  Parens "()" are not considered operators in this list, though they are
  sometimes considered OPERANDS in the code below,  based on context.
*/

Array( "*=",   2, O_ASSIGN,  "op_star_assign"),
Array( "/=",   2, O_ASSIGN,  "op_slash_assign"),
Array( "%=",   2, O_ASSIGN,  "op_percent_assign" ),
Array( "+=",   2, O_ASSIGN,  "op_plus_assign" ),
Array( "-=",   2, O_ASSIGN,  "op_minus_assign" ),
Array( "&=",   2, O_ASSIGN,  "op_and_assign" ),
Array( "|=",   2, O_ASSIGN,  "op_or_assign" ),
Array( "^=",   2, O_ASSIGN,  "op_xor_assign" ),
Array( ">=",   2, O_RELATE,  "op_gt_equal" ),
Array( "<=",   2, O_RELATE,  "op_lt_equal" ),
Array( "!=",   2, O_EQUAL,   "op_not_equal" ),
Array( "==",   2, O_EQUAL,   "op_equal" ),

Array( "*",    1, O_MULT,    "op_star" ),
Array( "/",    1, O_MULT,    "op_slash" ),
Array( "%",    1, O_MULT,    "op_percent" ),
Array( "+",    1, O_ADD,     "op_plus" ),
Array( "-",    1, O_ADD,     "op_minus" ),
Array( "&&",   2, O_LOGICAL, "logical_and" ),
Array( "||",   2, O_LOGICAL, "logical_or" ),
Array( "&",    1, O_LOGICAL, "op_and" ),
Array( "|",    1, O_LOGICAL, "op_or" ),
Array( "^",    1, O_LOGICAL, "op_xor" ),
Array( ">",    1, O_RELATE,  "op_gt" ),
Array( "<",    1, O_RELATE,  "op_lt" ),
Array( "=",    1, O_ASSIGN,  "op_assign" ),

// It is, and it isn't.
Array( ".",    1, O_DOT,    "" ),
Array( ",",    1, O_COMMA,  "" )

/*
* Unary operators are broken in Spec2 so I never
* use them.
Array( "+",    1, O_UNARY,   "op_plus_unary" ),
Array( "-",    1, O_UNARY,   "op_minus_unary" ),
Array( "!",    1, O_UNARY,   "op_bang_unary" ),
*/
);




function isOperand(token)
{
  var ret = false
  
  if (token.getType() == TOKEN_IDENTIFIER) {
    if (getCVarIdByName(token) >= 0) ret = true;
  } else if (token.value == '(' || token.value == ')') {
    ret = true;
  } else if (token.isConstant()) {
    ret = true;
  }
  
  //do_debug("isOperand " + token + " " + ret);
  return ret;
}

function isOperator(who)
{
  return getOperatorIdx(who.value) > -1;
}


/* Check for Precedence */
function prcd(who)
{
  var r;
  
  if (who == "(") {
    r = 3
  } else if (who == ")") {
    r = 2;
  } else {
    r = getOperatorPriority(who);
  }
  return r;
}


function arrayToLine(a)
{
	var i = 0;
	var s = "";
	var t;
	
	for (i = 0; i < a.length; i++) {
	  t = a[i];
		s += t.value + " ";
	}
	return(s);
}

function InfixToPostfix(privArray)
{
	
  this.privArray = privArray;
  this.postfixStr=new Array();
	
  this.stackArr=new Array();
  this.tokenIdx = 0;
  this.initIdx();
	
  // HACK!
  this.tokenIdx = -1;
	
  while (this.getNextToken() != undefined) {
    this.inc();
		//do_debug("I2P Token = " + this.getToken()); 
    // Check if we are reached a function.  If so, 
    // suck in everything until the closing paren
    // and do a recursive call.
		
    if (token_type(this.getToken()) == TOKEN_IDENTIFIER && this.getNextToken() == "(")
    {
      this.processFunc();
      continue;
    }
    // Same thing for a method.
    if (this.getToken() == "." && token_type(this.getNextToken()) == TOKEN_IDENTIFIER)
    {
      this.processMethod();
      continue;
    }
		
		
    if(isOperand(this.getToken()))
    {
      this.postfixStr.push(this.getToken());
    } else  if(isOperator(this.getToken())) {
      while((!isEmpty(this.stackArr)) && (prcd(this.getToken())<=prcd(topStack(this.stackArr))))
      {
        this.postfixStr.push(this.stackArr.pop());
      }
      this.stackArr.push(this.getToken());
    } else {
      do_err_at("Variable '" + this.getToken() + "' not found.", this.getToken());
      expParseError = true;
    }
    if(this.getToken()=="(") {
      this.stackArr.push(this.getToken());
    }
    if(this.getToken()==")") {
      while(topStack(this.stackArr)!="(")
      {
        this.postfixStr.push(this.stackArr.pop());
      }
      this.stackArr.pop();
    } 
  }
  while(!isEmpty(this.stackArr))
	{
    if(topStack(this.stackArr)=="(")
      this.stackArr.pop();
    else
      this.postfixStr.push(this.stackArr.pop());
  }
	
  var t_arr = new Array();
	var i;
	for (i = 0; i < this.postfixStr.length; i++) {
		var tt = this.postfixStr[i];
    
    // Filter out some 'junk' that gets left on the stack that we don't need
    if (getOperatorPriority(tt.value) == O_COMMA) continue;
    if (getOperatorPriority(tt.value) == O_DOT) continue;
    if (tt.value == ")") continue;
    if (tt.value == "(") continue;
    
    // and then keep whats good
  	t_arr.push(tt);
	}
  this.postfixStr = t_arr;
  return(this.postfixStr);
}


InfixToPostfix.swiss(TokensType, 'getToken', 'getNextToken', 'inc', 'initIdx');

function topStack(stackArr)
{
  return(stackArr[stackArr.length-1]);
}

function isEmpty(stackArr)
{
  return((stackArr.length==0)? true : false);
}


/*
* We found a function, process it special here.
*/

InfixToPostfix.prototype.processFunc = function() {
  var tmp = new Array();
  var fname = this.getToken();
  var pcount = 0;
	var arg_count = 0;
  var ftoken = this.getToken();
  var s;
  
  do 
  {	
    this.inc();
		
    if (this.getToken() == "(") pcount++;
    if (this.getToken() == ")") pcount--;
		
		// We have two parens with SOMETHING between them.
		if (this.getToken() == "(" && this.getNextToken() != ")" && pcount == 1) {
			arg_count++
		}
    
		
		// A comma starts a new argument
		if (this.getToken() == "," && pcount == 1) arg_count++;
		
		tmp.push(this.getToken());
  } while (!(this.getToken() == ")" && pcount == 0))
	
	var inf = getMethodInfo(V_BUILTIN, fname);
  ftoken.argCount = arg_count;
	
  var o = new InfixToPostfix(tmp);
	
  for(pcount = 0; pcount < o.length; pcount++)
  {
    this.postfixStr.push(o[pcount]);
  }
  
  ftoken.t_type = T_FUNCTION;
  this.postfixStr.push(ftoken);
}


/*
* We found a method, process it special here.
*/

InfixToPostfix.prototype.processMethod = function() {
  // Skip the "."
  this.inc();
  
  var tmp = new Array();
  var fname = this.getToken();
  var pcount = 0;
	var arg_count = 0;
  var ftoken = this.getToken();
  var s;
  
  do 
  {	
    // A method with no parens, skip loop.
    if (this.getNextToken() != "(" && pcount == 0) break;
    
		// We have two parens with SOMETHING between them.
		if (this.getToken() == "(" && this.getNextToken() != ")" && pcount == 1) {
			arg_count++
		}
    
		
    if (this.getNextToken() == "(") pcount++;
    if (this.getNextToken() == ")") pcount--;
    
    this.inc();
		tmp.push(this.getToken());
    
    // A comma starts a new argument
    if (this.getToken() == "," && pcount == 1) arg_count++;
    
    tmp.push(this.getToken());
  } while (!(this.getToken() == ")" && pcount == 0))
  arg_count++;  // There is always one argument
  ftoken.argCount = arg_count;
  
  var o = new InfixToPostfix(tmp);
  
  for(pcount = 0; pcount < o.length; pcount++)
  {
    this.postfixStr.push(o[pcount]);
  }
  
  ftoken.t_type = T_METHOD;
  this.postfixStr.push(ftoken);
}
