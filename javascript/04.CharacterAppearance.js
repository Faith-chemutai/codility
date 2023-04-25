// Find the character that appears the most and total number of times it appears

// String examples:
// > 32eddseew3
// > #%he3#33ll#l#0

function maxChar(string) {
  let obj = {};
  for (let char of string) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
    // Result
    // { '0': 1, '3': 3, '#': 4, '%': 1, h: 1, e: 1, l: 3 }
  }
  
  let maxNum = 0
  let maximumChar = ''
  for(let char in obj){
    if (obj[char] >= maxNum) {
     maxNum = obj[char]
     maximumChar = char
    }
  }
  console.log(`The character: ${maximumChar} appears ${maxNum}`)
}

maxChar('dddd#%he3#33ll#l#0');
// The character: # appears 4
