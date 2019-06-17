'use strict';
const HashMap = require('./hash_map');
HashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = .5;
const HashMap2 = require('./hash_map_separate_chaining');
HashMap2.SIZE_RATIO = 3;
HashMap2.MAX_LOAD_RATIO = .5;
const util = require('../linked_lists/utility');

function main() {
  const lor = new HashMap();

  const characters = [
    {'Hobbit': 'Bilbo'}, 
    {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'},
    {'Human': 'Aragon'},
    {'Elf': 'Legolas'},
    {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'},
    {'RingBearer': 'Gollum'},
    {'LadyOfLight': 'Galadriel'},
    {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}
  ];

  characters.forEach(character => {
    for (let [key, value] of Object.entries(character)) {
      lor.set(key, value);
    }
  });
  console.log(lor._hashTable);
  console.log('length: ', lor.length);
  console.log('capacity: ', lor._capacity);
  console.log('deleted: ', lor._deleted);
}

function main2() {
  const lor = new HashMap2();

  const characters = [
    {'Hobbit': 'Bilbo'}, 
    {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'},
    {'Human': 'Aragon'},
    {'Elf': 'Legolas'},
    {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'},
    {'RingBearer': 'Gollum'},
    {'LadyOfLight': 'Galadriel'},
    {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}
  ];

  characters.forEach(character => {
    for (let [key, value] of Object.entries(character)) {
      lor.set(key, value);
    }
  });
  console.log('setting up the hash map');
  console.log('');
  lor._hashTable.forEach(list => {
    util.display2(list);
  });
  console.log(lor._hashTable);
  console.log('length: ', lor.length);
  console.log('capacity: ', lor._capacity);

  // console.log('=====deleting=====');
  // console.log('');
  // lor.delete('Hobbit');
  // lor._hashTable.forEach(list => {
  //   util.display2(list);
  // });
  // console.log('length: ', lor.length);
  // console.log('capacity: ', lor._capacity);

  // console.log('=====adding=====');
  // console.log('');
  // lor.set('Hobbit', 'Levi');
  // lor._hashTable.forEach(list => {
  //   util.display2(list);
  // });
  // console.log('length: ', lor.length);
  // console.log('capacity: ', lor._capacity);
}

main2();