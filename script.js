class LinkedList {
    constructor(){
        this.name = 'Linked List',
        this.size = 0
        this.headNode = null
    }

    append(value){
        let selector;
        let myNode = new Node(value);
        let headNode = this.headNode;
        if(headNode == null){//Placing the selector 
            this.headNode = myNode;
            selector = headNode;
            this.size++
        } else {
            selector = this.#findLast(headNode);
            selector.nextNode = myNode
            this.size++
        }
        
    }

    get head(){
        return this.headNode
    }

    set head(val){
        this.headNode = val;
    }

    #findLast(node){
        let lastNode;
        if(node.next != null){
            lastNode = this.#findLast(node.next)
        } else {
            lastNode = node;
        }
        return lastNode
    }

}

class Node {

    constructor(data, nextOne = null){
        this.data = data, 
        this.nextNode = nextOne
    }


}

const a = new LinkedList();
console.log(a)