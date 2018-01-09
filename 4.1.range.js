// using ternary operator
function range (start, end, step) {
  if (!step) { step = 1; }
  var arr = [];
  for (var i = start; start < end ? i <= end: i >= end; i += step) {
    arr.push(i);
  }
  return arr;
}

function sum (arr) {
  total = 0;
  for (var i = 0; i < arr.length; i++)
    total += arr[i];
  return total
}
4.1
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
