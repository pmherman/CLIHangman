var Letters = function(letter) {
    this.letter = letter, //value 
    //will show the letter if correctly guessed
    this.show = false;

    this.checkLetter = function() {
        if(this.show === false) {
            return " _ ";
        } else if (this.letter == " ") {
            this.show == true;
            return " ";
        } else {
            return this.letter;
        }
    }
};
//Exports file needed for word.js
module.exports = Letters;