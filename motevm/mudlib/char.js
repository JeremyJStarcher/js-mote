
var CharArray = new Array();

function CharacterType() {
}


CharacterType.prototype.send = function(s) {
	divAppend(this.outputid, s)
};

var mob2;

mob2 = new CharacterType();
mob2.isnpc = new C_BOOLEAN(false);
mob2.name = new C_STRING("Human1");
mob2.room_description = new C_STRING("A generic carbon based lifeform is standing here");
mob2.keywords = new C_STRING("human1 generic carbon lifeform");
//mob2.action = mob.action
//mob2.delay = mob.delay
mob2.data = new C_STRING("");
//mob2.hunt(mob.hunting)
mob2.hit = new C_INTEGER(19801);
mob2.maxhit = new C_INTEGER(19801);
mob2.mana = new C_INTEGER(198);
mob2.maxmana = new C_INTEGER(198);
mob2.move = new C_INTEGER(198);
mob2.maxmove = new C_INTEGER(198);
mob2.hitroll = new C_INTEGER(198);
mob2.damroll = new C_INTEGER(198);
mob2.armor = new C_INTEGER(198);
mob2.alignment = new C_INTEGER(1000);
mob2.delay = new C_INTEGER(0);

CharArray.push(mob2);

// Hey Jeremy! This is a note for you!
// You override the change of font size in default.css
// You'll need to know that.  You really will.

function charInitWindow()
{
	var i;
	
	for (i = 0; i < CharArray.length; i++) {
		var t = CharArray[i];
		if (t.isnpc.value == false) {
			var winid = 'char_' + i;
			var formid = winid + '_form';
			var inputid = winid + '_input';
			var outputid = winid + "_output";
			var default_class="dialog_content";
			// Save the ID to edit later
			t.outputid = outputid;
			
			var f = "";
			
			f += createOutputDiv(outputid, default_class, 25, 82)
			f += "<br />";
			f += createInputForm(default_class, winid, inputid);
      
			//t.win = createFloatWindow(winid, "Player: " + t.name.value, f);
			//t.win.showCenter();
      
      t.win = createTabWindow(winid, "Player: " + t.name.value, f);
      
			t.send("\n");				
			var ll = 0;
			for (ll = 0; ll < 30; ll++) {
				t.send("Line " + ll + "\n");
			}
			t.send("\n<u>Prompt ]</u>");
		}
	}
}

