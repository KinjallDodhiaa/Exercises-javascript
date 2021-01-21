/**Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2')
 * should return 'CO2'*/

function echo(a) {
  return a;
}
console.log(echo("Greta"));
console.log(echo("CO2"));

/**Write a function greet having one parameter and returning 'Hello <parameter>!'.*/
function greet(a) {
  return "Hello" + " " + a;
}

console.log(greet("world"));

/**Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged. */
function shout(str) {
  let result = str + str;
  return result;
}
console.log(shout("Fire"));

/**Write a function length that takes a string and returns the number of characters of the string. */
function length(str) {
  let charNumber = str.length;
  return charNumber;
}
console.log(length("Fire"));
console.log(length("Hello world"));

/**Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter. */
function toCase(str) {
  let result = str.toLowerCase() + "-" + str.toUpperCase();
  return result;
}
console.log(toCase("Fire"));

/**Write a function shortcut that takes two strings and returns the initial letters of theses strings. */
function shortcut(str1, str2) {
  return str1.charAt(0) + str2.charAt(0);
}
console.log(shortcut("Hello", "World"));

/**Write a function firstChar, which returns the first character that is not a space when a string is passed.*/
function firstChar(str) {
  return str.trim();
}
console.log(firstChar("   hello    "));

/**Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in
 * the first string. The function should be case insensitive. */

function indexOfIgnoreCase(str1, str2) {
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();
  return string1.indexOf(string2);
}
console.log(indexOfIgnoreCase("bit", "IT"));
console.log(indexOfIgnoreCase("string", "string"));
console.log(indexOfIgnoreCase("Kinjal", "kin"));

/**Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.*/
function firstWord(str) {
  let firstBlank = str.indexOf(" ");
  return str.substr(0, firstBlank);
}
console.log(firstWord("See and stop"));

/**Write a function normalize, that replaces '-' with '/' in a date string.
 * Example: normalize('20-05-2017') should return '20/05/2017'.*/

function normalize(date) {
  let newDate = date.replace(/-/g, "/");
  return newDate;
}
console.log(normalize("20-05-2017"));

/**Write a function onesDigit that takes a natural number and returns the ones digit of that number.
 *  Example: onesDigit(2674) should return 4.*/
function onesDigit(n) {
  return n % 10;
}
console.log(onesDigit(2674));

/**Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs
 * is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the
 * two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies,
 * hypotenuse(3, 4) should return 5.*/
function hypotenuse(x, y) {
  let z = Math.pow(x, 2) + Math.pow(y, 2);
  return Math.sqrt(z);
}
console.log(hypotenuse(3, 4));

/**Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and
 * largest number.*/
function midrange(a, b, c) {
  return (Math.min(a, b, c) + Math.max(a, b, c)) / 2;
}
console.log(midrange(10, 20, 30));
console.log(midrange(3, 9, 1));
