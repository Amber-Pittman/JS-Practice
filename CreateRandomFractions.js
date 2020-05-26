// Change randomFraction to return a random number instead of returning 0.

// TESTS
// randomFraction should return a random number.
// The number returned by randomFraction should be a decimal.
// You should be using Math.random to generate the random decimal number.

function randomFraction() {  
    let result = 0;
  
    while (result === 0) {
      result = Math.random()
    }
    return result;
  }
  