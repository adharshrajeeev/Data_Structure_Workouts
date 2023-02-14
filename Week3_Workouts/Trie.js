class Node{
    constructor(){
        this.children={}
        this.endOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
          if (!node.children[char]) {
            node.children[char] = new Node();
          }
          node = node.children[char];
        }
        node.endOfWord = true;
      }


      search(word) {
        let node = this.root;
        for (let char of word) {
          if (!node.children[char]) {
            return false;
          }
          node = node.children[char];
        }
        return node.endOfWord;
      }
}

const newNode=new Trie();
newNode.insert("word");
newNode.insert("owl");
newNode.insert("lower");
console.log(newNode.search("owl"))