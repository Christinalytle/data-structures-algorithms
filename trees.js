class Node {
    constructor(value) {
        this.value = value; 
        this.left = null; 
        this.right = null; 
    }
}

class BST {
    constructor() {
        this.root = null; 
    }

    // insert(value) {
    //     var newNode = new Node(value); 
    //     if(this.root === null) {
    //         this.root = newNode; 
    //         return this; 
    //     } else {
    //         //check if there is a root, then check the left side, compare the child, then check the left/right, then add
    //         var current = this.root; 
    //         while(true) {
    //             if(value === current.value) return undefined; 
    //             if(value < current.value) {
    //                 if(current.left === null) {
    //                     current.left = newNode; 
    //                     return this; 
    //                 } else {
    //                     current = current.left; 
    //                 }
                    
    //             } else if (value > current.value) {
    //                 if(current.right === null) {
    //                     current.right = newNode; 
    //                     return this;
    //                 } else {
    //                     current = current.right; 
    //                 }
    //             }
    //         }
    //     }
    // }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value) {
        if(this.root === null) return false; 
        var current = this.root, 
            found = false; 
        while(current && !found) {
            if(value < current.value) {
                current = current.left; 
            } else if (value > current.value) {
                current = current.right; 
            } else {
                found = true; 
            }
        }
        if(!found) return undefined; 
        return current; 
    }

    BFS() {  //breadth first search, going across the tree 
        var data = [], queue = [], node = this.root; 
        queue.push(node); 
        while(queue.length) {
            node = queue.shift(); 
            data.push(node); 
            if(node.left) queue.push(node.left); 
            if(node.right) queue.push(node.right); 
        }
        return data; 
    }

    preOrder() { //depth first search preOrder, going down the tree, adding the first (root) node first
        var data = []; 
        var current = this.root; 
        function traverse(node) {
            data.push(node.value); 
            if (node.left) traverse (node.left); 
            if(node.right) traverse(node.right); 
        }
        traverse(current); 
        return data; 
    }
    //[10, 6, 3, 8, 15, 20]
    postOrder() {  //depth first search, post order, going down the tree, but add the last node first
        var data = []; 
        function traverse(node) {
            if(node.left) traverse(node.left); 
            if(node.right) traverse(node.right); 
            data.push(node.value); 
        }

        traverse(this.root); 
        return data; 
    }
    //[3,8,6,20,15.10]
    inOrder() {  //depth first search, in order, going down the tree, but add a node in the order
        var data = []; 
        function traverse(node) {
            if(node.left) traverse(node.left); 
            data.push(node.value); 
            if(node.right) traverse(node.right); 
        }

        traverse(this.root); 
        return data; 
    }
    //[3, 6, 8, 10, 15, 20]
}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

       //10
    //6      15
//3     8        20