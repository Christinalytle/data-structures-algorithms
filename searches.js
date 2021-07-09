//finding a string (like a state) in an array, from start to the end
//indexOf, includes, find, findIndx

//linear search ([], 4) loop through the array, if i = n  return index of i
function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i; 
        }
    }
    return -1; 

}

linearSearch([34,54,81], 81);
//O(n)

//time complexity

//Binary Search

function binarySearch(arr, elem) {
    var start = 0; 
    var end = arr.length - 1; 
    var middle = Math.floor((start + end) / 2); 
    while (arr[middle] !== elem && start <= end) {
        if(element < arr[middle]) {
            end = middle - 1; 
        } else {
            start = middle + 1; 
        }
        middle = Math.floor((start + end) / 2); 
    }
    if (arr[middle] === elem) {
        return middle; 
    }
    return -1;  
}

function binarySearch(arr, elem) {
    var start = 0; 
    var end = arr.length - 1; 
    var middle = Math.floor((start + end) / 2); 
    while (arr[middle] !== elem && start <= end) {
        if(element < arr[middle]) end = middle - 1;  
        else start = middle + 1;
        middle = Math.floor((start + end) / 2); 
    }
    return arr[middle] === elem ? middle : -1;  
}

binarySearch([2,5,6,9,12,15,29], 15)

//worst and average O(log n) best O(1)
//log n is really good