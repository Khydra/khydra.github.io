_screen = document.getElementById('screen');

_gameContainer = document.createElement('div');
_gameContainer.id = "game-container";

_screen.appendChild(_gameContainer)

_tablero = document.createElement('div');
_tablero.id = "tablero";

_screen.appendChild(_tablero)

_unidadesContenedor = document.createElement('div');
_unidadesContenedor.id = "unidades-contenedor";

_screen.appendChild(_unidadesContenedor);

_reset = document.createElement('div');
_reset.id = "reset";
_reset.innerHTML = "↺";
_screen.appendChild(_reset);

_mute = document.createElement('div');
_mute.id = "mute";
_screen.appendChild(_mute);

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22];
var solution = [];
var trys = 0;
var pause = false;
var win = false;
var mute = false;
var stats = [0,0,0];
var inResultScreen = false;
var gameEnd = false;

var soundClick = new Audio('./sfx/click.wav');
var soundDelete = new Audio('./sfx/delete.wav');
var soundCorrect = new Audio('./sfx/correct.wav');
var soundIncorrect = new Audio('./sfx/incorrect.wav');
var soundAlmost = new Audio('./sfx/almost.flac');

_reset.addEventListener('click',()=>{if(!pause)newGame()});
_mute.addEventListener('click',changeSound);

function changeSound() {
	if (mute) {
		mute = false;
		_mute.innerHTML = "🕪";
		_mute.style.backgroundColor = "#375";
		soundClick.load();
		soundClick.play();
	} else {
		mute = true;
		_mute.innerHTML = "🕩";
		_mute.style.backgroundColor = "#733";

	}
	saveLocalData()
}

function newGame() {
	deleteActualGame();
	clean();
	gameEnd = false;
	inResultScreen = false;
	win = false;
	pause = false;
	trys = 0;
	actualSlot = 0;
 	actualLine = 0;
 	guess = [];
 	prevGuess = [[],[],[],[],[],[]];
	solution = createSolution(numbers);
	window.localStorage.setItem("gameEnd", JSON.stringify(gameEnd));
}

function createSolution(array) {
  	let numCopy = [...array];
  	let sol = [];

  	for(let i=0; i<5; i++) {
   	 	let randNum = Math.floor(Math.random()*numCopy.length);
    	let splicedItem = numCopy.splice(randNum, 1)[0]
    	sol.push(splicedItem);
  	}
  	return sol;
}

const _resultWindow = document.createElement('div');
_resultWindow.id = "result-window";

const _resultText = document.createElement('div');
_resultText.id = "result-text";
const _resultQuantity = document.createElement('div');
_resultQuantity.id = "result-quantity";
const _resultContinue = document.createElement('div');
_resultContinue.id = "result-continue";
_resultContinue.innerHTML = "CONTINUAR";

const _resultSolution = document.createElement('div');
_resultSolution.id = "result-solution";
_resultSolution.className = "linea";
const _resultSolutionCasillas = [];

for (let i=0; i<5; i++) {
	_resultSolutionCasillas[i] = document.createElement('div');
	_resultSolutionCasillas[i].className = "casilla";
	_resultSolution.appendChild(_resultSolutionCasillas[i]);
}

const _resultStatsContainer = document.createElement('div');
_resultStatsContainer.id = "result-stat-container";
const _resultWins = document.createElement('div');
_resultWins.className = "result-stat";
const _resultLoses = document.createElement('div');
_resultLoses.className = "result-stat";
const _resultStreak = document.createElement('div');
_resultStreak.className = "result-stat";

_resultWindow.appendChild(_resultText);
_resultWindow.appendChild(_resultQuantity);
_resultWindow.appendChild(_resultContinue);
_resultWindow.appendChild(_resultSolution);
_resultWindow.appendChild(_resultStatsContainer);
_resultStatsContainer.appendChild(_resultWins);
_resultStatsContainer.appendChild(_resultLoses);
_resultStatsContainer.appendChild(_resultStreak);

function showResults() {
	actualLine = 6;
	aceptando = false;
	inResultScreen = true;
	pause = true;
	document.body.appendChild(_resultWindow);
	_screen.style.pointerEvents = "none";
	_screen.style.filter = "brightness(0.3)";
	if (!gameEnd) {
		(win) ? winGame() : loseGame();
		saveActualGame();
		saveLocalData();
		gameEnd = true;
		window.localStorage.setItem("gameEnd", JSON.stringify(gameEnd));
	}
	if (win) {
		_resultText.innerHTML = "¡VICTORIA!";
		_resultText.style.color = "#5c9277";
	} else {
		_resultText.innerHTML = "DERROTA...";
		_resultText.style.color = "#925c5c";
	}
	showSolution();
	//deleteActualGame();
	_resultWins.innerHTML = `<b>${stats[0]}</b><br>Victorias`;
	_resultLoses.innerHTML = `<b>${stats[1]}</b><br>Derrotas`;
	_resultStreak.innerHTML = `<b>${stats[2]}</b><br>Racha`;
}

function showSolution() {
	let correct = 0;
	for (let i=0; i<5; i++) {
		_resultSolutionCasillas[i].style.backgroundImage = `url('./img/p${solution[i]}_1.png')`;
		if (solution[i]===guess[i]) {
			correct++;
			_resultSolutionCasillas[i].style.backgroundColor = "#375";
			_resultSolutionCasillas[i].style.borderColor = "#5c9277"
		}
		else {
			_resultSolutionCasillas[i].style.backgroundColor = "#733";
			_resultSolutionCasillas[i].style.borderColor = "#925c5c";
		}
	}
	_resultQuantity.innerHTML = `${correct}/5`;
}

function winGame() {
	stats[0]++;
	stats[2]++;
}

function loseGame() {
	stats[1]++;
	stats[2]=0;
}

_resultContinue.addEventListener('click',()=>{
	document.body.removeChild(_resultWindow);
	pause = false;
	_screen.style.pointerEvents = "revert-layer";
	_screen.style.filter = "revert-layer";
})

function saveLocalData() {
	window.localStorage.setItem("dataSaved", true);
	window.localStorage.setItem("stats", JSON.stringify(stats));
	window.localStorage.setItem("mute", JSON.stringify(mute));
}

function saveActualGame() {
	window.localStorage.setItem("gameSaved", true);

	window.localStorage.setItem("solution", JSON.stringify(solution));
	window.localStorage.setItem("guess", JSON.stringify(guess));
	window.localStorage.setItem("trys", JSON.stringify(trys));
	window.localStorage.setItem("actualSlot", JSON.stringify(actualSlot));
	window.localStorage.setItem("actualLine", JSON.stringify(actualLine));
	window.localStorage.setItem("prevGuess", JSON.stringify(prevGuess));

	window.localStorage.setItem("aceptando", JSON.stringify(aceptando));
	window.localStorage.setItem("inResultScreen", JSON.stringify(inResultScreen));
}

function deleteActualGame() {
	window.localStorage.setItem("gameSaved", false);
	localStorage.removeItem(solution);
	localStorage.removeItem(guess);
	localStorage.removeItem(trys);
	localStorage.removeItem(actualSlot);
	localStorage.removeItem(actualLine);
	localStorage.removeItem(prevGuess);
	localStorage.removeItem(aceptando);
	localStorage.removeItem(inResultScreen);
	localStorage.removeItem(gameEnd);
}