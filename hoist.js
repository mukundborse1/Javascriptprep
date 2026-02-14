hoistedVar = 3;
console.log(hoistedVar);
var hoistedVar;

hoistedFunction();

function hoistedFunction(){
    console.log('Hello World...!!');
}

var hoist;
console.log(hoist);
hoist = 'Pune'