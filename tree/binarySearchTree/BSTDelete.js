class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class SearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            this.insert(this.root, newNode);
        }
    }
    insert(root, newNode) {
       if(newNode.value < root.value ) {
        if(root.left === null) {
            root.left = newNode;
        } else {
            this.insert(root.left, newNode);
        }
       } else {
          if(root.right === null) {
            root.right = newNode;
          } else {
            this.insert(root.right, newNode);
          }
       }
    }
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let current = queue.shift()
            console.log(current.value);
            if(current.left) 
              queue.push(current.left); 
            if(current.right) 
              queue.push(current.right);    
        }
    }
    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {

        if(root === null) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            } else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}
const tree = new SearchTree();
tree.add(6);
tree.add(12);
tree.add(1);
tree.add(67);
tree.add(80);
tree.levelOrder();
console.log("----");
tree.delete(12);
tree.levelOrder();
