// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const stringArr = string.split('')
  const obj = {}
  for(let char of stringArr){
   !obj[char] ? obj[char] = 1 : obj[char]++
  }
  console.log(stringArr)
  return obj;
}

console.log(count('abba'))