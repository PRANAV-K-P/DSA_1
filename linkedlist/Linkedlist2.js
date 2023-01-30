class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    NodeAtFirst(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    NodeAtLast(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            let prev = temp;
            while(temp) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = node;
        }
    }
    insertAfter(value,data) {
        const node = new Node(data);
        let current = this.head;
        if(current != null && current.data === value) {
            node.next = current.next;
            current.next = node;
            return;
        }
        while (current != null && current.data != value) {
            current=current.next;
        }
        if(current === null) {
            console.log("Entered item is not in the linked list");
            return;
        }
        node.next = current.next;
        current.next = node;
    }
    delete(value) {
        let current = this.head;
        let prev = current;
        if(current != null && current.data === value) {
            this.head = current.next;
            return;
        }
        while(current != null && current.data != value) {
            prev = current;
            current = current.next;
        }
        if (current === null) {
            console.log("Entered item to delete is not present in the linked list");
            return;
        } 
        prev.next = current.next;
        
    }
    print() {
        let temp = this.head;
        if (!temp) {
            console.log("Empty");
            return;
        }
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const list = new LinkedList();
// list.NodeAtFirst(3);
// list.NodeAtFirst(7);
// list.NodeAtFirst(44);
// list.NodeAtFirst(90);

list.NodeAtLast(78);
list.NodeAtLast(223);
list.NodeAtLast(5);
list.NodeAtLast(8);

list.print();

list.delete(8);
console.log("After deletion");
list.print();

list.insertAfter(78,100);
console.log("After insertion");
list.print();
