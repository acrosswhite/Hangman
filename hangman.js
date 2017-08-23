var gameWords = ["apple", "blueberry", "carrots", "jicama", "avocado", "bell pepper", "mango", "potato", "baby spinach", "yams"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberOfTurns = 2;
var currentWord = gameWords[Math.floor(Math.random()*gameWords.length)];
var displayWord = [];
var remainingLetters = 0;
var score = 0;
var wrongGuess =[];


//this should come from bootstrap text box input


function runGame (){
	console.log("starting new game");

//when play game is clicked needs to trigger runGame function
//runGame function should random generate a word and fill in number of blank spaces on page
//pause after this to wait for user selection


	for (var i = 0; i < currentWord.length; i++) {
		displayWord[i] = "_"
	}

	remainingLetters = currentWord.length;

	document.getElementById("hangman").innerHTML = displayWord.join(" ");


	console.log(currentWord);
	console.log(displayWord);


}	


//user input a number needs to trigger validation of character
//show in html the game Word space
//tell user if correct


function submitGuess(){
	var foundMatch = false;
	var guess = document.getElementById("guess").value.toLowerCase();
	

	if(remainingLetters > 0){
		if (guess.length !== 1){
			alert("please enter one letter");
		}
		else if (alphabet.indexOf(guess) <= -1) {
			alert("select a valid letter");
		}
		else {
			for (var j = 0; j < currentWord.length; j++) {
				if (guess === currentWord.charAt(j)){
				displayWord[j] = guess;
				remainingLetters --;
				foundMatch = true;
				console.log(displayWord);
			document.getElementById("hangman").innerHTML = displayWord.join(" ");
				}

			}
			wrongGuess.push(guess);
			document.getElementById("letters-used").innerHTML = "Letters used: " + wrongGuess.join(" ");


		if (foundMatch === false) {
			alert("incorrect guess, please try again");
			numberOfTurns --;
			}
		}
		document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numberOfTurns;
		if (numberOfTurns === 0){
			alert("you ran out of turns! GAME OVER :o");
			var playAgain = confirm("play again?");
				if ( playAgain === true){
					runGame();
					//reset guesses left
					//clear used letters
				}
		}

	}

//once word is complete user score increase
//new game can be selected
//or if loser score not increase but play game again without losing score


	if ((remainingLetters === 0) && (displayWord.join("") === currentWord)){
		score ++;
		document.getElementById("score-update").innerHTML = "Score: " + score;
		prompt("Play again?" + runGame());
	}
}




