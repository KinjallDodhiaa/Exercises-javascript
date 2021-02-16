//Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countTrue([true, false, true, true]));
console.log(countTrue([false, false, false, false]));

/*Create a function that returns true if a string contains any spaces. 
Examples hasSpaces("hello") ➞ false hasSpaces("hello, world") ➞ true hasSpaces(" ") ➞ true 
hasSpaces("") ➞ false hasSpaces(",./!@#") ➞ false Notes An empty string does not contain any spaces. 
Try doing this without RegEx.
*/
function hasSpaces(str) {
  if (str.indexOf(" ") >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(hasSpaces("hello"));
console.log(hasSpaces("hello world"));

/**Create a function that returns the ASCII value of the passed in character. 
Examples ctoa("A") ➞ 65 ctoa("m") ➞ 109 ctoa("[") ➞ 91 ctoa("") ➞ 92 Notes Don't forget to return the result.*/
function ctoa(letter) {
  return letter.charCodeAt();
}
console.log(ctoa("A"));
console.log(ctoa("a"));

/**Create a function that removes the first and last characters from a string. 
Examples removeFirstLast("hello") ➞ "ell" removeFirstLast("maybe") ➞ "ayb" 
removeFirstLast("benefit") ➞ "enefi" removeFirstLast("a") ➞ "a" Notes If the string is 2 or fewer characters long, 
return the string itself (See Example #4). */
function removeFirstLast(str) {
  if (str.length > 2) 
  return str.slice(1, str.length - 1);
  else return str;
}
console.log(removeFirstLast("hello"));
console.log(removeFirstLast("maybe"));
console.log(removeFirstLast("benefit"));
console.log(removeFirstLast('a'));

/**Create a function that returns true if an input string contains only uppercase or only lowercase letters. 
Examples sameCase("hello") ➞ true sameCase("HELLO") ➞ true sameCase("Hello") ➞ false sameCase("ketcHUp") ➞ false */
function sameCase(str) {
  if (str === str.toLowerCase() || str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(sameCase("hello"));
console.log(sameCase("HELLO"));
console.log(sameCase("Hello"));

/**A pair of strings form a strange pair if both of the following are true: The 1st string's first letter = 2nd string's
 * last letter. The 1st string's last letter = 2nd string's first letter. Create a function that returns true if a pair of
 * strings constitutes a strange pair, and false otherwise. Examples isStrangePair("ratio", "orator") ➞ true // "ratio"
 * ends with "o" and "orator" starts with "o". // "ratio" starts with "r" and "orator" ends with "r".
 * isStrangePair("sparkling", "groups") ➞ true isStrangePair("bush", "hubris") ➞ false isStrangePair("", "") ➞ true Notes
 * It should work on a pair of empty strings (they trivially share nothing). */
function isStrangePair(str1, str2) {
  if (
    str1.charAt(0) === str2.charAt(str2.length - 1) &&
    str1.charAt(str1.length - 1) === str2.charAt(0)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isStrangePair("sparkling", "groups"));
console.log(isStrangePair("bush", "hubris"));

/**Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating 
while the second argument (times) is the number of times the item is to be repeated. Return the result in an array. Examples 
repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"] repeat(13, 5) ➞ [13, 13, 13, 13, 13] repeat("7", 2) ➞ ["7", "7"] 
repeat(0, 0) ➞ [] Notes item can be either a string or a number. times will always be a number. */
function repeat(item, times) {
  let arr = [];
  if (typeof item === "number" || typeof item === "string") {
    for (let i = 0; i < times; i++) {
      arr[i] = item;
    }
  }
  return arr;
}
console.log(repeat("edabit", 3));
console.log(repeat(13, 5));
console.log(repeat("7", 2));
