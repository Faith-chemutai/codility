function solution(S) {
  const stringArr = S.split('')
  let left = 0;
  let right = 0;
  for (let i = 0; i < stringArr.length; i++) {
    // Count left angle brackets
    if (stringArr[i] === '<') {
      left++;
    } else if (stringArr[i] === '>' || stringArr[i] === '?') {
      // Check if left side exists before adding right side bracket
      if (left > 0) {
        left--;
        right++;
      }
    }
  }
  // If left or right doesnt appear, return full replaceble length
  if (right === 0) {
    return stringArr.length;
  }
  
  return right * 2;
}
console.log(solution('<><??>>'));
console.log(solution('??????'));
console.log(solution('<<?'));
