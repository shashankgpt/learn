class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.parent = null;
  
      if (this.left)
        left.parent = this;
      if (this.right)
        right.parent = this;
    }
  
    *preorder() {
      function* traverse(current) {
        yield current; // Visit the root
        if (current.left) {
          for (let left of traverse(current.left)) {
            yield left;
          }
        }
        if (current.right) {
          for (let right of traverse(current.right)) {
            yield right;
          }
        }
      }
      for (let node of traverse(this)) {
        yield node.value;
      }
    }
  
    *inorder() {
      function* traverse(current) {
        if (current.left) {
          for (let left of traverse(current.left)) {
            yield left;
          }
        }
        yield current; // Visit the root
        if (current.right) {
          for (let right of traverse(current.right)) {
            yield right;
          }
        }
      }
      for (let node of traverse(this)) {
        yield node.value;
      }
    }
  
    *postorder() {
      function* traverse(current) {
        if (current.left) {
          for (let left of traverse(current.left)) {
            yield left;
          }
        }
        if (current.right) {
          for (let right of traverse(current.right)) {
            yield right;
          }
        }
        yield current; // Visit the root
      }
      for (let node of traverse(this)) {
        yield node.value;
      }
    }
  }
  
  // Example usage:
  // Constructing the following binary tree
  //     1
  //    / \
  //   2   3
  //  / \
  // 4   5
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log([...root.preorder()]);   // Output: [1, 2, 4, 5, 3]
  console.log([...root.inorder()]);    // Output: [4, 2, 5, 1, 3]
  console.log([...root.postorder()]);  // Output: [4, 5, 2, 3, 1]
  