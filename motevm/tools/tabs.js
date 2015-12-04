function clearAllTabs() {
	// Clear the static tabs
	var i;
	for(i=1;i<=7;i++) {
		document.getElementById('link'+i).className='normal';
		document.getElementById('tab'+i).style.display='none';
	}
	
	
  // Then clean out the dynamic tabs	
  var parent = document.getElementById("navlist");
	var kid;
	for (i = 0; i < parent.childNodes.length; i++) {
		kid = parent.childNodes[i];
		if (kid["div"]  != undefined) {
			kid.className='normal';
			kid["div"].style.display='none';			
		}
	}
}

var selectedTabId;
function selectTab(id) {
	clearAllTabs();
	document.getElementById('link'+id).className='current';
	document.getElementById('tab'+id).style.display='inline';
  selectedTabId = id;
}
