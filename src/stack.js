const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){      //Создание пустого массива через конструктор.
     this.arr = [];
  }

  push(element) {                 //Добавляем элемент в массив.
    this.arr.push(element);
  }

  pop() {                         //Если массив пустой возвращает undefined. Если не пустой возвращает последний элемент и удаляет его.
    if(this.arr.length === 0){
      return undefined;
    }
    const last = this.arr[this.arr.length - 1];
    // this.arr.splice(this.arr.length - 1, 1);
    this.arr.pop();
    return last;
  }

  peek() {                                        //Возвращает последний элемент массива.
    const last = this.arr[this.arr.length - 1];
    return last;
  }
}

module.exports = {
  Stack
};
