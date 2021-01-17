const s = "abcdefghijklmnopqrstuvwxyz";
// First 5 characters of the string.
// Last 5 characters of the string.
// All characters in the string from back.
// First 6 characters in the string (start with 6th character).

let sSplit = s.split("");

console.log(sSplit.slice(0, 5).join(""));
console.log(sSplit.slice(-5).join(""));
console.log(sSplit.reverse().join(""));
console.log(sSplit.slice(0, 6).reverse().join(""));
