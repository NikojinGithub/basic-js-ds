const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeNode = null;
  }

  root() {
    return this.treeNode;
  }

  add(data) {
    this.treeNode = addSomeNode(this.treeNode, data);

    function addSomeNode(node, value){
      if(!node){
        return new Node(value);
      }

      if(node.value === value){
        return node;
      }

      if(value < node.value){
        node.left = addSomeNode(node.left, value);
      } else {
        node.right = addSomeNode(node.right, value);
      }

      return node;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
  if(!this.treeNode){
      return null;
    }

    if(this.treeNode.value === data){
      return this.treeNode;
    }

    let node = this.treeNode;
    if(data < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.treeNode){
      return null;
    }
    let node = this.treeNode;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.treeNode){
      return null;
    }
    let node = this.treeNode;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};