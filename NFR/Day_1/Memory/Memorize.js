var cache = {};
function Square(x) {
  if (cache[x] != null) {
    console.log("Returning from cache !");
    return cache[x]; // fetching
  }
  let result = 0;
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      result += 1;
    }
  }
  console.log("Storing Result in Cache !");
  cache[x] = result; // storing
  return result;
}

console.log(Square(100));
console.log(Square(40000));
console.log(Square(40000));
