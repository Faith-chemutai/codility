// ==== PALLINDROME
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPalindrome = function (x) {
  const rX = x.toString().split('').reverse().join('');
  if (x == rX) {
    console.log(true)
  } else {
    console.log(false);
  }
};
isPalindrome(121)
isPalindrome(-121);

function pallindrome(string) {
  const word = string;
  const rword = string.split('').reverse().join('');

  if (word === rword) {
    console.log(string + ' is a pallindrome');
  } else {
    console.log(string + ' is not a pallindrome');
  }
}

pallindrome('kayak');
