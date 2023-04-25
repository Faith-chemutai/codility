// Write a program to print the screen numbers 1 to n. For mulipltes of 3, print 'Fizz', for muliples of 5, ptint 'Buzz' and for multiples of both 3 & 5 print 'FizzBuzz'

const fizzBuzz = () => {
  for (let num = 1; num <= 15; num++) {
    if (num % 5 == 0 && num % 3 == 0) {
      console.log('FizzBuzz');
    } else if (num % 5 == 0) {
      console.log('Buzz');
    } else if (num % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log(num);
    }
  }
};

fizzBuzz()