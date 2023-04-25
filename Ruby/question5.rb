# Welcome to the Codewars Bar!
# Codewars Bar recommends you drink 1 glass of water per standard 
# drink so you're not hungover tomorrow morning.

# Your fellow coders have bought you several drinks 
# tonight in the form of a string. Return a string suggesting 
# how many glasses of water you should drink to not be hungover.

def hydrate(drinks)
    # Extract the number of drinks from the input string
    num_drinks = drinks.scan(/\d+/).map(&:to_i).sum
  
    # Return the suggestion based on the number of drinks
    if num_drinks == 0
      return "0 glasses of water"
    elsif num_drinks == 1
      return "1 glass of water"
    else
      return "#{num_drinks} glasses of water"
    end
  end
  