class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node;
    }

    // insertion
    insert(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            let chatToInsert = word[i];
            if(!(chatToInsert in current.children)) {
                current.children[chatToInsert] = new Node;
            }

            current = current.children[chatToInsert];
        }

        current.isWordEnd = true;
    }

    // search a complete word
    contain(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if(!(charToFind in current.children)) {
                return false;
            }

            current = current.children[charToFind];
        }

        return current.isWordEnd;
    }

    // search a partial word
    startWithPrefix(prefix) {
        let current = this.root;
        for(let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if(!(charToFind in current.children)) {
                return false;
            }

            current = current.children[charToFind];
        }

        return true;
    }

    // delete a word
    delete(word) {
        const stack = [];
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if(!(char in current.children)) {
                return false;
            }
            stack.push({node: current, char});
            current = current.children[char];
        }
        if(!current.isWordEnd) {
            return false;  // word not found
        }
        current.isWordEnd = false;
        if (Object.keys(current.children).length > 0) {
            return false;
        }
        for(let i = stack.length - 1; i >= 0; i--) {
            const { node, char } = stack[i];
            delete node.children[char];
            if (node.isWordEnd || Object.keys(node.children).length > 0) {
                break;
            }
        }
        return true;

    }
}
const tr = new Trie();
tr.insert("pa");
tr.insert("pr");


console.log(tr.root.children);
console.log(tr.contain('pa'));
console.log(tr.startWithPrefix('al'));
// console.log(tr.root);
tr.delete("pr");
console.log(tr.root.children);