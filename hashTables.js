//hash("pink")  --how to convert a string to a number
//every character has a code 

// "a".charCodeAt(0); -- 97
// "hi".charCodeAt(0); --104 (h)

// total += "hello".charCodeAt(0) -96 //8
// total += "hello".charCodeAt(1) -96 //13
// total += "hello".charCodeAt(2) - 96 //25

//take the total of the length of the array and mode % the total

// function hash(key, arrayLen) {
//     let total = 0; 
//     for (let char of key) {
//         let value = char.charCodeAt(0) -96; 
//         total = (total + value) % arrayLen; 
//     }
//     return total; 
// }

// function hash(key, arrayLen) {
//     let total = 0; 
//     let WEIRD_PRIME = 31; 
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i]; 
//         let value = char.charCodeAt(0) - 96
//         total = (total * WEIRD_PRIME + value) % arrayLen; 
//     }

//     return total; 
// }

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size); 
    }

    _hash(key) {
        let total = 0; 
        let WEIRD_PRIME = 31; 
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]; 
            let value = char.charCodeAt(0) - 96; 
            total = (total * WEIRD_PRIME + value) % this.keyMap.length; 
        }

        return total; 
    }

    set(key, value) {
        let index = this._hash(key); 
        // [ , ,[[key,value]] , , , , ], insert an array into an array at the position of index
        if (!this.keyMap[index]) {
            this.keyMap[index] = []; 
        }
        this.keyMap[index].push([key, value]); 
    }
    get (key) {
        let index = this._hash(key); 
        if (this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; 
                }
            }

        }
        return undefined; 
    }

    values() {
        let valuesArr = []; 
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]) //no dupiclates 
                    }
                    
                }
                
            }
        }
        return valuesArr; 
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keysArr.includes(this.keyMap[i][j][0])){
                keysArr.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keysArr;
      }
}

let ht = new HashTable(17); 
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")