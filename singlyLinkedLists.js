//piece of data - val
//reference to next node - next 

class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; //have to set the "arrow" to nothing, then you can add arros
    }
   
}

class SinglyLinkedList{
    constructor() {
        this.head = null; 
        this.tail= null; 
        this.length= 0; 
    }
    
    push(val) { //add an element to the end
        var newNode = new Node(val); 
        if(!this.head) {
            this.head = newNode; 
            this.tail = this.head; 
        } else {
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.length ++; 
        return this; 
    }
    
    traverse() {//loop thru the list
        var current = this.head;
        while(current) {
            console.log(current.val); 
            current = current.next;  

        }
    }

    pop() { //remove element at the end
        if(!this.head) return undefined; 
        var current = this.head; 
        var newTail = current; 
        while(current.next) {
            newTail = current; 
            current = current.next; 
        }
        this.tail = newTail; 
        this.tail.next = null; //have to delete the "arrow"
        this.length --; 
        if(this.length === 0) {
            this.head = null; 
            this.tail = null; 
        }
        return current; 
    }

    shift() { //remove element at the beginning 
        if(!this.head) return undefined; 
        var currentHead = this.head; 
        this.head = currentHead.next; 
        this.length --; 
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead; 
    }

    unshift(val) { //add value at the beginnig
        var newNode = new Node(val); 
        if(!this.head) {
            this.head = newNode; 
            this.tail = this.head; 
        } else {
            newNode.next = this.head; //updated the connection
            this.head = newNode;
        }  
        this.length ++; 
        return this; 
    }

    get(index) { //find the word of an index that is wanted (what is in position 3?)
        if(index < 0 || index >= this.lengh) return null; 
        var counter = 0; 
        var current = this.head; 
        while(counter !== index) {
            current = current.next; 
            counter ++; 
        }
        return current; 
    }

    set(index, val) { //changing the value of the node based on the position
       var foundNode = this.get(index); 
       if(foundNode) {
           foundNode.val = val; 
           return true; 
       }
       return false; 
    }

    insert(index, val) { //add an element anywhere in the list
        if(index < 0 || index > this.length) return false; 
        if (index === this.length) return !!this.push(val); //makes this a boolean now (bang, bang)
        if(index === 0) return !!this.unshift(val); 
        var newNode = new Node(val); 
        var prev = this.get(index - 1); 
        var temp = prev.next; 
        prev.next = newNode; 
        newNode.next = temp; 
        this.length ++; 
        return true; 
    }

    remove(index) {  //remove an element anywhere in the list
        if(index < 0 || index >= this.length) return undefined; 
        if (index === 0) return this.shift(); 
        if(index === this.length -1) return this.pop(); 
        var previousNode = this.get(index - 1); 
        var removed = previousNode.next; 
        previousNode.next = removed.next; 
        this.length --; 
        return removed; 
    }
    reverse(){ //reverse the order of the list (hello, say, or, !, goodbye, Hello)
        var node = this.head; 
        this.head = this.tail; 
        this.tail = node; 
        var next; 
        var prev = null; 
        for(var i = 0; i < this.length; i++) {
            next = node.next; 
            node.next = prev; 
            prev = node; 
            node = next; 
        }
        return this; 
       
    }

    print() { //prints the list into an array for easy console view
        var arr = []; 
        var current = this.head; 
        while(current) {
            arr.push(current.val); 
            current = current.next; 
        }
        console.log(arr); 
    }

    
}


let list = new SinglyLinkedList(); 
list.push("Hello"); 
list.push("Goodbye"); 
list.push("!"); 
list.push("or"); 
list.push("say"); 
list.push("hello")
