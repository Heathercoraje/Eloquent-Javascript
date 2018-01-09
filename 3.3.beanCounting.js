function countChar (str, char) {
  // building RegExp construtor instead of using regexp literal
  var regrex = new RegExp(char, 'g');
  return str.match(regrex).length;
}

function countBs (str) {
  return countChar(str, 'B');
  // return str.match(/B/g).length
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
