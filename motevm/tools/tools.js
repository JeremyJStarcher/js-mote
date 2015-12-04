function addEvent( obj, type, fn )
{
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent)
	{
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}

function removeEvent( obj, type, fn )
{
	if (obj.removeEventListener)
		obj.removeEventListener( type, fn, false );
	else if (obj.detachEvent)
	{
		obj.detachEvent( "on"+type, obj[type+fn] );
		obj[type+fn] = null;
		obj["e"+type+fn] = null;
	}
}

Array.prototype.inArray = function (value)
// Returns true if the passed value is found in the
// array.  Returns false if it is not.
{
  var i;
  for (i=0; i < this.length; i++) {
    // Matches identical (===), not just similar (==).
    if (this[i] == value) {
      return true;
    }
  }
  return false;
};


function addElement(name) {
  var ni = document.getElementById("parentDiv");
  var newdiv = document.createElement('div');
  newdiv.setAttribute('id', name);
  newdiv.setAttribute('class', name);
  
  newdiv.innerHTML = 'this is div ' + name;
  ni.appendChild(newdiv);
}

function removeElement(name) {
  var ni = document.getElementById("parentDiv");
  var div = document.getElementById(name);
  ni.removeChild(div);
}



function hideDiv(v) {
  if (document.getElementById) { // DOM3 = IE5, NS6
    document.getElementById(v).style.visibility = 'hidden';
  }
  else {
    if (document.layers) { // Netscape 4
      document.hideShow.visibility = 'hidden';
    }
    else { // IE 4
      document.all.hideShow.style.visibility = 'hidden';
    }
  }
}

function showDiv(v) {
  if (document.getElementById) { // DOM3 = IE5, NS6
    document.getElementById(v).style.visibility = 'visible';
  }
  else {
    if (document.layers) { // Netscape 4
      document.hideShow.visibility = 'visible';
    }
    else { // IE 4
      document.all.hideShow.style.visibility = 'visible';
    }
  }
} 


function errorbox(msg, url, linenumber){
  var s = "An error has occured!\n" + 
  'Error message= '+msg+'\nURL= '+url+'\nLine Number= '+linenumber;
  
  s += stacktrace();
  alert(s);
  return true;
  
}

//window.onerror=errorbox;


// This function returns the name of a given function. It does this by
// converting the function to a string, then using a regular expression
// to extract the function name from the resulting code.
function funcname(f) {
  var s = f.toString().match(/function (\w*)/)[1];
  if ((s == null) || (s.length == 0)) return "anonymous";
  return s;
}

// This function returns a string that contains a "stack trace."
function stacktrace() {
  var s = "";  // This is the string we''ll return.
  // Loop through the stack of functions, using the caller property of
  // one arguments object to refer to the next arguments object on the
  // stack.
  for(var a = arguments.caller; a != null; a = a.caller) {
    // Add the name of the current function to the return value.
    s += funcname(a.callee) + "\n";
    
    // Because of a bug in Navigator 4.0, we need this line to break.
    // a.caller will equal a rather than null when we reach the end 
    // of the stack. The following line works around this.
    if (a.caller == a) break;
  }
  return s;
}



/////////////////////////////////////////////

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Function.method('swiss', function (parent) {
  for (var i = 1; i < arguments.length; i += 1) {
    var name = arguments[i];
    this.prototype[name] = parent.prototype[name];
  }
  return this;
});


//////////////////////////////////////////////////////////
function $() {
  var elements = new Array();
  
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);
    
    if (arguments.length == 1)
      return element;
    
    elements.push(element);
  }
  
  return elements;
}


/*
* The missiong leftString method.
* Should turn it into a real method at that.
*/
function leftStr(str, n){
  if (n <= 0)
    return "";
  else if (n > String(str).length)
    return str;
  else
    return String(str).substring(0,n);
}

/*
* The missiong rightString method.
* Should turn it into a real method at that.
*/

function rightStr(str, n){
  if (n <= 0)
    return "";
  else if (n > String(str).length)
    return str;
  else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
}


////////////////////////////////////////////////////////////////////////////
var xmlhttp=false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
// JScript gives us Conditional compilation, we can cope with old IE versions.
// and security blocked creation of the objects.
try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
    xmlhttp = false;
  }
}
@end @*/
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	try {
		xmlhttp = new XMLHttpRequest();
	} catch (e) {
		xmlhttp=false;
	}
}
if (!xmlhttp && window.createRequest) {
	try {
		xmlhttp = window.createRequest();
	} catch (e) {
		xmlhttp=false;
	}
}

function xmlLoad(fname) {
  xmlhttp.open("GET", fname,true);
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4) {
      $('spec2Input').value = xmlhttp.responseText;
     selectTab('1');
     resetVM();
    }
  }
  xmlhttp.send(null);
}

function xmlMakeIndex() {
  xmlhttp.open("GET", "sample/index.txt",true);
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4) {
      xmlMakeIndex1(xmlhttp.responseText);
    }
  }
  xmlhttp.send(null);
}

function xmlMakeIndex1(s) {
  var lines = s.split("\n");
  for (var i = 0; i < lines.length-1; i++) {
    var words = lines[i].split(" ");
    var name = "" + words.shift();
    var desc = "" + words.join(" ");
    xmlMakeIndex2(name, desc);
  }
}


function xmlMakeIndex2(name, desc) {
  var tbody = $('prgListBody');
  var trObj = document.createElement("TR");
  var tdLoad = document.createElement("TD");
  var tdName = document.createElement("TD");
  var tdDesc = document.createElement("TD");

  var aLoad = document.createElement("a");
  var txtName = document.createTextNode(name);
  var txtDesc = document.createTextNode(desc);

  //aLoad.href='#';
  aLoad.fname = name;
  aLoad.onclick = function() {
    xmlLoad("sample/" + this.fname);
    return false;  // Don't try and follow the href
  }
  aLoad.className="ctlbutton";
  aLoad.innerHTML = "Load";
  
  tdLoad.appendChild(aLoad);
  tdDesc.appendChild(txtDesc);
  tdName.appendChild(txtName);
  trObj.appendChild(tdLoad);
  trObj.appendChild(tdName);
  trObj.appendChild(tdDesc);
  tbody.appendChild(trObj);
  
}
//
