
var carMakeList = ["ford", "chevrolet", "dodge", "nissan", "toyota", "honda"];
var wordToGuess = "";
var dashHolder = "";
var guessRemain = 6;
var letterList = [];
var wins = 0;

// select random word from array
var j = Math.floor(Math.random() * carMakeList.length);
console.log(j);

// set random selected word within a variable and total # of dashes
wordToGuess = carMakeList[j];
console.log(wordToGuess);

for ( i = 0 ; i < wordToGuess.length ; i++ ){
	dashHolder = dashHolder + "-";
}

console.log(dashHolder);

// capture key click
document.onkeyup = function(event) {

// determine which key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// check to see if the letter matches
	for (i = 0; i < wordToGuess.length; i++ ){
		if (userGuess == wordToGuess[i]){

		}
		



		// if ((userGuess == 'r') || (userGuess == 'p') || (userGuess =='s')){
		// 	alert("user guess: " + userGuess);
		// 	alert("computer guess: " + computerGuess);
		// 	if (userGuess == 'r'){
		// 		if (computerGuess == 'p'){
		// 			losses++;
		// 		} else if (computerGuess == 's'){
		// 			wins++
		// 		} else {
		// 			ties++
		// 		}
		// 	}
		// 	if (userGuess == 'p'){
		// 		if (computerGuess == 's'){
		// 			losses++;
		// 		} else if (computerGuess == 'r'){
		// 			wins++;
		// 		} else {
		// 			ties++;
		// 		}
		// 	}
		// 	if (userGuess == 's'){
		// 		if (computerGuess == 'r'){
		// 			losses++;
		// 		} else if (computerGuess == 'p'){
		// 			wins++;
		// 		} else {
		// 			ties++;
		// 		}
		// 	}
		// } else {
		// 	alert("Please choose: r, p, or s");
		// 	return;
		// }
	}
	guessRemain--;

	var html = "<p>Press any character key to start playing</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Current Word: " + dashHolder + "</p>" +
        "<p>Number of Guesses Remaining: " + guessRemain + "</p>" +
        "<p>Letters already guessed: " + letterList + "</p>";

  document.querySelector('#game').innerHTML = html;

}


