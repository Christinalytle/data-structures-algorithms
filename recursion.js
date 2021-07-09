function countDown(num){
    if(num <= 0) {
        console.log("All Done!"); 
        return; 
    }
    console.log(num); 
    num--; 
    countDown(num); 
}

//print 3
//num - 1
//countDown(2); 
//print 2
//num - 1
//countDown(1); 
//print 1
//num - 1 
//countDown(0); 
//All Done

countDown(3); 

function sumRange(num) {
    if(num === 1) return 1; 
    return num + sumRange(num-1); 
}

//iterativley
function factorial(num){
    let total = 1; 
    for (let i = num; i > 1; i --) {
        total *=i;
    }
    return total;
}

//recursive 
function factorial(num) {
    if(num === 1) return 1; 
    return num * factorial(num - 1); 

}


//helper functions 
function outer(input) {
    var outerScropedVariable = []; 
    function helper(helperInput) {
        helper(helperInput --)
    }
    helper(input) 
    return outerScropedVariable; 
}

function collectOddValues(arr){
    let result = []; //this helps not having the array reset everytime the function is called
    function helper(helperInput) {
        if(helperInput.length === 0) {
            return; 
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr); 
    return result; 
}

collectOddValues([1,2,3,4,5,6,7,8,9])

function collectOddValues2(arr) {
    let newArr=[]; 
    if (arr.length === 0) {
        return newArr; 
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]); 
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1))); 
    return newArr; 
}

//[1].concat(collectOddvalues[2,3,4,5])
        //[].contact(collectOddvalues([3,4,5]))
                //[3].contact(collectOddValues[4,5])
                   //[].contact(collectionOddValues[5])
                       //[5].contact([])
                //5 is concat with []
            //[3] is concat with [3,5]
    //[1] is concat with [1,3,5]

collectOddValues([1,2,3,4,5])
