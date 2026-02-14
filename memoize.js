function addTo256 (num) {
    return num + 256;
}
console.log(addTo256(20));
console.log(addTo256(40));
console.log(addTo256(20));

function memoizedaddTo256 (num) {
    let cache = {}
    return function (num){
         if(num in cache){
            console.log('cached value');
            return cache[num];
         }else{
            cache[num] = num + 256
            return cache[num]
         }
    }
}
const result = memoizedaddTo256();

console.log(result(20))
console.log(result(90))
console.log(result(20))