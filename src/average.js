const readlineSync = require("readline-sync");

console.log();

let add = 0
let count = 0
MIN = 0
MAX = Number.MAX_SAFE_INTEGER

let nni = Number(readlineSync.question("\nNon-negative integer: "));
  add = add + nni
while (nni >= 0) {
  nni = Number(readlineSync.question("Non-negative integer: "));
  count = count + 1
if (nni > 0 && nni <= Number.MAX_SAFE_INTEGER) {
  add = add + nni
} else if (count > 1 && nni < 0) {
  let answer = (add) / (count)
  console.log("\n" + Intl.NumberFormat("en", { style: 'decimal', maximumFractionDigits:3, minimumFractionDigits:3 }).format(answer) + ".");
  } else {
  --count;
  }
}

console.log();
