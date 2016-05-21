// Declare object along with variables & functions
var word = {
	carMakeList: ["ford", "chevrolet", "dodge", "nissan", "toyota", "honda", "bmw", "acura", "infiniti", "lexus", "mercedes", "audi", "buick", "cadillac", "fiat", "gmc", "hummer", "hyundai", "jaguar", "jeep", "kia", "volvo", "lincoln", "mazda", "mini","subaru"],
	wordToGuess: "",
	dashHolder: [],
	letterList: "",
	userGuess: "",
	getWord: function(){
		this.wordToGuess = this.carMakeList[Math.floor(Math.random() * this.carMakeList.length)];
	},
	dashCreate: function(){
		for (i=0; i<this.wordToGuess.length; i++){
			this.dashHolder[i] = "-";
		}
	},
	addLetter: function(){
		this.letterList = this.letterList + this.userGuess
	},
	writeHtml: function(){
		var html = "<p>Press any character key to start playing</p>" +
	  "<p>Wins:</p>" + 
	  "<p>" + wins + "</p>" +
	  "<p>Current Word: </p>" + 
	  "<p>" + this.dashHolder.join("") + "</p>" +
	  "<p>Number of Guesses Remaining: </p>" + 
	  "<p>" + guessRemain + "</p>" +
	  "<p>Letters already guessed: </p>" + 
	  "<p>" + this.letterList + "</p>";
  document.querySelector('#game').innerHTML = html;
	},
	changeImage: function(){
		if (this.wordToGuess == "ford"){
			document.getElementById("carImage").src="assets/images/FordLogo.png"
		}
		if (this.wordToGuess == "chevrolet"){
			document.getElementById("carImage").src="assets/images/ChevyLogo.png"
		} 
		if (this.wordToGuess == "dodge"){
			document.getElementById("carImage").src="assets/images/DodgeLogo.png"
		}
		if (this.wordToGuess == "nissan"){
			document.getElementById("carImage").src="assets/images/NissanLogo.png"
		}
		if (this.wordToGuess == "toyota"){
			document.getElementById("carImage").src="assets/images/ToyotaLogo.png"
		}
		if (this.wordToGuess == "honda"){
			document.getElementById("carImage").src="assets/images/HondaLogo.png"
		}
		if (this.wordToGuess == "bmw"){
			document.getElementById("carImage").src="assets/images/BmwLogo.png"
		}
		if (this.wordToGuess == "acura"){
			document.getElementById("carImage").src="assets/images/AcuraLogo.png"
		}
		if (this.wordToGuess == "infiniti"){
			document.getElementById("carImage").src="assets/images/InfinitiLogo.png"
		}
		if (this.wordToGuess == "lexus"){
			document.getElementById("carImage").src="assets/images/LexusLogo.png"
		} 
		if (this.wordToGuess == "mercedes"){
			document.getElementById("carImage").src="assets/images/MercedesLogo.png"
		}
		if (this.wordToGuess == "audi"){
			document.getElementById("carImage").src="assets/images/AudiLogo.png"
		}
		if (this.wordToGuess == "buick"){
			document.getElementById("carImage").src="assets/images/BuickLogo.png"
		}
		if (this.wordToGuess == "cadillac"){
			document.getElementById("carImage").src="assets/images/CadillacLogo.png"
		}
		if (this.wordToGuess == "fiat"){
			document.getElementById("carImage").src="assets/images/FiatLogo.png"
		}
		if (this.wordToGuess == "gmc"){
			document.getElementById("carImage").src="assets/images/GmcLogo.png"
		}
		if (this.wordToGuess == "hummer"){
			document.getElementById("carImage").src="assets/images/HummerLogo.png"
		}
		if (this.wordToGuess == "hyundai"){
			document.getElementById("carImage").src="assets/images/HyundaiLogo.jpg"
		} 
		if (this.wordToGuess == "jaguar"){
			document.getElementById("carImage").src="assets/images/JaguarLogo.png"
		}
		if (this.wordToGuess == "jeep"){
			document.getElementById("carImage").src="assets/images/JeepLogo.png"
		}
		if (this.wordToGuess == "kia"){
			document.getElementById("carImage").src="assets/images/KiaLogo.png"
		}
		if (this.wordToGuess == "volvo"){
			document.getElementById("carImage").src="assets/images/VolvoLogo.png"
		}
		if (this.wordToGuess == "lincoln"){
			document.getElementById("carImage").src="assets/images/LincolnLogo.png"
		}
		if (this.wordToGuess == "mazda"){
			document.getElementById("carImage").src="assets/images/MazdaLogo.png"
		}
		if (this.wordToGuess == "mini"){
			document.getElementById("carImage").src="assets/images/MiniLogo.jpg"
		}
		if (this.wordToGuess == "subaru"){
			document.getElementById("carImage").src="assets/images/SubaruLogo.png"
		}
	},
	wordReset: function(){
		this.letterList = "";
		this.dashHolder = [];
		this.getWord();
		this.dashCreate();
		this.writeHtml();
		guessRemain = 6;
		console.log(this.wordToGuess);

	}
};
var guessChecker = false;
var wins = 0;
var guessRemain = 6;
var holder = "";
var x = confirm("Would You Like to play?");
var winAudio = new Audio("assets/audio/applause.wav");
var loseAudio = new Audio("assets/audio/fail-trombone-02.mp3");
var errorAudio = new Audio("assets/audio/BikeHorn.wav");
if (x){
	word.getWord();
	word.dashCreate();
	word.writeHtml();
	console.log(word.wordToGuess);
  document.onkeyup = function(event){
		word.userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		for (i=0; i<word.letterList.length; i++){
			if (word.letterList.charAt(i) == word.userGuess){
				errorAudio.play();
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
			winAudio.play();
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
			loseAudio.play();
			alert("Sorry you lose!");
			word.wordReset();
		}
		word.writeHtml();
	}
}
		





