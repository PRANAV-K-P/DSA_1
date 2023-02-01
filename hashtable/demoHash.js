class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    // adding value to hashtable
    set(key, value) {
        const index = this.genHash(key);
        this.table[index] = value;
    }
    // printing all the values
    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
    // retrieving particular value using its key
    get(key) {
        const index = this.genHash(key);
        return this.table[index];
    }
    // retrieving particular value using its key
    remove(key) {
        const index = this.genHash(key);
        this.table[index] = undefined;
    }
    // generating index using key
    genHash(key) {
        let sum = 0;
        for(let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum % this.size;
    }
}

const hash = new hashTable(3);
hash.set("key1","red");
hash.set("key2",90);
hash.set("key3",78);
hash.display();
hash.remove("key2");
console.log("After revomal");
hash.display();



