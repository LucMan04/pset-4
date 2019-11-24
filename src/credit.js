const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;

let x = 1;
let creditNumber = 0;
let add = 0;
let creditNumber2;
let sum = 0;
let firstDig = 0;
let secondDig = 0;
let oneDig = 0;
let digit = 0;

console.log();

do {
  creditNumber = Number(readlineSync.question("Number: "));
} while (creditNumber < MIN || creditNumber > MAX || Number.isNaN(creditNumber) || !Number.isInteger(creditNumber))
  creditNumber2 = creditNumber;

while (creditNumber2 >= 1) {
  creditNumber2 = creditNumber2 / 10;
  digit = digit + 1;
}

firstDig = Math.floor(creditNumber / 10 ** (Dig - 1));
secondDig = (Math.floor(creditNumber / 10 ** (Dig - 2)) / 10) * 10;

for (let loop = 0; loop < Dig; loop++) {
  oneDig = (creditNumber - Math.floor(creditNumber / 10) * 10);
  creditNumber = Math.floor(creditNumber / 10);
  if (loop % 2 == 1) {
    if (oneDig * 2 >= 10) {
      add = add + ((oneDig * 2 - oneDig * 2 % 10) / 10 + oneDig * 2 % 10);
    } else if (oneDig * 2 < 10) {
      add = add + oneDig * 2;
    }
  } else {
    add = add + oneDig;
  }
  ++x;
}

if (add / 10 % 1 != 0) {
  console.log("\nInvalid.")
  } else if (Dig == 15 && (secondDig == 34 || secondDig == 37)) {
  console.log("\nAmex.")
  } else if (Dig == 16 && (secondDig <= 55 && secondDig >= 51)) {
  console.log("\nMastercard.")
  } else if ((Dig == 13 || Dig == 16) && firstDig == 4) {
  console.log("\nVisa.")
}
