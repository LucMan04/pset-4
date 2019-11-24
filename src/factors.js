const readlineSync = require("readline-sync");

console.log();

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let factor = "";
let no = 0;

do {
    posInt = Number(readlineSync.question("Positive integer: "));
} while (posInt < MIN || posInt > MAX || !Number.isInteger(posInt) || Number.isNaN(posInt));
  if (posInt == 1) {
    console.log();
    console.log("1.\n");
    no = 2;
} else {
    for (let i = 1; i <= posInt/2; i++) {
      remainder = posInt % i
  if (remainder == 0) {
    if (factor.includes(", " + i + ", ") == true) {
      break;
    }
  else {
    if (posInt / i == i) {
        factor = factor + i + ".";
        no = 1;
    } else {
        factor = factor + i + ", " + (posInt / i) + ", ";
      }
    }
  }
}
}

if(no == 0) {
  comma = factor.lastIndexOf(",");
  factor = factor.slice(1, comma);
  factor = factor + ".";
}
if (no == 0 || no == 1){
console.log();
console.log(factor + "\n");
}
