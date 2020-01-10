// Height of a Binary Tree

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){ // input of the value into the insert method
        var newNode = new Node(value);
        if(this.root === null){ // if there is empty tree
            this.root = newNode; // value assigned to the root
            return this;
        }
        var current = this.root; // if tree is not empty
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){ // if value of the new node is less than the value of the root
                if(current.left === null){ // if there is no node to the left
                    current.left = newNode; // adds that node as the left property
                    return this; // updates the tree
                }
                current = current.left; // if there is a node to the left, moves to that node and repeats these steps
            } 
	    else { // if value of the new node is greater than the value of the root
                if(current.right === null){ // if there is no node to the right
                    current.right = newNode; // adds that node as the right property
                    return this;
                } 
                current = current.right; // if there is a node to the right, moves to that node and repeats these steps
            }
        }
     }

  find_height(nod = this.root){
      if (nod == null) { // empty call after recursive call for a child
          return -1; // since call for a child added an unnecessary +1
      }
      var left = this.find_height(nod.left); // recursive call to the left child of the current node
      var right = this.find_height(nod.right); // // recursive call to the right child of the current node
      if (left > right) { 
          return left + 1; // height counter for the left side of node
      } 
      else {
          return right + 1; // height counter for the right side of node
      }
  }

}

var tree = new BinarySearchTree();

tree.insert(12);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.find_height());

//      12
//   6     15
// 3  8      20


/* Printed values:

> tree.insert(12);
BinarySearchTree { root: Node { value: 12, left: null, right: null } }
> tree.insert(6);
BinarySearchTree {
  root:
   Node {
     value: 12,
     left: Node { value: 6, left: null, right: null },
     right: null } }
> tree.insert(15);
BinarySearchTree {
  root:
   Node {
     value: 12,
     left: Node { value: 6, left: null, right: null },
     right: Node { value: 15, left: null, right: null } } }

> tree.root
Node {
  value: 12,
  left:
   Node {
     value: 6,
     left: Node { value: 3, left: null, right: null },
     right: Node { value: 8, left: null, right: null } },
  right:
   Node {
     value: 15,
     left: null,
     right: Node { value: 20, left: null, right: [Node] } } }

> console.log(tree.find_height());
2

*/


