class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size==0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;    
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;   
        }
        this.size++;
    }
    desired(value, index) {
        if (index < 0 || index > this.size ) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;

        }
    }
    display() {
        if(this.isEmpty()) {
            console.log("List is empty");
        }else {
            let current = this.head;
            let listValues = '';
            while(current) {
                listValues += `${current.value} `;  
                current = current.next;
                
            }
            console.log(listValues);
        }
    }
}

const list = new linkedList()
console.log('List is empty ?', list.isEmpty());
console.log('List size ',list.getSize());
list.append(7);
list.append(34);
list.append(12);
list.display()
console.log("---");
list.desired(10,0);

list.display()
list.desired(70,1);

list.display()
console.log(list.size);
