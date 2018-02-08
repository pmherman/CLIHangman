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
            var validLetter = userLetterInput.passGuessToLetters();
            //function needed to pass the guess letter through the Word Constructor
            //will check to see if the letter guessed is correct
            //will output either the correct letter or the _
            //will loop until all guesses have expired or the correct word is completed
        })
    }
}

hangmanGame.beginGame();