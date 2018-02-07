var Letters = function(letter) {
    this.letter = letter, //value 
    //will show the letter if correctly guessed
    this.correctGuess = false;

    this.displayLetter = function() {
        if (this.correctGuess = false) {
            return " _ ";
        } else {
            return this.letter;
        }
    }
};
//Exports file needed for word.js
module.exports = Letters;