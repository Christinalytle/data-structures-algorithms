//Node, -val, -next, -prev
//doubly, -head, -tail, -length

class Node {
    constructor(val){
        this.val = val; 
        this.next = null; 
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    push(val) { //add new node to the beginning 
        var newNode = new Node(val); 
        if (this.length === 0) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode; 
            newNode.prev = this.tail; 
            this.tail = newNode; 
        }
        this.length ++; 
        return this; 
    }

    pop() { //delete node at the end of list
        if(!this.head) return undefined; 
        var poppedNode = this.tail; 
        if (this.length === 1) {
            this.head = null; 
            this.tail = null
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null; 
            poppedNode.prev = null; 
        }
        this.length --; 
        return poppedNode; 
    }
    
    shift() { //remove at the beginning of the list
        if(this.length === 0) return undefined; 
        var oldHead = this.head; 
        if(this.length === 1) {
            this.head = null; 
            this.tail = null; 
        } else {
            this.head = oldHead.next; 
            this.head.prev = null; 
            oldHead.next = null; 
        }
        this.length --; 
        return oldHead; 
    }
    unshift(val) { //add node to the beginning
        var newNode = new Node(val); 
        if (this.length === 0) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.head.prev = newNode; 
            newNode.next = this.head; 
            this.head = newNode; 
        }
        this.length++; 
        return this; 
    }

    get(index) {  //the the number at an index the user puts in (what's at index 0?)
        if (index < 0 || index >= this.length) return null; 
        var count, current; 
        if(index <= this.length/2) {
            console.log("Working from start")
            count = 0; 
            current = this.head; 
            while(count != index) {
                current = current.next; 
                count ++; 
            }
        } else {
            console.log("Working from end")
            count = this.length - 1; 
            current = this.tail; 
            while(count !== index) {
                current = current.prev; 
                count --; 
            }    
        }
        return current; 
    }

    set(index, val) { //change a value in the list
        var foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val; 
            return true; 
        }
        return false; 
    }

    insert(index, val) {  //put a value into the list at any point
        if (index < 0 || index > this.length) return false; 
        if (index === 0) return !!this.unshift(val); 
        if (index === this.length) return !!this.push(val); 

        var newNode = new Node(val); 
        var beforeNode = this.get(index - 1); 
        var afterNode = beforeNode.next; 

        beforeNode.next = newNode; 
        newNode.prev = beforeNode; 
        newNode.next = afterNode; 
        afterNode.prev = newNode; 
        this.length ++; 
        return true; 
    }
    remove(index) { //remove any obejct in the list by index
        if (index < 0 || index >= this.length) return false; 
        if(index === 0) return this.shift(); 
        if (index === this.length-1) return this.pop(); 
        var removedNode = this.get(index); 
        removedNode.prev.next = removedNode.next; 
        removedNode.next.prev = removedNode.prev; 
        removedNode.next = null; 
        removedNode.prev = null; 
        this.length --; 
        return removedNode; 
    }

}

let list = new DoublyLinkedList(); 
list.push("Harry"); 
list.push("Ron"); 
list.push("Hermione"); 
list.push("Trevor"); 
list.push("Sirius"); 
list.push("Lupin"); 