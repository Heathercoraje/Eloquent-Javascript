// Your code here.
var size = 8;
var board = '';// to add ' ' or '#' y is rows, x is columns

for (y = 0; y < size; y ++) {
  for (x = 0; x < size; x ++) {
    if ((x + y) % 2 === 0) {// if x+y is even number
      board += ' '
    }
    else {
      board += '#'
    }
  }
  board += '\n'
}
console.log(board);
