const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// class ListNode {
//      constructor(value, next) {
//        this.value = value;
//        this.next = next;
//      }
//    }

//   const l = [3, 1, 2, 3, 4, 5];
//   const head = new ListNode(l[0],
//                 new ListNode(l[1],
//                   new ListNode(l[2],
//                     new ListNode(l[3],
//                       new ListNode(l[4],
//                         new ListNode(l[5], null))))));

// console.log(head);

function removeKFromList(l, k) {
  while(l.value === k) l = l.next;  //Проверяем первый элемент списка, меняем его на второй если равен k.

  let current = l; //current содержить список где первый элемент 100% не равен k.

  while(current.next !== null){ //Выполняем до тех пор пока следующий элемент не является последним.
    if(current.next.value === k){ //Если следующее значение совпадает с k.
      current.next = current.next.next; //Тогда меняем следующее значение на через одно.
    } else {
      current = current.next; //Если не совпадает, то переходим на следующий узел.
    }
  }

  return l;

}

// console.log(removeKFromList(head, 3))

module.exports = {
  removeKFromList
};