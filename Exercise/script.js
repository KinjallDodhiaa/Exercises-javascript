/*1.Palindrome
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function isPalindrome(str) {
  let string = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let count = 0;
  if (string === "") {
    console.log("The string is empty");
    return false;
  }
  if (string.length % 2 === 0) {
    count = string.length / 2;
  } else if (string.length === 1) {
    console.log("The string is palindrome");
    return true;
  } else {
    count = (string.length - 1) / 2;
  }
  for (let i = 0; i < count; i++) {
    if (string[i] !== string.slice(-1 - i)[0]) {
      console.log("The string is not palindrome");
      return false;
    }
  }
  console.log("The string is palindrome");
  return true;
}

console.log(isPalindrome("nurses run"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("kinjal"));

/*2. Alphabetic order
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
*/
function alphabeticOrder(str) {
  return str.split("").sort().join("");
}

console.log(alphabeticOrder("webmaster"));

/*3. Reversed number
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/

function reverseNumber(n) {
  n = n + "";
  return n.split("").reverse().join("");
}

console.log(reverseNumber(10));

/*4. Longest word
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function longestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = 0;
  let word = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
      word = strSplit[i];
    }
  }
  return word;
}

console.log(longestWord("Web Development Program"));
console.log(longestWord("hi hello"));

/*5. Arrays
Write a JavaScript program to get an array of elements that appear in both arrays.
Example input: [1, 2, 3, 4], [1, 4, 6, 8]
Expected output: [1, 4]
*/

function commonOccurrence(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  return arr3;
}

console.log(commonOccurrence([1, 2, 3, 4], [1, 4, 6, 8]));
console.log(commonOccurrence([1, 2, 5, 8], [1, 4, 5, 8, 10]));

/*6. Unique values
Write a JavaScript program to filter out the non-unique values in an array.
Example input: [6, 1, 1, 4, 5, 6, 11, 10, 11, 8]
*/

function nonUniqueValues(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(nonUniqueValues([6, 1, 1, 4, 5, 6, 11, 10, 11, 8]));

/*7. Number to array of digits
Write a JavaScript program to converts a specified number to an array of digits.
Example input: 132123
Expected output: [1, 3, 2, 1, 2, 3]
white_tick
eyes
raised_hands
*/
