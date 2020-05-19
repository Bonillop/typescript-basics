// Type aliases: type defines a "custom" type (Type alias), tipically used with union types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

// Union type, makes possible to have different types for a variable, using the pipe operator "|" 
// it may also have literal types, which means that for example we expect a concrete string or number
// in this case resultConversion expect either "as-number" or "as-text" strings. Any other value would not be allowed

// function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 45, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "45", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Pepe", "Papo", "as-text");
console.log(combinedNames);