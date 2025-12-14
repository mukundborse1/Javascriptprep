let city = 'Pune'
console.log(`I am from ${city}`);
let out = ''
for (let i=city.length -1; i>=0; i--){
    out += city[i]   
}
console.log(out);

let citys = ['Pune', 'Mumbai', 'Nashik', 'Pune'];
let output = citys.filter((value,index) => citys.indexOf(value) === index)
console.log(output);