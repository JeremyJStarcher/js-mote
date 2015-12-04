var all_constants=new Array(
new Array("action_affect", V_FLAG, MOB_AFFECT),
new Array("action_aggr_evil", V_FLAG, MOB_AGGR_EVIL),
new Array("action_aggr_good", V_FLAG, MOB_AGGR_GOOD),
new Array("action_aggr_neutral", V_FLAG, MOB_AGGR_NEUTRAL),
new Array("action_aggressive", V_FLAG, MOB_AGGRESSIVE),
new Array("action_aware", V_FLAG, MOB_AWARE),
new Array("action_double", V_FLAG, MOB_DOUBLE),
new Array("action_helper", V_FLAG, MOB_HELPER),
new Array("action_hunter", V_FLAG, MOB_HUNTER),
new Array("action_immort", V_FLAG, MOB_IMMORT),
new Array("action_isnpc", V_FLAG, MOB_ISNPC),
new Array("action_janitor", V_FLAG, MOB_JANITOR),
new Array("action_memory", V_FLAG, MOB_MEMORY),
new Array("action_noadhere", V_FLAG, MOB_NOADHERE),
new Array("action_nobash", V_FLAG, MOB_NOBASH),
new Array("action_noblind", V_FLAG, MOB_NOBLIND),
new Array("action_nocharm", V_FLAG, MOB_NOCHARM),
new Array("action_noconfuse", V_FLAG, MOB_NOCONFUSE),
new Array("action_nocorpse", V_FLAG, MOB_NOCORPSE),
new Array("action_nogold", V_FLAG, MOB_NOGOLD),
new Array("action_nosleep", V_FLAG, MOB_NOSLEEP),
new Array("action_notick", V_FLAG, MOB_NOTICK),
new Array("action_noweapon", V_FLAG, MOB_NOWEAPON),
new Array("action_scavenger", V_FLAG, MOB_SCAVENGER),
new Array("action_sentinel", V_FLAG, MOB_SENTINEL),
new Array("action_spec", V_FLAG, MOB_SPEC),
new Array("action_stay_zone", V_FLAG, MOB_STAY_ZONE),
new Array("action_wander", V_FLAG, MOB_WANDER),
new Array("action_wimpy", V_FLAG, MOB_WIMPY),
new Array("affect_adhere", V_FLAG, AFF_ADHESION),
new Array("affect_blind", V_FLAG, AFF_BLIND),
new Array("affect_charm", V_FLAG, AFF_CHARM),
new Array("affect_confuse", V_FLAG, AFF_CONFUSED),
new Array("affect_curse", V_FLAG, AFF_CURSE),
new Array("affect_detect_align", V_FLAG, AFF_DETECT_ALIGN),
new Array("affect_detect_invis", V_FLAG, AFF_DETECT_INVIS),
new Array("affect_detect_magic", V_FLAG, AFF_DETECT_MAGIC),
new Array("affect_disease", V_FLAG, AFF_DISEASE),
new Array("affect_fast", V_FLAG, AFF_FAST),
new Array("affect_fly", V_FLAG, AFF_FLY),
new Array("affect_group", V_FLAG, AFF_GROUP),
new Array("affect_hide", V_FLAG, AFF_HIDE),
new Array("affect_infravision", V_FLAG, AFF_INFRAVISION),
new Array("affect_invisible", V_FLAG, AFF_INVISIBLE),
new Array("affect_nodoor", V_FLAG, AFF_NODOOR),
new Array("affect_notrack", V_FLAG, AFF_NOTRACK),
new Array("affect_poison", V_FLAG, AFF_POISON),
new Array("affect_protect_evil", V_FLAG, AFF_PROTECT_EVIL),
new Array("affect_protect_good", V_FLAG, AFF_PROTECT_GOOD),
new Array("affect_sanctuary", V_FLAG, AFF_SANCTUARY),
new Array("affect_sense_life", V_FLAG, AFF_SENSE_LIFE),
new Array("affect_sleep", V_FLAG, AFF_SLEEP),
new Array("affect_slow", V_FLAG, AFF_SLOW),
new Array("affect_sneak", V_FLAG, AFF_SNEAK),
new Array("affect_waterbreathe", V_FLAG, AFF_WATER_BREATHING),
new Array("affect_waterwalk", V_FLAG, AFF_WATERWALK),
new Array("class_alchemist", V_INTEGER, CLASS_ALCHEMIST),
new Array("class_assassin", V_INTEGER, CLASS_ASSASSIN),
new Array("class_cleric", V_INTEGER, CLASS_CLERIC),
new Array("class_crusader", V_INTEGER, CLASS_CRUSADER),
new Array("class_druid", V_INTEGER, CLASS_DRUID),
new Array("class_jedi", V_INTEGER, CLASS_JEDI),
new Array("class_magic_user", V_INTEGER, CLASS_MAGIC_USER),
new Array("class_ranger", V_INTEGER, CLASS_RANGER),
new Array("class_thief", V_INTEGER, CLASS_THIEF),
new Array("class_warrior", V_INTEGER, CLASS_WARRIOR),
new Array("dir_aft", V_INTEGER, AFT),
new Array("dir_down", V_INTEGER, DOWN),
new Array("dir_east", V_INTEGER, EAST),
new Array("dir_fore", V_INTEGER, FORE),
new Array("dir_north", V_INTEGER, NORTH),
new Array("dir_northeast", V_INTEGER, NORTHEAST),
new Array("dir_northwest", V_INTEGER, NORTHWEST),
new Array("dir_port", V_INTEGER, PORT),
new Array("dir_south", V_INTEGER, SOUTH),
new Array("dir_southeast", V_INTEGER, SOUTHEAST),
new Array("dir_southwest", V_INTEGER, SOUTHWEST),
new Array("dir_starboard", V_INTEGER, STARBOARD),
new Array("dir_up", V_INTEGER, UP),
new Array("dir_west", V_INTEGER, WEST),
new Array("effect_bless", V_FLAG, ITEM_BLESS),
new Array("effect_glow", V_FLAG, ITEM_GLOW),
new Array("effect_hum", V_FLAG, ITEM_HUM),
new Array("effect_invisible", V_FLAG, ITEM_INVISIBLE),
new Array("effect_magic", V_FLAG, ITEM_MAGIC),
new Array("effect_nocalc", V_FLAG, ITEM_NOCALC),
new Array("effect_nocleric", V_FLAG, ITEM_ANTI_CLERIC),
new Array("effect_nodonate", V_FLAG, ITEM_NODONATE),
new Array("effect_nodrop", V_FLAG, ITEM_NODROP),
new Array("effect_noevil", V_FLAG, ITEM_ANTI_EVIL),
new Array("effect_noexamine", V_FLAG, ITEM_NOEXAMINE),
new Array("effect_nogood", V_FLAG, ITEM_ANTI_GOOD),
new Array("effect_nomage", V_FLAG, ITEM_ANTI_MAGIC_USER),
new Array("effect_noneutral", V_FLAG, ITEM_ANTI_NEUTRAL),
new Array("effect_norent", V_FLAG, ITEM_NORENT),
new Array("effect_nosell", V_FLAG, ITEM_NOSELL),
new Array("effect_nothief", V_FLAG, ITEM_ANTI_THIEF),
new Array("effect_notick", V_FLAG, ITEM_NOTICK),
new Array("effect_novalue", V_FLAG, ITEM_NOVALUE),
new Array("effect_nowarrior", V_FLAG, ITEM_ANTI_WARRIOR),
new Array("equip_about", V_INTEGER, WEAR_ABOUT),
new Array("equip_arms", V_INTEGER, WEAR_ARMS),
new Array("equip_body", V_INTEGER, WEAR_BODY),
new Array("equip_feet", V_INTEGER, WEAR_FEET),
new Array("equip_finger_left", V_INTEGER, WEAR_FINGER_L),
new Array("equip_finger_right", V_INTEGER, WEAR_FINGER_R),
new Array("equip_hands", V_INTEGER, WEAR_HANDS),
new Array("equip_head", V_INTEGER, WEAR_HEAD),
new Array("equip_hold", V_INTEGER, WEAR_HOLD),
new Array("equip_legs", V_INTEGER, WEAR_LEGS),
new Array("equip_light", V_INTEGER, WEAR_LIGHT),
new Array("equip_neck_first", V_INTEGER, WEAR_NECK_1),
new Array("equip_neck_second", V_INTEGER, WEAR_NECK_2),
new Array("equip_shield", V_INTEGER, WEAR_SHIELD),
new Array("equip_waist", V_INTEGER, WEAR_WAIST),
new Array("equip_wield", V_INTEGER, WEAR_WIELD),
new Array("equip_wrist_left", V_INTEGER, WEAR_WRIST_L),
new Array("equip_wrist_right", V_INTEGER, WEAR_WRIST_R),
new Array("exit_closed", V_FLAG, EX_CLOSED),
new Array("exit_door", V_FLAG, EX_ISDOOR),
new Array("exit_hidden", V_FLAG, EX_HIDDEN),
new Array("exit_locked", V_FLAG, EX_LOCKED),
new Array("exit_pickproof", V_FLAG, EX_PICKPROOF),
new Array("false", V_BOOLEAN, FALSE),
new Array("nobody", V_CHAR, 0),
new Array("nothing", V_OBJECT, 0),
new Array("nowhere", V_ROOM, NOWHERE),
new Array("player_frozen", V_FLAG, PLR_FROZEN),
new Array("player_killer", V_FLAG, PLR_KILLER),
new Array("player_life", V_FLAG, PLR_LIFE),
new Array("player_mute", V_FLAG, PLR_MUTE),
new Array("player_nogoss", V_FLAG, PLR_NOGOSS),
new Array("player_notitle", V_FLAG, PLR_NOTITLE),
new Array("player_thief", V_FLAG, PLR_THIEF),
new Array("player_waste", V_FLAG, PLR_WASTE),
new Array("position_dead", V_INTEGER, POS_DEAD),
new Array("position_fight", V_INTEGER, POS_FIGHTING),
new Array("position_incap", V_INTEGER, POS_INCAP),
new Array("position_mortal", V_INTEGER, POS_MORTALLYW),
new Array("position_rest", V_INTEGER, POS_RESTING),
new Array("position_sit", V_INTEGER, POS_SITTING),
new Array("position_sleep", V_INTEGER, POS_SLEEPING),
new Array("position_stand", V_INTEGER, POS_STANDING),
new Array("position_stun", V_INTEGER, POS_STUNNED),
new Array("pref_autoassist", V_FLAG, PRF_AUTOASSIST),
new Array("pref_autodiag", V_FLAG, PRF_AUTODIAG),
new Array("pref_autoexit", V_FLAG, PRF_AUTOEXIT),
new Array("pref_autoprompt", V_FLAG, PRF_AUTOPROMPT),
new Array("pref_autosac", V_FLAG, PRF_AUTOSAC),
new Array("pref_brief", V_FLAG, PRF_BRIEF),
new Array("pref_color_1", V_FLAG, PRF_COLOR_1),
new Array("pref_color_2", V_FLAG, PRF_COLOR_2),
new Array("pref_compact", V_FLAG, PRF_COMPACT),
new Array("pref_disp_hit", V_FLAG, PRF_DISPHP),
new Array("pref_disp_mana", V_FLAG, PRF_DISPMANA),
new Array("pref_disp_move", V_FLAG, PRF_DISPMOVE),
new Array("pref_faststart", V_FLAG, PRF_FASTSTART),
new Array("pref_loot_gold", V_FLAG, PRF_AUTOLOOTG),
new Array("pref_loot_items", V_FLAG, PRF_AUTOLOOTI),
new Array("pref_noalias", V_FLAG, PRF_NOALIAS),
new Array("pref_nomiss", V_FLAG, PRF_NOMISS),
new Array("pref_norefresh", V_FLAG, PRF_NOREFRESH),
new Array("pref_notitleset", V_FLAG, PRF_NOTITLESET),
new Array("pref_quest", V_FLAG, PRF_QUEST),
new Array("pref_summon", V_FLAG, PRF_SUMMONABLE),
new Array("room_atrium", V_FLAG, ROOM_ATRIUM),
new Array("room_dark", V_FLAG, ROOM_DARK),
new Array("room_death", V_FLAG, ROOM_DEATH),
new Array("room_godroom", V_FLAG, ROOM_GODROOM),
new Array("room_house", V_FLAG, ROOM_HOUSE),
new Array("room_improom", V_FLAG, ROOM_IMPROOM),
new Array("room_indoors", V_FLAG, ROOM_INDOORS),
new Array("room_nobomb", V_FLAG, ROOM_NOBOMB),
new Array("room_nodeath", V_FLAG, ROOM_NODEATH),
new Array("room_noexits", V_FLAG, ROOM_NOEXITS),
new Array("room_nomagic", V_FLAG, ROOM_NOMAGIC),
new Array("room_nomob", V_FLAG, ROOM_NOMOB),
new Array("room_norecall", V_FLAG, ROOM_NORECALL),
new Array("room_notick", V_FLAG, ROOM_NOTICK),
new Array("room_notrack", V_FLAG, ROOM_NOTRACK),
new Array("room_peaceful", V_FLAG, ROOM_PEACEFUL),
new Array("room_private", V_FLAG, ROOM_PRIVATE),
new Array("room_regenerate", V_FLAG, ROOM_REGENERATE),
new Array("room_soundproof", V_FLAG, ROOM_SOUNDPROOF),
new Array("room_tunnel", V_FLAG, ROOM_TUNNEL),
new Array("room_viceok", V_FLAG, ROOM_PKOK),
new Array("sector_city", V_INTEGER, SECT_CITY),
new Array("sector_cold", V_INTEGER, SECT_COLD),
new Array("sector_field", V_INTEGER, SECT_FIELD),
new Array("sector_flying", V_INTEGER, SECT_FLYING),
new Array("sector_forest", V_INTEGER, SECT_FOREST),
new Array("sector_gas", V_INTEGER, SECT_GAS),
new Array("sector_hills", V_INTEGER, SECT_HILLS),
new Array("sector_hot", V_INTEGER, SECT_HOT),
new Array("sector_inside", V_INTEGER, SECT_INSIDE),
new Array("sector_mountain", V_INTEGER, SECT_MOUNTAIN),
new Array("sector_sand", V_INTEGER, SECT_SAND),
new Array("sector_snow", V_INTEGER, SECT_SNOW),
new Array("sector_underwater", V_INTEGER, SECT_UNDERWATER),
new Array("sector_water_noswim", V_INTEGER, SECT_WATER_NOSWIM),
new Array("sector_water_swim", V_INTEGER, SECT_WATER_SWIM),
new Array("true", V_BOOLEAN, TRUE),
new Array("type_ammo", V_INTEGER, ITEM_AMMO),
new Array("type_boat", V_INTEGER, ITEM_BOAT),
new Array("type_bomb", V_INTEGER, ITEM_BOMB),
new Array("type_container", V_INTEGER, ITEM_CONTAINER),
new Array("type_drink", V_INTEGER, ITEM_DRINKCON),
new Array("type_fireweapon", V_INTEGER, ITEM_FIREWEAPON),
new Array("type_food", V_INTEGER, ITEM_FOOD),
new Array("type_fountain", V_INTEGER, ITEM_FOUNTAIN),
new Array("type_herbs", V_INTEGER, ITEM_HERBS),
new Array("type_holdbag", V_INTEGER, ITEM_HOLDBAG),
new Array("type_instrument", V_INTEGER, ITEM_INSTRUMENT),
new Array("type_key", V_INTEGER, ITEM_KEY),
new Array("type_light", V_INTEGER, ITEM_LIGHT),
new Array("type_money", V_INTEGER, ITEM_MONEY),
new Array("type_normal", V_INTEGER, ITEM_OTHER),
new Array("type_note", V_INTEGER, ITEM_NOTE),
new Array("type_other", V_INTEGER, ITEM_OTHER),
new Array("type_pen", V_INTEGER, ITEM_PEN),
new Array("type_pipe", V_INTEGER, ITEM_PIPE),
new Array("type_portal", V_INTEGER, ITEM_PORTAL),
new Array("type_potion", V_INTEGER, ITEM_POTION),
new Array("type_scroll", V_INTEGER, ITEM_SCROLL),
new Array("type_scuba", V_INTEGER, ITEM_SCUBA),
new Array("type_staff", V_INTEGER, ITEM_STAFF),
new Array("type_ticket", V_INTEGER, ITEM_TICKET),
new Array("type_tobacco", V_INTEGER, ITEM_TOBACCO),
new Array("type_wand", V_INTEGER, ITEM_WAND),
new Array("type_weapon", V_INTEGER, ITEM_WEAPON),
new Array("type_wings", V_INTEGER, ITEM_WINGS),
new Array("wear_about", V_FLAG, ITEM_WEAR_ABOUT),
new Array("wear_arms", V_FLAG, ITEM_WEAR_ARMS),
new Array("wear_body", V_FLAG, ITEM_WEAR_BODY),
new Array("wear_feet", V_FLAG, ITEM_WEAR_FEET),
new Array("wear_finger", V_FLAG, ITEM_WEAR_FINGER),
new Array("wear_hands", V_FLAG, ITEM_WEAR_HANDS),
new Array("wear_head", V_FLAG, ITEM_WEAR_HEAD),
new Array("wear_hold", V_FLAG, ITEM_WEAR_HOLD),
new Array("wear_legs", V_FLAG, ITEM_WEAR_LEGS),
new Array("wear_neck", V_FLAG, ITEM_WEAR_NECK),
new Array("wear_shield", V_FLAG, ITEM_WEAR_SHIELD),
new Array("wear_take", V_FLAG, ITEM_WEAR_TAKE),
new Array("wear_waist", V_FLAG, ITEM_WEAR_WAIST),
new Array("wear_wield", V_FLAG, ITEM_WEAR_WIELD),
new Array("wear_wrist", V_FLAG, ITEM_WEAR_WRIST),
new Array("write_char", V_FLAG, WRITE_CHAR),
new Array("write_room", V_FLAG, WRITE_ROOM),
new Array("write_sleep", V_FLAG, WRITE_SLEEP),
new Array("write_vict", V_FLAG, WRITE_VICT)
);


// LEVEL, METHOD_NAME, FUNCTION, ARGS
var boolean_methods = new Array(
new Array(0, V_BOOLEAN, "op_and", boolean_and, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_and_assign", boolean_and_assign, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_assign", boolean_assign, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_bang_unary", boolean_not, new Array(V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_equal", boolean_equal, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_not_equal", boolean_not_equal, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_or", boolean_or, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_or_assign", boolean_or_assign, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_xor", boolean_xor, new Array(V_BOOLEAN, V_BOOLEAN)),
new Array(0, V_BOOLEAN, "op_xor_assign", boolean_xor_assign, new Array(V_BOOLEAN, V_BOOLEAN))
);

var builtin_methods = new Array(
new Array(0, V_INTEGER, "abs", builtin_abs, new Array(V_INTEGER)),
new Array(0, V_INTEGER, "dice", builtin_dice, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_CHAR, "find_character", builtin_find_character, new Array(V_STRING)),
new Array(0, V_OBJECT, "find_object", builtin_find_object, new Array(V_STRING)),
new Array(0, V_CHAR, "find_player", builtin_find_player, new Array(V_STRING)),
new Array(0, V_CHAR, "first_character", builtin_first_character, new Array()),
new Array(0, V_OBJECT, "first_object", builtin_first_object, new Array()),
new Array(0, V_CHAR, "first_player", builtin_first_player, new Array()),
new Array(0, V_STRING, "gametime", builtin_gametime, new Array()),
new Array(0, V_INTEGER, "getidbyname", builtin_getidbyname, new Array(V_STRING)),
new Array(0, V_STRING, "getnamebyid", builtin_getnamebyid, new Array(V_INTEGER)),
new Array(MA, V_STRING, "load", builtin_load, new Array(V_STRING)),
new Array(0, V_INTEGER, "max", builtin_max, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "min", builtin_min, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "number", builtin_number, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_ROOM, "random_room", builtin_random_room, new Array()),
new Array(0, V_STRING, "realtime", builtin_realtime, new Array()),
new Array(MA, V_ILLEGAL, "save", builtin_save, new Array(V_STRING, V_STRING)),
new Array(0, V_ILLEGAL, "show", builtin_show, new Array(V_STRING)),
new Array(0, V_ILLEGAL, "showi", builtin_showi, new Array(V_INTEGER)),
new Array(0, V_INTEGER, "sqrt", builtin_sqrt, new Array(V_INTEGER)),
new Array(0, V_STRING, "timestr", builtin_timestr, new Array(V_INTEGER, V_STRING)),
new Array(0, V_INTEGER, "unixtime", builtin_unixtime, new Array()),
new Array(0, V_ILLEGAL, "write", builtin_write, new Array(V_STRING, V_BOOLEAN, V_CHAR, V_CHAR, V_OBJECT))
);
// LEVEL, METHOD_NAME, FUNCTION, ARGS
var character_methods = new Array(
new Array(0, V_FLAG, "action", character_action, new Array(V_CHARACTER)),
new Array(RW, V_ILLEGAL, "activate", character_activate, new Array(V_CHARACTER)),
new Array(QN, V_ILLEGAL, "add_equipment", character_add_equipment, new Array(V_CHARACTER, V_OBJECT, V_INTEGER)),
new Array(QN, V_ILLEGAL, "add_inventory", character_add_inventory, new Array(V_CHARACTER, V_OBJECT)),
new Array(0, V_FLAG, "affect", character_affect, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "alignment", character_alignment, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "armor", character_armor, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "bank", character_bank, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "birthtime", character_birthtime, new Array(V_CHARACTER)),
new Array(0, V_BOOLEAN, "boolean", character_boolean, new Array(V_CHARACTER)),
new Array(0, V_BOOLEAN, "can_see", character_can_see, new Array(V_CHARACTER, V_CHAR)),
new Array(0, V_INTEGER, "carry_items", character_carry_items, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "carry_weight", character_carry_weight, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "charisma", character_charisma, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "class", character_class, new Array(V_CHARACTER)),
new Array(QL, V_ILLEGAL, "command", character_command, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_INTEGER, "constitution", character_constitution, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "count", character_count, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "damroll", character_damroll, new Array(V_CHARACTER)),
new Array(0, V_STRING, "data", character_data, new Array(V_CHARACTER)),
new Array(RW, V_ILLEGAL, "deactivate", character_deactivate, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "delay", character_delay, new Array(V_CHARACTER)),
new Array(0, V_STRING, "description", character_description, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "dexterity", character_dexterity, new Array(V_CHARACTER)),
new Array(0, V_OBJECT, "equipment", character_equipment, new Array(V_CHARACTER, V_INTEGER)),
new Array(MA, V_INTEGER, "experience", character_experience, new Array(V_CHARACTER)),
new Array(QL, V_ILLEGAL, "extract", character_extract, new Array(V_CHARACTER)),
new Array(0, V_STRING, "field", character_field, new Array(V_CHARACTER)),
new Array(0, V_ILLEGAL, "fight", character_fight, new Array(V_CHARACTER, V_CHAR)),
new Array(0, V_CHAR, "fighting", character_fighting, new Array(V_CHARACTER)),
new Array(0, V_CHAR, "find_character", character_find_character, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_CHAR, "find_character_all", character_find_character_all, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_CHAR, "find_character_room", character_find_character_room, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_OBJECT, "find_object", character_find_object, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_INTEGER, "find_object_equipment", character_find_object_equipment, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_OBJECT, "find_object_inventory", character_find_object_inventory, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_OBJECT, "find_object_room", character_find_object_room, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_OBJECT, "first_inventory", character_first_inventory, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "gold", character_gold, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "hit", character_hit, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "hitroll", character_hitroll, new Array(V_CHARACTER)),
new Array(0, V_ILLEGAL, "hunt", character_hunt, new Array(V_CHARACTER, V_CHAR)),
new Array(0, V_CHAR, "hunting", character_hunting, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "idnum", character_idnum, new Array(V_CHARACTER)),
new Array(0, V_ROOM, "in_room", character_in_room, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "integer", character_integer, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "intelligence", character_intelligence, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "invis_level", character_invis_level, new Array(V_CHARACTER)),
new Array(0, V_BOOLEAN, "is_mobile", character_is_mobile, new Array(V_CHARACTER)),
new Array(0, V_BOOLEAN, "is_player", character_is_player, new Array(V_CHARACTER)),
new Array(0, V_STRING, "keywords", character_keywords, new Array(V_CHARACTER)),
new Array(QL, V_ILLEGAL, "kill", character_kill, new Array(V_CHARACTER, V_CHAR)),
new Array(0, V_INTEGER, "level", character_level, new Array(V_CHARACTER)),
new Array(QN, V_OBJECT, "load_equipment", character_load_equipment, new Array(V_CHARACTER, V_INTEGER, V_INTEGER)),
new Array(QN, V_OBJECT, "load_inventory", character_load_inventory, new Array(V_CHARACTER, V_INTEGER)),
new Array(0, V_INTEGER, "logintime", character_logintime, new Array(V_CHARACTER)),
new Array(QN, V_ILLEGAL, "look", character_look, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "mana", character_mana, new Array(V_CHARACTER)),
new Array(0, V_CHAR, "master", character_master, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "maxhit", character_maxhit, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "maxmana", character_maxmana, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "maxmove", character_maxmove, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "move", character_move, new Array(V_CHARACTER)),
new Array(0, V_STRING, "name", character_name, new Array(V_CHARACTER)),
new Array(0, V_CHAR, "next_character", character_next_character, new Array(V_CHARACTER)),
new Array(0, V_CHAR, "next_occupant", character_next_occupant, new Array(V_CHARACTER)),
new Array(0, V_CHAR, "next_player", character_next_player, new Array(V_CHARACTER)),
new Array(RW, V_ILLEGAL, "note", character_note, new Array(V_CHARACTER, V_OBJECT)),
new Array(0, V_CHAR, "op_assign", character_assign, new Array(V_CHARACTER, V_CHAR)),
new Array(0, V_BOOLEAN, "op_equal", character_equal, new Array(V_CHARACTER, V_CHAR)),
new Array(0, V_BOOLEAN, "op_not_equal", character_not_equal, new Array(V_CHARACTER, V_CHAR)),
new Array(QN, V_ILLEGAL, "page", character_page, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_FLAG, "player", character_action, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "playtime", character_playtime, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "position", character_position, new Array(V_CHARACTER)),
new Array(0, V_FLAG, "pref", character_preference, new Array(V_CHARACTER)),
new Array(0, V_STRING, "room_description", character_room_description, new Array(V_CHARACTER)),
new Array(QN, V_ILLEGAL, "send", character_send, new Array(V_CHARACTER, V_STRING)),
new Array(0, V_INTEGER, "sex", character_sex, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "stradd", character_stradd, new Array(V_CHARACTER)),
new Array(0, V_INTEGER, "strength", character_strength, new Array(V_CHARACTER)),
new Array(0, V_ILLEGAL, "switch", character_switch, new Array(V_CHARACTER, V_CHAR)),
new Array(QN, V_ILLEGAL, "to_room", character_to_room, new Array(V_CHARACTER, V_ROOM)),
new Array(0, V_INTEGER, "wisdom", character_wisdom, new Array(V_CHARACTER))
);
// LEVEL, METHOD_NAME, FUNCTION, ARGS
var flag_methods = new Array(
new Array(0, V_BOOLEAN, "boolean", flag_boolean, new Array(V_FLAG)),
new Array(0, V_INTEGER, "integer", flag_integer, new Array(V_FLAG)),
new Array(0, V_BOOLEAN, "is_set", flag_is_set, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_and", flag_and, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_and_assign", flag_and_assign, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_assign", flag_assign, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_bang_unary", flag_not, new Array(V_FLAG)),
new Array(0, V_BOOLEAN, "op_equal", flag_equal, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_minus", flag_sub, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_minus_assign", flag_sub_assign, new Array(V_FLAG, V_FLAG)),
new Array(0, V_BOOLEAN, "op_not_equal", flag_not_equal, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_or", flag_or, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_or_assign", flag_or_assign, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_plus", flag_add, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_plus_assign", flag_add_assign, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_xor", flag_xor, new Array(V_FLAG, V_FLAG)),
new Array(0, V_FLAG, "op_xor_assign", flag_xor_assign, new Array(V_FLAG, V_FLAG)),
new Array(0, V_STRING, "string", flag_string, new Array(V_FLAG))
);
// LEVEL, METHOD_NAME, FUNCTION, ARGS
var integer_methods = new Array(
new Array(0, V_BOOLEAN, "boolean", integer_boolean, new Array(V_INTEGER)),
new Array(MA, V_STRING, "byte", integer_byte, new Array(V_INTEGER)),
new Array(0, V_FLAG, "flag", integer_flag, new Array(V_INTEGER)),
new Array(0, V_INTEGER, "op_assign", integer_assign, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_BOOLEAN, "op_equal", integer_equal, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_BOOLEAN, "op_gt", integer_gt, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_BOOLEAN, "op_gt_equal", integer_gt_equal, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_BOOLEAN, "op_lt", integer_lt, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_BOOLEAN, "op_lt_equal", integer_lt_equal, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_minus", integer_sub, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_minus_assign", integer_sub_assign, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_minus_unary", integer_negative, new Array(V_INTEGER)),
new Array(0, V_BOOLEAN, "op_not_equal", integer_not_equal, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_percent", integer_mod, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_percent_assign", integer_mod_assign, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_plus", integer_add, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_plus_assign", integer_add_assign, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_plus_unary", integer_positive, new Array(V_INTEGER)),
new Array(0, V_INTEGER, "op_slash", integer_div, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_slash_assign", integer_div_assign, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_star", integer_mult, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "op_star_assign", integer_mult_assign, new Array(V_INTEGER, V_INTEGER)),
new Array(0, V_ROOM, "room", integer_room, new Array(V_INTEGER)),
new Array(0, V_STRING, "string", integer_string, new Array(V_INTEGER))
);
// LEVEL, METHOD_NAME, FUNCTION, ARGS
var object_methods = new Array(
new Array(0, V_STRING, "action_description", object_action_description, new Array(V_OBJECT)),
new Array(RW, V_ILLEGAL, "activate", object_activate, new Array(V_OBJECT)),
new Array(QN, V_ILLEGAL, "add_content", object_add_content, new Array(V_OBJECT, V_OBJECT)),
new Array(0, V_BOOLEAN, "boolean", object_boolean, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "calclevel", object_calclevel, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "count", object_count, new Array(V_OBJECT)),
new Array(0, V_STRING, "data", object_data, new Array(V_OBJECT)),
new Array(RW, V_ILLEGAL, "deactivate", object_deactivate, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "delay", object_delay, new Array(V_OBJECT)),
new Array(0, V_FLAG, "effect", object_effect_flag, new Array(V_OBJECT)),
new Array(QL, V_ILLEGAL, "extract", object_extract, new Array(V_OBJECT)),
new Array(0, V_STRING, "field", object_field, new Array(V_OBJECT)),
new Array(0, V_OBJECT, "first_content", object_first_content, new Array(V_OBJECT)),
new Array(0, V_CHAR, "in_equipment", object_in_equipment, new Array(V_OBJECT)),
new Array(0, V_CHAR, "in_inventory", object_in_inventory, new Array(V_OBJECT)),
new Array(0, V_OBJECT, "in_object", object_in_object, new Array(V_OBJECT)),
new Array(0, V_ROOM, "in_room", object_in_room, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "integer", object_integer, new Array(V_OBJECT)),
new Array(0, V_STRING, "keywords", object_keywords, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "level", object_level, new Array(V_OBJECT)),
new Array(QN, V_OBJECT, "load_content", object_load_content, new Array(V_OBJECT, V_INTEGER)),
new Array(0, V_STRING, "name", object_name, new Array(V_OBJECT)),
new Array(0, V_OBJECT, "next_content", object_next_content, new Array(V_OBJECT)),
new Array(0, V_OBJECT, "next_inventory", object_next_content, new Array(V_OBJECT)),
new Array(0, V_OBJECT, "next_object", object_next_object, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "number", object_number, new Array(V_OBJECT, V_INTEGER)),
new Array(0, V_INTEGER, "on_position", object_on_position, new Array(V_OBJECT)),
new Array(0, V_OBJECT, "op_assign", object_assign, new Array(V_OBJECT, V_OBJECT)),
new Array(0, V_BOOLEAN, "op_equal", object_equal, new Array(V_OBJECT, V_OBJECT)),
new Array(0, V_BOOLEAN, "op_not_equal", object_not_equal, new Array(V_OBJECT, V_OBJECT)),
new Array(0, V_STRING, "room_description", object_room_description, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "timer", object_timer, new Array(V_OBJECT)),
new Array(QN, V_ILLEGAL, "to_equipment", object_to_equipment, new Array(V_OBJECT, V_CHAR, V_INTEGER)),
new Array(QN, V_ILLEGAL, "to_inventory", object_to_inventory, new Array(V_OBJECT, V_CHAR)),
new Array(QN, V_ILLEGAL, "to_object", object_to_object, new Array(V_OBJECT, V_OBJECT)),
new Array(QN, V_ILLEGAL, "to_room", object_to_room, new Array(V_OBJECT, V_ROOM)),
new Array(0, V_INTEGER, "type", object_type, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "uselevel", object_uselevel, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "value", object_value, new Array(V_OBJECT)),
new Array(0, V_FLAG, "wear", object_wear_flag, new Array(V_OBJECT)),
new Array(0, V_INTEGER, "weight", object_weight, new Array(V_OBJECT))
);
// LEVEL, METHOD_NAME, FUNCTION, ARGS
var room_methods = new Array(
new Array(QN, V_ILLEGAL, "add_content", room_add_content, new Array(V_ROOM, V_OBJECT)),
new Array(QN, V_ILLEGAL, "add_occupant", room_add_occupant, new Array(V_ROOM, V_CHAR)),
new Array(0, V_STRING, "data", room_data, new Array(V_ROOM)),
new Array(0, V_INTEGER, "delay", room_delay, new Array(V_ROOM)),
new Array(0, V_STRING, "description", room_description, new Array(V_ROOM)),
new Array(0, V_ROOM, "exit", room_exit, new Array(V_ROOM, V_INTEGER)),
new Array(0, V_FLAG, "exit_flag", room_exit_flag, new Array(V_ROOM, V_INTEGER)),
new Array(0, V_INTEGER, "exit_key", room_exit_key, new Array(V_ROOM, V_INTEGER)),
new Array(0, V_STRING, "field", room_field, new Array(V_ROOM)),
new Array(0, V_CHAR, "find_character", room_find_character, new Array(V_ROOM, V_STRING)),
new Array(0, V_OBJECT, "find_object", room_find_object, new Array(V_ROOM, V_STRING)),
new Array(0, V_OBJECT, "first_content", room_first_content, new Array(V_ROOM)),
new Array(0, V_CHAR, "first_occupant", room_first_occupant, new Array(V_ROOM)),
new Array(0, V_FLAG, "flag", room_flag, new Array(V_ROOM)),
new Array(0, V_INTEGER, "integer", room_integer, new Array(V_ROOM)),
new Array(QN, V_OBJECT, "load_content", room_load_content, new Array(V_ROOM, V_INTEGER)),
new Array(QN, V_CHAR, "load_occupant", room_load_occupant, new Array(V_ROOM, V_INTEGER)),
new Array(0, V_STRING, "name", room_name, new Array(V_ROOM)),
new Array(0, V_ROOM, "op_assign", room_assign, new Array(V_ROOM, V_ROOM)),
new Array(0, V_BOOLEAN, "op_equal", room_equal, new Array(V_ROOM, V_ROOM)),
new Array(0, V_BOOLEAN, "op_not_equal", room_not_equal, new Array(V_ROOM, V_ROOM)),
new Array(0, V_INTEGER, "sector", room_sector, new Array(V_ROOM)),
new Array(QN, V_ILLEGAL, "send", room_send, new Array(V_ROOM, V_STRING))
);
// LEVEL, METHOD_NAME, FUNCTION, ARGS
var string_methods = new Array(
new Array(0, V_BOOLEAN, "boolean", string_boolean, new Array(V_STRING)),
new Array(0, V_INTEGER, "byte", string_byte, new Array(V_STRING)),
new Array(0, V_STRING, "erase", string_erase, new Array(V_STRING, V_INTEGER, V_INTEGER)),
new Array(0, V_STRING, "erase_line", string_erase_line, new Array(V_STRING, V_INTEGER, V_INTEGER)),
new Array(0, V_STRING, "erase_word", string_erase_word, new Array(V_STRING, V_INTEGER, V_INTEGER)),
new Array(0, V_INTEGER, "find", string_find, new Array(V_STRING, V_STRING)),
new Array(0, V_INTEGER, "find_any", string_find_any, new Array(V_STRING, V_STRING)),
new Array(0, V_INTEGER, "find_line", string_find_line, new Array(V_STRING, V_STRING)),
new Array(0, V_INTEGER, "find_none", string_find_none, new Array(V_STRING, V_STRING)),
new Array(0, V_INTEGER, "find_word", string_find_word, new Array(V_STRING, V_STRING)),
new Array(0, V_FLAG, "flag", string_flag, new Array(V_STRING)),
new Array(0, V_STRING, "insert", string_insert, new Array(V_STRING, V_STRING, V_INTEGER)),
new Array(0, V_STRING, "insert_line", string_insert_line, new Array(V_STRING, V_STRING, V_INTEGER)),
new Array(0, V_STRING, "insert_word", string_insert_word, new Array(V_STRING, V_STRING, V_INTEGER)),
new Array(0, V_INTEGER, "integer", string_integer, new Array(V_STRING)),
new Array(0, V_STRING, "left", string_left, new Array(V_STRING, V_INTEGER)),
new Array(0, V_STRING, "left_line", string_left_line, new Array(V_STRING, V_INTEGER)),
new Array(0, V_STRING, "left_word", string_left_word, new Array(V_STRING, V_INTEGER)),
new Array(0, V_INTEGER, "length", string_length, new Array(V_STRING)),
new Array(0, V_INTEGER, "length_line", string_length_line, new Array(V_STRING)),
new Array(0, V_INTEGER, "length_word", string_length_word, new Array(V_STRING)),
new Array(0, V_STRING, "line", string_line, new Array(V_STRING, V_INTEGER)),
new Array(0, V_INTEGER, "line_end", string_line_end, new Array(V_STRING, V_INTEGER)),
new Array(0, V_INTEGER, "line_start", string_line_start, new Array(V_STRING, V_INTEGER)),
new Array(0, V_STRING, "monochrome", string_monochrome, new Array(V_STRING)),
new Array(0, V_STRING, "op_assign", string_assign, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_equal", string_equal, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_gt", string_gt, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_gt_equal", string_gt_equal, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_lt", string_lt, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_lt_equal", string_lt_equal, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_not_equal", string_not_equal, new Array(V_STRING, V_STRING)),
new Array(0, V_STRING, "op_plus", string_concat, new Array(V_STRING, V_STRING)),
new Array(0, V_STRING, "op_plus_assign", string_append, new Array(V_STRING, V_STRING)),
new Array(0, V_BOOLEAN, "op_xor_assign", string_compare_case, new Array(V_STRING, V_STRING)),
new Array(0, V_STRING, "random_line", string_random_line, new Array(V_STRING)),
new Array(0, V_STRING, "random_word", string_random_word, new Array(V_STRING)),
new Array(0, V_STRING, "replace", string_replace, new Array(V_STRING, V_STRING, V_INTEGER)),
new Array(0, V_STRING, "replace_line", string_replace_line, new Array(V_STRING, V_STRING, V_INTEGER)),
new Array(0, V_STRING, "replace_word", string_replace_word, new Array(V_STRING, V_STRING, V_INTEGER)),
new Array(0, V_STRING, "reverse", string_reverse, new Array(V_STRING)),
new Array(0, V_STRING, "right", string_right, new Array(V_STRING, V_INTEGER)),
new Array(0, V_STRING, "right_line", string_right_line, new Array(V_STRING, V_INTEGER)),
new Array(0, V_STRING, "right_word", string_right_word, new Array(V_STRING, V_INTEGER)),
new Array(0, V_STRING, "substr", string_substr, new Array(V_STRING, V_INTEGER, V_INTEGER)),
new Array(0, V_STRING, "substr_line", string_substr_line, new Array(V_STRING, V_INTEGER, V_INTEGER)),
new Array(0, V_STRING, "substr_word", string_substr_word, new Array(V_STRING, V_INTEGER, V_INTEGER)),
new Array(0, V_STRING, "word", string_word, new Array(V_STRING, V_INTEGER)),
new Array(0, V_INTEGER, "word_end", string_word_end, new Array(V_STRING, V_INTEGER)),
new Array(0, V_INTEGER, "word_start", string_word_start, new Array(V_STRING, V_INTEGER))
);
function boolean_and()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_and is an empty stub.");
}



function boolean_and_assign()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_and_assign is an empty stub.");
}



function boolean_assign()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_assign is an empty stub.");
}



function boolean_not()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_not is an empty stub.");
}



function boolean_equal()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_equal is an empty stub.");
}



function boolean_not_equal()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_not_equal is an empty stub.");
}



function boolean_or()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_or is an empty stub.");
}



function boolean_or_assign()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_or_assign is an empty stub.");
}



function boolean_xor()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_xor is an empty stub.");
}



function boolean_xor_assign()
{
  // Parameters: (p3, .. p1)  V_BOOLEAN+V_BOOLEAN+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("boolean_xor_assign is an empty stub.");
}



function builtin_showi()
{
  var v1 = VarStack.pop();
  sendOutputLn("showi = " + v1.value);
}


function builtin_show()
{
  var v1 = VarStack.pop();
  sendOutput(v1.value);
}


function builtin_max()
{
	// Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
	// Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
	
	if (v2.value > v1.value) {
		VarStack.push(v2);
	} else {
		VarStack.push(v1);
	}
}




function builtin_abs(){  jvm_halt("function is an empty stub.");}
function builtin_dice(){  jvm_halt("function is an empty stub.");}
function builtin_find_character(){  jvm_halt("function is an empty stub.");}
function builtin_find_object(){  jvm_halt("function is an empty stub.");}
function builtin_find_player(){  jvm_halt("function is an empty stub.");}
function builtin_first_character(){  jvm_halt("function is an empty stub.");}
function builtin_first_object(){  jvm_halt("function is an empty stub.");}
function builtin_first_player(){  jvm_halt("function is an empty stub.");}
function builtin_gametime(){  jvm_halt("function is an empty stub.");}
function builtin_getidbyname(){  jvm_halt("function is an empty stub.");}
function builtin_getnamebyid(){  jvm_halt("function is an empty stub.");}
function builtin_load(){  jvm_halt("function is an empty stub.");}
function builtin_min(){  jvm_halt("function is an empty stub.");}
function builtin_number(){  jvm_halt("function is an empty stub.");}
function builtin_random_room(){  jvm_halt("function is an empty stub.");}
function builtin_realtime(){  jvm_halt("function is an empty stub.");}
function builtin_save(){  jvm_halt("function is an empty stub.");}
function builtin_sqrt(){  jvm_halt("function is an empty stub.");}
function builtin_timestr(){  jvm_halt("function is an empty stub.");}
function builtin_unixtime(){  jvm_halt("function is an empty stub.");}
function builtin_write(){  jvm_halt("function is an empty stub.");}
function character_action()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("character_action is an empty stub.");
}



function character_activate()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_activate is an empty stub.");
}



function character_add_equipment()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_OBJECT+V_INTEGER+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_add_equipment is an empty stub.");
}



function character_add_inventory()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_add_inventory is an empty stub.");
}



function character_affect()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("character_affect is an empty stub.");
}



function character_alignment()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_alignment is an empty stub.");
}



function character_armor()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_armor is an empty stub.");
}



function character_bank()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_bank is an empty stub.");
}



function character_birthtime()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_birthtime is an empty stub.");
}



function character_boolean()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("character_boolean is an empty stub.");
}



function character_can_see()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("character_can_see is an empty stub.");
}



function character_carry_items()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_carry_items is an empty stub.");
}



function character_carry_weight()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_carry_weight is an empty stub.");
}



function character_charisma()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_charisma is an empty stub.");
}



function character_class()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_class is an empty stub.");
}



function character_command()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_command is an empty stub.");
}



function character_constitution()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_constitution is an empty stub.");
}



function character_count()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_count is an empty stub.");
}



function character_damroll()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_damroll is an empty stub.");
}



function character_data()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("character_data is an empty stub.");
}



function character_deactivate()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_deactivate is an empty stub.");
}



function character_delay()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_delay is an empty stub.");
}



function character_description()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("character_description is an empty stub.");
}



function character_dexterity()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_dexterity is an empty stub.");
}



function character_equipment()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_INTEGER+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_equipment is an empty stub.");
}



function character_experience()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_experience is an empty stub.");
}



function character_extract()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_extract is an empty stub.");
}



function character_field()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("character_field is an empty stub.");
}



function character_fight()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_fight is an empty stub.");
}



function character_fighting()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_fighting is an empty stub.");
}



function character_find_character()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_find_character is an empty stub.");
}



function character_find_character_all()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_find_character_all is an empty stub.");
}



function character_find_character_room()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_find_character_room is an empty stub.");
}



function character_find_object()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_find_object is an empty stub.");
}



function character_find_object_equipment()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_find_object_equipment is an empty stub.");
}



function character_find_object_inventory()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_find_object_inventory is an empty stub.");
}



function character_find_object_room()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_find_object_room is an empty stub.");
}



function character_first_inventory()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_first_inventory is an empty stub.");
}



function character_gold()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_gold is an empty stub.");
}



function character_hit()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_hit is an empty stub.");
}



function character_hitroll()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_hitroll is an empty stub.");
}



function character_hunt()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_hunt is an empty stub.");
}



function character_hunting()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_hunting is an empty stub.");
}



function character_idnum()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_idnum is an empty stub.");
}



function character_in_room()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_ROOM
  jvm_halt("character_in_room is an empty stub.");
}



function character_integer()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_integer is an empty stub.");
}



function character_intelligence()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_intelligence is an empty stub.");
}



function character_invis_level()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_invis_level is an empty stub.");
}



function character_is_mobile()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("character_is_mobile is an empty stub.");
}



function character_is_player()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("character_is_player is an empty stub.");
}



function character_keywords()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("character_keywords is an empty stub.");
}



function character_kill()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_kill is an empty stub.");
}



function character_level()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_level is an empty stub.");
}



function character_load_equipment()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_load_equipment is an empty stub.");
}



function character_load_inventory()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_INTEGER+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("character_load_inventory is an empty stub.");
}



function character_logintime()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_logintime is an empty stub.");
}



function character_look()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_look is an empty stub.");
}



function character_mana()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_mana is an empty stub.");
}



function character_master()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_master is an empty stub.");
}



function character_maxhit()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_maxhit is an empty stub.");
}



function character_maxmana()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_maxmana is an empty stub.");
}



function character_maxmove()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_maxmove is an empty stub.");
}



function character_move()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_move is an empty stub.");
}



function character_name()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("character_name is an empty stub.");
}



function character_next_character()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_next_character is an empty stub.");
}



function character_next_occupant()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_next_occupant is an empty stub.");
}



function character_next_player()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_next_player is an empty stub.");
}



function character_note()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_note is an empty stub.");
}



function character_assign()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("character_assign is an empty stub.");
}



function character_equal()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("character_equal is an empty stub.");
}



function character_not_equal()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("character_not_equal is an empty stub.");
}



function character_page()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_page is an empty stub.");
}



function character_playtime()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_playtime is an empty stub.");
}



function character_position()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_position is an empty stub.");
}



function character_preference()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("character_preference is an empty stub.");
}



function character_room_description()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("character_room_description is an empty stub.");
}



function character_send()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_STRING+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_send is an empty stub.");
}



function character_sex()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_sex is an empty stub.");
}



function character_stradd()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_stradd is an empty stub.");
}



function character_strength()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_strength is an empty stub.");
}



function character_switch()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_CHAR+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_switch is an empty stub.");
}



function character_to_room()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ROOM+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("character_to_room is an empty stub.");
}



function character_wisdom()
{
  // Parameters: (p3, .. p1)  V_CHARACTER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("character_wisdom is an empty stub.");
}



function flag_boolean()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("flag_boolean is an empty stub.");
}



function flag_integer()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("flag_integer is an empty stub.");
}



function flag_is_set()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("flag_is_set is an empty stub.");
}



function flag_and()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_and is an empty stub.");
}



function flag_and_assign()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_and_assign is an empty stub.");
}



function flag_assign()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_assign is an empty stub.");
}



function flag_not()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_not is an empty stub.");
}



function flag_equal()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("flag_equal is an empty stub.");
}



function flag_sub()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_sub is an empty stub.");
}



function flag_sub_assign()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_sub_assign is an empty stub.");
}



function flag_not_equal()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("flag_not_equal is an empty stub.");
}



function flag_or()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_or is an empty stub.");
}



function flag_or_assign()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_or_assign is an empty stub.");
}



function flag_add()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_add is an empty stub.");
}



function flag_add_assign()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_add_assign is an empty stub.");
}



function flag_xor()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_xor is an empty stub.");
}



function flag_xor_assign()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_FLAG+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("flag_xor_assign is an empty stub.");
}



function flag_string()
{
  // Parameters: (p3, .. p1)  V_FLAG+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("flag_string is an empty stub.");
}



function integer_boolean()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  
  var v1 = VarStack.pop();
  var r = new C_BOOLEAN((!(!v1.value)))
  VarStack.push(r);
}



function integer_byte()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("integer_byte is an empty stub.");
}



function integer_flag()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("integer_flag is an empty stub.");
}



function integer_assign()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value = v1.value;
  VarStack.push(v2);
}



function integer_equal()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value == v1.value)
  VarStack.push(r);
}



function integer_gt()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value > v1.value)
  VarStack.push(r);
}



function integer_gt_equal()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value >= v1.value)
  VarStack.push(r);
}



function integer_lt()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value < v1.value)
  VarStack.push(r);
}



function integer_lt_equal()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value <= v1.value)
  VarStack.push(r);
}



function integer_sub()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_INTEGER(v2.value - v1.value)
  VarStack.push(r);
}




function integer_sub_assign()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value -= v1.value
  VarStack.push(v2);
}



function integer_negative()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  v1.value *= -1;
  VarStack.push(v1);
}



function integer_not_equal()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value != v1.value)
  VarStack.push(r);
}



function integer_mod()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_INTEGER(v2.value % v1.value)
  VarStack.push(r);
}



function integer_mod_assign()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value %= v1.value
  VarStack.push(v2);
}



function integer_add()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_INTEGER(v2.value + v1.value)
  VarStack.push(r);
}



function integer_add_assign()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value += v1.value
  VarStack.push(v2);
}



function integer_positive()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  v1.value *= 1;
  VarStack.push(v1);
}



function integer_div()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_INTEGER(v2.value / v1.value)
  VarStack.push(r);
}




function integer_div_assign()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value /= v1.value
  VarStack.push(v2);
}



function integer_mult()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_INTEGER(v2.value * v1.value)
  VarStack.push(r);
}



function integer_mult_assign()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value *= v1.value
  VarStack.push(v2);
}



function integer_room()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_ROOM
  jvm_halt("integer_room is an empty stub.");
}



function integer_string()
{
  // Parameters: (p3, .. p1)  V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  var v1 = VarStack.pop();
  
  var r = new C_STRING("" + v1.value)
  VarStack.push(r);
}
function object_action_description()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("object_action_description is an empty stub.");
}



function object_activate()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_activate is an empty stub.");
}



function object_add_content()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_add_content is an empty stub.");
}



function object_boolean()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("object_boolean is an empty stub.");
}



function object_calclevel()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_calclevel is an empty stub.");
}



function object_count()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_count is an empty stub.");
}



function object_data()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("object_data is an empty stub.");
}



function object_deactivate()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_deactivate is an empty stub.");
}



function object_delay()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_delay is an empty stub.");
}



function object_effect_flag()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("object_effect_flag is an empty stub.");
}



function object_extract()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_extract is an empty stub.");
}



function object_field()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("object_field is an empty stub.");
}



function object_first_content()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("object_first_content is an empty stub.");
}



function object_in_equipment()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("object_in_equipment is an empty stub.");
}



function object_in_inventory()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("object_in_inventory is an empty stub.");
}



function object_in_object()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("object_in_object is an empty stub.");
}



function object_in_room()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_ROOM
  jvm_halt("object_in_room is an empty stub.");
}



function object_integer()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_integer is an empty stub.");
}



function object_keywords()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("object_keywords is an empty stub.");
}



function object_level()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_level is an empty stub.");
}



function object_load_content()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_INTEGER+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("object_load_content is an empty stub.");
}



function object_name()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("object_name is an empty stub.");
}


function object_next_content()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("object_next_content is an empty stub.");
}



function object_next_object()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("object_next_object is an empty stub.");
}



function object_number()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_number is an empty stub.");
}



function object_on_position()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_on_position is an empty stub.");
}



function object_assign()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_OBJECT+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("object_assign is an empty stub.");
}



function object_equal()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_OBJECT+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("object_equal is an empty stub.");
}



function object_not_equal()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_OBJECT+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("object_not_equal is an empty stub.");
}



function object_room_description()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("object_room_description is an empty stub.");
}



function object_timer()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_timer is an empty stub.");
}



function object_to_equipment()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_CHAR+V_INTEGER+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_to_equipment is an empty stub.");
}



function object_to_inventory()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_CHAR+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_to_inventory is an empty stub.");
}



function object_to_object()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_to_object is an empty stub.");
}



function object_to_room()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ROOM+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("object_to_room is an empty stub.");
}



function object_type()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_type is an empty stub.");
}



function object_uselevel()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_uselevel is an empty stub.");
}



function object_value()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_value is an empty stub.");
}



function object_wear_flag()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("object_wear_flag is an empty stub.");
}



function object_weight()
{
  // Parameters: (p3, .. p1)  V_OBJECT+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("object_weight is an empty stub.");
}



function room_add_content()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_OBJECT+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("room_add_content is an empty stub.");
}



function room_add_occupant()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_CHAR+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("room_add_occupant is an empty stub.");
}



function room_data()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("room_data is an empty stub.");
}



function room_delay()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("room_delay is an empty stub.");
}



function room_description()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("room_description is an empty stub.");
}



function room_exit()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_INTEGER+V_ILLEGAL
  // Returns: V_ROOM
  jvm_halt("room_exit is an empty stub.");
}



function room_exit_flag()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_INTEGER+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("room_exit_flag is an empty stub.");
}



function room_exit_key()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("room_exit_key is an empty stub.");
}



function room_field()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("room_field is an empty stub.");
}



function room_find_character()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_STRING+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("room_find_character is an empty stub.");
}



function room_find_object()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_STRING+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("room_find_object is an empty stub.");
}



function room_first_content()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("room_first_content is an empty stub.");
}



function room_first_occupant()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("room_first_occupant is an empty stub.");
}



function room_flag()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("room_flag is an empty stub.");
}



function room_integer()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("room_integer is an empty stub.");
}



function room_load_content()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_INTEGER+V_ILLEGAL
  // Returns: V_OBJECT
  jvm_halt("room_load_content is an empty stub.");
}



function room_load_occupant()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_INTEGER+V_ILLEGAL
  // Returns: V_CHAR
  jvm_halt("room_load_occupant is an empty stub.");
}



function room_name()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("room_name is an empty stub.");
}



function room_assign()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ROOM+V_ILLEGAL
  // Returns: V_ROOM
  jvm_halt("room_assign is an empty stub.");
}



function room_equal()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ROOM+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("room_equal is an empty stub.");
}



function room_not_equal()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ROOM+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("room_not_equal is an empty stub.");
}



function room_sector()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("room_sector is an empty stub.");
}



function room_send()
{
  // Parameters: (p3, .. p1)  V_ROOM+V_STRING+V_ILLEGAL
  // Returns: V_ILLEGAL
  jvm_halt("room_send is an empty stub.");
}



function string_boolean()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  jvm_halt("string_boolean is an empty stub.");
}



function string_byte()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_byte is an empty stub.");
}



function string_erase()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_erase is an empty stub.");
}



function string_erase_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_erase_line is an empty stub.");
}



function string_erase_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_erase_word is an empty stub.");
}



function string_find()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_find is an empty stub.");
}



function string_find_any()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_find_any is an empty stub.");
}



function string_find_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_find_line is an empty stub.");
}



function string_find_none()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_find_none is an empty stub.");
}



function string_find_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_find_word is an empty stub.");
}



function string_flag()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_FLAG
  jvm_halt("string_flag is an empty stub.");
}



function string_insert()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_insert is an empty stub.");
}



function string_insert_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_insert_line is an empty stub.");
}



function string_insert_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_insert_word is an empty stub.");
}



function string_integer()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_integer is an empty stub.");
}



function string_left()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_left is an empty stub.");
}



function string_left_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_left_line is an empty stub.");
}



function string_left_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_left_word is an empty stub.");
}



function string_length()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_length is an empty stub.");
}



function string_length_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_length_line is an empty stub.");
}



function string_length_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_length_word is an empty stub.");
}



function string_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_line is an empty stub.");
}



function string_line_end()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_line_end is an empty stub.");
}



function string_line_start()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_line_start is an empty stub.");
}



function string_monochrome()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_monochrome is an empty stub.");
}



function string_assign()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_STRING
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value = v1.value;
  VarStack.push(v2);
}



function string_equal()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value.toLowerCase() == v1.value.toLowerCase())
  VarStack.push(r);
}



function string_gt()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value.toLowerCase() > v1.value.toLowerCase())
  VarStack.push(r);
}



function string_gt_equal()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value.toLowerCase() >= v1.value.toLowerCase())
  VarStack.push(r);
}



function string_lt()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value.toLowerCase() < v1.value.toLowerCase())
  VarStack.push(r);
}



function string_lt_equal()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value.toLowerCase() <= v1.value.toLowerCase())
  VarStack.push(r);
}



function string_not_equal()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value.toLowerCase() != v1.value.toLowerCase())
  VarStack.push(r);
}



function string_concat()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_STRING
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_STRING(v2.value + v1.value)
  VarStack.push(r);
}



function string_append()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_STRING
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  v2.value += v1.value
  VarStack.push(v2);
}



function string_compare_case()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_ILLEGAL
  // Returns: V_BOOLEAN
  var v1 = VarStack.pop();
  var v2 = VarStack.pop();
  
  var r = new C_BOOLEAN(v2.value == v1.value)
  VarStack.push(r);
}



function string_random_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_random_line is an empty stub.");
}



function string_random_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_random_word is an empty stub.");
}



function string_replace()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_replace is an empty stub.");
}



function string_replace_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_replace_line is an empty stub.");
}



function string_replace_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_replace_word is an empty stub.");
}



function string_reverse()
{
  // Parameters: (p3, .. p1)  V_STRING+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_reverse is an empty stub.");
}



function string_right()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_right is an empty stub.");
}



function string_right_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_right_line is an empty stub.");
}



function string_right_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_right_word is an empty stub.");
}



function string_substr()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_substr is an empty stub.");
}



function string_substr_line()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_substr_line is an empty stub.");
}



function string_substr_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_substr_word is an empty stub.");
}



function string_word()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_STRING
  jvm_halt("string_word is an empty stub.");
}



function string_word_end()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_word_end is an empty stub.");
}



function string_word_start()
{
  // Parameters: (p3, .. p1)  V_STRING+V_INTEGER+V_ILLEGAL
  // Returns: V_INTEGER
  jvm_halt("string_word_start is an empty stub.");
}



