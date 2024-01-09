//newGame();
//showResults();

if (window.localStorage.getItem("dataSaved")=="true") {
	stats = JSON.parse(window.localStorage.getItem("stats"));
	mute = JSON.parse(window.localStorage.getItem("mute"));
} 

if (window.localStorage.getItem("gameSaved")=="true") {
	console.log("juego en curso");

	solution = JSON.parse(window.localStorage.getItem("solution"));
	guess = JSON.parse(window.localStorage.getItem("guess"));
	prevGuess = JSON.parse(window.localStorage.getItem("prevGuess"));

	trys = JSON.parse(window.localStorage.getItem("trys"));
	actualSlot = JSON.parse(window.localStorage.getItem("actualSlot"));
	actualLine = JSON.parse(window.localStorage.getItem("actualLine"));

	aceptando = JSON.parse(window.localStorage.getItem("aceptando"));
	inResultScreen = JSON.parse(window.localStorage.getItem("inResultScreen"));
	gameEnd = JSON.parse(window.localStorage.getItem("gameEnd"));

	loadGuesses();
	if (aceptando) {aceptar()}
	if (inResultScreen) {showResults()}
} else {newGame();}

if (!mute) {
	_mute.innerHTML = "🕪";
	_mute.style.backgroundColor = "#375";
} else {
	_mute.innerHTML = "🕩";
	_mute.style.backgroundColor = "#733";
}