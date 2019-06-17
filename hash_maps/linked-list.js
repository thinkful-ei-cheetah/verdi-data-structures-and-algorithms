const _Node = require('./node')

class LinkedList {
  constructor() {
    // all we have is a head
    this.head = null;
    this.length = 0
  }
  display(){
    if(!this.head) {
      return console.log('empty list')
    }
    // else if(!this.head.next){
    //   return console.log(this.head.value)
    // }
    else{
      let currNode = this.head
      while(currNode !== null){
        console.log(currNode.value)
        currNode = currNode.next
      }
      return null
    }
  }
  // Insertion (excluding inserting in the middle)
  insertFirst(item) {
    // create a node and point to curr head
    this.head = new _Node(item, this.head)
    this.length++
  }
  insertLast(item) {
    // empty list?
    if(this.head === null){
      this.insertFirst(item)
    }
    // loop till the end
    else {
      let currNode = this.head
      // let prevNode = this.head
      while(currNode.next !== null) {
        // prevNode = currNode
        currNode = currNode.next
      }
      // add a new node to the end
      currNode.next = new _Node(item, null)
      this.length++
      // prevNode.next = currNode
    }
  }
  // Retrieval
  find(item) {
    let currNode = this.head
    // empty list?
    if(!this.head) {
      return null
    }
    // loop till we find item
    while(currNode.value !== item) {
      // exit/return if we don't find item
      if (currNode.next === null) {
        return null
      }
      // iterate to next node
      else {
        currNode = currNode.next;
      }
    }
    // return the node with that value (since we didn't reach the end)
    return currNode
  }
  // Removal
  remove(item) {
    // empty list?
    if(!this.head) {
      return null
    }
    // deleting the head?
    if(this.head.value === item) {
      this.head = this.head.next
      this.length--
    }
    // initialize
    let currNode = this.head
    let prevNode = this.head
    // loop till the end or we find the item
    while((currNode !== null) && (currNode.value !== item)) {
      //increment prev and curr nodes
      prevNode = currNode
      currNode = currNode.next
    }
    if(currNode === null) {
      console.log('Item not found')
      return
    }
    // remove currNode from the list
    prevNode.next = currNode.next
    this.length--
  }
  insertBefore(item, key){
    // empty list?
    if(!this.head){
      this.insertFirst(item)
    }
    else if(this.head.value === key) {
      let newNode = new _Node(item, this.head)
      this.head = newNode
      this.length++
    }
    // find node by key value
    else {
      let currNode = this.head
      let prevNode = this.head
      while((currNode.next !== null) && (currNode.value !== key)) {
        prevNode = currNode
        currNode = currNode.next
      }
      if(currNode.next === null){
        console.log(`Node with value of ${key} does not exist`)  
      }
      let newNode = new _Node(item, currNode)
      prevNode.next = newNode
      this.length++
    }
  }
  insertAfter(item, key){
    if(!this.head) {
      this.insertFirst(item)
    }
    // initialize
    let currNode = this.head

    while((currNode.next !== null) && (currNode.value !== key)) {
      //increment prev and curr nodes
      currNode = currNode.next
    }
    if(currNode.next === null) {
      console.log(`${key} not found, inserting at the end of the list`)
    }
    let newNode = new _Node(item, currNode.next)
    currNode.next = newNode
    this.length++
  }
  insertAt(item, idex){
    if(!this.head){
      return console.log('empty list')
    }
    if (idex > this.length-1){
      return console.log('invalid index')
    }
    let currNode = this.head
    let prevNode = this.head
    for (let i=0; i<idex-1; i++){
      prevNode = currNode
      currNode = currNode.next
    }
    let newNode = new _Node(item, currNode)
    prevNode.next = newNode
    this.length++
  }
  insertInSortedOrder(item){
    let currNode = this.head
    if(item < currNode.value){
      this.head = new _Node(item, this.head)
      return this
    }
    while(item > currNode.next.value){
      currNode = currNode.next
      if(currNode.next === null){
        currNode.next = new _Node(item, null)
        return this
      }
    }
    let nextNode = currNode.next
    currNode.next = new _Node(item, nextNode)
    return this
  }
  size(){
    return console.log(this.length)
  }
  isEmpty(){
    return console.log(!this.length)
  }
  findPrevious(item){
    let currNode = this.head
    let prevNode = this.head
    // empty list?
    if(!this.head) {
      return null
    }
    else if(this.head.value === item){
      return console.log(`${item} is the first item`)
    }
    // loop till we find item
    while(currNode.value !== item) {
      // exit/return if we don't find item
      if (currNode.next === null) {
        return null
      }
      // iterate to next node
      else {
        prevNode = currNode
        currNode = currNode.next;
      }
    }
    // return the node with that value (since we didn't reach the end)
    return prevNode
  }
  findLast(){
    let currNode = this.head
    if(!currNode){
      return console.log('empty list')
    }
    while(currNode.next !== null){
      currNode = currNode.next
    }
    return currNode
  }
  reverseList(prevNode, currNode = this.head){
    if(currNode === this.head){
      let nextNode = this.head.next
      currNode.next = null
      this.reverseList(currNode, nextNode)
    }
    else if(currNode.next === null){
      currNode.next = prevNode
      this.head = currNode
    }
    else{
      let nextNode = currNode.next
      currNode.next = prevNode
      this.reverseList(currNode, nextNode)
    }
  }
  // findNthNodeFromEnd(index){
  //   if(!this.head){
  //     return console.log('empty list')
  //   }
  //   let length = 0
  //   let currNode = this.head
  //   while(currNode !== null){
  //     length++
  //     currNode = currNode.next
  //   }
  //   // need to continue
  // }
  find3rdFromLast(){
    if(!this.head || !this.head.next || !this.head.next.next){
      return null
    }
    let currNode = this.head
    while (currNode.next.next.next !== null){
      currNode = currNode.next
    }
    return currNode.value
  }
  findMiddle(){
    if(!this.head){
      return null
    }
    else if(!this.head.next){
      return this.head
    }
    else{
      let fast = this.head
      let slow = this.head
      while((fast !== null) && (fast.next !== null)){
        fast = fast.next.next
        slow = slow.next
      }
      return slow
    }
  }
  isCycle(){
    if(!this.head){
      return false
    }
    let fast = this.head.next
    let slow = this.head
    while(fast && fast.next && fast.next.next){
      fast = fast.next.next
      slow = slow
      if(fast === slow){
        return true
      }
    }
    return true
  }
}

module.exports = LinkedList