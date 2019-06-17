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

function removeDups(str){
  let output = ''
  const charMap = new Map()
  for(let i = 0; i < str.length; i++){
    if(!charMap.has(str[i])){
      output += str[i]
      charMap.set(str[i], i)
    }
  }
  return output
}

function palindrome(str){
  const charMap = new Map()
  let repeatChar = 0
  for(let i = 0; i < str.length; i++){
    if(charMap.has(str[i])){
      charMap.delete(str[i])
      repeatChar++
    }
    else{
      charMap.set(str[i], i)
    }
  }
  console.log(repeatChar, str.length)
  if(repeatChar*2 === str.length || (repeatChar*2 + 1) === str.length){
    return true
  }
  return false
}

let input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

function normalize(word){
  let chars = word.split('')
  return chars.sort().join('')
}

function anagrams(arr){
  let anaMap = new Map()
  arr.forEach(word => {
    let normalizeWord = normalize(word)
    if(anaMap.has(normalizeWord)){
      let values = anaMap.get(normalizeWord)
      values.push(word)
    } else{
      anaMap.set(normalizeWord, [word])
    }
  })
  return [...anaMap.values()]
}

// main()
// WhatDoesThisDo()
// console.log(removeDups('google'))
// console.log(palindrome('solsos'))
console.log(anagrams(input))