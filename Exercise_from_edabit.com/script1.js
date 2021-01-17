//Create a function that takes the age and return the age in days.
function calcAge(age) {
    return age*365;
}
console.log(calcAge(30));

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
    if(a+b<100){
        return true;
    }else{
        return false;
    }
}
console.log(lessThan100(80,4));

//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    if(num1===num2){
        return true;
    }else{
        return false;
    }
}
console.log(isSameNum(2,2));
console.log(isSameNum(2, 4));

/*A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with 
string "Edabit" and store it in a variable called result. He needs your help to fix this code.
*/
function nameString(name){
	var b = "Edabit";
	var result = name + b;
  	return result;
}
console.log(nameString('Kinjal'));

/*Create a function that takes the number of wins, draws and losses and calculates the number of points a football team 
has obtained so far.
    wins get 3 points
    draws get 1 point
    losses get 0 poi
*/
function footballPoints(wins, draws, losses) {
    return (wins*3)+(draws*1+losses*0);
}
console.log(footballPoints(3,4,2));

//Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    if(s===''){
        return true;
    }else return false;
}
console.log(isEmpty(''));
console.log(isEmpty("Hi"));

//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(n) {
    if(n%5===0){
        return true;
    }else return false;
}
console.log(divisibleByFive(10));
console.log(divisibleByFive(12));

//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
    if(a%b===0){
        return true;
    }else return false;
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));