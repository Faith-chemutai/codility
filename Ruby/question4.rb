# The main idea is to count all the occurring characters in a string. 
# If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

# What if the string is empty? Then the result should be empty object literal, {}.

def count_characters(s)
    counts = {} # Initialize an empty hash to store character counts
  
    # Loop through each character in the string
    s.each_char do |c|
      # Increment the count for the current character in the hash
      if counts[c]
        counts[c] += 1
      else
        counts[c] = 1
      end
    end
  
    return counts
  end
  