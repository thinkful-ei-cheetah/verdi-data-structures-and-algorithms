const { HashMap } = require('./hash_map')
HashMap.SIZE_RATIO = 3
HashMap.MAX_LOAD_RATIO = 0.5

function main(){
  const lotr = new HashMap()

  const cast = [
    {"Hobbit": "Bilbo"},
    {"Hobbit": "Frodo"},
    {"Wizard": "Gandolf"},
    {"Human": "Aragon"},
    {"Elf": "Legolas"},
    {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"},
    {"RingBearer": "Gollum"},
    {"LadyOfLight": "Galadriel"},
    {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}
  ]

  cast.forEach(char => {
    let key = Object.keys(char)[0]
    let value = Object.values(char)[0]
    lotr.set(key, value)
  })
  console.log(lotr)
}

function WhatDoesThisDo(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

main()
WhatDoesThisDo()