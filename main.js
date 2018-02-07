//Link to required files and packages
var inquirer = require("inquirer");
var Word = require("./word.js");

//Global Variables
var hangman;
var wordBank = ["Flash", "Arrow", "Kid Flash", "The Atom", "Killer Frost"];

var hangmanGame = {
    currentWord: wordBank[Math.floor(Math.random() * wordBank.length)],
    remainingGuesses: 20,

    beginGame: function() {
        this.remainingGuesses = 20;

        hangman = new Word(this.currentWord);
        hangman.getLetters();
        console.log("You have " + hangmanGame.remainingGuesses + " remaining to guess the word.");
        //Prompts user for their input
        userPrompt();
    }
};

var userPrompt = function() {
    if (hangmanGame.remainingGuesses > 0) {
        inquirer.prompt([
            {
                type: "value",
                name: "userLetterInput",
                message: "Please enter your guess: "
            }
        ]).then(function(userGuess) {
            var userLetterInput = userGuess.userLetterInput;
            var validLetter = Word(userLetterInput);

        })
    }
}

hangmanGame.beginGame();