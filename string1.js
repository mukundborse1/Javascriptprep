function firstUniqueChar(str) {
  const freq = {};

  // count characters (ignore spaces)
  for (let ch of str) {
    if (ch !== " ") {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }

  // find first character with frequency 1
  for (let ch of str) {
    if (ch !== " " && freq[ch] === 1) {
      return ch;
    }
  }

  return null;
}
console.log(firstUniqueChar("stress"));  // t
console.log(firstUniqueChar("moon"));    // m
console.log(firstUniqueChar("aabbcc"));  // null
