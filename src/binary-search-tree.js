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

    function addSomeNode(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addSomeNode(node.left, data);
      } else {
        node.right = addSomeNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasSomeNode(this.treeNode, data);

    function hasSomeNode(node, data){
      if(!node) {
        return false;
      }

      if (node.data === data){
        return true;
      }

      if(data < node.data){
        return hasSomeNode(node.left, data);
      } else {
        return hasSomeNode(node.right, data);
      }
    }
  }

  find(data) {
    if(!this.treeNode){
      return null;
    }

    let current = this.treeNode;
    if(current.data === data) return current;
    else {
      while(current){
        if(data < current.data){
          current = current.left;
        } else if(data > current.data) {
          current = current.right;
        } else {
          return current;
        }
      }
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