let city = 'Pune'
console.log(`I am from ${city}`);
let out = ''
for (let i=city.length -1; i>=0; i--){
    out += city[i]   
}
console.log(out);


let string = 'I am from Pune';
let res = string.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
console.log(res);