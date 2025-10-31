const data_guns = {
  common: [
    { name: "Slingshot", img: "./images/Slingshot.png" }
  ],

  uncommon: [
    { name: "Flintlock", img: "./images/Flintlock.png" },
    { name: "Musket", img: "./images/Musket.png" }
  ],

  rare: [
    { name: "Acidum Rifle", img: "./images/Acidum_Rifle.png" },
    { name: "Bizarre Revolver", img: "./images/Bizarre_Revolver.png" },
    { name: "Cannon", img: "./images/Cannon.png" },
    { name: "Dual Flintlock", img: "./images/Dual_Flintlock.png" },
    { name: "Magma Blaster", img: "./images/Magma_Blaster.png" },
    { name: "Refined Slingshot", img: "./images/Refined_Slingshot.png" }
  ],

  legendary: [
    { name: "Bazooka", img: "./images/Bazooka.png" },
    { name: "Dragonstorm", img: "./images/Dragonstorm.png" },
    { name: "Kabucha", img: "./images/Kabucha.png" },
    { name: "Venom Bow", img: "./images/Venom_Bow.png" }
  ],

  mythical: [
    { name: "Skull Guitar", img: "./images/Skull_Guitar.png" }
  ],

  info: {
    text_label: "Armas coletadas:"
  }
};

const data_items = {
  common: [
    { name: "Headband (Blue)", img: "./images/Headband_(Blue).png" },
    { name: "Headband (Green)", img: "./images/Headband_(Green).png" },
    { name: "Headband (Orange)", img: "./images/Headband_(Orange).png" },
    { name: "Headband (Purple)", img: "./images/Headband_(Purple).png" },
    { name: "Headband (Red)", img: "./images/Headband_(Red).png" },
    { name: "Headband (White)", img: "./images/Headband_(White).png" },
    { name: "Headband (Yellow)", img: "./images/Headband_(Yellow).png" }
  ],

  uncommon: [
    { name: "Dojo Belt (Blue)", img: "./images/Dojo_Belt_(Blue).png" },
    { name: "Dojo Belt (Green)", img: "./images/Dojo_Belt_(Green).png" },
    { name: "Dojo Belt (Orange)", img: "./images/Dojo_Belt_(Orange).png" },
    { name: "Dojo Belt (Purple)", img: "./images/Dojo_Belt_(Purple).png" },
    { name: "Dojo Belt (Red)", img: "./images/Dojo_Belt_(Red).png" },
    { name: "Dojo Belt (White)", img: "./images/Dojo_Belt_(White).png" },
    { name: "Dojo Belt (Yellow)", img: "./images/Dojo_Belt_(Yellow).png" },
    { name: "Headband (Black)", img: "./images/Headband_(Black).png" },
    { name: "Pink Coat", img: "./images/Pink_Coat.png" },
  ],

  rare: [
    { name: "Bandanna (Black)", img: "./images/Bandanna_(Black).png" },
    { name: "Bandanna (Green)", img: "./images/Bandanna_(Green).png" },
    { name: "Bandanna (Red)", img: "./images/Bandanna_(Red).png" },
    { name: "Bear Ears", img: "./images/Bear_Ears.png" },
    { name: "Black Cape", img: "./images/Black_Cape.png" },
    { name: "Black Spikey Coat", img: "./images/Black_Spikey_Coat.png" },
    { name: "Blue Spikey Coat", img: "./images/Blue_Spikey_Coat.png" },
    { name: "Red Spikey Coat", img: "./images/Red_Spikey_Coat.png" },
    { name: "Choppa", img: "./images/Choppa.png" },
    { name: "Coat (Marine)", img: "./images/Coat_(Marine).png" },
    { name: "Cool Shades", img: "./images/Cool_Shades.png" },
    { name: "Elf Hat", img: "./images/Elf_Hat.png" },
    { name: "Ghoul Mask", img: "./images/Ghoul_Mask.png" },
    { name: "Golden Sunhat", img: "./images/Golden_Sunhat.png" },
    { name: "Hunter Cape (Black)", img: "./images/Hunter_Cape_(Black).png" },
    { name: "Hunter Cape (Green)", img: "./images/Hunter_Cape_(Green).png" },
    { name: "Hunter Cape (Red)", img: "./images/Hunter_Cape_(Red).png" },
    { name: "Jaw Shield", img: "./images/Jaw_Shield.png" },
    { name: "Lei", img: "./images/Lei.png" },
    { name: "Marine Cap", img: "./images/Marine_Cap.png" },
    { name: "Pilot Helmet", img: "./images/Pilot_Helmet.png" },
    { name: "Pretty Helmet", img: "./images/Pretty_Helmet.png" },
    { name: "Santa Hat", img: "./images/Santa_Hat.png" },
    { name: "Shark Tooth Necklace", img: "./images/Shark_Tooth_Necklace.png" },
    { name: "Swordsman Hat", img: "./images/Swordsman_Hat.png" },
    { name: "T-Rex Skull", img: "./images/T-Rex_Skull.png" },
    { name: "Tomoe Ring", img: "./images/Tomoe_Ring.png" },
    { name: "Top Hat", img: "./images/Top_Hat.png" },
    { name: "Usoap’s Hat", img: "./images/Usoap's_Hat.png" },
    { name: "Warrior Helmet", img: "./images/Warrior_Helmet.png" },
    { name: "Dojo Belt (Black)", img: "./images/Dojo_Belt_(Black).png" },
  ],

  legendary: [
    { name: "Holy Crown", img: "./images/Holy_Crown.png" },
    { name: "D.S. Coat", img: "./images/D.S._Coat.png", invalid: true },
    { name: "Cupid’s Coat", img: "./images/Cupid's_Coat.png" },
    { name: "Feathered Visage", img: "./images/Feathered_Visage.png" },
    { name: "Heart Shades", img: "./images/Heart_Shades.png" },
    { name: "Kitsune Mask", img: "./images/Kitsune_Mask.png" },
    { name: "Kitsune Ribbon", img: "./images/Kitsune_Ribbon.png" },
    { name: "Musketeer Hat", img: "./images/Musketeer_Hat.png" },
    { name: "Pale Scarf", img: "./images/Pale_Scarf.png" },
    { name: "Swan Glasses", img: "./images/Swan_Glasses.png" },
    { name: "Terror Jaw", img: "./images/Terror_Jaw.png" },
    { name: "Valkyrie Helm", img: "./images/Valkyrie_Helm.png" },
    { name: "Wyvern Helmet", img: "./images/Wyvern_Helmet.png", invalid: true },
    { name: "Zebra Cap", img: "./images/Zebra_Cap.png" },
    { name: "Dino Hood", img: "./images/Dino_Hood.png" },
  ],

  mythical: [
    { name: "Party Hat", img: "./images/Party_Hat.png" },
    { name: "Divine Cloak", img: "./images/Divine_Cloak.png" },
    { name: "Sanguine Cloak", img: "./images/Sanguine_Cloak.png" },
    { name: "Leviathan Shield", img: "./images/Leviathan_Shield.png" },
    { name: "Uzoth’s Cloak", img: "./images/Uzoth's_Cloak.png" },
    { name: "Oni Helmet", img: "./images/Oni_Helmet.png" },
    { name: "Leviathan Crown", img: "./images/Leviathan_Crown.png" },
    { name: "Dragon Mantle", img: "./images/Dragon_Mantle.png" },
    { name: "Holiday Cloak", img: "./images/Holiday_Cloak.png" },
    { name: "50B Party Hat", img: "./images/50B_Party_Hat.png" },
    { name: "Dark Coat", img: "./images/Dark_Coat.png" },
    { name: "Celestial Helmet", img: "./images/Celestial_Helmet.png" },
    { name: "Coven Witch Hat", img: "./images/Coven_Witch_Hat.webp" },
    { name: "Pumpkin Mask", img: "./images/Pumpkin_Mask.webp" },
  ],

  info: {
    text_label: "Itens coletados:"
  }
};

const data_swords = {
  common: [
    { name: "Cutlass", img: "./images/Cutlass.png" },
    { name: "Dual Katana", img: "./images/Dual_Katana.png" },
    { name: "Katana", img: "./images/Katana.png" }
  ],

  uncommon: [
    { name: "Fishing Trophy", img: "./images/Fishing_Trophy.png" },
    { name: "Iron Mace", img: "./images/Iron_Mace.png" },
    { name: "Shark Saw", img: "./images/Shark_Saw.png" },
    { name: "Triple Katana", img: "./images/Triple_Katana.png" },
    { name: "Twin Hooks", img: "./images/Twin_Hooks.png" }
  ],

  rare: [
    { name: "Dragon Trident", img: "./images/Dragon_Trident.png" },
    { name: "Dual-Headed Blade", img: "./images/Dual-Headed_Blade.png" },
    { name: "Flail", img: "./images/Flail.png" },
    { name: "Gravity Blade", img: "./images/Gravity_Blade.png" },
    { name: "Longsword", img: "./images/Longsword.png" },
    { name: "Pipe", img: "./images/Pipe.png" },
    { name: "Soul Cane", img: "./images/Soul_Cane.png" },
    { name: "Trident", img: "./images/Trident.png" },
    { name: "Wardens Sword", img: "./images/Wardens_Sword.png" }
  ],

  legendary: [
    { name: "Bisento", img: "./images/Bisento.png" },
    { name: "Buddy Sword", img: "./images/Buddy_Sword.png" },
    { name: "Canvander", img: "./images/Canvander.png" },
    { name: "Dark Dagger", img: "./images/Dark_Dagger.png" },
    { name: "Dragonheart", img: "./images/Dragonheart.png" },
    { name: "Fox Lamp", img: "./images/Fox_Lamp.png" },
    { name: "Koko", img: "./images/Koko.png" },
    { name: "Midnight Blade", img: "./images/Midnight_Blade.png" },
    { name: "Oroshi", img: "./images/Oroshi.png" },
    { name: "Pole (1st Form)", img: "./images/Pole_(1st_Form).png" },
    { name: "Pole (2nd Form)", img: "./images/Pole_(2nd_Form).png" },
    { name: "Rengoku", img: "./images/Rengoku.png" },
    { name: "Saber", img: "./images/Saber.png" },
    { name: "Saishi", img: "./images/Saishi.png" },
    { name: "Shark Anchor", img: "./images/Shark_Anchor.png" },
    { name: "Shizu", img: "./images/Shizu.png" },
    { name: "Spikey Trident", img: "./images/Spikey_Trident.png" },
    { name: "Tushita", img: "./images/Tushita.png" },
    { name: "Yama", img: "./images/Yama.png" }
  ],

  mythical: [
    { name: "Cursed Dual Katana", img: "./images/Cursed_Dual_Katana.png" },
    { name: "Dark Blade", img: "./images/Dark_Blade.png" },
    { name: "Hallow Scythe", img: "./images/Hallow_Scythe.png" },
    { name: "Triple Dark Blade", img: "./images/Triple_Dark_Blade.png" },
    { name: "True Triple Katana", img: "./images/True_Triple_Katana.png" }
  ],

  info: {
    text_label: "Espadas coletadas:"
  }
};

const data_fruits = {
  common: [
    { name: "Rocket", img: "./images/Rocket_Fruit.png" },
    { name: "Spin", img: "./images/Spin_Fruit.png" },
    { name: "Blade", img: "./images/Blade_Fruit.png" },
    { name: "Spring", img: "./images/Spring_Fruit.png" },
    { name: "Bomb", img: "./images/Bomb_Fruit.png" },
    { name: "Smoke", img: "./images/Smoke_Fruit.png" },
    { name: "Spike", img: "./images/Spike_Fruit.png" }
  ],

  uncommon: [
    { name: "Flame", img: "./images/Flame_Fruit.png" },
    { name: "Ice", img: "./images/Ice_Fruit.png" },
    { name: "Sand", img: "./images/Sand_Fruit.png" },
    { name: "Dark", img: "./images/Dark_Fruit.png" },
    { name: "Eagle", img: "./images/Eagle_Fruit.png" },
    { name: "Diamond", img: "./images/Diamond_Fruit.png" }
  ],

  rare: [
    { name: "Light", img: "./images/Light_Fruit.png" },
    { name: "Rubber", img: "./images/Rubber_Fruit.png" },
    { name: "Ghost", img: "./images/Ghost_Fruit.png" },
    { name: "Magma", img: "./images/Magma_Fruit.png" }
  ],

  legendary: [
    { name: "Quake", img: "./images/Quake_Fruit.png" },
    { name: "Buddha", img: "./images/Buddha_Fruit.png" },
    { name: "Love", img: "./images/Love_Fruit.png" },
    { name: "Creation", img: "./images/Creation_Fruit.png" },
    { name: "Spider", img: "./images/Spider_Fruit.png" },
    { name: "Sound", img: "./images/Sound_Fruit.png" },
    { name: "Phoenix", img: "./images/Phoenix_Fruit.png" },
    { name: "Portal", img: "./images/Portal_Fruit.png" },
    { name: "Lightning", img: "./images/Lightning_Fruit.png" },
    { name: "Pain", img: "./images/Pain_Fruit.png" },
    { name: "Blizzard", img: "./images/Blizzard_Fruit.png" }
  ],

  mythical: [
    { name: "Gravity", img: "./images/Gravity_Fruit.png" },
    { name: "Mammoth", img: "./images/Mammoth_Fruit.png" },
    { name: "T-Rex", img: "./images/T-Rex_Fruit.png" },
    { name: "Dough", img: "./images/Dough_Fruit.png" },
    { name: "Shadow", img: "./images/Shadow_Fruit.png" },
    { name: "Venom", img: "./images/Venom_Fruit.png" },
    { name: "Control", img: "./images/Control_Fruit.png" },
    { name: "Gas", img: "./images/Gas_Fruit.png" },
    { name: "Spirit", img: "./images/Spirit_Fruit.png" },
    { name: "Leopard", img: "./images/Leopard_Fruit.png" },
    { name: "Yeti", img: "./images/Yeti_Fruit.png" },
    { name: "Kitsune", img: "./images/Kitsune_Fruit.png" },
    { name: "Dragon", img: "./images/Dragon_Fruit.png" }
  ],

  info: {
    text_label: "Espadas coletadas:"
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
