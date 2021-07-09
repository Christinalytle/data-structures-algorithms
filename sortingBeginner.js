 //JS sort method
 //needs a parameter 
 function numberCompare(num1, num2) {
     return num1 - num2; 
 }

 [6,4,15,10].sort(numberCompare); 

 function compareByLen(str1, str2) {
     return str1.length - str2.length;
 
 }

 ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen); 

 //swaping values 
 function swap(arr, idx1, idx2) {
     var temp = arr[idx1]; 
     arr[idx1] = arr[idx2]; 
     arr[idx2] = temp; 
 }

 const swap2 = (arr, idx1, idx2) => {
     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
 }

 //bubble sort
 function bubbleSort(arr) {
     var noSwaps; 
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true; 
       for (var j = 0; j < i -1; j++) {
           console.log(arr, arr[j], arr[j+1]); 
           if(arr[j] > arr[j+1]) {
               //swap
               var temp = arr[j]; 
               arr[j] = arr[j+1]; 
               arr[j+1] = temp; 
               noSwaps = false; 
           }
       }
       console.log("One Pass Complete")
       if(noSwaps) break; 
    }
    return arr; 
}

bubbleSort([37,45,29,8, 12, 99, -3]); 

//O(n) complexity 

//Selection sort 
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i; 
        for (var j = i+1; j < arr.length; j++) {
           if(arr[j] < arr[lowest]) {
                lowest = j
            }
        }
            if (i !== lowest) {
                var temp = arr[i]; 
                arr[i] = arr[lowest]; 
                arr[lowest] = temp; 
        }
    }
    return arr; 
}

selectionSort([0,2,34,22,10,19,17])

//O(n2)

//Insertion Sort
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]; 
        for ( var j=i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal; 
    }
    return arr; 
}

insertionSort([2,1,9,76,4])
//O(n2) 