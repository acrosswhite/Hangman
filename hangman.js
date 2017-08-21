var gameWords = ["apple", "blueberry", "carrots", "jicama", "avocado", "bell pepper", "mango", "potato", "baby spinach", "yams"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberOfTurns = 12
var currentWord = gameWords[Math.floor(Math.random()*gameWords.length)];
var displayWord = "";
var remainingLetters = 0;
//this should come from bootstrap text box input


function runGame (){

	//when play game is clicked needs to trigger runGame function
	//runGame function should random generate a word and fill in number of blank spaces on page
	//pause after this to wait for user selection


	for (var i = 0; i < currentWord.length; i++) {
		displayWord = displayWord + " _"
	}

	remainingLetters = displayWord.length;

	document.getElementById("hangman").innerHTML = displayWord;


	console.log(currentWord);
	console.log(displayWord);


}	

function submitGuess(){
	var guess = document.getElementById("guess").value.toLowerCase();
	
	if(remainingLetters > 0){
		if (guess.length !== 1){
			alert("please enter one letter");
		}
		else if (alphabet.indexOf(guess) <= -1) {
			alert("select a valid letter");
		}
		else if{
			for (var j = 0; j < currentWord.length; j++) {
				if (guess === currentWord.charAt(j)){
				displayWord = displayWord.split(" ");
				remainingLetters --;
				console.log(displayWord);
			document.getElementById("hangman").innerHTML = displayWord[j];
				}
			}
		}
		else {
			alert("incorrect guess, please try again");
			numberOfTurns --;
		}
	}
}
	//user input a number needs to trigger validation of character
	//show in html the game Word space
	//tell user if correct

	/*if (userGuess === displayWord[]){
		//display letter in game word space
		document.write("correct! guess your next letter");
	}
	else {
		numberOfTurns --
		document.write("incorrect! guess again");
	}

	//once word is complete user score increase
	//new game can be selected
	//or if loser score not increase but play game again*/