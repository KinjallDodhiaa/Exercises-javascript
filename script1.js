/** 
Write a function that gets the array as input
and reverse version of the array should return as output
use push and pop
["Banana", "Orange", "Apple", "Mango"];  =>  ["Mango", "Apple", "Orange", "Banana"]
*/

function reverseArray(arr){
    let output=[];
    for(let i=arr.length-1;i>=0;i--){
        output.push(arr.pop());
    }
    return output;
}

console.log(reverseArray(["Banana", "Orange", "Apple", "Mango"]));

/** Reverse the original array (without using a second array [to save some space in main memory]) */
function reverseArray2(arr) {
    for(let i=0;i<arr.length;i++){
        arr.splice(i,0,arr[arr.length-1]);
        arr.pop();
    }
    return arr;
}
console.log(reverseArray2([1,2,3,4,5]));