var Letters = require("./letter.js");

var wordBank = ["Flash", "Arrow", "Kid Flash", "The Atom", "Killer Frost"];

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var Word = function(currentWord) {
    this.letterArray = [];
    this.word = currentWord;
    this.correctWord = false;

    this.getLetters = function() {
        for (var i=0; i < this.currentWord.length; i++) {
            var currentLetter = new Letters(currentWord[i])
            this.letterArray.push(currentLetter);
        }
    }

    this.checkGuess = function() {
        for (var j=0; this.letterArray.length; j++) {
            letterArray[j].checkLetter(guess);
        }
    }

}

console.log("My Word: " + currentWord);

console.log("Word: " + currentWord.getLetters);