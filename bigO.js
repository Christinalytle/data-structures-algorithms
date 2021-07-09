function addUpTo(n) {
    let total = 0; //1 assignment
    for (let i =1; i <= n; i++) { //n additions, n assignments
        total += i; //n opperations, n assigments
    }
    return total; 
} //not a constant number of operations this is O(n)

function addUpToo(n) {
    return n * (n + 1) /2; 
} //there are three operations //this is= O(1)

//the number of opperations the computer has to preform
//focus on the big picture

function countUpAndDown(n) {
    console.log("Going up!");; 
    for (let i = 0; i < n; i++) {
        console.log(i); 
    } //O(n)
    console.log("At the top! \n Going down..."); 
    for (let j = n -1 ; j >= 0; j--) {
        console.log(j);
    } //0(n)
    console.log("Back down. Bye!"); 
} //O(n)

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j=0; j < n; j++) {
            console.log(i,j); 
        }
    }
} //nested O(n) is O(n2) 

function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5,n); i++) {
        console.log(i); 
    }
} //it will loop and go to 5 or whatever larger, it's O(n)

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5,n); i++) {
        console.log(i); 
    }
} //it will loop and print 5 or less if the number is less
//O(1)

function sum(arr) {
    let total = 0; //one number 
    for (let i = 0; i < arr.length; i++) { //another number
        total += arr[i]; 
    }
    return total;
} //O(1) space 

function double(arr) {
    let newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]); 
    }
    return newArr; 
} //doubled the numbers, and puts in a new array
//the space is determined by how big the array input is
//O(n)

let instructor = {
    firstName: "Kelly", 
    isInstructor: true, 
    favoriteNumbers: [1,2,3,4]
}

Object.keys(instructor); //O(n)
Object.values(instructor); //O(n)
Object.entries(instructor)//O(n)
instructor.hasOwnProperty("firstName") //O(1)

 let names = ['Michael', 'Melissa', 'Andrea']; 
 let values = [true, {}, [], 2, 'awesome']; 