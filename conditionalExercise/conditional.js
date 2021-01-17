/*1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). 
Print true if either of them are in the range.*/

function checkRange(int1, int2) {
  if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange(40, 30));

/*2.Check if three given integer values are in the range 50 to 99 (inclusive). 
Print true if one or more of them are in the range.
*/

function checkRangeOfInt(int1, int2, int3) {
  if (
    (int1 >= 50 && int1 <= 99) ||
    (int2 >= 50 && int2 <= 99) ||
    (int3 >= 50 && int3 <= 99)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRangeOfInt(30, 40, 20));
console.log(checkRangeOfInt(60, 40, 20));
console.log(checkRangeOfInt(60, 70, 80));

/*3.Declare the variables a, b and c, and give them number values. 
Check which one out of the three variables has the largest value and print it to the console. 
Then change the values of the variables to see if your conditional still works.
*/

function largestValue(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(largestValue(10, 20, 30));
console.log(largestValue(20, 30, 10));
console.log(largestValue(30, 20, 10));

/*4.Create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then print the original string.
*/

let givenString = "Pyramid";
let newString = "Py" + givenString;
if (givenString.charAt(0) === "P" && givenString.charAt(1) === "y") {
  console.log(givenString);
}

/*5.Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
 */
function sumOfInt(int1, int2) {
  if (int1 + int2 >= 50 && int1 + int2 < 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(sumOfInt(30, 30));
console.log(sumOfInt(20, 20));

/*6.Check whether the sum of two integers is 8, or whether their difference is 8. 
If one of these is the case, print true.
*/
function sumAndDifference(int1, int2) {
  if (int1 + int2 === 8 || int1 - int2 === 8) {
    return true;
  } else return false;
}

console.log(sumAndDifference(4, 4));
console.log(sumAndDifference(12, 4));

/*7.Check whether one of two integers is a multiple of 7 or 11. If so, print true.
 */

function multipleOf7Or11(n1, n2) {
  if (n1 % 7 === 0 || n1 % 11 === 0 || n2 % 7 === 0 || n2 % 11 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(multipleOf7Or11(21, 7));
console.log(multipleOf7Or11(10, 4));

/*BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. 
Create an if/else statement to check whether the person's age is less than 13. 
If so, print "firstName is a child". 
If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". 
If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". 
If none of these conditions apply, print "firstName is a adult".
*/

let firstName = "Kinjal";
let age = 18;
if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult`);
} else {
  console.log(`${firstName} is an adult`);
}
