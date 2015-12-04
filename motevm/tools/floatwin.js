var em_scale_h = 12;
var em_scale_w = 12;
var scrollsize = 3 * em_scale_w;


function getObjHeight(o)
{
	if (o.clientHeight) {
		return parseInt(o.clientHeight);
	} else if (o.offsetHeight) {
		return parseInt(o.offsetHeight); 
	}
}

function getObjWidth(o)
{
	if (o.clientHeight) {
		return parseInt(o.clientWidth);
	} else if (o.offsetWidth) {
		return parseInt(o.offsetHWidth); 
	}
}



function calEmSize(cls)
{
	var h;
	var w;
	if ((document.createElement) && (document.createTextNode))
	{
		var doc = document.getElementsByTagName("body").item(0);
		var newdiv = document.createElement('div');
    newdiv.setAttribute("class",cls + '_content');
		newdiv.style.position = "absolute";
		newdiv.style.display = "inline";
    newdiv.innerHTML = "M";
    newdiv.style.fontSize = floatSizes[ floatSize ];
    doc.appendChild(newdiv);
		
		if (newdiv.clientHeight) {
			h=parseInt(newdiv.clientHeight);
			w=parseInt(newdiv.clientWidth);
		} else if (newdiv.offsetHeight) {
			h=parseInt(newdiv.offsetHeight); 
			w=parseInt(newdiv.offsetWidth); 
		} else {
			//do_debug("Couldn't find anything in calEmSize");
		}
		em_scale_h = h;
		em_scale_w = w;
  	doc.removeChild(newdiv);
	}
  scrollsize = 3 * em_scale_w;
		//do_debug("em_scale_h = " +em_scale_h); 
		//do_debug("em_scale_w = " +em_scale_w); 

}




function createOutputDiv(name, default_class, h, w)
// h and w are measured in EMs
{
	calEmSize("dialog");
	
	var h1 = h * em_scale_h;
	var w1 = w * em_scale_w + scrollsize;
	
	var f;
	f = '<div class="' + default_class + '"';
  f += ' style="width:' + w1 + '; height: ' + h1 + ';"'; 
	f += ' id="' +  name + '"';
  f += '>iiiiiiiiii<br />WWWWWWWWWW</div>';
	//do_debug("f = " + f);
	return f;
}

function createInputForm(default_class, winid, inputid)
{
	var f = "";
	f += '<textarea class="' + default_class + ' txt" id="' + inputid + '" name="' + inputid + '" rows="4" cols="80"></textarea>';
	return f;
}

function createTabWindow(winid, title, html)
{
	var panel = $("content");
	
	var tabid = "tab" + winid;
	var linkid = "link" + winid;
	var newdiv = document.createElement('div');
	newdiv.setAttribute("style","display:none");
	newdiv.setAttribute("id", tabid);
	newdiv.innerHTML = html;
  
  if ($(tabid) == undefined) {
    panel.appendChild(newdiv);
    var MyUL = $('navlist');
    
    var theLi = document.createElement('li');
    theLi.setAttribute("id",linkid);
    var s = '<a href=javascript:selectTab("' + winid + '")>'	+ title + '</a>';
    theLi.innerHTML = s;
    MyUL.appendChild(theLi);
    theLi["div"] = newdiv;
  } else {
    panel.replaceChild(newdiv,$(tabid))
    var theLi = $(linkid);
    theLi["div"] = newdiv;   
  }
}


function createFloatWindow(winid, title, html)
{
	
  var win = new Window(winid, 
	{className: "dialog", width:w, height:100, minWidth:100, minHeight:h
	,zIndex: 100, resizable: true, title: title});
	win.getContent().innerHTML= "";
	win.getContent().innerHTML += '<div id="' + winid + '_sizediv">' + html + '</div>';
	win.showCenter();
	
  var sizer = $(winid + '_sizediv');	
	var w = getObjWidth(sizer) + scrollsize;
	var h = getObjHeight(sizer);
	
  var MyUL = $('windowlist');
	
  var theLi = document.createElement('li');
	
	var s = '<a href=javascript:showFloatWindow("' + winid + '")>'	+ title + '</a>';
	theLi.innerHTML = s;
	MyUL.appendChild(theLi);
	
  // Save the winid/ref keys 	
	MyUL[winid] = win;
	MyUL[winid + ":w"] = w;
	MyUL[winid + ":h"] = h;
	MyUL[winid].setSize(MyUL[winid + ":w"],MyUL[winid + ":h"]); 
	
	return win;
}

function showFloatWindow(winid)
{
	var MyUL = $('windowlist');
	MyUL[winid].toFront(); 
	
	// This will reshow and resize the window
	//MyUL[winid].setSize(MyUL[winid + ":w"],MyUL[winid + ":h"]); 
	//MyUL[winid].showCenter();
}


function divAppend(div, s) {
  var mydiv = $(div);
	
  var html = "" + mydiv.innerHTML + s;;
	html = html.replace(/\n/g, "<br />");
	mydiv.innerHTML = html;
  mydiv.scrollTop = mydiv.scrollHeight - mydiv.clientHeight;
}


function createOutputWindows()
{
	var wins = new Array(
	new Array("prgout", "Program Output"),
	new Array("error", "Error Window"),
	new Array("tokenized", "Tokenized Source"),
	new Array("opcode", "Opcode List"),
	new Array("debug", "Debugger Window")
	);
	
	var i;
	for (i = 0; i < wins.length; i++)
	{
		var t = wins[i];
		var f = "";
		
		f += createOutputDiv(t[0], 25, 82)
		createFloatWindow("win" + t[0], t[1], f);
	}
	
}


//var floatSizes = new Array( 'xx-small','x-small','small','medium','large','x-large','xx-large' );
//var floatSize = 3;


var floatSizes = new Array("10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%",
"110%", "120%", "130%", "140%", "150%", "160%", "170%", "180%", "190%", "200%");
var floatSize = 9;  // Set initial size


function changeSize(cls, size)
{
  floatSize += size;
  if (floatSize < 0) floatSize = 0;
  if (floatSize > floatSizes.length) floatSize = floatSizes.length -1;  
  
  var rootobj;
  
  rootobj = document.getElementsByTagName("textarea");
  changeSize2(rootobj, cls, size);
  
  charInitWindow();
  rootobj = document.getElementsByTagName("div");
  changeSize2(rootobj, cls, size);
  var tabID = selectedTabId;
  selectTab("1");

  selectTab(tabID);
  $("fontSize").innerHTML = floatSizes[ floatSize ];
}

function changeSize2(rootobj, cls,size)
{
  
  var i;
  var inc=0;
  var rootlength=rootobj.length;
  for (i=0; i < rootlength; i++) {
    if (rootobj[i].className==cls) {
      rootobj[i].style.fontSize = floatSizes[ floatSize ];
    }
  } 
}

function setStatusMsg(m)
{
    $("msgStatus").innerHTML = m;

}

