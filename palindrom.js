let data = ['Malyaylam', 'Pune', 'level', 'Rohit', 'Civic'];
let output = (str) => {
    let out = str.toLowerCase();
    return out === out.split('').reverse().join('');
}
const palindroms = data.filter(output);
console.log('This are the Palindroms',palindroms);