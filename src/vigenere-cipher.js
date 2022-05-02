const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  toCrypt(message, key, crypt = true) {
    function getNumberFromCharCode(letter) {
      if (97 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 122) {
        return letter.charCodeAt(0) - 97;
      }
      return letter;
    }

    function getLetterFromCharCode(letter) {
      if (Number.isInteger(letter)) {
        return String.fromCharCode(letter + 97);
      }
      return letter;
    }

    let mix = [];
    let keyIndex = 0;
    let item;

    message = message.toLowerCase().split("").map(getNumberFromCharCode);
    key = key.toLowerCase().split("").map(getNumberFromCharCode);

    for (let i = 0; i < message.length; i++) {
      if (Number.isInteger(message[i])) {
        if (keyIndex === key.length) {
          keyIndex = 0;
        }

        if (crypt === true) {
          item = message[i] + key[keyIndex];
          if (item >= 26) {
            item = Math.abs(item - 26);
          }
        } else if (crypt === false) {
          item = message[i] - key[keyIndex];
          if (item < 0) {
            item = Math.abs(item + 26);
          }
        }

        keyIndex++;
      } else {
        item = message[i];
      }
      mix.push(item);
    }

    mix = mix.map(getLetterFromCharCode);

    if (!this.direction) {
      mix.reverse();
    }

    return mix.join("").toUpperCase();
  }

  encrypt(message, key) {
    if (message && key) {
      return this.toCrypt(message, key);
    } else {
      throw new Error("Incorrect arguments!");
    }
  }

  decrypt(message, key) {
    if (message && key) {
      return this.toCrypt(message, key, false);
    } else {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
