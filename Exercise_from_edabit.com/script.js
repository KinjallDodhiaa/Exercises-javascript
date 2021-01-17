/*1.Create a function that takes two strings as arguments and return either true or false depending on whether the 
total number of characters in the first string is equal to the total number of characters in the second string.
*/

function compareStrings(str1,str2){
    if(str1.length===str2.length){
        return true;
    }else {
        return false;
    }
}

console.log(compareStrings('Kinjal','Nayan'));
console.log(compareStrings('Dodhia','Dodhia'));

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return 'something'+ ' '+a;
}
console.log(giveMeSomething('Hello'));

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
    return (side1+side2)-1;
}
console.log(nextEdge(7,10));


//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}
console.log(points(1,2));
//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
    return (base*height)/2;
}
console.log(triArea(2,3));

/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, 
possibly zero. Return that value.
*/
function remainder(x, y) {
return x%y;
}
console.log(remainder(7,21));

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function additionByOne(num){
    return num+1;
}

console.log(additionByOne(0));

/*Create a function that takes two numbers as arguments and return their sum.
*/
function addition(a, b) {
    return a+b;
}

/*Create a function that takes an array containing only numbers and return the first element.
*/
function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue([2,2,3,4,]));

//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    return minutes*60
}
console.log(convert(2));