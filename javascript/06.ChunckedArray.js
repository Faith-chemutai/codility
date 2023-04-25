// ==== CHUNKED ARRAY

// Write a function, 'chunk(array, n)', that returns chunked array of size n at the least. Look at an example:

// Given: [1, 4, 12, 3, 2, 6, -9, 0], n=3
// Return: [[1, 4, 12], [3, 2, 6], [-9, 0]]

const chunks = ((array, n) => {
  const chunked = [];

  for (let elem of array) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === n) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  console.log(chunked)
})([1, 4, 12, 3, 2, 6, -9, 0], 4);
