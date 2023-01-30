class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
LinkedList.prototype.insert = function (data) {
    const node = new Node(data);
    let temp = this.head;
    let previous = this.head; 
    if (!this.head) {
        this.head = this.tail = node;
        return;
    }
    while(temp) {
        previous = temp;
        temp = temp.next;
    }
    previous.next = node;
    node.prev = previous;
    this.tail = node;
}
LinkedList.prototype.traverse = function () {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
LinkedList.prototype.traverseReverse = function () {
    let current = this.tail;
    while (current) {
        console.log(current.data);
        current = current.prev;
    }
}
const list = new LinkedList();
list.insert(9);
list.insert(8);
list.insert(7);
list.insert(6);
list.insert(5);
list.insert(4);
list.traverse();
console.log('Reverse Order');
list.traverseReverse();
