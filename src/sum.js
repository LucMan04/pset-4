const readlineSync = require("readline-sync");

MIN = Number.MIN_SAFE_INTEGER
MAX = Number.MAX_SAFE_INTEGER

let l_Bound = Number(readlineSync.question("\nLower Bound:"))
let u_Bound = Number(readlineSync.question("Upper Bound:"))

let answer = 0

while (l_Bound > u_Bound) {
  l_Bound = Number(readlineSync.question("Lower Bound:"))
  u_Bound = Number(readlineSync.question("Upper Bound:"))


if (l_Bound % 2 == 0) {
  for (let i = l_Bound ; i <= u_Bound ; i += 2) {
    answer = i + answer
  }
  console.log("\n"+answer.toLocaleString("en") + ".\n");
}
else {
  for (let i = l_Bound + 1 ; i <= u_Bound ; i += 2) {
    answer = i + answer
  }
  console.log("\n"+answer.toLocaleString("en") + ".\n");
  }
}
