// Declare object along with variables & functions
var word = {
	carMakeList: ["ford", "chevrolet", "dodge", "nissan", "toyota", "honda"],
	wordToGuess: "",
	dashHolder: "",
	letterList: "",
	userGuess: "",
	getWord: function(){
		word.wordToGuess = word.carMakeList[Math.floor(Math.random() * word.carMakeList.length)];
	},
	dashCreate: function(){
		for (i=0; i<word.wordToGuess.length; i++){
			word.dashHolder = word.dashHolder + "-";
		}
	},
	addLetter: function(){
		word.letterList = word.letterList + word.userGuess
	},
	checkMatch: function(){

	},
	writeHtml: function(){
		var html = "<p>Press any character key to start playing</p>" +
	  "<p>Wins:</p>" + 
	  "<p>" + wins + "</p>" +
	  "<p>Current Word: </p>" + 
	  "<p>" + word.dashHolder + "</p>" +
	  "<p>Number of Guesses Remaining: </p>" + 
	  "<p>" + guessRemain + "</p>" +
	  "<p>Letters already guessed: </p>" + 
	  "<p>" + word.letterList + "</p>";
  document.querySelector('#game').innerHTML = html;
	}
};
var wins = 0;
var guessRemain = 6;
var holder = "";
var x = confirm("Would You Like to play?");
if (x){
	word.getWord();
	word.dashCreate();
	word.writeHtml();
  document.onkeyup = function(event){
	word.userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	for (i=0; i<word.letterList.length; i++){
		if (word.letterList.charAt(i) == word.userGuess){
			alert("You have chosen this letter already");
			return;
		}
	}
	for (i=0; i<word.wordToGuess.length; i++){
		if (word.wordToGuess.charAt(i) == word.userGuess){
			replaceCharAt(word.dashHolder, i, word.userGuess);
		} else {
		}
	}
	word.addLetter();
	word.writeHtml();
}
} 


console.log(word.wordToGuess);

console.log(word.dashHolder);

// // select random word from array



// // set random selected word within a variable and total # of dashes
// wordToGuess = carMakeList[j];
// console.log(wordToGuess);

// for ( i = 0 ; i < wordToGuess.length ; i++ ){
// 	dashHolder = dashHolder + "-";
// }

// console.log(dashHolder);

// var html = "<p>Press any character key to start playing</p>" +
//   "<p>Wins:</p>" + 
//   "<p>" + wins + "</p>" +
//   "<p>Current Word: </p>" + 
//   "<p>" + dashHolder + "</p>" +
//   "<p>Number of Guesses Remaining: </p>" + 
//   "<p>" + guessRemain + "</p>" +
//   "<p>Letters already guessed: </p>" + 
//   "<p>" + letterList + "</p>";

// // document.getElementById("carImage").src="assets/images/hangmanlogo.png"
// // favTVshows.push(tvShow)

// document.querySelector('#game').innerHTML = html;
// // capture key click


// document.onkeyup = function(event) {

// 	if (guessRemain > 0){// determine which key was selected. Make it lowercase
// 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// 		// add letter to letter used list
// 		letterList = letterList + userGuess;
// 		// check to see if the letter matches
// 		// for (i = 0; i < wordToGuess.length; i++ ){
// 		// 	if (userGuess == wordToGuess[i]){
// 		// 		dashHolder[i] = userGuess;
// 		// 	} else {
// 		// 	}
// 		// }
// 		guessRemain= guessRemain - 1;
// 	} else {
// 		alert("You did not guess the correct answer")
// 		return;
// 	}
		





