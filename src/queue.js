const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');


/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  // constructor(value, next){
  //   this.value = value;
  //   this.next = next;
  // }

  // getUnderlyingList() {
  //   return this.head;
  // }

  // enqueue(value) {
  //   this.head = new Queue(value, next);
  //   // this.head.push(value)
  // }

  // dequeue() {
  //   if(this.head.next === null){
  //     return this.head.value;
  //   }
  //   this.head = this.head.next;
  //   return last
  // }
  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
