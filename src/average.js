const readlineSync = require("readline-sync");

let avg = 0
let total = 0
divide = 0

console.log();

do{
  nonNegInt = Number(readlineSync.question("Non-negative integer: "));
    if (nonNegInt >= 0 && nonNegInt <Number.MAX_SAFE_INTEGER && !Number.isNaN(nonNegInt) && nonNegInt % 1 == 0) {
    total = nonNegInt + total
    divide +=1
    }
  } while ((nonNegInt >= 0 && nonNegInt < Number.MAX_SAFE_INTEGER &&  nonNegInt % 1 == 0) || Number.isNaN(nonNegInt) || divide == 0)

  avg = total/divide
  avg = avg.toLocaleString('en', {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + avg +  ".\n");
