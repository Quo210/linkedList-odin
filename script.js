class LinkedList {
    constructor(){
        this.name = 'Linked List';
        this.size = 0;
        this.headNode = null;
    };
    append(node){
        let selector;
        let myNode = node;
        let instanceCheck = node instanceof Node;
        console.log(node,'is this an instance of class Node?',instanceCheck)
        if(!instanceCheck){
            myNode = new Node(node);
        }
        let headNode = this.headNode;
        if(headNode == null){//Placing the selector 
            this.headNode = myNode;
            this.size++
        } else {
            selector = this.#findLast(headNode);
            console.log('Last node fonund was',selector)
            selector.nextNode = myNode
            this.size++
        }
        return this
    };
    preprend(val){
        let oldHead = this.headNode;
        let newNode = new Node(val);
        if(oldHead == null){
            this.headNode = newNode;
            this.size++
        } else {
            newNode.next = oldHead;
            this.headNode = newNode;
            this.size++
        }
        return this
    };
    /* ------------------------ */
    get listSize(){
        return 'This list has a size of ' + this.size;
    };
    get head(){
        return this.headNode
    };
    set head(val){
        this.headNode = val;
    };
    get tail(){
        if(this.headNode == null){
            return null
        }
        const lastNode = this.#findLast(this.headNode);
        return lastNode
    };
    /* ------------------------ */
    at(index){
        const store = this.#mkNodeArray();
        return (store[index])? store[index] : 'Not found'; 
    };
    pop(){//Using Arrays
        const list = this.#mkNodeArray();
        console.log('List used:',list)
        if(list.length>=2){
            list[list.length-2].next = null;
            this.size--;
        } else {
            this.headNode = null;
            this.size = 0
        }
        return this
    };
    popV2(){// Not using Arrays
        let init = this.headNode;
        if(!init || !init.nextNode){
            this.headNode = null;
            return false
        }
        let next = init.nextNode;
        while(next.nextNode){
            init = next;
            next = next.nextNode;
        }
        init.next = null;
        return this.#mkNodeArray();
    };
    contains(value){
        let init = this.headNode;
        let result = false;
        while(init != null && result != value){
            result = init.data;
            init = init.nextNode;
            console.log('cycling',result,init)
        }
        return (result == value)? true : false;
    };
    find(value){
        let arr = this.#mkNodeArray();
        let res = false;
        for (let i = 0; res != true && i < arr.length; i++){
            (arr[i].data == value)? res = true : false
        } return res
    };
    toString(){
        let init = this.headNode;
        let storeString = '';
        while (init !== null && init.data){
            console.log(init)
            storeString += `( ${init.data} } -> `;
            init = init.nextNode;
        }
        return storeString += 'null'
    };
    #findLast(node){
        console.log('#findLast execution on',node)
        let lastNode;
        if(node.nextNode != null){
            lastNode = this.#findLast(node.nextNode)
        } else {
            lastNode = node;
        }
        return lastNode
    };
    #mkNodeArray(){
        const head = this.headNode;
        if(head == null){
            console.error('This list is empty.')
            return false
        }
        const store = [head];
        let target = head;
        while(target.nextNode != null){
            target = target.nextNode;
            store.push(target)
        }
        return store;
    };
};

class Node {
    constructor(data, nextOne = null){
        this.data = data; 
        this.nextNode = nextOne;
    };
    set next(val){
        this.nextNode = val
    }
};

const myList = new LinkedList();
myList.append(2);
myList.preprend(1);
myList.append(3);
console.log(myList);
