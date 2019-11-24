const readlineSync = require("readline-sync");

let rev = "";
let x = 0

console.log();

do {
  positiveInt = Number(readlineSync.question("Positive Integer: "));
  } while (positiveInt < Number.MIN_SAFE_INTEGER || positiveInt > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInt) || positiveInt % 1 != 0 || positiveInt <= 0)

do {
  x = positiveInt % 10;
  rev = rev + x + ", ";
  positiveInt = positiveInt - x
  positiveInt = positiveInt / 10;
  } while (positiveInt > 10);

  rev = rev + positiveInt + "."

console.log("\n" + rev + "\n");
