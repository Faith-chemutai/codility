// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// function solution(A) {
//   let s = A.sort();
//   for (let i = 0; i < s.length; i++) {
//     if (s.includes(s[i] + 1)) {
//       continue;
//     } else {
//       if (s[s.length - 1] < 0) {
//         return 1;
//       } else {
//         return s[i] + 1;
//       }
//     }
//   }
//   return s;
// }

// === FAILED CODILITY


// CHAT GPT
function solution(A) {
  const N = A.length;
  const present = Array(N + 1).fill(false);

  for (let i = 0; i < N; i++) {
    const value = A[i];
    if (value > 0 && value <= N) {
      present[value] = true;
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!present[i]) {
      return i;
    }
  }

  return N + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1

// The function takes an array A as input and returns the smallest positive integer that does not occur in A.

// The algorithm works as follows:

// We first create an array present of size N + 1 initialized to false. This array will be used to mark which integers are present in A. We use N + 1 to handle the case where all integers from 1 to N are present in A.

// We iterate over A and mark the integers that are positive and less than or equal to N as present in the present array.

// We then iterate over the integers from 1 to N and return the first integer that is not present in the present array.

// If all integers from 1 to N are present in A, we return N + 1.

// The time complexity of this algorithm is O(N), which makes it efficient for the given constraints.