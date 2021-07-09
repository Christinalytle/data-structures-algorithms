// function charCount(str) {
//     var result = {}; 
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase(); 
//         if (/[a-z0-9]/.test(char)){
//             if (result[char] > 0) {
//                 result[char]++; 
//             }
//             else {
//                 result[char] = 1; 
//             };
//         }
//     }
//     return result; 
// }

//h:1, e:1, l:2, o:1 

function charCount(str) {
    let object = {}; 
    for (let char of str) { 
        if (isAlphaNumeric(char)){
            char = char.toLowerCase();
            object[char] = ++object[char] || 1; 
        }
    }
    return object; 
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0); 
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false; 
        } 
        return true; 
}

charCodeAt(0)

//regular expressions can be tricky with different browsers

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false; //if the two arrays have different lenghths then return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctInkdex === -1 ) {
            return false; 
        }
        arr2.splice(correctIndex, 1)
    }
    return true 
} //O(n2) time (try to avoid nested loops as much as possible)

function same2(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}; //use two objects - count the frequency of indiviudal of arrays, how many numbers
    //show up in the array
    let frequencyCounter2 = {}; 
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key **2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true; 
} //O(n)

//Anagrams
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false; 
    }
    const lookup = {}; 
    for ( let i = 0; i < first.length; i++) {
        let letter = first[i]; 
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i]; 
        //camt find letter or letter is zero then it's not an anagram
        if (!lookup[letter]){
            return false; 
        } else {
            lookup[letter] -= 1;
        }
    }
    return true; 
}

//loop over the first string, take the first character and if it's not in it add 1, if it is add another 1
//a:2
//n:1
//g:1
//r:1
//loop over second string, if they find a letter then subtract the number from the new object

//[-4,-3,-2,-1,0,1,2,5], looking for variables in an array
//"alksjdalksjdlkasjdlks"

//Write a function called sumZero which accepts a sorted array of integers. The function should
///find the first pair where the sum is 0. Return an array that includes both values that sum to zero 
//or undefined if a pair does not exist

//sumZero([-3,-2,-1,0,1,2,3]) //[-3,3] (3 -3 equals zero)
//sumZero([-2,0,1,3]) //undefined 

function sumZero(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]; 
            }
        }
    }
}

function sumZero(arr) {
    if (arr.length == 0) {
        return 0; 
    }
    let left = 0; 
    let right = arr.length - 1; 
    while (left < right) {
        let sum = arr[left] + arr[right]; 
        if(sum === 0){
            return [arr[left], arr[right]]; 
        } else if (sum > 0) {
            right--; 
        } else {
            left ++; 
        }
    }
}

//function that counts unique values in an sorted array
//contUniqueValues([1,1,1,1,1,2]) //2
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7

function countUniqueValues2(arr) {
    var i = 0; 
    for (var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++; 
            arr[i] = arr[j]
        }
        console.log(i,j); 
    }

}

let arr = [1,1,2,3,3,4,5,6,6,7]

//maxSubarraySum, takes an arry and a number, calculate the maximum sum of n consectuive elements in an arry
//maxSubarraySum([1,2,5,2,8,1,5], 2) //10 (8+2)
//maxSubarraySum([1,2,5,2,8,1,5], 4) //17 (2+5+2+8)

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null; 
    } 
    var max = -Infinity; 
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0; 
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]; 
        }
        if (temp > max) {
            max = temp; 
        }
    }
    return max; 
}

function maxSubarraySum2(arr, num) {
    let maxSum = 0; 
    let tempSum = 0; 
    if (arr.length < num) {
        return null; 
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]; 
    }
    tempSum = maxSum; 
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]; 
        maxSum = Math.max(maxSum, tempSum); 
    }
    return  maxSum; 
}