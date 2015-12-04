7// Public Domain code by Christopher Diggins
// http://www.cdiggins.com
// Last Modified 2005-10-28


/*
VERY important that you go from the most specific to the
least specific rule possible.
For example: re_symbol will match just about anything
so it MUST come at the end of the list.  The order
of these rules is almost as important as the rule
itself.
*/



var TOKEN_LINECOMMENT = 0;
var TOKEN_STRING      = 1;
var TOKEN_EDITOR      = 2;
var TOKEN_ENDFUNC     = 3;
var TOKEN_IDENTIFIER  = 4;
var TOKEN_INTEGER     = 5;

var TOKEN_BAD_STRING  = 6;
var TOKEN_WS          = 7;
var TOKEN_EOL         = 8;
var TOKEN_SYMBOL      = 9;


var tokenizeRegex = new Array();

// Regular Expressions to match different kinds of input.

// Line comments (Must be on their own line)
// (Not counted as white space because we remove it elsewhere.
tokenizeRegex[TOKEN_LINECOMMENT] = new Array(TOKEN_LINECOMMENT, /^\s*#.*/); 
// Identifiers
tokenizeRegex[TOKEN_IDENTIFIER]  = new Array(TOKEN_IDENTIFIER, /[a-zA-Z_][a-zA-Z0-9_]*\b/);
// Don't worry about signs, those are handled by Unary Operators elsewhere.
tokenizeRegex[TOKEN_INTEGER]     = new Array(TOKEN_INTEGER, /\d+/);
// Quotes: Broken, should use \" instead of "" for escaped marks
tokenizeRegex[TOKEN_STRING]      = new Array(TOKEN_STRING, /["][^"|\n]*["]/);
// An unterminated string
tokenizeRegex[TOKEN_BAD_STRING]  = new Array(TOKEN_BAD_STRING, /"/);
// Newline indicators
tokenizeRegex[TOKEN_EOL]         = new Array(TOKEN_EOL, /\r\n|\n\r|\r|\n/);
// White space
tokenizeRegex[TOKEN_WS]          = new Array(TOKEN_WS, / |\t/);
// End of a function
tokenizeRegex[TOKEN_ENDFUNC]     = new Array(TOKEN_ENDFUNC, /@/);
// Various CheesyMUD Editor Commands
tokenizeRegex[TOKEN_EDITOR]      = new Array(TOKEN_EDITOR, /@[a-z]+/);
// Everything else
tokenizeRegex[TOKEN_SYMBOL]      = new Array(TOKEN_SYMBOL, /\S/); 

var re_tmp = "";
for (var i = 0; i < tokenizeRegex.length-1; i++) {
  if (tokenizeRegex[i] == undefined) continue;
  re_tmp += js_build_regexp(tokenizeRegex[i][1]) + "|";
}
re_tmp += js_build_regexp(tokenizeRegex[tokenizeRegex.length-1][1]);

//////////////////////////////////////////////////////////////////////////
// TokenType Stuff
//////////////////////////////////////////////////////////////////////////


// Create our Token object
function TokenType(value) {
  this.value = value;
  this.getType = TokenType_getType;
}


TokenType.prototype.toString = function() {
  if (this.getType() == TOKEN_EOL) {
    return("[eol]\n");
  } else {
    return(this.value);
  }
};

TokenType.prototype.isConstant = function() {
  var type = this.getType();
  
  return (type == TOKEN_INTEGER || type == TOKEN_STRING);
};


function TokenType_getType() {
  return this.type;
	//return token_type(this.value)
}
//////////////////////////////////////////////////////////////////////////
// Token Array Stuff
//////////////////////////////////////////////////////////////////////////


function TokensType() {
  this.privArray = new Array();
  this.tokenIdx = 0;
  this.tokenIdxNext = 0;
}


TokensType.prototype.getIdx = function() {
  return(this.tokenIdx);
}



TokensType.prototype.initIdx = function() {
  this.tokenIdx = 0;
}


TokensType.prototype.getToken = function() {
	if (this.tokenIdx == this.privArray.length) {
		return undefined;
	}
  return this.privArray[this.tokenIdx];
}


TokensType.prototype.getNextToken = function() {
	if (this.tokenIdx+1 == this.privArray.length) {
		return undefined;
	}
	return this.privArray[this.tokenIdx+1];
}


TokensType.prototype.inc = function() {
  this.tokenIdx++;
}

TokensType.prototype.skipEol = function() {
  while (true) {
    if (this.getToken() == undefined) {
      break;
    } else if (this.getToken().getType() == TOKEN_EOL) {
      this.inc();
    } else {
      break;
    }
  }
}




TokensType.prototype.deleteAll = function() {
  var i;
  for (i = 0; i <= this.privArray.length+1; i++) {
    this.privArray.pop();
  }
}

TokensType.prototype.push = function(x) {
	this.privArray.push(x);
}

TokensType.prototype.pop = function() {
	return(this.privArray.pop());
}


TokensType.prototype.toArray = function() {
  var i;
  var toks = new Array();
  for (i = 0; i < this.privArray.length; i++) {
    toks.push(this.privArray[i].value)
	}
	
  return toks;
}

TokensType.prototype.toString = function() {
  var s = "";
  var i;
  for (i = 0; i < this.privArray.length; i++) {
    s += this.privArray[i] + "[" + this.privArray[i].getType() + "]   ";
    //s += this.privArray[i] + " ";
  }
  
  return(s);
}

TokensType.prototype.getLength = function() {
  return(this.privArray.length);
}


function dumpTokens(a)
{
  var i;
  var s = "";
  for (i = 0; i < a.length; i++) {
    if (s == "") {
      s = a[i].value;
    } else {
      s += ", " + a[i].value;
    }
  }
  return(s);
}


function js_build_regexp(s)
{
  /* Every instict I have says there must be a MUCH better way to do this
	but I can't find it.  Something called .pattern, but that
	seems to return nulls for me.
	Regexp's turned to strings are incased between /these/
	Strip those off so we can feed the regex to "RegExp"
	
	*/
  var s1 = s.toString();
  s1 = s1.substring(1,s1.length-1);
  return s1;
}



function js_fixtokens_push(a, t, cmt_flag)
{
  if (!cmt_flag) a.push(t);
}

function js_fixtokens(a) {
  /* Though I've tried to make my regular expressions perfect,
	There are a few known bugs with it that I figured it was
	easier to correct by hand.
	
	a)  I can't come up with a regex to match operators due
	to the number of special characters, so multi-byte
	operators are getting split up.
	
	b)   Unary plus/minus is hopelessly broken.  For now I'll take
	'hackish' way and just slip zeros into the stream.
	*/
	
  var b = new TokensType();
	var s = "";
  
  var TOKENhack = js_tokenizer("+(0-x)");
	
  a.initIdx();
	
	var line = 1;
	var pos = 1;
  var inComment = false;
  
  while (a.getToken() != undefined) {
    twiddleIt();
    s += a.getToken() + " " + a.getToken().getType() + "\n";
    var t1 = a.getToken();
    var t2 = a.getNextToken();
    a.inc();
    
    if (t1.getType() == TOKEN_LINECOMMENT) {
      inComment = true;
    } else if (t1.getType() == TOKEN_EOL) {
      inComment = false;
    }
    
    t1.line = line;
    t1.pos = pos;
		t1.t_type = T_NONE;
		
    pos += t1.value.length;
  	
    if (isOperator(t1)) {
      if (t2 != undefined && isOperator(t2)) {
        var tmp = t1.value + t2.value;
        if (isOperator(t1)) {
          t1.value = tmp;
          a.inc();
          js_fixtokens_push(b, t1, inComment);
        } else {
          js_fixtokens_push(b, t1, inComment);
        }
      } else {
        js_fixtokens_push(b, t1, inComment);
      }
    } else {    
      if (t1.getType() != TOKEN_WS) {
        js_fixtokens_push(b, t1, inComment);
      }
      
      if (t1.getType() == TOKEN_EOL) {
        line++;
        pos = 1;
      }			
    }
  }
  return (b);
}


function js_tokenizer(input) {
  // HACK:
  // This is a hack to fix around an IE issue.  I can't tell if its my code
  // or its a real problem with IE... but lines seem to not be counted if they
  // are just a blank line, but lines with spaces in front work right.
  // Weird.  I'd like to replace this problem if I can.
  input = input.replace(/\r\n/g," \r\n");
  
  var Tokens = new TokensType();
  
  var s = "";
  var re_token = new RegExp(re_tmp,"g");
  
  var Token;
  
  var a = input.match(re_token);
  var i;
  for (i = 0; i < a.length; i++) {
    var t = new TokenType(a[i]);
    t.type = token_type(t);
    Tokens.push(t)
  }
  return Tokens;
}


function token_type(f_token)
{
  var type = -1;
  // Force convert to a string
  var token = "" + f_token;
  
  for (i = 0; i <tokenizeRegex.length; i++) {
    if (tokenizeRegex[i] == undefined) continue;
    if (token.match(tokenizeRegex[i][1])) {
      type = ( tokenizeRegex[i][0]);
      break;
    }
  }
  if (type == -1) {
    do_err_at("Unknown token type", f_token);
  }
  return type;
}

function tokenize(s) {
  twiddleIt();
  setStatusMsg("Compiler: Tokenizing");
  var a = js_tokenizer(s);
  twiddleClear();
  return (js_fixtokens(a));
}
