//recursive - Big O = 0(2^n) super bad
function fib(n) {
    if(n <= 2) return 1; 
    return fib(n-1) + fib(n-2); 
}
//we are repeating a lot of calculations 

function fib(n, memo=[]) {
    if(memo[n] !== undefined) return memo[n]; //is the number in the memo array?
    if (n <= 2) return 1; //base case
    var res = fib(n-1, memo) + fib(n-2, memo); //fib(4) and fib(3), fib(2) return 1, memo then has 1 
    //in the second index, memo then has 1 in the first index, fib(3) is 2, index three then has a 2 in it
    memo[n] = res; 
    return res; 
}


//Memoization - Big O = O(n) 
function fib2(n, memo=[undefined, 1, 1]) {
    if(memo[n] !== undefined) return memo[n]; //is the number in the memo array?
    var res = fib(n-1, memo) + fib(n-2, memo); //fib(4) and fib(3), fib(2) return 1, memo then has 1 
    //in the second index, memo then has 1 in the first index, fib(3) is 2, index three then has a 2 in it
    memo[n] = res; 
    console.log(memo); 
    return res; 
}