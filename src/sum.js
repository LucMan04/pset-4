const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lBound=Number(readlineSync.question("\nLower Bound: "));
let uBound=Number(readlineSync.question("Upper Bound: "));
let sum=0

while (lBound > uBound ) {
    lBound=Number(readlineSync.question("Lower Bound: "));
    uBound=Number(readlineSync.question("Upper Bound: "));
    }

if (lBound % 2 === 0){
  for (i = uBound; i <= uBound;i += 2) {
    sum = i + sum;
    }
  }else {
    for (i = lBound + 1 ; i <= uBound ; i += 2){
      sum = i + sum
  }
}

sum= sum.toLocaleString("en");
console.log("\n" + sum + ".\n");
