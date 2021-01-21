/** 
Write a function that gets the array as input
and reverse version of the array should return as output
use push and pop
["Banana", "Orange", "Apple", "Mango"];  =>  ["Mango", "Apple", "Orange", "Banana"]
*/

function reverseArray(arr) {
  let outputArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    outputArr.push(arr.pop());
  }
  return outputArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

/**/ /Reverse the original array (without using a second array [to save some space in main memory]) */;
function reverseArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr[arr.length - 1]);
    arr.pop();
  }
  return arr;
}
console.log(reverseArray2([1, 2, 3, 4, 5]));
