var Letters = require("./letter.js");

var wordBank = ["Flash", "Arrow", "Kid Flash", "The Atom", "Killer Frost"];

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var Word = function(word) {
    this.letterArray = [];
    this.getLetters = function() {
        for (var i=0; i < currentWord.length; i++) {
            var currentLetter = new Letters(currentWord[i])
            this.letterArray.push(currentLetter);
        }
    }
    this.passGuessToLetters = function(guess) {
        for (var j=0; j < this.letterArray.length; j++) {
            this.letterArray[j].checkGuess(guess);
        }
    }
    this.returnValue = function() {
        var returnString = "";
        for (var k=0; k < this.letterArray.length; k++) {
            returnString+= this.letterArray[k].returnLetterValue();
        }
    }
}

var current = new Word(currentWord);

console.log("Current Word: " + currentWord);
console.log("Word: " + current.word);

