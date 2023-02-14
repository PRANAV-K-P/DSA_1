class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}
class breadthFirstSearch {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
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
}
const bst = new breadthFirstSearch();
bst.insert(6);
bst.insert(34);
bst.insert(88);
bst.insert(23);
bst.levelOrder();