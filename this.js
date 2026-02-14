
function doSomething() {
  console.log(this);
}
   
doSomething();

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();

const firstUniqueChar = (str) => {
  const freq = {};
  for(ch of str){
    if(ch !== " "){
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }

  for(ch of str){
    if(ch !== " " && freq[ch] === 1){
      return ch
    }
  }
  return null;
}

console.log(firstUniqueChar('stress'));
console.log(firstUniqueChar('aabbcc'))