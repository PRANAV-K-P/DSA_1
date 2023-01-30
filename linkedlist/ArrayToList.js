const array = [3, 45, 21, 34, 5, 6, 23, 1];
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
LinkedList.prototype.insertNode = function (data)  {
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
LinkedList.prototype.printNode = function () {
    let current = this.head;
    if (!this.head) {
        console.log("Empty");
        return;
    }
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
const list = new LinkedList();
array.forEach((item)=>{
    list.insertNode(item);
})
list.printNode();

