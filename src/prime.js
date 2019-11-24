const readlineSync = require("readline-sync");

console.log()

let posInt = -1;
let loop = 2;

while (posInt < 0 || posInt % 1 != 0 || posInt > Number.MAX_SAFE_INTEGER) {
  posInt= Number(readlineSync.question("Positive integer: "));
  }

while (loop <= Math.sqrt(posInt) && end != 1) {
  if ((posInt/loop)%1 == 0) {
    console.log("\nNot Prime.")
    var end = 1;
  }
  ++loop
}
//used var to scope out
if (end != 1) {
  console.log("\nPrime.")
  }
console.log()
