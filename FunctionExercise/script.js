/*1.Multiply
Write a function that accepts two numbers and validate that they are numbers.
Create a function that multiples a number by another number.
Rework the syntax of the function declaration so that is uses the arrow function shorthand  
(browse the internet for what an arrow function is).
*/
function isANumber(n1) {
  return typeof n1 === "number";
}
function areNumbers(n1, n2) {
  return isANumber(n1) && isANumber(n2);
}
function multiply(n1, n2) {
  if (!areNumbers(n1, n2)) {
    throw Error(`${n1}&${n2} are not numbers`);
  } else {
    return n1 * n2;
  }
}

console.log(multiply(2, 3));
//console.log(multiply('hi','hello'));

/*2.Exponent
Create a function named exponent that takes two numbers as parameters. 
The second parameter defines how many times the first number should be multiplied by itself. 
Save the output in a variable named result.
*/
function exponent(n1, n2) {
  let result = 1;
  for (let i = 1; i <= n2; i++) {
    result *= n1;
  }
  return result;
}
console.log(exponent(2, 3));

/*3.Add Up. Create a function that takes an integer as an argument. 
Add up all the integers from 1 to the integer you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples:
sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300
*/

function sumIntFrom1ToN(int) {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));

/*4.4.Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
Examples:
sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8
sumOfCubes() ➞ 0
*/

function sum_Of_Cubes(n) {
  var sumn = 0;

  for (var i = 1; i <= n; i++) {
    sumn = Math.pow(i, 3);
  }
  return sumn;
}

console.log(sum_Of_Cubes(2));
console.log(sum_Of_Cubes(4));

/*5.String Check. Create a function that takes a string and a word, 
and then returns true or false depending on whether the word starts with the initial string.
Examples:
isStrStartOfWord("bu", "button") ➞ true
isStrStartOfWord("tri", "triplet") ➞ true
isStrStartOfWord("beau", "pastry") ➞ false
*/

function isStrStartOfWord(str, word) {
  return word.startsWith(str);
}
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("My", "Kinjal"));

/*Less Than or Equal to Zero? 
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
otherwise return false.
Examples:
isLEQZero(3) ➞ false
isLEQZero(0) ➞ true
isLEQZero(-4) ➞ true
isLEQZero(10) ➞ false
*/

function lessThnOrEqualToZero(n) {
  return n <= 0;
}
console.log(lessThnOrEqualToZero(9));

/*6.Count Occurrences. Create a function that accepts two arguments: a string and a letter. 
The function should count the number of occurrences of that letter in the string.
Example:
countOccurrences("this is a string", "i") ➞ 3
*/

function countOccurrences(str, letter) {
  let letterCount = 0;
  let string = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (string.charAt(i) === letter.toLowerCase()) {
      letterCount = letterCount + 1;
    }
  }
  return letterCount;
}

console.log(countOccurrences("kinjal", "k"));
console.log(countOccurrences("Miami", "M"));
