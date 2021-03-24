// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false
    }

    alphabet = alphabet.toLowerCase().split("")

    if (alphabet.length != 26 || !checkIfArrayIsUnique(alphabet)) {
      return false 
    }

    let result = [];

  if (encode) {
    input.toLowerCase().split("").forEach((char) => {
      if (letters.includes(char)) {
        let indexed = letters.indexOf(char)
      
        result.push(alphabet[indexed])
      } else {
        result.push(char)
      }
    })
  } else {
    input.toLowerCase().split("").forEach((char) => {
      if (alphabet.includes(char)) {
        let indexed = alphabet.indexOf(char)
      
        result.push(letters[indexed])
      } else {
        result.push(char)
      }
    })
  }

    return result.join("")
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
