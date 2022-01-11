type Combinable = number | string;
type ConversionDescriptior = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptior
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
