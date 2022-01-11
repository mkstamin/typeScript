// function add(n1: number, n2: number): number {
function add(n1: number, n2: number) {
  return n1 + n2;
}

// function printResult(num: number): undefined {
// function printResult(num: number): void {
function printResult(num: number) {
  console.log("result " + num);
  //   return;
}

printResult(add(10, 22));
