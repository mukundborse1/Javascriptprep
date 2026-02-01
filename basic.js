// let a = 5;
// let b= '5';

// console.log(a == b);
// console.log(a === b);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);

function outer() {
  var name = "Outer";
  function inner() {
    console.log(name);
  }
  name = "Inner";
  return inner; 
}
// let a = outer();
// a();

let a = {n: 1};
let b = { ...a};

b.n = 2;

console.log(a.n);
