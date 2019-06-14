const utils = require('./stack-utils');

class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }

}

function peek(queue){
    if (queue.first)
        return queue.first.value;
    return null;
 }

 function isEmpty(queue){
    return (queue.first===null);
 }

 function display(queue) {
    if (isEmpty(queue))
        return;
    let tempTop = queue.first;
   while (tempTop)
   {
        console.log(tempTop.value);
        tempTop = tempTop.next;
   }
 }

const starTrekQ = new Queue();

//console.log(isEmpty(starTrekQ));
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Michael');
//console.log(JSON.stringify(starTrekQ));

display(starTrekQ);


/* reate a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
Implement a display() function outside of the Queue class that lets you display what's in the queue.
Remove Spock from the queue and display the resulting queue. */
