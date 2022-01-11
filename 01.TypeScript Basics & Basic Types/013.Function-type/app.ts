function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("result " + num);
}

printResult(add(10, 22));

let combineResultValues: (a: number, b: number) => number;

combineResultValues = add;
// combineResultValues = printResult;

console.log(combineResultValues(30, 40));
