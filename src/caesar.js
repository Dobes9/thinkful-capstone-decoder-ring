// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// eslint-disable-next-line strict
const caesarModule = (function () {
  
  // no additional arrays, objects, or helper functions were needed to write the caesar() function.

  function caesar(input, shift, encode = true) {
    // early return if there is no shift, is =0, or less than -25, or greater than 25
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    // charCodes is an array of the UTF-16 character codes derived from the input string.
    const charCodes = input.toLowerCase().split('').map((char) => {
      return char.charCodeAt(0);
    });
    const shiftedChars = charCodes.map((code) => {
      /* characters with codes 97-122 are a-z.  If the character is not a-z,
         it is not shifted and is returned to its character.
      */
      if (code > 122 || code < 97) {
        return String.fromCharCode(code);
      }
      /* if character is a-z, its code is shifted based on the shift input, and whether encode is true or false.
         if encode is true, positive shifts move right and negative shifts move left.
         if encode is false, positive shifts move left and negative shifts move right.
      */
      else if (code <= 122 && code >= 97) {
        let shiftedCode = (encode) ? code + shift : code - shift;
        // if shifted code is outside a-z range, 26 is added or subtracted to return code to a-z range.
        if (shiftedCode > 122) {
          shiftedCode = shiftedCode - 26;
        }
        else if (shiftedCode < 97) {
          shiftedCode = shiftedCode + 26;
        }
        // return code to its shifted character.
        return String.fromCharCode(shiftedCode);
      }
    });
    return shiftedChars.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
