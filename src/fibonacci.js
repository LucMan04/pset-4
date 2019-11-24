const readlineSync = require("readline-sync");

console.log()

let number = null;
let fibo_1 = 0;
let fibo_2 = 1;
let fiboCurrent = 0;

while (number < 1 || number % 1 != 0 || number > 78) {
  number= Number (readlineSync.question("Positive integer: "))
}

for (loop = 1; loop < number; loop++) {
 fiboCurrent = fibo_2 + fibo_1;
 fibo_1 = fibo_2;
 fibo_2 = fiboCurrent;
}

console.log("\n" + fibo_2.toLocaleString("en") + ".")
console.log()
