function divide(intArray) {
 const array = []
 for (let i = 0; i < intArray.length; i++) {
  if (intArray[i] % 4 == 0) {
   array.push(intArray[i])
  }
 }
 return Math.max(...array)
}

console.log(divide([81, 82, 83, 84, 85, 86, 444, 40, -448]))

function solution(A) {
  // Implement your solution here
  let biggest = 0;
  for (i = 0; i < A.length; i++) {
    if (A[i] > biggest) {
      if (A[i] % 4 == 0) {
        biggest = A[i];
      } else {
        let a = 10;
      }
    } else {
      let a = 10;
    }
  }
  return biggest;
}

console.log(solution([81, 82, 83, 84, 85, 86, 444, 40]))