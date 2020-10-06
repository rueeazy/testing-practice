const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const upcaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let newLetter;

const ceasarCipher = (string, shift) => {
    let newString = [] 
    let trueShift = shift % 26;
    Array.from(string).forEach(letter => {
        if(alphabet.includes(letter)) {
            newLetter = alphabet.indexOf(letter) + trueShift;
            if(newLetter > 25) {
                newLetter = newLetter - 26
            }
            newString.push(alphabet[newLetter]);
        } else if(upcaseAlphabet.includes(letter)) {
            newLetter = upcaseAlphabet.indexOf(letter) + trueShift;
            if(newLetter > 25) {
                newLetter = newLetter - 26
            }
            newString.push(upcaseAlphabet[newLetter]);
        } else {
            newString.push(letter);
        }
    });
    return newString.join('');
}



module.exports = ceasarCipher