// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

const solution = function (firstArray, secondArray) {
  if (firstArray.length == secondArray.length) {
    const array = [];
    for (i = 0; i < firstArray.length; i++) {
      if (firstArray[i] < secondArray[i]) {
        const power = Math.pow(secondArray[i] - firstArray[i], 2);
        array.push(power);
      }
      if (firstArray[i] > secondArray[i]) {
       const power = Math.pow(firstArray[i] - secondArray[i], 2);
        array.push(power);
      }
    }
    console.log(array);
    const sum = array.reduce((currVal, val) => {
      return (currVal + val);
    }, 0);

    return sum / firstArray.length;
  } else {
    return 'Arrays are not of equal length';
  }
};

console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
console.log(solution([-1, 0], [0, -1]));
