// function matching(strArray) {
//   // Loop through the elements in array
//   for (let i = 0; i < strArray.length; i++) {
//     // Loop through characters in element
//     for (let j = i + 1; j < strArray.length; j++) {
//       for (let k = 0; k < strArray[j].length; k++) {
//         // compare actual characters
//         if (strArray[i][k] == strArray[j][k]) {
//           return [i, j, k];
//         }
//       }
//     }
//   }
//   return []
// }
// console.log(matching(['abc', 'bca', 'dbe']));
// console.log(matching(['zzzz', 'ferz', 'zdsr', 'fgtd']));
// console.log(matching(['gr', 'sd', 'rg']));
// console.log(matching(['bdafg', 'ceagi']));

// function solution(S) {
//   for (let i = 0; i < S.length; i++) {
//     for (let j = i + 1; j < S.length; j++) {
//       for (let k = 0; k < S[i].length; k++) {
//         if (S[i][k] === S[j][k]) {
//           return [i, j, k];
//         }
//       }
//     }
//   }
//   return [];
// }

// console.log(solution(['abc', 'bca', 'dbe']));

// you are given an array consisting of n strings. Every string is the same length matching. Your task is to find a pair of string in array S such that there exists a position in which both the strings are numbered from zero
