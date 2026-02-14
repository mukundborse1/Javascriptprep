function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}
console.log(computeSum([7, 8, 9, 99,47])); 

const findVowels = (str) => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count;
}

console.log(findVowels('stolouul'))