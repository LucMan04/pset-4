const readlineSync = require("readline-sync");

let total = 0
let x = 0
console.log();

do {
  positiveInt = Number(readlineSync.question("Positive integer: "));
  } while (positiveInt < 1 || positiveInt > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInt) || positiveInt % 1 != 0)

do {
  x = positiveInt % 10;
  if (x % 2 != 0) {
    total = total + x;
  }
  positiveInt = positiveInt - x
  positiveInt = positiveInt / 10;
  } while (positiveInt >= 10);

  total = total + positiveInt

console.log("\n" + total + ".\n");
