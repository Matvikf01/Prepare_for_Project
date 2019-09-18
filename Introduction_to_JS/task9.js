

function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort(function(a, b) {
      return b - a;
    })
    .join("");
}

console.log(descendingOrder(0)); //, 0)
console.log(descendingOrder(123456789)); //, 987654321)
console.log(descendingOrder(145263));