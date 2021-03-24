// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift === 0 || shift > 25 || !shift) {
      return false
    }

    let result = [];

    if (!encode) {
      shift *= (-1)
    }
    
    if (shift < 0) {
     shift += 26
    }
      input.toLowerCase().split("").forEach((char) => {
        if (letters.includes(char)) {

        let shifted = letters.indexOf(char) + shift

        if (25 >= shifted > 0) {
        shifted = letters[shifted] 
        } 
        if (shifted > 25) {
          shifted = shifted % 26
          shifted = letters[shifted]
        } 
        
        result.push(shifted)
        } else {
          result.push(char)
        }
      })
    return result.join("")
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
