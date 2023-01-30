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
    this.count = 0;
  }
  insertNode(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
      this.count ++;
    }else{
      this.tail.next = node;
      this.tail = node;
      this.count++;
    }
  }
  traverse() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  middle() {
    let temp1 = this.head;
    let temp2 = this.head?.next?.next;
    while (temp2?.data != null) {
      temp1 = temp1.next;
      temp2 = temp2?.next?.next;
    }
    if (this.count % 2 === 0) {
      temp1 = temp1.next;
    }
    console.log("middle -- ", temp1.data);
  }
}
const list = new LinkedList();
list.insertNode(23);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
list.insertNode(6);
list.insertNode(25);
list.insertNode(62);
list.traverse();
list.middle();
