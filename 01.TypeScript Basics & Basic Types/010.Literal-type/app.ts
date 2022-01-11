function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string"
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = `${input1} ${input2}`;
  }

  return result;
}

const combineAges = combine(30, 25, "as-number");
console.log(combineAges);

const conbineResultAsString = combine("30", "25", "as-number");
console.log(conbineResultAsString);

const coblineNames = combine("Mks", "Tamin", "as-string");
console.log(coblineNames);
