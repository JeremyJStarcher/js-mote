function getOperandType(op) {
  // Handle constants
  switch (token_type(op))
  {
    case TOKEN_INTEGER:
    return V_INTEGER;
    break;
    case TOKEN_STRING:
    return V_STRING;
    break;
  }
  
  // OK, it wasn't a constant.
  // See if its one of our special markers used to indicate
  // a function return type.
  switch (op)
  {
    case V_INTEGER:
    return V_INTEGER;
    break;
    case V_STRING:
    return V_STRING;
    break;
    case V_BOOLEAN:
    return V_BOOLEAN;
    break;
  }
  
  // Nope?
  // Ok, check and see if its a variable then.
  
  var id = getCVarIdByName(op);
  if (id >= 0) {
    return(getCVarTypeById(id));
  } else {
    do_err("getOperandType: Unknown token " + op);
    killJS("Unknown token");
  }
}


function getOperatorIdx(op) {
  var i;
  for (i = 0; i < OperatorData.length; i++) {
    if (OperatorData[i][0] == op) return i;
  }
  return -1;
}

function getOperatorPriority(op) {
  var i = getOperatorIdx(op);
  if (i != -1) return OperatorData[i][2];
}

function getOperatorFunc(op) {
  var i = getOperatorIdx(op);
  if (i != -1) return OperatorData[i][3];
}


var METHOD_LEVEL = 0;
var METHOD_RETURN = 1;
var METHOD_NAME = 2;
var METHOD_FUNC = 3
var METHOD_PARAMS = 4;

function reverseLookupMethod(f)
{
	var a = new Array(boolean_methods,string_methods,integer_methods,flag_methods,
  room_methods, character_methods, object_methods, builtin_methods);
	var n = new Array(V_BOOLEAN, V_STRING, V_INTEGER, V_FLAG, 
	V_ROOM, V_CHARACTER, V_OBJECT, V_BUILTIN);
	
	var ret;
	var i,j;
	var method, method_list
	for (i = 0; i < a.length; i++)
	{
		method_list = a[i];
	  for (j = 0; j < method_list.length; j++) {
			method = method_list[j];
			if (method[METHOD_FUNC] == f) {
				ret = shortVarToLong(n[i]);
				ret += ' method "' + method[METHOD_NAME] + '"';
				return ret;
			}
		}
	}
  return undefined;
}


function getMethodInfo(type, f) {
  var inf;
  var i;
  var longType = shortVarToLong(type);
  
  switch(type) {
    case V_BOOLEAN: 
    inf = boolean_methods;
    break;
    case V_STRING:
    inf = string_methods;
    break;
    case V_INTEGER:
    inf = integer_methods;
    break;
    case V_FLAG:
    inf = flag_methods;
    break;
    case V_ROOM:
    inf = room_methods;
    break;
    case V_CHAR:
    inf = character_methods;
    break;
    case V_OBJECT:
    inf = object_methods;
    break;
    case V_BUILTIN:
    inf = builtin_methods;
    break;
  }
  longType = shortVarToLong(type)
  if (inf == undefined) return inf;
  
  var r = inf.binSearch2d(f,METHOD_NAME);
	if (r != -1) {  
		return inf[r];
	}
  
  // We didn't find it as a built-in method, so look for external methods
  // instead
  var i = vmEngine.moteProcList.getMoteIdx(f);
  if (i != -1) {
    inf = new Array();
    var p =  vmEngine.moteProcList[i];
    inf[METHOD_LEVEL] = 0;
    inf[METHOD_RETURN] = p.ret_type;
    inf[METHOD_NAME] = p.name;
    inf[METHOD_FUNC] = undefined;
    inf[METHOD_PARAMS] = p.args;
    return inf;
  }
	return undefined;
}



///////////////////////////////////////////////////////////////////////////


Function.prototype.extendsFrom = function(Super) {
  var Self = this;
  var Func = function() {
    Super.apply(this, arguments);
    Self.apply(this, arguments);
  };
  Func.prototype = new Super();
  return Func;
}


///////////////////////////////////////////////////////////////////////////

function checkParameters(stack, method_info, token) {
  var method_func = method_info[METHOD_FUNC];
  var i = 0;
  var len = method_info[METHOD_PARAMS].length;
  var a = new Array();
  
  for (i = 0; i < len; i++) {
    a.push(stack.pop());
  }
  
  for (i = 0; i < len; i++) {
    var op1 = getOperandType(a[i]);
    var op2 = getOperandType(method_info[METHOD_PARAMS][i]);
    
    if (op1 != op2 ) {
      var s = "Argument " + (i+1) +  " for "  + reverseLookupMethod(method_info[METHOD_FUNC]) + " is type "
      s +=  shortVarToLong(op1) + " (expecting " + shortVarToLong(op2) + ").";
      
      do_err_at(s, token);
			//debugger;
			expParseError = true;
    }
  }
  
  if (method_info[METHOD_RETURN] != V_ILLEGAL) {
    stack.push(method_info[METHOD_RETURN]);
  }
  
}

