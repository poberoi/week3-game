// Declare object along with variables & functions
var word = {
	carMakeList: ["ford", "chevrolet", "dodge", "nissan", "toyota", "honda", "bmw", "acura", "infiniti", "lexus", "mercedes", "audi", "buick", "cadillac", "fiat", "gmc", "hummer", "hyundai", "jaguar", "jeep", "kia", "volvo", "lincoln", "mazda", "mini","subaru"],
	wordToGuess: "",
	dashHolder: [],
	letterList: "",
	userGuess: "",
	getWord: function(){
		word.wordToGuess = word.carMakeList[Math.floor(Math.random() * word.carMakeList.length)];
	},
	dashCreate: function(){
		for (i=0; i<word.wordToGuess.length; i++){
			word.dashHolder[i] = "-";
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
	  "<p>" + word.dashHolder.join("") + "</p>" +
	  "<p>Number of Guesses Remaining: </p>" + 
	  "<p>" + guessRemain + "</p>" +
	  "<p>Letters already guessed: </p>" + 
	  "<p>" + word.letterList + "</p>";
  document.querySelector('#game').innerHTML = html;
	},
	changeImage: function(){
		if (word.wordToGuess == "ford"){
			document.getElementById("carImage").src="assets/images/FordLogo.png"
		}
		if (word.wordToGuess == "chevrolet"){
			document.getElementById("carImage").src="assets/images/ChevyLogo.png"
		} 
		if (word.wordToGuess == "dodge"){
			document.getElementById("carImage").src="assets/images/DodgeLogo.png"
		}
		if (word.wordToGuess == "nissan"){
			document.getElementById("carImage").src="assets/images/NissanLogo.png"
		}
		if (word.wordToGuess == "toyota"){
			document.getElementById("carImage").src="assets/images/ToyotaLogo.png"
		}
		if (word.wordToGuess == "honda"){
			document.getElementById("carImage").src="assets/images/HondaLogo.png"
		}
		if (word.wordToGuess == "bmw"){
			document.getElementById("carImage").src="assets/images/BmwLogo.png"
		}
		if (word.wordToGuess == "acura"){
			document.getElementById("carImage").src="assets/images/AcuraLogo.png"
		}
		if (word.wordToGuess == "infiniti"){
			document.getElementById("carImage").src="assets/images/InfinitiLogo.png"
		}
		if (word.wordToGuess == "lexus"){
			document.getElementById("carImage").src="assets/images/LexusLogo.png"
		} 
		if (word.wordToGuess == "mercedes"){
			document.getElementById("carImage").src="assets/images/MercedesLogo.png"
		}
		if (word.wordToGuess == "audi"){
			document.getElementById("carImage").src="assets/images/AudiLogo.png"
		}
		if (word.wordToGuess == "buick"){
			document.getElementById("carImage").src="assets/images/BuickLogo.png"
		}
		if (word.wordToGuess == "cadillac"){
			document.getElementById("carImage").src="assets/images/CadillacLogo.png"
		}
		if (word.wordToGuess == "fiat"){
			document.getElementById("carImage").src="assets/images/FiatLogo.png"
		}
		if (word.wordToGuess == "gmc"){
			document.getElementById("carImage").src="assets/images/GmcLogo.png"
		}
		if (word.wordToGuess == "hummer"){
			document.getElementById("carImage").src="assets/images/HummerLogo.png"
		}
		if (word.wordToGuess == "hyundai"){
			document.getElementById("carImage").src="assets/images/HyundaiLogo.jpg"
		} 
		if (word.wordToGuess == "jaguar"){
			document.getElementById("carImage").src="assets/images/JaguarLogo.png"
		}
		if (word.wordToGuess == "jeep"){
			document.getElementById("carImage").src="assets/images/JeepLogo.png"
		}
		if (word.wordToGuess == "kia"){
			document.getElementById("carImage").src="assets/images/KiaLogo.png"
		}
		if (word.wordToGuess == "volvo"){
			document.getElementById("carImage").src="assets/images/VolvoLogo.png"
		}
		if (word.wordToGuess == "lincoln"){
			document.getElementById("carImage").src="assets/images/LincolnLogo.png"
		}
		if (word.wordToGuess == "mazda"){
			document.getElementById("carImage").src="assets/images/MazdaLogo.png"
		}
		if (word.wordToGuess == "mini"){
			document.getElementById("carImage").src="assets/images/MiniLogo.jpg"
		}
		if (word.wordToGuess == "subaru"){
			document.getElementById("carImage").src="assets/images/SubaruLogo.png"
		}
	},
	wordReset: function(){
		word.letterList = "";
		word.dashHolder = [];
		word.getWord();
		word.dashCreate();
		word.writeHtml();
		guessRemain = 6;

	}
};
var guessChecker = false;
var wins = 0;
var guessRemain = 6;
var holder = "";
var x = confirm("Would You Like to play?");
if (x){
	word.getWord();
	word.dashCreate();
	word.writeHtml();
	console.log(word.wordToGuess);
  document.onkeyup = function(event){
		word.userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		for (i=0; i<word.letterList.length; i++){
			if (word.letterList.charAt(i) == word.userGuess){
				alert("You have chosen this letter already");
				return;
			}
		}
		word.addLetter();
		for (i=0; i<word.wordToGuess.length; i++){
			if (word.wordToGuess.charAt(i) == word.userGuess){
				word.dashHolder[i] = word.userGuess;
				guessChecker = true;
			} 
		}
		if (word.dashHolder.join("") == word.wordToGuess){
			alert("Awesome!! You got it: " + word.wordToGuess);
			wins++;
			word.changeImage();
			word.wordReset();
		}
		if (guessChecker){
			guessChecker = false;
		} else {
			guessRemain--;
		}
		if (guessRemain<0){
			alert("Sorry you lose!");
			word.wordReset();
		}
		word.writeHtml();
	}
}
		





