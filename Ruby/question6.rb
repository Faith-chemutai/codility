# Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

# The function should be able to take up to 4 arguments:

# The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
# The 3rd and 4th arguments are integers, 3 and 5 by default.
# Thus, when the function is called without arguments,
#  it will return the classic FizzBuzz sequence up to 100:

# [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
# When the function is called with (up to 4) arguments, it should return a
#  custom FizzBuzz sequence, for example:

# ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
# ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
def custom_fizz_buzz(fizz = "Fizz", buzz = "Buzz", fizz_num = 3, buzz_num = 5)
    result = []
    (1..100).each do |num|
      divisible_by_fizz = num % fizz_num == 0
      divisible_by_buzz = num % buzz_num == 0
      if divisible_by_fizz && divisible_by_buzz
        result << "#{fizz}#{buzz}"
      elsif divisible_by_fizz
        result << fizz
      elsif divisible_by_buzz
        result << buzz
      else
        result << num
      end
    end
    return result
  end
  