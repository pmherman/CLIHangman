var Letters = function(letter, correctGuess) {
    this.letter = letter, //value 
    //will show the letter if correctly guessed
    this.correctGuess = correctGuess;
    this.displayLetter = "";

    this.checkGuess = function() {
        var showLetter = "";
        if (this.correctGuess == undefined) {
            for (var i=0; i < this.letter.length; i++) {
                showLetter = " _ ";
            }
        } else {
            var correctLetterEntered = false;
            for(var j = 0; j < this.gameWord.length; j++){ 
                for (var k=0; k < this.correctGuess.length; k++) {
                    if (this.letter[j] == this.correctGuess[k]) {
                        showLetter += this.correctGuess[k];
                        correctLetterEntered = true;
                }
            }
        }
    }
};
//Exports file needed for word.js
module.exports = Letters;