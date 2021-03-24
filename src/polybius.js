// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //const cipher = {'a': 11, 'b': 12, 'c': 13, 'd': 14, 'e': 15, 'f': 21, 'g': 22, 'h': 23, 'i': 24, 'j': 24, 'k': 25, 'l': 31, 'm': 32, 'n': 33, 'o': 34, 'p': 35, 'q': 41, 'r': 42, 's': 43, 't': 44, 'u': 45, 'v': 51, 'w': 52, 'x': 53, 'y': 54, 'z': 55 } 
  const cipher = {'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22, 'h': 32, 'i': 42, 'j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54, 'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55 }
  //const cipherBackwards = {'11': 'a', 12: 'b', 13: 'c', 14: 'd', 15: 'e', 21: 'f', 22: 'g', 23: 'h', 24: 'i/j', 25: 'k', 31: 'l', 32: 'm', 33: 'n', 34: 'o', 35: 'p', 41: 'q', 42: 'r', 43: 's', 44: 't', 45: 'u', 51: 'v', 52: 'w', 53: 'x', 54: 'y', 55: 'z'}
  const cipherBackwards = {'11': 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: 'i/j', 52: 'k', 13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'}
  
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  function isOdd(num) {
    return Math.abs(num % 2) == 1;
  }

  function polybius(input, encode = true) {

    let charArray = input.toLowerCase().split("").filter((char) => {
      return numbers.includes(char)
    })

    if(isOdd(charArray.length) === true) {
      return false 
    }
    
    let result = [];

    if (encode) {
      
      input.toLowerCase().split("").forEach((char) => {
        if (Object.keys(cipher).includes(char)) {
        result.push(cipher[char])
        } else {
          result.push(char)
        }
      })
      return result.join("")

    } else {
      let i = 0;

      while (i < input.length) {
       if (numbers.includes(input[i])) {
         result.push(input[i] + input[i + 1])
         i+=2
       } else {
         result.push(input[i])
         i++
       }
      }

      let final = []
      result.forEach((char) => {
        if (Object.keys(cipherBackwards).includes(char)) {
        final.push(cipherBackwards[char])
        } else {
          final.push(char)
        }
      })
      return final.join("")
    }
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

