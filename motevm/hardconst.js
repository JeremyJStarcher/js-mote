var MOB_AFFECT = 1048576; // Flag: u
var MOB_AGGR_EVIL = 256; // Flag: i
var MOB_AGGR_GOOD = 512; // Flag: j
var MOB_AGGR_NEUTRAL = 1024; // Flag: k
var MOB_AGGRESSIVE = 32; // Flag: f
var MOB_AWARE = 16; // Flag: e
var MOB_DOUBLE = 16777216; // Flag: y
var MOB_HELPER = 4096; // Flag: m
var MOB_HUNTER = 4194304; // Flag: w
var MOB_IMMORT = 2097152; // Flag: v
var MOB_ISNPC = 8; // Flag: d
var MOB_JANITOR = 16384; // Flag: o
var MOB_MEMORY = 2048; // Flag: l
var MOB_NOADHERE = 524288; // Flag: t
var MOB_NOBASH = 65536; // Flag: q
var MOB_NOBLIND = 131072; // Flag: r
var MOB_NOCHARM = 8192; // Flag: n
var MOB_NOCONFUSE = 262144; // Flag: s
var MOB_NOCORPSE = 134217728; // Flag: B
var MOB_NOGOLD = 67108864; // Flag: A
var MOB_NOSLEEP = 32768; // Flag: p
var MOB_NOTICK = 268435456; // Flag: C
var MOB_NOWEAPON = 33554432; // Flag: z
var MOB_SCAVENGER = 4; // Flag: c
var MOB_SENTINEL = 2; // Flag: b
var MOB_SPEC = 1; // Flag: a
var MOB_STAY_ZONE = 64; // Flag: g
var MOB_WANDER = 8388608; // Flag: x
var MOB_WIMPY = 128; // Flag: h
var AFF_ADHESION = 131072; // Flag: r
var AFF_BLIND = 1; // Flag: a
var AFF_CHARM = 2097152; // Flag: v
var AFF_CONFUSED = 65536; // Flag: q
var AFF_CURSE = 512; // Flag: j
var AFF_DETECT_ALIGN = 4; // Flag: c
var AFF_DETECT_INVIS = 8; // Flag: d
var AFF_DETECT_MAGIC = 16; // Flag: e
var AFF_DISEASE = 1048576; // Flag: u
var AFF_FAST = 16777216; // Flag: y
var AFF_FLY = 4194304; // Flag: w
var AFF_GROUP = 256; // Flag: i
var AFF_HIDE = 524288; // Flag: t
var AFF_INFRAVISION = 1024; // Flag: k
var AFF_INVISIBLE = 2; // Flag: b
var AFF_NODOOR = 67108864; // Flag: A
var AFF_NOTRACK = 32768; // Flag: p
var AFF_POISON = 2048; // Flag: l
var AFF_PROTECT_EVIL = 4096; // Flag: m
var AFF_PROTECT_GOOD = 8192; // Flag: n
var AFF_SANCTUARY = 128; // Flag: h
var AFF_SENSE_LIFE = 32; // Flag: f
var AFF_SLEEP = 16384; // Flag: o
var AFF_SLOW = 33554432; // Flag: z
var AFF_SNEAK = 262144; // Flag: s
var AFF_WATER_BREATHING = 8388608; // Flag: x
var AFF_WATERWALK = 64; // Flag: g
var CLASS_ALCHEMIST = 4;
var CLASS_ASSASSIN = 9;
var CLASS_CLERIC = 1;
var CLASS_CRUSADER = 8;
var CLASS_DRUID = 7;
var CLASS_JEDI = 6;
var CLASS_MAGIC_USER = 0;
var CLASS_RANGER = 5;
var CLASS_THIEF = 2;
var CLASS_WARRIOR = 3;
var AFT = 11;
var DOWN = 5;
var EAST = 1;
var FORE = 10;
var NORTH = 0;
var NORTHEAST = 7;
var NORTHWEST = 6;
var PORT = 12;
var SOUTH = 2;
var SOUTHEAST = 9;
var SOUTHWEST = 8;
var STARBOARD = 13;
var UP = 4;
var WEST = 3;
var ITEM_BLESS = 256; // Flag: i
var ITEM_GLOW = 1; // Flag: a
var ITEM_HUM = 2; // Flag: b
var ITEM_INVISIBLE = 32; // Flag: f
var ITEM_MAGIC = 64; // Flag: g
var ITEM_NOCALC = 67108864; // Flag: A
var ITEM_ANTI_CLERIC = 8192; // Flag: n
var ITEM_NODONATE = 8; // Flag: d
var ITEM_NODROP = 128; // Flag: h
var ITEM_ANTI_EVIL = 1024; // Flag: k
var ITEM_NOEXAMINE = 131072; // Flag: r
var ITEM_ANTI_GOOD = 512; // Flag: j
var ITEM_ANTI_MAGIC_USER = 4096; // Flag: m
var ITEM_ANTI_NEUTRAL = 2048; // Flag: l
var ITEM_NORENT = 4; // Flag: c
var ITEM_NOSELL = 65536; // Flag: q
var ITEM_ANTI_THIEF = 16384; // Flag: o
var ITEM_NOTICK = 268435456; // Flag: C
var ITEM_NOVALUE = 134217728; // Flag: B
var ITEM_ANTI_WARRIOR = 32768; // Flag: p
var WEAR_ABOUT = 12;
var WEAR_ARMS = 10;
var WEAR_BODY = 5;
var WEAR_FEET = 8;
var WEAR_FINGER_L = 2;
var WEAR_FINGER_R = 1;
var WEAR_HANDS = 9;
var WEAR_HEAD = 6;
var WEAR_HOLD = 17;
var WEAR_LEGS = 7;
var WEAR_LIGHT = 0;
var WEAR_NECK_1 = 3;
var WEAR_NECK_2 = 4;
var WEAR_SHIELD = 11;
var WEAR_WAIST = 13;
var WEAR_WIELD = 16;
var WEAR_WRIST_L = 15;
var WEAR_WRIST_R = 14;
var EX_CLOSED = 2; // Flag: b
var EX_ISDOOR = 1; // Flag: a
var EX_HIDDEN = 16; // Flag: e
var EX_LOCKED = 4; // Flag: c
var EX_PICKPROOF = 8; // Flag: d
var PLR_FROZEN = 4; // Flag: c
var PLR_KILLER = 1; // Flag: a
var PLR_LIFE = 8388608; // Flag: x
var PLR_MUTE = 256; // Flag: i
var PLR_NOGOSS = 33554432; // Flag: z
var PLR_NOTITLE = 512; // Flag: j
var PLR_THIEF = 2; // Flag: b
var PLR_WASTE = 4194304; // Flag: w
var POS_DEAD = 0;
var POS_FIGHTING = 7;
var POS_INCAP = 2;
var POS_MORTALLYW = 1;
var POS_RESTING = 5;
var POS_SITTING = 6;
var POS_SLEEPING = 4;
var POS_STANDING = 8;
var POS_STUNNED = 3;
var PRF_AUTOASSIST = 536870912; // Flag: D
var PRF_AUTODIAG = 4194304; // Flag: w
var PRF_AUTOEXIT = 128; // Flag: h
var PRF_AUTOPROMPT = 67108864; // Flag: A
var PRF_AUTOSAC = 268435456; // Flag: C
var PRF_BRIEF = 1; // Flag: a
var PRF_COLOR_1 = 8192; // Flag: n
var PRF_COLOR_2 = 16384; // Flag: o
var PRF_COMPACT = 2; // Flag: b
var PRF_DISPHP = 16; // Flag: e
var PRF_DISPMANA = 32; // Flag: f
var PRF_DISPMOVE = 64; // Flag: g
var PRF_FASTSTART = 134217728; // Flag: B
var PRF_AUTOLOOTG = 16777216; // Flag: y
var PRF_AUTOLOOTI = 33554432; // Flag: z
var PRF_NOALIAS = 32768; // Flag: p
var PRF_NOMISS = 256; // Flag: i
var PRF_NOREFRESH = 2097152; // Flag: v
var PRF_NOTITLESET = 4096; // Flag: m
var PRF_QUEST = 512; // Flag: j
var PRF_SUMMONABLE = 1024; // Flag: k
var ROOM_ATRIUM = 8192; // Flag: n
var ROOM_DARK = 1; // Flag: a
var ROOM_DEATH = 2; // Flag: b
var ROOM_GODROOM = 1024; // Flag: k
var ROOM_HOUSE = 2048; // Flag: l
var ROOM_IMPROOM = 16384; // Flag: o
var ROOM_INDOORS = 8; // Flag: d
var ROOM_NOBOMB = 1048576; // Flag: u
var ROOM_NODEATH = 262144; // Flag: s
var ROOM_NOEXITS = 2097152; // Flag: v
var ROOM_NOMAGIC = 128; // Flag: h
var ROOM_NOMOB = 4; // Flag: c
var ROOM_NORECALL = 65536; // Flag: q
var ROOM_NOTICK = 268435456; // Flag: C
var ROOM_NOTRACK = 64; // Flag: g
var ROOM_PEACEFUL = 16; // Flag: e
var ROOM_PRIVATE = 512; // Flag: j
var ROOM_REGENERATE = 524288; // Flag: t
var ROOM_SOUNDPROOF = 32; // Flag: f
var ROOM_TUNNEL = 256; // Flag: i
var ROOM_PKOK = 131072; // Flag: r
var SECT_CITY = 1;
var SECT_COLD = 13;
var SECT_FIELD = 2;
var SECT_FLYING = 9;
var SECT_FOREST = 3;
var SECT_GAS = 14;
var SECT_HILLS = 4;
var SECT_HOT = 12;
var SECT_INSIDE = 0;
var SECT_MOUNTAIN = 5;
var SECT_SAND = 11;
var SECT_SNOW = 10;
var SECT_UNDERWATER = 8;
var SECT_WATER_NOSWIM = 7;
var SECT_WATER_SWIM = 6;
var ITEM_AMMO = 7;
var ITEM_BOAT = 22;
var ITEM_BOMB = 26;
var ITEM_CONTAINER = 15;
var ITEM_DRINKCON = 17;
var ITEM_FIREWEAPON = 6;
var ITEM_FOOD = 19;
var ITEM_FOUNTAIN = 23;
var ITEM_HERBS = 31;
var ITEM_HOLDBAG = 28;
var ITEM_INSTRUMENT = 27;
var ITEM_KEY = 18;
var ITEM_LIGHT = 1;
var ITEM_MONEY = 20;
var ITEM_OTHER = 12;
var ITEM_NOTE = 16;
var ITEM_PEN = 21;
var ITEM_PIPE = 33;
var ITEM_PORTAL = 29;
var ITEM_POTION = 10;
var ITEM_SCROLL = 2;
var ITEM_SCUBA = 24;
var ITEM_STAFF = 4;
var ITEM_TICKET = 30;
var ITEM_TOBACCO = 34;
var ITEM_WAND = 3;
var ITEM_WEAPON = 5;
var ITEM_WINGS = 25;
var ITEM_WEAR_ABOUT = 1024; // Flag: k
var ITEM_WEAR_ARMS = 256; // Flag: i
var ITEM_WEAR_BODY = 8; // Flag: d
var ITEM_WEAR_FEET = 64; // Flag: g
var ITEM_WEAR_FINGER = 2; // Flag: b
var ITEM_WEAR_HANDS = 128; // Flag: h
var ITEM_WEAR_HEAD = 16; // Flag: e
var ITEM_WEAR_HOLD = 16384; // Flag: o
var ITEM_WEAR_LEGS = 32; // Flag: f
var ITEM_WEAR_NECK = 4; // Flag: c
var ITEM_WEAR_SHIELD = 512; // Flag: j
var ITEM_WEAR_TAKE = 1; // Flag: a
var ITEM_WEAR_WAIST = 2048; // Flag: l
var ITEM_WEAR_WIELD = 8192; // Flag: n
var ITEM_WEAR_WRIST = 4096; // Flag: m
var WRITE_CHAR = 2; // Flag: b
var WRITE_ROOM = 1; // Flag: a
var WRITE_SLEEP = 256; // Flag: i
var WRITE_VICT = 4; // Flag: c
var TRUE = (1==1);
var FALSE = (1 == 0);
var NOWHERE = -1;
var NOTHING = -1;
var NOBODY = -1;


var MA = 73;
var RW = 73;
var QN = 72;
var QL = 71;



/*
 * For versions of Javascript that don't
 * have this ability built in.
 *
 * This is no longer conditional.
 * Working around a bug in Firefox 1.5.0.1
 * (at least the windows build.)
 */

//if(!Array.prototype.indexOf) {
  function array_indexOf(s) {
    var i;
    for (i = 0; i < this.length; i++) {
      var t = this[i];
      if (t == s) return i;
    }
    return -1;
  }
  Array.prototype.indexOf = array_indexOf;
//}


/**
 *   Array convenience method to remove element.
 *
 *   @param object element
 *   @returns boolean
 */
Array.prototype.remove = function (element) {
	var result = false;
	var array = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] == element) {
			result = true;
		} else {
			array.push(this[i]);
		}
	}
	this.clear();
	for (var i = 0; i < array.length; i++) {
		this.push(array[i]);
	}
	array = null;
	return result;
};

/// Add a binary search method to 2D arrays
Array.prototype.binSearch2d = function(x, ele)
{
	var low, high, mid, round;
	low = 0;
	high = this.length - 1;
	while (low <= high) {
		mid = Math.floor((low + high)/2);
		if (x < this[mid][ele])
			high = mid - 1;
		else if (x > this[mid][ele])
			low = mid + 1;
		else // found in location mid
			return mid;
	}
	return -1; // not found
};

