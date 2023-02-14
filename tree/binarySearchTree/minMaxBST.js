class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}
class minMax {
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
    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
}
const bst = new minMax();
bst.insert(4);
bst.insert(23);
bst.insert(10);
bst.insert(232);
bst.insert(3);
bst.insert(34);
console.log("Minimum value in the tree is ",bst.min(bst.root));
console.log("Maximum value in the tree is ",bst.max(bst.root));
