//stacks - last in, first out (undo/redo)

let stack = []; 

stack.push("google.com"); 
stack.push("instagram"); 
stack.push("youtube");

//remove youtube first 
stack.pop(); 
stack.push("amazon"); 
stack.pop(); 

//shift and unshift(add the begining, remove from the beginning)
//shouldn't use an array, not effencint. Linked list is the best

//Linked list implementation 
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}

class Stack {
    constructor() {
        this.first = null; 
        this.last = null; 
        this.size = 0; 
    }

    push(val) {
        var newNode = new Node(val); 
        if (!this.first) {
            this.first = newNode; 
            this.last = newNode; 

        } else {
            var temp = this.first; 
            this.first = newNode; 
            this.first.next = temp; 
        }
        return ++this.size; 
    }

    pop() {
        if (!this.first) return null; 
        var temp = this.first; 
        if (this.first == this.last) {
            this.last = null; 
        } else {
            this.first = this.first.next; 
        }
        this.size --; 
        return temp.value;

    }

}

let stack = new Stack(); 
stack.push(88); 
stack.push(70); 

//Queue
var q = []; 
q.push("First"); 
q.push("Second"); 
q.push("Third"); 
q.shift(); 

//unshift and pop

class Queue {
    constructor() {
        this.first = null; 
        this.last = null; 
        this.size = 0; 

    }
    endqueue(val) { //add at the end
        var newNode = new Node(val); 
        if (!this.first) {
            this.first = newNode; 
            this.last = newNode; 
        } else {
            this.last.next = newNode; 
            this.last = newNode; 
        }
        return ++this.size; 
    }

    delqueue() { //remove at the beginning
        if(!this.first) return null; 
        var temp = this.first; 
        if (this.first === this.last) {
            this.last = null; 
        } 
        this.first = this.first.next; 
        this.size --; 
        return temp.value; 
    }
}