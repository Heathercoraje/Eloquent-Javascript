// Fizzbuzz using or operator's property of returning value
var n = 1;
for (n = 1; n <= 100; n++) {
  var output = ''; // an empty string is always False
  if (n % 3 === 0) {
    output += 'Fizz';
  }
  if (n % 5 === 0) {
    output += 'Buzz';
  }
  console.log(output || n);
}
