////////////////////////////////////////////////
// QUEUE
// class  Queue {
//     constructor (){
//        this.data = [];
//     }

//     add(record) {
//         this.data.unshift(record)
//     }

//     remove() {
//        return this.data.pop()
//     }

//     peek() {
//         return this.data[this.data.length -1]
//     }
// }

// function weave(sourceTwo, sourceTwo) {

//     const q = new Queue()

//     while (ConstantSourceNode.peek() || sourceTwo.peek()) {
//         if(sourceOne.peek()){
//             q.add(sourceOne.remove())
//         }

//         if(sourceTwo.peek()) {
//             q.add(sourceTwo.remove())
//         }
//     }
//     return q;
// }


// QUEUE V2

class Queue {
    constructor() {
        this.collection = [];
        this.print = function(){
            console.log(this.collection);
        }
    }

    enqueue(element){
        this.collection.push(element);
    }

    dequeue(){
        return this.collection.shift();
    }

    front(){
        return this.collection[0];
    }

    size(){
        return this.collection.length
    }

    isEmpty(){
        return (this.collection.length === 0)
    }

}

let q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

// Priority QUEUE 

class PriorityQueue {
    constructor() {
        this.collection = [];
        this.printCollection = function(){
            console.log(this.collection);
        }
    }

    enqueue(element){
        if(this.isEmpty()){
            this.collection.push(element)
        }else {
            let added = false;
            for(let i = 0; i < this.collection.length; i++){
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i,0,element)
                    added = true;
                    break;
                }
            }
            if(!added){
                this.collection.push()
            }
        }
    }

    dequeue(){

        let value = this.collection.shift();
        return value[0]
    }

    front(){
        return this.collection[0];
    }

    size(){
        return this.collection.length
    }

    isEmpty(){
        return (this.collection.length === 0)
    }

}

let pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();

////////////////////////////////////////////////
// STEPS --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// function steps(n) {
//     for(let row = 0; row < n; row++){
//         let stair = "";
  
//         for(let column = 0; column <n; column++){
//             if(column <= row){
//                 stair += "#";
//             }else{
//                 stair += " ";
//             }
//         }
//         console.log(stair)
//     }    
//   }
//   steps(8)
  
//  Recursion example;

// function prinNumber(n, dec = 1){
//     if(n === 0){
//         return;
//     }
//     console.log(n)
//     print(n - dec)
// }

/// Steps recursive solution



////////////////////////////////////////////////

// Write a function that accepts a string and capitalize the first letter of each word return the capitalized string

// function capitalize(str) {
//     const words = [];
//     for(let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ')
// }

//////////////
//second solution

// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for(let i =1; i < str.length; i++){
//         if(str[i - 1] === ' '){
//             result += str[i].toUpperCase();
//         }else{
//             result += str[i];
//         }
//     }
//  return result;
// }

////////////////////////////////////////////////
// Max chars
// const string = 'Hello There!';
// const chars = {};

//////////////

// for (let char of string){
//     if(!chars[char]){
//         chars[char] =1;
//     }else{
//         chars[char]++
//     }
// }

///////////////

// for (let char of string){
//     chars[char] = chars[char] + 1 || 1;
// }

////////////////

// function maxChar(str){
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';

//     for(let char of str){
//         if(charMap[char]){
//             charMap[char]++;
//         }else{
//             charMap[char] = 1;
//         }
//     }

//     for(let char in charMap){
//         if(charMap[char] > max){
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar
// }

////////////////////////////////////////////////

// Array chunks 
// Given an array and chunk size, divide the array into many subarrays ehere each subarray is of the length size 

// function chunk(){
//     chunked = [];
//     for(let element of array){
//         const last = chunked[chunked.length -1];

//         if(!last || last.length === size){
//             chunked.push([element])
//         }else{
//             last.push(element)
//         }
//     }
//     return chunked;
// };

// second implementation

// function chunk(array, size){
//     const chunked = [];
//     let index = 0;

//     while(index < array.length){
//         chunked.push(array.slice(index, index + size));
//         index += size;
//     }
//     return chunked;
// }

////////////////////////////////////////////////

// function anagrams(stringA, stringB){
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Objevt.keys(bCharMap).length){
//         return false;
//     }

//     for (let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }
//     return true;

// }

// function buildCharMap(str){
//     const charMap = {};
//     for(char of str.replace(/[^\w]/g, '').toLowerCase()){
//         if(!charMap[char]){
//             charMap[char] = charMap[char] + 1 || 1;
//         }
//     }
//     return charMap
// }

////////////////////////////////////////////////

// // Revrse String
// // given a string, return  a new string with the reversed order of characters 

// /////
// function reverse(str){
//     return str.split('').reverse().join(' ')
// }

// ////
// function reverse(str){
//     let reversed = []
//     for(char of str){
//         reversed.push(char);
//     }
//     return reversed.join('');
    
// }

// ////
// function reverse(str){
//     let reversed = []
//     for(char of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// ////
// function reverse(str){
//     str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     },'');
// }

// ////////////////////////////////////////////////
// // Is Palindrome
// //given a string 

// function palindrome(str){
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

////

// function palindrome(str){
//     return str.split('').every((char, i)=>{
//         return char === str[str.length -i -1]
//     })
// }