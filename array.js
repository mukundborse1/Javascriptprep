let nums = [23, 56, 949, 78, 98, 789, 21];
console.log(Math.max(...nums));

console.log(Math.min(...nums));

let numbers = [1,2,3,3,2,4]
let res = [...new Set(numbers)]
console.log(res);
let result  = numbers.filter((value,index) => numbers.indexOf(value) === index);
console.log(result);

let citys = ['Pune', 'Mumbai', 'Nashik', 'Pune'];
let output = citys.filter((value,index) => citys.indexOf(value) === index)
console.log(output);

const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);

const a = [1, 2, 3];
const b = a;
console.log(a == b, a === b);