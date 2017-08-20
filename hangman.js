var gameWords = ["apple", "blueberry", "carrots", "jicama", "avocado", "bell pepper", "mango", "potato", "baby spinach", "yams"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberOfTurns = 12

//this should come from bootstrap text box input


function runGame (){

	//when play game is clicked needs to trigger runGame function
	//runGame function should random generate a word and fill in number of blank spaces on page
	//pause after this to wait for user selection

	/*document.onkeyup = function(event){
	var userGuess = event.key.toLowerCase*/

	var currentWord = gameWords[Math.floor(Math.random()*gameWords.length)];
	var displayWord = "";

	for (var i = 0; i < currentWord.length; i++) {
		displayWord = displayWord + " _"
	}

	var remainingLetters = displayWord.length

	console.log(currentWord);
	console.log(displayWord);

	document.getElementById("hangman").innerHTML = displayWord;
	
	/*var guess = insert refernce to text box keystroke
	while(remainingLetters > 0){
		if (guess !== 1){
			alert("please enter one letter");
		}
		else if (guess !== alphabet) {
			alert("select a valid letter");
		}
		else {
			for (var j = 0; j < currentWord.length; i++) {
				if (guess === currentWord[j]){
				displayWord = guess;
				remainingLetters --;
				}
			}
		}*/
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