"use strict";

function checkCash() {
  let price = parseFloat(document.getElementById("inputPrice").value);
  let cash = parseFloat(document.getElementById("inputCash").value);
  let cashDenomination = [];
  if (price > cash) {
    alert("You do not have enough money to buy.");
    return;
  } else if (price === cash) {
    alert("the payment is successful");
    return;
  } else if (price < cash) {
    let change = cash * 100 - price * 100;
    while (change >= 2000) {
      cashDenomination.push("€20");
      change -= 2000;
    }
    while (change >= 1000) {
      cashDenomination.push("€10");
      change -= 1000;
    }
    while (change >= 500) {
      cashDenomination.push("€5");
      change -= 500;
    }
    while (change >= 200) {
      cashDenomination.push("€2");
      change -= 200;
    }
    while (change >= 100) {
      cashDenomination.push("€1");
      change -= 100;
    }
    while (change >= 50) {
      cashDenomination.push("0.50cents");
      change -= 50;
    }
    while (change >= 20) {
      cashDenomination.push("0.20cents");
      change -= 20;
    }
    while (change >= 10) {
      cashDenomination.push("0.10cents");
      change -= 10;
    }
    while (change >= 5) {
      notesAndCoins.push("0.05cents");
      change -= 5;
    }
    while (change >= 2) {
      cashDenomination.push("0.02cents");
      change -= 2;
    }
    while (change >= 1) {
      cashDenomination.push("0.01cent");
      change -= 1;
    }
  }
  return alert(cashDenomination);
}
