const data_guns = {
  common: [
    { name: "Slingshot", img: "./assets/imgs/Slingshot.png" }
  ],

  uncommon: [
    { name: "Flintlock", img: "./assets/imgs/Flintlock.png" },
    { name: "Musket", img: "./assets/imgs/Musket.png" }
  ],

  rare: [
    { name: "Acidum Rifle", img: "./assets/imgs/Acidum_Rifle.png" },
    { name: "Bizarre Revolver", img: "./assets/imgs/Bizarre_Revolver.png" },
    { name: "Cannon", img: "./assets/imgs/Cannon.png" },
    { name: "Dual Flintlock", img: "./assets/imgs/Dual_Flintlock.png" },
    { name: "Magma Blaster", img: "./assets/imgs/Magma_Blaster.png" },
    { name: "Refined Slingshot", img: "./assets/imgs/Refined_Slingshot.png" }
  ],

  legendary: [
    { name: "Bazooka", img: "./assets/imgs/Bazooka.png" },
    { name: "Dragonstorm", img: "./assets/imgs/Dragonstorm.png" },
    { name: "Kabucha", img: "./assets/imgs/Kabucha.png" },
    { name: "Venom Bow", img: "./assets/imgs/Venom_Bow.png" }
  ],

  mythical: [
    { name: "Skull Guitar", img: "./assets/imgs/Skull_Guitar.png" }
  ],

  info: {
    text_label: "Armas coletadas:",
    maestria: true,
  }
};

const data_items = {
  common: [
    { name: "Headband (Blue)", img: "./assets/imgs/Headband_(Blue).png" },
    { name: "Headband (Green)", img: "./assets/imgs/Headband_(Green).png" },
    { name: "Headband (Orange)", img: "./assets/imgs/Headband_(Orange).png" },
    { name: "Headband (Purple)", img: "./assets/imgs/Headband_(Purple).png" },
    { name: "Headband (Red)", img: "./assets/imgs/Headband_(Red).png" },
    { name: "Headband (White)", img: "./assets/imgs/Headband_(White).png" },
    { name: "Headband (Yellow)", img: "./assets/imgs/Headband_(Yellow).png" }
  ],

  uncommon: [
    { name: "Dojo Belt (Blue)", img: "./assets/imgs/Dojo_Belt_(Blue).png" },
    { name: "Dojo Belt (Green)", img: "./assets/imgs/Dojo_Belt_(Green).png" },
    { name: "Dojo Belt (Orange)", img: "./assets/imgs/Dojo_Belt_(Orange).png" },
    { name: "Dojo Belt (Purple)", img: "./assets/imgs/Dojo_Belt_(Purple).png" },
    { name: "Dojo Belt (Red)", img: "./assets/imgs/Dojo_Belt_(Red).png" },
    { name: "Dojo Belt (White)", img: "./assets/imgs/Dojo_Belt_(White).png" },
    { name: "Dojo Belt (Yellow)", img: "./assets/imgs/Dojo_Belt_(Yellow).png" },
    { name: "Headband (Black)", img: "./assets/imgs/Headband_(Black).png" },
    { name: "Pink Coat", img: "./assets/imgs/Pink_Coat.png" },
  ],

  rare: [
    { name: "Bandanna (Black)", img: "./assets/imgs/Bandanna_(Black).png" },
    { name: "Bandanna (Green)", img: "./assets/imgs/Bandanna_(Green).png" },
    { name: "Bandanna (Red)", img: "./assets/imgs/Bandanna_(Red).png" },
    { name: "Bear Ears", img: "./assets/imgs/Bear_Ears.png" },
    { name: "Black Cape", img: "./assets/imgs/Black_Cape.png" },
    { name: "Black Spikey Coat", img: "./assets/imgs/Black_Spikey_Coat.png" },
    { name: "Blue Spikey Coat", img: "./assets/imgs/Blue_Spikey_Coat.png" },
    { name: "Red Spikey Coat", img: "./assets/imgs/Red_Spikey_Coat.png" },
    { name: "Choppa", img: "./assets/imgs/Choppa.png" },
    { name: "Coat (Marine)", img: "./assets/imgs/Coat_(Marine).png" },
    { name: "Cool Shades", img: "./assets/imgs/Cool_Shades.png" },
    { name: "Elf Hat", img: "./assets/imgs/Elf_Hat.png" },
    { name: "Ghoul Mask", img: "./assets/imgs/Ghoul_Mask.png" },
    { name: "Golden Sunhat", img: "./assets/imgs/Golden_Sunhat.png" },
    { name: "Hunter Cape (Black)", img: "./assets/imgs/Hunter_Cape_(Black).png" },
    { name: "Hunter Cape (Green)", img: "./assets/imgs/Hunter_Cape_(Green).png" },
    { name: "Hunter Cape (Red)", img: "./assets/imgs/Hunter_Cape_(Red).png" },
    { name: "Jaw Shield", img: "./assets/imgs/Jaw_Shield.png" },
    { name: "Lei", img: "./assets/imgs/Lei.png" },
    { name: "Marine Cap", img: "./assets/imgs/Marine_Cap.png" },
    { name: "Pilot Helmet", img: "./assets/imgs/Pilot_Helmet.png" },
    { name: "Pretty Helmet", img: "./assets/imgs/Pretty_Helmet.png" },
    { name: "Santa Hat", img: "./assets/imgs/Santa_Hat.png" },
    { name: "Shark Tooth Necklace", img: "./assets/imgs/Shark_Tooth_Necklace.png" },
    { name: "Swordsman Hat", img: "./assets/imgs/Swordsman_Hat.png" },
    { name: "T-Rex Skull", img: "./assets/imgs/T-Rex_Skull.png" },
    { name: "Tomoe Ring", img: "./assets/imgs/Tomoe_Ring.png" },
    { name: "Top Hat", img: "./assets/imgs/Top_Hat.png" },
    { name: "Usoap’s Hat", img: "./assets/imgs/Usoap's_Hat.png" },
    { name: "Warrior Helmet", img: "./assets/imgs/Warrior_Helmet.png" },
    { name: "Dojo Belt (Black)", img: "./assets/imgs/Dojo_Belt_(Black).png" },
  ],

  legendary: [
    { name: "Holy Crown", img: "./assets/imgs/Holy_Crown.png" },
    { name: "D.S. Coat", img: "./assets/imgs/D.S._Coat.png", invalid: true },
    { name: "Cupid’s Coat", img: "./assets/imgs/Cupid's_Coat.png" },
    { name: "Feathered Visage", img: "./assets/imgs/Feathered_Visage.png" },
    { name: "Heart Shades", img: "./assets/imgs/Heart_Shades.png" },
    { name: "Kitsune Mask", img: "./assets/imgs/Kitsune_Mask.png" },
    { name: "Kitsune Ribbon", img: "./assets/imgs/Kitsune_Ribbon.png" },
    { name: "Musketeer Hat", img: "./assets/imgs/Musketeer_Hat.png" },
    { name: "Pale Scarf", img: "./assets/imgs/Pale_Scarf.png" },
    { name: "Swan Glasses", img: "./assets/imgs/Swan_Glasses.png" },
    { name: "Terror Jaw", img: "./assets/imgs/Terror_Jaw.png" },
    { name: "Valkyrie Helm", img: "./assets/imgs/Valkyrie_Helm.png" },
    { name: "Wyvern Helmet", img: "./assets/imgs/Wyvern_Helmet.png", invalid: true },
    { name: "Zebra Cap", img: "./assets/imgs/Zebra_Cap.png" },
    { name: "Dino Hood", img: "./assets/imgs/Dino_Hood.png" },
  ],

  mythical: [
    { name: "Party Hat", img: "./assets/imgs/Party_Hat.png" },
    { name: "Divine Cloak", img: "./assets/imgs/Divine_Cloak.png" },
    { name: "Sanguine Cloak", img: "./assets/imgs/Sanguine_Cloak.png" },
    { name: "Leviathan Shield", img: "./assets/imgs/Leviathan_Shield.png" },
    { name: "Uzoth’s Cloak", img: "./assets/imgs/Uzoth's_Cloak.png" },
    { name: "Oni Helmet", img: "./assets/imgs/Oni_Helmet.png" },
    { name: "Leviathan Crown", img: "./assets/imgs/Leviathan_Crown.png" },
    { name: "Dragon Mantle", img: "./assets/imgs/Dragon_Mantle.png" },
    { name: "Holiday Cloak", img: "./assets/imgs/Holiday_Cloak.png" },
    { name: "50B Party Hat", img: "./assets/imgs/50b_Party_Hat.png" },
    { name: "Dark Coat", img: "./assets/imgs/Dark_Coat.png" },
    { name: "Celestial Helmet", img: "./assets/imgs/Celestial_Helmet.png" },
    { name: "Coven Witch Hat", img: "./assets/imgs/Coven_Witch_Hat.webp" },
    { name: "Pumpkin Mask", img: "./assets/imgs/Pumpkin_Mask.webp" },
  ],

  info: {
    text_label: "Itens coletados:",
    maestria: false,
  }
};

const data_swords = {
  common: [
    { name: "Cutlass", img: "./assets/imgs/Cutlass.png" },
    { name: "Dual Katana", img: "./assets/imgs/Dual_Katana.png" },
    { name: "Katana", img: "./assets/imgs/Katana.png" }
  ],

  uncommon: [
    { name: "Fishing Trophy", img: "./assets/imgs/Fishing_Trophy.png" },
    { name: "Iron Mace", img: "./assets/imgs/Iron_Mace.png" },
    { name: "Shark Saw", img: "./assets/imgs/Shark_Saw.png" },
    { name: "Triple Katana", img: "./assets/imgs/Triple_Katana.png" },
    { name: "Twin Hooks", img: "./assets/imgs/Twin_Hooks.png" }
  ],

  rare: [
    { name: "Dragon Trident", img: "./assets/imgs/Dragon_Trident.png" },
    { name: "Dual-Headed Blade", img: "./assets/imgs/Dual-Headed_Blade.png" },
    { name: "Flail", img: "./assets/imgs/Flail.png" },
    { name: "Gravity Blade", img: "./assets/imgs/Gravity_Blade.png" },
    { name: "Longsword", img: "./assets/imgs/Longsword.png" },
    { name: "Pipe", img: "./assets/imgs/Pipe.png" },
    { name: "Soul Cane", img: "./assets/imgs/Soul_Cane.png" },
    { name: "Trident", img: "./assets/imgs/Trident.png" },
    { name: "Wardens Sword", img: "./assets/imgs/Wardens_Sword.png" }
  ],

  legendary: [
    { name: "Bisento", img: "./assets/imgs/Bisento.png" },
    { name: "Buddy Sword", img: "./assets/imgs/Buddy_Sword.png" },
    { name: "Canvander", img: "./assets/imgs/Canvander.png" },
    { name: "Dark Dagger", img: "./assets/imgs/Dark_Dagger.png" },
    { name: "Dragonheart", img: "./assets/imgs/Dragonheart.png" },
    { name: "Fox Lamp", img: "./assets/imgs/Fox_Lamp.png" },
    { name: "Koko", img: "./assets/imgs/Koko.png" },
    { name: "Midnight Blade", img: "./assets/imgs/Midnight_Blade.png" },
    { name: "Oroshi", img: "./assets/imgs/Oroshi.png" },
    { name: "Pole (1st Form)", img: "./assets/imgs/Pole_(1st_Form).png" },
    { name: "Pole (2nd Form)", img: "./assets/imgs/Pole_(2nd_Form).png" },
    { name: "Rengoku", img: "./assets/imgs/Rengoku.png" },
    { name: "Saber", img: "./assets/imgs/Saber.png" },
    { name: "Saishi", img: "./assets/imgs/Saishi.png" },
    { name: "Shark Anchor", img: "./assets/imgs/Shark_Anchor.png" },
    { name: "Shizu", img: "./assets/imgs/Shizu.png" },
    { name: "Spikey Trident", img: "./assets/imgs/Spikey_Trident.png" },
    { name: "Tushita", img: "./assets/imgs/Tushita.png" },
    { name: "Yama", img: "./assets/imgs/Yama.png" }
  ],

  mythical: [
    { name: "Cursed Dual Katana", img: "./assets/imgs/Cursed_Dual_Katana.png" },
    { name: "Dark Blade", img: "./assets/imgs/Dark_Blade.png" },
    { name: "Hallow Scythe", img: "./assets/imgs/Hallow_Scythe.png" },
    { name: "Triple Dark Blade", img: "./assets/imgs/Triple_Dark_Blade.png" },
    { name: "True Triple Katana", img: "./assets/imgs/True_Triple_Katana.png" }
  ],

  info: {
    text_label: "Espadas coletadas:",
    maestria: true,
  }
};

const data_fruits = {
  common: [
    { name: "Rocket", img: "./assets/imgs/Rocket_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Spin", img: "./assets/imgs/Spin_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Blade", img: "./assets/imgs/Blade_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Spring", img: "./assets/imgs/Spring_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Bomb", img: "./assets/imgs/Bomb_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Smoke", img: "./assets/imgs/Smoke_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Spike", img: "./assets/imgs/Spike_Fruit.png", mestria_level: 0, permanent: false }
  ],

  uncommon: [
    { name: "Flame", img: "./assets/imgs/Flame_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Ice", img: "./assets/imgs/Ice_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Sand", img: "./assets/imgs/Sand_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Dark", img: "./assets/imgs/Dark_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Eagle", img: "./assets/imgs/Eagle_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Diamond", img: "./assets/imgs/Diamond_Fruit.png", mestria_level: 0, permanent: false }
  ],

  rare: [
    { name: "Light", img: "./assets/imgs/Light_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Rubber", img: "./assets/imgs/Rubber_Fruit.png", mestria_level: 0, permanent: false, permanent: false },
    { name: "Ghost", img: "./assets/imgs/Ghost_Fruit.png", mestria_level: 0, permanent: false, permanent: false },
    { name: "Magma", img: "./assets/imgs/Magma_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false }
  ],

  legendary: [
    { name: "Quake", img: "./assets/imgs/Quake_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Buddha", img: "./assets/imgs/Buddha_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Love", img: "./assets/imgs/Love_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Creation", img: "./assets/imgs/Creation_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Spider", img: "./assets/imgs/Spider_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Sound", img: "./assets/imgs/Sound_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Phoenix", img: "./assets/imgs/Phoenix_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Portal", img: "./assets/imgs/Portal_Fruit.png", mestria_level: 0, permanent: false },

    { name: "Lightning", img: "./assets/imgs/Lightning_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Pain", img: "./assets/imgs/Pain_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Blizzard", img: "./assets/imgs/Blizzard_Fruit.png", mestria_level: 0, permanent: false }
  ],

  mythical: [
    { name: "Gravity", img: "./assets/imgs/Gravity_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Mammoth", img: "./assets/imgs/Mammoth_Fruit.png", mestria_level: 0, permanent: false },
    { name: "T-Rex", img: "./assets/imgs/T-Rex_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Dough", img: "./assets/imgs/Dough_Fruit.png", second_awakening: true, she_was_awakened: false, mestria_level: 0, permanent: false },
    { name: "Shadow", img: "./assets/imgs/Shadow_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Venom", img: "./assets/imgs/Venom_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Control", img: "./assets/imgs/Control_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Gas", img: "./assets/imgs/Gas_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Spirit", img: "./assets/imgs/Spirit_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Leopard", img: "./assets/imgs/Leopard_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Yeti", img: "./assets/imgs/Yeti_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Kitsune", img: "./assets/imgs/Kitsune_Fruit.png", mestria_level: 0, permanent: false },
    { name: "Dragon", img: "./assets/imgs/Dragon_Fruit.png", mestria_level: 0, permanent: false }
  ],

  info: {
    text_label: "Frutas coletadas:",
    maestria: true,
    permanent: true,
  }
};

const data_titles = {
    "#001": {
        "title": "The Unleashed",
        "obtainment": "Desbloquear Humano V2."
    },
    "#002": {
        "title": "Unmatched Speed",
        "obtainment": "Desbloquear Coelho V2 (Rabbit V2)."
    },
    "#003": {
        "title": "Sea Monster",
        "obtainment": "Desbloquear Tubarão V2 (Shark V2)."
    },
    "#004": {
        "title": "Sacred Warrior",
        "obtainment": "Desbloquear Anjo V2 (Angel V2)."
    },
    "#005": {
        "title": "The Ghoul",
        "obtainment": "Desbloquear Ghoul V2."
    },
    "#006": {
        "title": "The Cyborg",
        "obtainment": "Desbloquear Ciborgue V2 (Cyborg V2)."
    },
    "#007": {
        "title": "Elder Wyrm",
        "obtainment": "Desbloquear Draco V2."
    },
    "#008": {
        "title": "Full Power",
        "obtainment": "Desbloquear Humano V3."
    },
    "#009": {
        "title": "Godspeed",
        "obtainment": "Desbloquear Coelho V3 (Rabbit V3)."
    },
    "#010": {
        "title": "Warrior of the Sea",
        "obtainment": "Desbloquear Tubarão V3 (Shark V3)."
    },
    "#011": {
        "title": "Perfect Being",
        "obtainment": "Desbloquear Anjo V3 (Angel V3)."
    },
    "#012": {
        "title": "Hell Hound",
        "obtainment": "Desbloquear Ghoul V3."
    },
    "#013": {
        "title": "War Machine",
        "obtainment": "Desbloquear Ciborgue V3 (Cyborg V3)."
    },
    "#014": {
        "title": "Berserker",
        "obtainment": "Desbloquear Humano V4."
    },
    "#015": {
        "title": "Ancient Flame",
        "obtainment": "Desbloquear Draco V3."
    },
    "#016": {
        "title": "Thunderbolt",
        "obtainment": "Desbloquear Coelho V4 (Rabbit V4)."
    },
    "#017": {
        "title": "Leviathan",
        "obtainment": "Desbloquear Tubarão V4 (Shark V4)."
    },
    "#018": {
        "title": "His Majesty",
        "obtainment": "Desbloquear Anjo V4 (Angel V4)."
    },
    "#019": {
        "title": "Nightwalker",
        "obtainment": "Desbloquear Ghoul V4."
    },
    "#020": {
        "title": "Genesis",
        "obtainment": "Desbloquear Ciborgue V4 (Cyborg V4)."
    },
    "#021": {
        "title": "Primordial Guardian",
        "obtainment": "Desbloquear Draco V4."
    },
    "#022": {
        "title": "Pirate Hunter",
        "obtainment": "Alcançar 5M+ de recompensa (bounty) ou honra (honor)."
    },
    "#023": {
        "title": "Bounty Hunter",
        "obtainment": "Alcançar 5M+ de recompensa (bounty) ou honra (honor)."
    },
    "#024": {
        "title": "Warlord of the Sea",
        "obtainment": "Alcançar 10M+ de recompensa (bounty)."
    },
    "#025": {
        "title": "Emperor of the Sea",
        "obtainment": "Alcançar 20M+ de recompensa (bounty)."
    },
    "#026": {
        "title": "Empress of the Sea",
        "obtainment": "Alcançar 20M+ de recompensa (bounty)."
    },
    "#027": {
        "title": "Admiral",
        "obtainment": "Alcançar 10M+ de honra (honor)."
    },
    "#028": {
        "title": "Fleet Admiral",
        "obtainment": "Alcançar 20M+ de honra (honor)."
    },
    "#029": {
        "title": "Enlightened One",
        "obtainment": "Desbloquear qualquer despertar (awakening)."
    },
    "#030": {
        "title": "Awakened One",
        "obtainment": "Desbloquear qualquer despertar (awakening)."
    },
    "#031": {
        "title": "Over Heaven",
        "obtainment": "Desbloquear qualquer despertar (awakening)."
    },
    "#032": {
        "title": "Over Hell",
        "obtainment": "Desbloquear qualquer despertar (awakening)."
    },
    "#033": {
        "title": "Flame Fist",
        "obtainment": "Desbloquear o despertar da Chama (Flame)."
    },
    "#034": {
        "title": "The Ice Queen",
        "obtainment": "Desbloquear o despertar do Gelo (Ice)."
    },
    "#035": {
        "title": "The Ice King",
        "obtainment": "Desbloquear o despertar do Gelo (Ice)."
    },
    "#036": {
        "title": "The Strongest One",
        "obtainment": "Desbloquear o Despertar do Terremoto (Quake)."
    },
    "#037": {
        "title": "The First Light",
        "obtainment": "Desbloquear o despertar da Luz (Light)."
    },
    "#038": {
        "title": "Dark Lord",
        "obtainment": "Desbloquear o despertar da Escuridão (Dark)."
    },
    "#039": {
        "title": "The Spider",
        "obtainment": "Desbloquear o despertar da Aranha (Spider)."
    },
    "#040": {
        "title": "Thunder God",
        "obtainment": "Desbloquear o despertar do Trovão (Rumble). (Não mais obtível, pois as raids de Rumble foram removidas na Atualização 27.)"
    },
    "#041": {
        "title": "The Red Dog",
        "obtainment": "Desbloquear o despertar do Magma."
    },
    "#042": {
        "title": "Colossal God",
        "obtainment": "Desbloquear o despertar do Buda (Buddha)."
    },
    "#043": {
        "title": "Desert Prince",
        "obtainment": "Desbloquear o despertar da Areia (Sand)."
    },
    "#044": {
        "title": "The Phoenix",
        "obtainment": "Desbloquear o despertar da Fênix (Phoenix)."
    },
    "#045": {
        "title": "Bread Chaser",
        "obtainment": "Desbloquear o despertar da Massa (Dough)."
    },
    "#046": {
        "title": "Innovator",
        "obtainment": "Vote no Roblox Innovation Awards 2024 Dia 5 (Melhor Ação/RPG) ou Dia 12 (Melhor Luta)."
    },
    "#047": {
        "title": "Pygglor, Devourer of Worlds",
        "obtainment": "Derrotar Undercovertommy."
    },
    "#048": {
        "title": "Wen Lord Toad",
        "obtainment": "Derrotar Wenlocktoad."
    },
    "#049": {
        "title": "Big News",
        "obtainment": "Resgatar o código BIGNEWS."
    },
    "#050": {
        "title": "Youtuber",
        "obtainment": "Dado ocasionalmente por administradores a criadores de conteúdo que possuem o cargo de YouTuber no servidor Discord de Blox Fruits."
    },
    "#051": {
        "title": "Ace Squad",
        "obtainment": "Derrotar o criador de conteúdo TheGreatAce."
    },
    "#052": {
        "title": "Officially a Noob",
        "obtainment": "Derrotar o criador de conteúdo OfficialNoobie."
    },
    "#053": {
        "title": "Water Gang",
        "obtainment": "Derrotar o criador de conteúdo Daigrock."
    },
    "#054": {
        "title": "Don Axiore Familia",
        "obtainment": "Derrotar o criador de conteúdo Axiore."
    },
    "#055": {
        "title": "Mafia Gang",
        "obtainment": "Derrotar o criador de conteúdo Bluxxy Gaming."
    },
    "#056": {
        "title": "Heorua Family",
        "obtainment": "Derrotar o criador de conteúdo Heorua."
    },
    "#057": {
        "title": "Magic Slayer",
        "obtainment": "Derrotar o criador de conteúdo Magicbus."
    },
    "#058": {
        "title": "Kitt Katt",
        "obtainment": "Derrotar o criador de conteúdo Kitt Gaming."
    },
    "#059": {
        "title": "Team JC",
        "obtainment": "Derrotar o criador de conteúdo JCWK."
    },
    "#060": {
        "title": "El Combo God",
        "obtainment": "Derrotar o criador de conteúdo fer999."
    },
    "#061": {
        "title": "Nakama Forever",
        "obtainment": "Derrotar o Youtuber MeEnyu."
    },
    "#062": {
        "title": "Endless Fantasy",
        "obtainment": "Derrotar o criador de conteúdo Rajo_END."
    },
    "#063": {
        "title": "El Krazy Editor",
        "obtainment": "Derrotar o editor de conteúdo Zioles."
    },
    "#064": {
        "title": "rip_family",
        "obtainment": "Juntar-se ao grupo do Roblox \"rip_family\" e receber uma patente superior."
    },
    "#065": {
        "title": "red_legion",
        "obtainment": "Juntar-se ao grupo do Roblox \"red_legion\" e receber uma patente superior (Este título recompensará o jogador no jogo na próxima atualização, só funciona se ele tiver cumprido os requisitos necessários)."
    },
    "#066": {
        "title": "Justice Seeker",
        "obtainment": "Reivindicar uma recompensa (bounty) como um fuzileiro naval (marine)."
    },
    "#067": {
        "title": "Empty Vessel",
        "obtainment": "Ficar sem energia (energy)."
    },
    "#068": {
        "title": "The Unlucky",
        "obtainment": "Morrer para um inimigo comum."
    },
    "#069": {
        "title": "The Vanquished",
        "obtainment": "Morrer para um chefe (boss)."
    },
    "#070": {
        "title": "Fallen Hero",
        "obtainment": "Morrer para um chefe de raid (raid boss)."
    },
    "#071": {
        "title": "Iron Man",
        "obtainment": "Alcançar o nível MÁXIMO de Aura."
    },
    "#072": {
        "title": "Ultra Instinct",
        "obtainment": "Alcançar o nível MÁXIMO de Instinto (Instinct)."
    },
    "#073": {
        "title": "Mad Scientist",
        "obtainment": "Comprar um Microchip normal."
    },
    "#074": {
        "title": "The Professor",
        "obtainment": "Comprar um Microchip especial."
    },
    "#075": {
        "title": "The Shadow",
        "obtainment": "Permanecer em um servidor por mais de 1 hora."
    },
    "#076": {
        "title": "The Vampire",
        "obtainment": "Permanecer em um servidor por mais de 4 horas."
    },
    "#077": {
        "title": "Dracula",
        "obtainment": "Permanecer em um servidor por mais de 12 horas."
    },
    "#078": {
        "title": "The Grandfather",
        "obtainment": "Trocar Fragmentos (Fragments) por um Re-roll de Raça (Race Reroll)."
    },
    "#079": {
        "title": "Jack of All Trades",
        "obtainment": "Trocar Fragmentos (Fragments) por um Reembolso de Status (Stats Refund)."
    },
    "#080": {
        "title": "The Undefeated One",
        "obtainment": "Receber dano de um jogador e sobreviver com menos de 50 HP restantes."
    },
    "#081": {
        "title": "Immortal Being",
        "obtainment": "Receber dano de um jogador e sobreviver com 1 HP restante."
    },
    "#082": {
        "title": "The Mad King",
        "obtainment": "Usar o roque (castling) em uma partida de xadrez."
    },
    "#083": {
        "title": "The Mastermind",
        "obtainment": "Derrotar seu oponente no jogo de xadrez."
    },
    "#084": {
        "title": "The Dog",
        "obtainment": "Falar com a casinha de cachorro (doghouse)."
    },
    "#085": {
        "title": "Ship Destroyer",
        "obtainment": "Destruir um navio (ship) com um canhão."
    },
    "#086": {
        "title": "The Explorer",
        "obtainment": "Alcançar o Nível 800."
    },
    "#087": {
        "title": "The Adventurer",
        "obtainment": "Alcançar o Nível 1000."
    },
    "#088": {
        "title": "The Mercenary",
        "obtainment": "Alcançar o Nível 1200."
    },
    "#089": {
        "title": "The Viking",
        "obtainment": "Alcançar o Nível 1600."
    },
    "#090": {
        "title": "The Pioneer",
        "obtainment": "Alcançar o Nível 2000."
    },
    "#091": {
        "title": "The Glorious",
        "obtainment": "Alcançar o Nível 2400."
    },
    "#092": {
        "title": "The Master",
        "obtainment": "Alcançar maestria MÁXIMA em qualquer arma (Blox Fruit, Espada, Arma de Fogo, Estilo de Luta ou Vara de Pesca)."
    },
    "#093": {
        "title": "Unbreakable Will",
        "obtainment": "Alcançar maestria MÁXIMA em qualquer arma (Blox Fruit, Espada, Arma de Fogo, Estilo de Luta ou Vara de Pesca)."
    },
    "#094": {
        "title": "Fist of Death",
        "obtainment": "Alcançar maestria MÁXIMA em um Estilo de Luta."
    },
    "#095": {
        "title": "God Blade",
        "obtainment": "Alcançar maestria MÁXIMA em uma Espada."
    },
    "#096": {
        "title": "King Sniper",
        "obtainment": "Alcançar maestria MÁXIMA em uma Arma de Fogo."
    },
    "#097": {
        "title": "Beyond the Sea",
        "obtainment": "Alcançar maestria MÁXIMA em uma Blox Fruit."
    },
    "#098": {
        "title": "Broken Heart",
        "obtainment": "Ficar sem tempo em uma raid."
    },
    "#099": {
        "title": "The Conqueror",
        "obtainment": "Completar uma raid."
    },
    "#100": {
        "title": "Last Hope",
        "obtainment": "Ser a última pessoa de pé e vencer uma raid. (Ainda obtível se o jogador estiver fazendo uma raid sozinho)"
    },
    "#101": {
        "title": "The Supersonic",
        "obtainment": "Completar uma raid em menos de 5:00 minutos. (Ainda obtível com 5:00 minutos restantes)"
    },
    "#102": {
        "title": "The Flash",
        "obtainment": "Completar uma raid em menos de 3:30 minutos. (Ainda obtível com 3:30 minutos restantes)"
    },
    "#103": {
        "title": "The Champion",
        "obtainment": "Completar a missão de Bartilo."
    },
    "#104": {
        "title": "Tide Warrior",
        "obtainment": "Morrer para a Água (Water)."
    },
    "#105": {
        "title": "The Toxic",
        "obtainment": "Ganhar uma fruta em um evento de fábrica (factory)."
    },
    "#106": {
        "title": "Blessed One",
        "obtainment": "Encontrar uma fruta."
    },
    "#107": {
        "title": "Equal to the Heavens",
        "obtainment": "Derrotar um administrador (admin) de Blox Fruits."
    },
    "#108": {
        "title": "The Rich",
        "obtainment": "Obter $ 5M+."
    },
    "#109": {
        "title": "Unlimited Money",
        "obtainment": "Obter $ 20M+."
    },
    "#110": {
        "title": "The Richest in the World",
        "obtainment": "Obter $ 50M+."
    },
    "#111": {
        "title": "The Collector",
        "obtainment": "Comprar algo do Legendary Sword Dealer ou Master of Auras."
    },
    "#112": {
        "title": "The Swordsman",
        "obtainment": "Obter uma espada do Legendary Sword Dealer."
    },
    "#113": {
        "title": "Beast Hunter",
        "obtainment": "Derrotar uma Besta Marinha (Sea Beast)."
    },
    "#114": {
        "title": "The Beast",
        "obtainment": "Derrotar 25 Bestas Marinhas (Sea Beasts)."
    },
    "#115": {
        "title": "The Lost Soul",
        "obtainment": "Morrer por veneno da fábrica (factory poison)."
    },
    "#116": {
        "title": "Forbidden One",
        "obtainment": "Encontrar o Punho das Trevas (Fist of Darkness) em um baú (chest)."
    },
    "#117": {
        "title": "The Troll",
        "obtainment": "Morrer com uma fruta na barra de atalhos do jogador."
    },
    "#118": {
        "title": "Hidden Power",
        "obtainment": "Comer uma Blox Fruit física."
    },
    "#119": {
        "title": "Heavenly Devil",
        "obtainment": "Derrotar Don Swan uma vez."
    },
    "#120": {
        "title": "The Cursed One",
        "obtainment": "Derrotar Darkbeard uma vez."
    },
    "#121": {
        "title": "Beyond Death",
        "obtainment": "Derrotar Order uma vez."
    },
    "#122": {
        "title": "Night's Edge",
        "obtainment": "Derrotar o Capitão Amaldiçoado (Cursed Captain) uma vez."
    },
    "#123": {
        "title": "Kind-Hearted",
        "obtainment": "Dropar uma fruta."
    },
    "#124": {
        "title": "The Kraken",
        "obtainment": "Dropar uma fruta no mar (sea)."
    },
    "#125": {
        "title": "Lavish Living",
        "obtainment": "Comprar qualquer fruta do Blox Fruit Dealer."
    },
    "#126": {
        "title": "Night Owl",
        "obtainment": "Comprar uma fruta de valor 1M+ do Blox Fruit Dealer."
    },
    "#127": {
        "title": "Wicked Captain",
        "obtainment": "Obter o Dark Coat."
    },
    "#128": {
        "title": "Dragonborn",
        "obtainment": "Desbloquear Sopro do Dragão (Dragon Breath)."
    },
    "#129": {
        "title": "Burning Leg",
        "obtainment": "Desbloquear Passo da Morte (Death Step)."
    },
    "#130": {
        "title": "Sharkman",
        "obtainment": "Desbloquear Caratê Tubarão (Sharkman Karate)."
    },
    "#131": {
        "title": "Samurai",
        "obtainment": "Desbloquear Rengoku e equipá-la."
    },
    "#132": {
        "title": "The Silent",
        "obtainment": "Morrer para um jogador abaixo do Nível 800."
    },
    "#133": {
        "title": "The Executioner",
        "obtainment": "Morrer para um jogador de Nível Máximo. (Você precisa ser Nível Máximo)"
    },
    "#134": {
        "title": "The Stalker",
        "obtainment": "Derrotar um jogador no mesmo nível que o seu."
    },
    "#135": {
        "title": "Risk Taker",
        "obtainment": "Comprar uma fruta na Blox Fruits Gacha."
    },
    "#136": {
        "title": "Luck of the Draw",
        "obtainment": "Obter uma fruta valendo mais de $ 1M na Blox Fruits Gacha."
    },
    "#137": {
        "title": "Unstoppable Force",
        "obtainment": "Derrotar 5 jogadores (cada morte rendendo recompensa ou honra) sem morrer no mesmo servidor."
    },
    "#138": {
        "title": "Raging Demon",
        "obtainment": "Derrotar 20 jogadores (cada morte rendendo recompensa ou honra) sem morrer no mesmo servidor."
    },
    "#139": {
        "title": "The Protagonist",
        "obtainment": "Derrotar 2 ou mais jogadores ao mesmo tempo."
    },
    "#140": {
        "title": "Coldblooded",
        "obtainment": "Derrotar 10 jogadores no mesmo servidor."
    },
    "#141": {
        "title": "Apex Predator",
        "obtainment": "Derrotar 25 jogadores no mesmo servidor."
    },
    "#142": {
        "title": "The Killer",
        "obtainment": "Desbloquear Super-humano (Superhuman)."
    },
    "#143": {
        "title": "Human Weapon",
        "obtainment": "Desbloquear Super-humano (Superhuman)."
    },
    "#144": {
        "title": "Demon Eye",
        "obtainment": "Desbloquear True Triple Katana."
    },
    "#145": {
        "title": "The Hurricane",
        "obtainment": "Desbloquear True Triple Katana."
    },
    "#146": {
        "title": "The Enhancer",
        "obtainment": "Desbloquear qualquer cor de Aura."
    },
    "#147": {
        "title": "True Heart",
        "obtainment": "Desbloquear Branco de Neve (Snow White)."
    },
    "#148": {
        "title": "Bringer of Doom",
        "obtainment": "Desbloquear Vermelho Puro (Pure Red)."
    },
    "#149": {
        "title": "Realm Creator",
        "obtainment": "Desbloquear Céu de Inverno (Winter Sky)."
    },
    "#150": {
        "title": "Hakaishin",
        "obtainment": "Desbloquear todas as cores de Aura compráveis, exceto as de evento. Note que o jogador não precisa criá-las, apenas desbloqueá-las através do Barista Cousin."
    },
    "#151": {
        "title": "Slayer of God",
        "obtainment": "Desbloquear a skin Slayer da Dark Blade."
    },
    "#152": {
        "title": "The Ghost",
        "obtainment": "Coletar 100 Ectoplasmas."
    },
    "#153": {
        "title": "Ruler of Night",
        "obtainment": "Coletar 250 Ectoplasmas."
    },
    "#154": {
        "title": "Lonely Reaper",
        "obtainment": "Coletar 1.000 Ectoplasmas."
    },
    "#155": {
        "title": "The Most Wanted",
        "obtainment": "Ser dono de uma tripulação (crew) que está atualmente no Top 100 da tabela de classificação."
    },
    "#156": {
        "title": "Pirate King",
        "obtainment": "Ficar online no jogo por um total de 72 horas sendo o capitão de uma tripulação que está no Top 10 da tabela de classificação."
    },
    "#157": {
        "title": "Sugar Rush",
        "obtainment": "Coletar 100 Doces (Candies) (Obtível durante o Evento de Natal)."
    },
    "#158": {
        "title": "Christmas Spirit",
        "obtainment": "Coletar 250 Doces (Candies) (Obtível durante o Evento de Natal)."
    },
    "#159": {
        "title": "Loco Verde",
        "obtainment": "Coletar 1.000 Doces (Candies) (Obtível durante o Evento de Natal)."
    },
    "#160": {
        "title": "Raid Boss",
        "obtainment": "Obter uma fruta no evento de ataque pirata (pirate raid)."
    },
    "#161": {
        "title": "The Real Deal",
        "obtainment": "Derrotar um inimigo de elite (elite enemy)."
    },
    "#162": {
        "title": "Demon Mode",
        "obtainment": "Desbloquear Yama."
    },
    "#163": {
        "title": "Celestial Swordsman",
        "obtainment": "Desbloquear Tushita."
    },
    "#164": {
        "title": "Raiton",
        "obtainment": "Desbloquear Garra Elétrica (Electric Claw)."
    },
    "#165": {
        "title": "Shadow Sovereign",
        "obtainment": "Derrotar a Forma Verdadeira (True Form) de rip_Indra."
    },
    "#166": {
        "title": "The Chosen One",
        "obtainment": "Encontrar o Cálice de Deus (God's Chalice) em um baú."
    },
    "#167": {
        "title": "Main Character",
        "obtainment": "Completar a missão do Cidadão (Citizen)."
    },
    "#168": {
        "title": "Final Hero",
        "obtainment": "Desbloquear a cor de aura Salvador Arco-Íris (Rainbow Saviour)."
    },
    "#169": {
        "title": "Skeleton",
        "obtainment": "Coletar 250 Ossos (Bones)."
    },
    "#170": {
        "title": "Undead Lord",
        "obtainment": "Coletar 500 Ossos (Bones). (Obtível durante o Evento de Halloween)."
    },
    "#171": {
        "title": "Death King",
        "obtainment": "Coletar 2.000 Ossos (Bones). (Obtível durante o Evento de Halloween)."
    },
    "#172": {
        "title": "Shinigami",
        "obtainment": "Derrotar o Ceifador de Almas (Soul Reaper) uma vez."
    },
    "#173": {
        "title": "The Devil's Luck",
        "obtainment": "Obter Essência Assombrada (Hallow Essence) e Cálice de Deus (God's Chalice) através de \"Orações\" (Praying)."
    },
    "#174": {
        "title": "Dough Commander",
        "obtainment": "Derrotar o Príncipe de Massa (Cake Prince)."
    },
    "#175": {
        "title": "Dough King",
        "obtainment": "Derrotar o Rei de Massa (Dough King)."
    },
    "#176": {
        "title": "Terrorbringer",
        "obtainment": "Derrotar 10 Tubarões do Terror (Terrorsharks)."
    },
    "#177": {
        "title": "Serpent Slayer",
        "obtainment": "Derrotar o Leviatã (Leviathan)."
    },
    "#178": {
        "title": "Abyss Tamer",
        "obtainment": "Completar 50 Eventos Marinhos (Sea Events)."
    },
    "#179": {
        "title": "Nautical Bane",
        "obtainment": "Completar 200 Eventos Marinhos (Sea Events)."
    },
    "#180": {
        "title": "Tailed Beast",
        "obtainment": "Adquirir no Santuário Kitsune (Kitsune Shrine)."
    },
    "#181": {
        "title": "Liberator of the Sky",
        "obtainment": "Derrotar o Tirano dos Céus (Tyrant of the Skies)."
    },
    "#182": {
        "title": "Dragon Talon Prodigy",
        "obtainment": "Derrotar o criador de conteúdo \"Uzoth\"."
    },
    "#183": {
        "title": "Treasure Catcher",
        "obtainment": "Pescar 500 baús de tesouro."
    },
    "#184": {
        "title": "Fish Wrangler",
        "obtainment": "Alcançar nível de pesca (fishing) 20."
    },
    "#185": {
        "title": "Master Fisherman",
        "obtainment": "Alcançar nível 100 na profissão de pesca (fishing)."
    },
    "#186": {
        "title": "(A ser adicionado.)",
        "obtainment": "(A ser adicionado.)"
    },
    "#187": {
        "title": "Fisherman",
        "obtainment": "Obter a Vara de Pesca (Fishing Rod)."
    },
    "#188": {
        "title": "(A ser adicionado.)",
        "obtainment": "(A ser adicionado.)"
    },
    "#189": {
        "title": "(A ser adicionado.)",
        "obtainment": "(A ser adicionado.)"
    },
    "#190": {
        "title": "(A ser adicionado.)",
        "obtainment": "(A ser adicionado.)"
    },
    "#191": {
        "title": "Monkey King",
        "obtainment": "Derrotar o criador de conteúdo Jinn."
    },
    "#192": {
        "title": "Skull Squad",
        "obtainment": "Derrotar o criador de conteúdo Numberskull."
    },
    "#193": {
        "title": "LockGod",
        "obtainment": "Derrotar o criador de conteúdo imFiji."
    },
    "#194": {
        "title": "Touch Grass",
        "obtainment": "N/A; o dono do título deseja mantê-lo privado"
    },
    "#195": {
        "title": "Devious Bacon",
        "obtainment": "Derrotar o criador de conteúdo Koopekool."
    },
    "#196": {
        "title": "AboveTheKloudz",
        "obtainment": "Derrotar o criador de conteúdo WinterKloudz."
    },
    "#197": {
        "title": "Mammoth Fan Club",
        "obtainment": "Derrotar o criador de conteúdo Senpirates."
    },
    "#198": {
        "title": "(A ser adicionado.)",
        "obtainment": "(A ser adicionado.)"
    },
    "#199": {
        "title": "Baldie",
        "obtainment": "Derrotar o criador de conteúdo Woozer."
    },
    "#200": {
        "title": "Light God",
        "obtainment": "Derrotar o criador de conteúdo JuJuBo TV."
    },
    "#201": {
        "title": "The Living Cataclysm",
        "obtainment": "Derrotar o criador de conteúdo HyperJay06."
    },
    "#202": {
        "title": "God of Grinding",
        "obtainment": "Derrotar o criador de conteúdo CRBoneMillion."
    },
    "#203": {
        "title": "?????????",
        "obtainment": "?????????????"
    },
};

const data_fish_local = {
    common: [
        { id: 2, name: "Catfish", img: "./assets/imgs/Catfish.png", details: { location: "Any", bait: "Any", min: "3kg", max: "37kg" } },
        { id: 4, name: "Carp", img: "./assets/imgs/Carp.png", details: { location: "Any", bait: "Any", min: "2kg", max: "19kg" } },
        { id: 6, name: "Redfin", img: "./assets/imgs/Redfin.png", details: { location: "Any", bait: "Any", min: "4kg", max: "30kg" } },
        { id: 7, name: "Tidegill", img: "./assets/imgs/Tidegill.png", details: { location: "Any", bait: "Any", min: "3kg", max: "27kg" } },
        { id: 8, name: "Saltwater Salmon", img: "./assets/imgs/Saltwater_Salmon.png", details: { location: "Any", bait: "Any", min: "5kg", max: "40kg" } },
        { id: 9, name: "Goldfish", img: "./assets/imgs/Goldfish.png", details: { location: "Any", bait: "Any", min: "2kg", max: "20kg" } },
        { id: 11, name: "Sea Sturgeon", img: "./assets/imgs/Sea_Sturgeon.png", details: { location: "Any", bait: "Any", min: "5kg", max: "37kg" } },
        { id: 12, name: "Grouper", img: "./assets/imgs/Grouper.png", details: { location: "Any", bait: "Any", min: "5kg", max: "44kg" } },
        { id: 14, name: "Mossback", img: "./assets/imgs/Mossback.png", details: { location: "Any", bait: "Any", min: "5kg", max: "38kg" } },
        { id: 24, name: "Sand Bass", img: "./assets/imgs/Sand_Bass.png", details: { location: "Any", bait: "Any", min: "5kg", max: "37kg" } },
        { id: 33, name: "Tuna", img: "./assets/imgs/Tuna.png", details: { location: "Any", bait: "Any", min: "5kg", max: "40kg" } },
        { id: 34, name: "Crab", img: "./assets/imgs/Crab.png", details: { location: "Any", bait: "Any", min: "5kg", max: "34kg" } },
        { id: 38, name: "Golden Carp", img: "./assets/imgs/Golden_Carp.png", details: { location: "Unobtainable", bait: "Any", min: "1kg", max: "???" } },
        { id: 39, name: "Starfish (Yellow)", img: "./assets/imgs/Starfish_(Yellow).png", details: { location: "Any", bait: "Any", min: "1kg", max: "12kg" } },
        { id: 42, name: "Starfish (Purple)", img: "./assets/imgs/Starfish_(Purple).png", details: { location: "Any", bait: "Any", min: "1kg", max: "12kg" } },
        { id: 46, name: "Starfish (Blue)", img: "./assets/imgs/Starfish_(Blue).png", details: { location: "Any", bait: "Any", min: "1kg", max: "12kg" } },
        { id: 47, name: "Starfish (Green)", img: "./assets/imgs/Starfish_(Green).png", details: { location: "Any", bait: "Any", min: "1kg", max: "12kg" } },
        { id: 48, name: "Starfish (Pink)", img: "./assets/imgs/Starfish_(Pink).png", details: { location: "Any", bait: "Any", min: "1kg", max: "12kg" } },
        { id: 49, name: "Starfish (Red)", img: "./assets/imgs/Starfish_(Red).png", details: { location: "Any", bait: "Any", min: "1kg", max: "12kg" } }
    ],

    uncommon: [
        { id: 3, name: "Angelfish", img: "./assets/imgs/Angelfish.png", details: { location: "Any", bait: "Any", min: "6kg", max: "46kg" } },
        { id: 5, name: "Flatfish", img: "./assets/imgs/Flatfish.png", details: { location: "Any", bait: "Any", min: "7kg", max: "50kg" } },
        { id: 13, name: "Clownfish", img: "./assets/imgs/Clownfish.png", details: { location: "Any", bait: "Any", min: "5kg", max: "37kg" } },
        { id: 15, name: "Amber Trout", img: "./assets/imgs/Amber_Trout.png", details: { location: "Any", bait: "Any", min: "6kg", max: "44kg" } },
        { id: 18, name: "Bullfish", img: "./assets/imgs/Bullfish.png", details: { location: "Desert, Forgotten Island, Prehistoric Island", bait: "Any (Easier with Carnivore Bait)", min: "4kg", max: "33kg" } },
        { id: 19, name: "Parrotfish", img: "./assets/imgs/Parrotfish.png", details: { location: "Green Zone, Tiki Outpost", bait: "Any (Easier with Kelp Bait)", min: "7kg", max: "48kg" } },
        { id: 30, name: "Pufferfish", img: "./assets/imgs/Pufferfish.png", details: { location: "Any", bait: "Any", min: "5kg", max: "38kg" } },
        { id: 31, name: "Barracuda", img: "./assets/imgs/Barracuda.png", details: { location: "Underwater City", bait: "Any", min: "5kg", max: "35kg" } },
        { id: 32, name: "Kelp Bass", img: "./assets/imgs/Kelp_Bass.png", details: { location: "Any", bait: "Any (Easier with Kelp Bait)", min: "5kg", max: "35kg" } },
        { id: 36, name: "Colossal Shrimp", img: "./assets/imgs/Colossal_Shrimp.png", details: { location: "Any", bait: "Any", min: "6kg", max: "43kg" } },
        { id: 44, name: "Turtle", img: "./assets/imgs/Turtle.png", details: { location: "Whirlpool", bait: "Any", min: "3kg", max: "48kg" } },
        { id: 53, name: "Jester Clownfish", img: "./assets/imgs/Jester_Clownfish.png", details: { location: "Any", bait: "Any", min: "5kg", max: "37kg" } },
        { id: 54, name: "Zombie Bass", img: "./assets/imgs/Zombie_Bass.png", details: { location: "Any", bait: "Any (Easier with Carnivore Bait)", min: "5kg", max: "35kg" } },
        { id: "N/A", name: "Soggy Boot", img: "./assets/imgs/Soggy_Boot.png", details: { location: "Any", bait: "Any", min: "N/A", max: "N/A" } }
    ],

    rare: [
        { id: 1, name: "Candyfish", img: "./assets/imgs/Candyfish.png", details: { location: "Sea of Treats", bait: "Any", min: "6kg", max: "47kg" } },
        { id: 10, name: "Ghostfish", img: "./assets/imgs/Ghostfish.png", details: { location: "Cursed Ship, Haunted Castle, Haunted Shipwreck, Mirage Island", bait: "Abyssal Bait, Epic Bait", min: "6kg", max: "41kg" } },
        { id: 20, name: "Leafy Trout", img: "./assets/imgs/Leafy_Trout.png", details: { location: "Green Zone, Floating Turtle, Great Tree", bait: "Any (Easier with Kelp Bait and Shark Rod)", min: "6kg", max: "42kg" } },
        { id: 26, name: "Molten Trout", img: "./assets/imgs/Molten_Trout.png", details: { location: "Magma Village, Prehistoric Island", bait: "Any (Easier with Carnivore Bait)", min: "5kg", max: "39kg" } },
        { id: 27, name: "Gliderfish", img: "./assets/imgs/Gliderfish.png", details: { location: "Any", bait: "Any", min: "5kg", max: "36kg" } },
        { id: 35, name: "Seahorse", img: "./assets/imgs/Seahorse.png", details: { location: "Any", bait: "Any", min: "7kg", max: "48kg" } },
        { id: 40, name: "Swamp Lurker", img: "./assets/imgs/Swamp_Lurker.png", details: { location: "Whirlpool", bait: "Any", min: "76kg", max: "210kg" } },
        { id: 50, name: "Lumo Whale", img: "./assets/imgs/Lumo_Whale.png", details: { location: "Whirlpool", bait: "Any", min: "110kg", max: "376kg" } },
        { id: 51, name: "Deepsea Octopus", img: "./assets/imgs/Deepsea_Octopus.png", details: { location: "Whirlpool", bait: "Any", min: "8kg", max: "???" } },
        { id: 52, name: "Jack-O-Fish", img: "./assets/imgs/Jack-O-Fish.png", details: { location: "Any", bait: "Any (Easier with Abyssal Bait)", min: "6kg", max: "41kg" } }
    ],

    legendary: [
        { id: 16, name: "Frostjaw", img: "./assets/imgs/Frostjaw.png", details: { location: "Frozen Village, Snow Mountain, Frozen Dimension", bait: "Any (Easier with Frozen Bait)", min: "25kg", max: "172kg" } },
        { id: 21, name: "Azure Marlin", img: "./assets/imgs/Azure_Marlin.png", details: { location: "Hydra Island, Kitsune Island", bait: "Any (Easier with Epic Bait)", min: "72kg", max: "483kg" } },
        { id: 23, name: "Deepglow Oarfish", img: "./assets/imgs/Deepglow_Oarfish.png", details: { location: "Cursed Ship (Glitched Out)", bait: "Abyssal Bait", min: "18kg", max: "121kg" } },
        { id: 25, name: "Angler (Fish)", img: "./assets/imgs/Angler.png", details: { location: "Cursed Ship, Haunted Castle", bait: "Abyssal Bait", min: "4kg", max: "32kg" } },
        { id: 28, name: "Rock Dweller", img: "./assets/imgs/Rock_Dweller.png", details: { location: "Magma Village, Prehistoric Island", bait: "Any (Easier with Epic Bait)", min: "21kg", max: "145kg" } },
        { id: 45, name: "Deepsea Squid", img: "./assets/imgs/Deapsea_squid.png", details: { location: "Whirlpool", bait: "Any", min: "8kg", max: "33.44kg" } },
        { id: "??", name: "Vampire Squid", img: "./assets/imgs/Vampire_Squid.png", details: { location: "???", bait: "???", min: "???", max: "???" } }
    ],

    mythical: [
        { id: 17, name: "Gravelhead Shark", img: "./assets/imgs/Gravelhead_Shark.png", details: { location: "Prehistoric Island", bait: "Carnivore Bait", min: "148kg", max: "989kg" } },
        { id: 22, name: "Terrorfish", img: "./assets/imgs/Terrorfish.png", details: { location: "Prehistoric Island, Tiki Outpost, Frozen Dimension", bait: "Carnivore Bait, Epic Bait", min: "28kg", max: "190kg" } },
        { id: 29, name: "Levi", img: "./assets/imgs/Levi.png", details: { location: "Hydra Island, Submerged Island, Tiki Outpost", bait: "Epic Bait, Frozen Bait", min: "13kg", max: "150kg" } },
        { id: 55, name: "Terrorbones", img: "./assets/imgs/Terrorbones.png", details: { location: "Tiki Outpost, Submerged Island, Prehistoric Island", bait: "Carnivore Bait, Abyssal Bait, Frozen Bait", min: "28kg", max: "190kg" } }
    ],

    unknown: [
        { id: 37, name: "Dragon Koi", img: "./assets/imgs/Dragon_Koi.png", details: { location: "???", bait: "???", min: "???", max: "???" } },
        { id: 41, name: "Hermit Crab", img: "./assets/imgs/HermitCrab.png", details: { location: "???", bait: "???", min: "???", max: "???" } },
        { id: 43, name: "Jellyfish", img: "./assets/imgs/JellyFish.png", details: { location: "???", bait: "???", min: "???", max: "???" } }
    ],

    info: {
        text_label: "Peixes coletados:"
    }
};

const data_fishing_rods = {
    common: [
        { 
            name: "Vara de Pesca (Fishing Rod)", 
            img: "./assets/imgs/Fishing_Rod.png", 
            details: { 
                recipe: "Nenhum", 
                source: "Pescador (Fisherman)", 
                sea: "Primeiro Mar (First Sea)", 
                trust: "N/A" 
            } 
        }
    ],

    uncommon: [
        { 
            name: "Vara de Ouro (Gold Rod)", 
            img: "./assets/imgs/Gold_Rod.png", 
            details: { 
                recipe: "500.000$ + 4x Prancha de Madeira (Wooden Plank) + 3x Sucata Metálica (Scrap Metal)", 
                source: "Pescador (Angler)", 
                sea: "Primeiro Mar (First Sea)", 
                trust: "10" 
            } 
        },
        { 
            name: "Vara de Tubarão (Shark Rod)", 
            img: "./assets/imgs/Shark_Rod.png", 
            details: { 
                recipe: "1x Meteorito (Meteorite) + 1.000 Fragmentos + 5x Presa de Vampiro (Vampire Fang) + 7x Prancha de Madeira (Wooden Plank)", 
                source: "Pescador (Angler)", 
                sea: "Segundo Mar (Second Sea)", 
                trust: "10" 
            } 
        }
    ],

    rare: [
        { 
            name: "Vareta de Concha (Shell Rod)", 
            img: "./assets/imgs/Shell_Rod.png", 
            details: { 
                recipe: "2x Dente Mutante (Mutant Tooth) + 2.000 Fragmentos + 8x Gota Mística (Mystic Droplet) + 10x Prancha de Madeira (Wooden Plank)", 
                source: "Pescador (Angler)", 
                sea: "Terceiro Mar (Third Sea)", 
                trust: "40" 
            } 
        }
    ],

    legendary: [
        { 
            name: "Concha (Celestial)", 
            img: "./assets/imgs/Shell_(Celestial).png", 
            details: { 
                recipe: "500x Símbolo Celestial (Celestial Token)", 
                source: "Pescador Celestial (Celestial Fisherman)", 
                sea: "Domínio Celestial (Celestial Domain)", 
                trust: "N/A" 
            } 
        },
        { 
            name: "Tubarão (Corrompido)", 
            img: "./assets/imgs/Shark_(Corrupted).png", 
            details: { 
                recipe: "500x Token Oni (Oni Token)", 
                source: "Pescador Oni (Oni Fisherman)", 
                sea: "Reino Oni (Oni Realm)", 
                trust: "N/A" 
            } 
        },
        { 
            name: "Vara do Tesouro (Treasure Rod)", 
            img: "./assets/imgs/Treasure_Rod.png", 
            details: { 
                recipe: "1x Fractal de Espelho (Mirror Fractal) + 10x Escala Leviatã (Leviathan Scale) + 3.000 Fragmentos + 10x Ouro de Tolo (Fool's Gold)", 
                source: "Pescador (Angler)", 
                sea: "Terceiro Mar (Third Sea)", 
                trust: "45 (Nível 65+ em Pesca necessário.)" 
            } 
        }
    ],

    mythical: [
        { 
            name: "Rod Administrativo (Admin Rod)", 
            img: "./assets/imgs/Admin_Rod.png", 
            details: { 
                recipe: "N/A", 
                source: "Exclusivo para administradores", 
                sea: "N/A", 
                trust: "N/A" 
            } 
        }
    ],

    info: {
        text_label: "Varas de Pesca Coletadas:",
        trust_label: "Confiança Mínima Necessária"
    }
};

const data_fighting_styles = {
    first_sea: [
        { name: "Combat", img: "./assets/imgs/Combat.png" },
        { name: "Dark Step", img: "./assets/imgs/Dark_Step.png" },
        { name: "Electric", img: "./assets/imgs/Electric.png" },
        { name: "Water Kung Fu", img: "./assets/imgs/Water_Kung_Fu.png" }
    ],

    second_sea: [
        { name: "Dragon Breath", img: "./assets/imgs/Dragon_Breath.png" },
        { name: "Superhuman", img: "./assets/imgs/Superhuman.png" },
        { name: "Death Step", img: "./assets/imgs/Death_Step.png" },
        { name: "Sharkman Karate", img: "./assets/imgs/Sharkman_Karate.png" }
    ],

    third_sea: [
        { name: "Electric Claw", img: "./assets/imgs/Electric_Claw.png" },
        { name: "Dragon Talon", img: "./assets/imgs/Dragon_Talon.png" },
        { name: "Godhuman", img: "./assets/imgs/Godhuman.png" },
        { name: "Sanguine Art", img: "./assets/imgs/Sanguine_Art.png" }
    ],

    info: {
        text_label: "Estilos de Luta Coletados:"
    }
};
