// You can explicitly set a return type
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// No return value, tho "returns" undefined. It may return something, but if we explicitly say void, we
// are pretty much saying that we will ignore the return value
function printResult(num: number): void { 
  console.log("Result is: " + num);
}

function sarasa(num: number): undefined { // Useless, but works, needs empty return
  return;
}

printResult(add(5, 12));

// Any function can be any function
let anyFunction: Function;

// combinedValues should receive any function with this structure, in this case takes two number arguments
// and returns a number
let combinedValues: (a: number, b: number) => number;

function addAndHandle(n1:number, n2:number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 12, (result) =>{
  console.log(result);
})