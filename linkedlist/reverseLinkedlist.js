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
}
LinkedList.prototype.insertNode = function (data) {
    const node = new Node(data);
    let current = this.head;
    let prev = this.head;
    if(!current) {
        this.head = node;
        return;
    }
    while(current) {
        prev = current;
        current = current.next;
    }
    prev.next = node;
}
LinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = null;
    let prev = null;
    while (current) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
        temp = null;
    } 
    this.head = prev;
}
LinkedList.prototype.display = function () {
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
const list = new LinkedList();
list.insertNode(11);
list.insertNode(44);
list.insertNode(22);
list.insertNode(99);
list.display();
list.reverse();
console.log("After reverse");
list.display();