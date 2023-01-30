let array = [];
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
LinkedList.prototype.addNode = function (data)  {
    const node = new Node(data);
    if(!this.head) {
        this.head = node;
    } else {
        let current = this.head;
        let prev = this.head;
        while(current) {
            prev = current;
            current = current.next;
        }
        prev.next = node;
    }
}
LinkedList.prototype.traverse = function () {
    let current = this.head;
    while (current) {
        array.push(current.data);
        current = current.next;
    }
}
const list = new LinkedList();
list.addNode(223);
list.addNode(745);
list.addNode(385);
list.addNode(15);
list.addNode(80);
list.traverse();
console.log(array);