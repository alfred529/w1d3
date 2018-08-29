function countLetters(str) {
  var newStr = str.split(" ").join("").split("");

  for (var x = 0; x < newStr.length; x++) {
      update(newStr[x]);
  }
  //return memo;
}
var memo = {};
function update(x) {
  if (memo[x] !== undefined) {
    memo[x] = memo[x] + 1
  } else {
    memo[x] = 1
  }
}
//split string into array
//loop through arr indexs
//declare empty object to push out put too
// return object - no. of instances is value
//console log “” arr “:” output”


countLetters("lighthouse in the house");
console.log(memo)




