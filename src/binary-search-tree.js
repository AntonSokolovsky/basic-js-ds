const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addIn(this.rootNode, data);
    function addIn(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if(node.data > data) {
        node.left = addIn(node.left, data)
      }else if (node.data < data) {
        node.right = addIn(node.right, data)
      }
    return node;
    }
  }

  has(data) {
    let foundedNode = findNode(this.rootNode, data);
    return foundedNode;
    function findNode(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      if(node.data > data) {
        return findNode(node.left, data);
      }else if (node.data < data) {
        return findNode(node.right, data);
      }
    }
  }

  find(data) {
    let foundedNode = findNode(this.rootNode, data);
    return foundedNode;
    function findNode(node, data) {
      if(!node) {
        return null;
      }
      if(node.data === data) {
        return node;
      }
      if(node.data > data) {
       return findNode(node.left, data);
      }else if (node.data < data) {
       return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if(!node) {
        return null;
      }
      if(node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }else{
        if(!node.right && !node.left) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while(maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data);
        return node;
        // let minRight = node.right;
        // while(minRight.left) {
        //   minRight = minRight.left;
        // }
        // node.data = minRight.data;
        // node.right = removeNode(node.right, minRight.data);
        // return node;
      }
    }
  }

  min() {
    if(!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootNode){
      return;
    }
    let node = this.rootNode;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};