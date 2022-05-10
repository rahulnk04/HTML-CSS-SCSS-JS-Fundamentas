function Square(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      result += 1;
    }
  }
  return result;
}

function Memoizer(fun) {
  var cache = {};
  return function (x) {
    if (cache[x] == undefined) {
      cache[x] = fun(x);
    }
    return cache[x];
  };
}

let memoSquare = Memoizer(Square);
console.log(memoSquare(40000));
console.log(memoSquare(40000));
console.log(memoSquare(40000));
console.log(memoSquare(40000));
