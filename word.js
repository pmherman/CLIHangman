import { currentId } from "async_hooks";

var Letters = require("./letter.js");

var Word = function(word) {
    this.letterArray = [];
    this.getLetters = function() {
        for (var i=0; i < word.length; i++) {
            var currentLetter = new Letters(word[i])
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
            returnString+= this.letterArray[k].displayLetter();
        }
    }
}

var currentWord = new Word("Batman");
var run = currentWord.getLetters() == currentWord.returnValue();
console.log(run);

