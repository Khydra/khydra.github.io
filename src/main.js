_screen = document.getElementById('screen');

_gameScene = document.createElement('div');
_gameScene.id = "game-scene";

_tablero = document.createElement('div');
_tablero.id = "tablero";
_unidadesContenedor = document.createElement('div');
_unidadesContenedor.id = "unidades-contenedor";

_gameScene.appendChild(_tablero)
_gameScene.appendChild(_unidadesContenedor);

_gameReturnButton = document.createElement('div');
_gameReturnButton.id = "game-return-button";
_gameReturnButton.innerHTML = "⚙";
_gameScene.appendChild(_gameReturnButton);

_gameReturnButton.addEventListener('click',()=>{
	if (pause) return;
	soundClick2.load();
	soundClick2.play();
	saveActualGame();
	_gameScene.style.pointerEvents = "revert-layer";
	_gameScene.style.filter = "revert-layer";
	_screen.removeChild(_gameScene);
	loadMenuScene();
})

_roundText = document.createElement('div');
_roundText.id = "round-text";
_gameScene.appendChild(_roundText);

_stageText = document.createElement('div');
_stageText.id = "stage-text";
_gameScene.appendChild(_stageText);

var numbers = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22];

var stage = 1;
var round = 0;
var solution = [];
var trys = 0;
var pause = false;
var stats = [0,0,0];
var colors = [0,0,0,0];

function newGame() {
	window.localStorage.setItem("gameActive", true);
	deleteActualGame();
	clean();
	defaultUnits();
	stage = 1;
	round = 0;
	pause = false;
 	colors = [0,0,0,0];
 	stats = [0,0,0];
	resetMap();
	nextRound();
}

function continueGame() {
	player = JSON.parse(window.localStorage.getItem("player"));
	enemy = JSON.parse(window.localStorage.getItem("enemy"));
	unitsArray = [player,enemy];

	unitsArray.forEach((unit,index)=>{
		let per = (100 * unit.hp[0]) / unit.hp[1];
		_unitHeatlhBarActual[unit.id].style.width = `${per}%`;
		_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
		_unitHeatlhBarNumber[index].innerHTML = `${unitsArray[index].hp[0]} / ${unitsArray[index].hp[1]}`;
	});

	solution = JSON.parse(window.localStorage.getItem("solution"));

	stage = JSON.parse(window.localStorage.getItem("stage"));
	round = JSON.parse(window.localStorage.getItem("round"));
	trys = JSON.parse(window.localStorage.getItem("trys"));
	guess = JSON.parse(window.localStorage.getItem("guess"));
	prevGuess = JSON.parse(window.localStorage.getItem("prevGuess"));

	actualSlot = JSON.parse(window.localStorage.getItem("actualSlot"));
	actualLine = JSON.parse(window.localStorage.getItem("actualLine"));

	stats = JSON.parse(window.localStorage.getItem("stats"));
	colors = JSON.parse(window.localStorage.getItem("colors"));

	loadGuesses();
	perfect = false;
	_roundText.innerHTML = `${text.battle.round[leng]} ${round}`;
	_stageText.innerHTML = `${text.battle.stage[leng]} ${stage}`;

	if(JSON.parse(window.localStorage.getItem("freezePreventing"))==true) aceptar()
}

function nextRound() {
	round++;
	_roundText.innerHTML = `${text.battle.round[leng]} ${round}`;
	_stageText.innerHTML = `${text.battle.stage[leng]} ${stage}`;
	stats[1]++;
	pause = false;
	resetMap();
	healRound();
}

function nextStage() {
	round = 0;
	stage++;
	stats[0]++;
	healStage();
	setEnemy();
	nextRound();
}

function resetMap() {
	clean();
	perfect = false;
	trys = 0;
	actualSlot = 0;
 	actualLine = 0;
 	guess = [];
 	prevGuess = [[],[],[],[],[],[]];
	solution = createSolution(numbers);
}

function defeat() {
	window.localStorage.setItem("gameActive", false);
	soundDead.load();
	soundDead.play();
	showResults();
}

function createSolution(array) {
  	let numCopy = [...array];
  	let sol = [];

  	for(let i=0; i<5; i++) {
   	 	let randNum = Math.floor(Math.random()*numCopy.length);
    	let splicedItem = numCopy.splice(randNum, 1)[0];
    	sol.push(splicedItem);
  	}
  	return sol;
}

const _resultWindow = document.createElement('div');
_resultWindow.id = "result-window";

const _resultText = document.createElement('div');
_resultText.id = "result-text";
const _resultContinue = document.createElement('div');
_resultContinue.id = "result-continue";

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
const _resultRounds = document.createElement('div');
_resultRounds.className = "result-stat";
const _resultPerfects = document.createElement('div');
_resultPerfects.className = "result-stat";

const _resultColorsContainer = document.createElement('div');
_resultColorsContainer.id = "result-color-container";
const _resultGreen = document.createElement('div');
_resultGreen.className = "result-color green";
const _resultYellow = document.createElement('div');
_resultYellow.className = "result-color yellow";
const _resultRed = document.createElement('div');
_resultRed.className = "result-color red";

_resultWindow.appendChild(_resultText);
_resultWindow.appendChild(_resultContinue);
_resultWindow.appendChild(_resultSolution);
_resultWindow.appendChild(_resultStatsContainer);
_resultStatsContainer.appendChild(_resultWins);
_resultStatsContainer.appendChild(_resultRounds);
_resultStatsContainer.appendChild(_resultPerfects);

_resultWindow.appendChild(_resultColorsContainer);
_resultColorsContainer.appendChild(_resultGreen);
_resultColorsContainer.appendChild(_resultYellow);
_resultColorsContainer.appendChild(_resultRed);

function showResults() {
	pause = true;
	_screen.appendChild(_resultWindow);
	_gameScene.style.pointerEvents = "none";
	_gameScene.style.filter = "brightness(0.3)";
	//saveActualGame();
	//saveLocalData();
	showSolution();
	checkRecords();
}

function showSolution() {
	for (let i=0; i<5; i++) {
		_resultSolutionCasillas[i].style.backgroundImage = `url('./img/p${solution[i]}_1.png')`;
		if (solution[i]===guess[i]) {
			_resultSolutionCasillas[i].style.backgroundColor = "#375";
			_resultSolutionCasillas[i].style.borderColor = "#5c9277";
		}
		else {
			_resultSolutionCasillas[i].style.backgroundColor = "#733";
			_resultSolutionCasillas[i].style.borderColor = "#925c5c";
		}
	}
}

function checkRecords() {
	_resultWins.innerHTML = `<b>${stats[0]}</b><br>${text.result.wins[leng]}`;
	_resultRounds.innerHTML = `<b>${stats[1]}</b><br>${text.result.rounds[leng]}`;
	_resultPerfects.innerHTML = `<b>${stats[2]}</b><br>${text.result.perfects[leng]}`;

	if (stats[0]>records[0]) {
		records[0] = stats[0];
		_resultWins.innerHTML += `<br>${text.result.newRecord[leng]}`;
	} else _resultWins.innerHTML += `<br>${text.result.record[leng]}: ${records[0]}`;

	if (stats[1]>records[1]) {
		records[1] = stats[1];
		_resultRounds.innerHTML += `<br>${text.result.newRecord[leng]}`;
	} else _resultRounds.innerHTML += `<br>${text.result.record[leng]}: ${records[1]}`;

	if (stats[2]>records[2]) {
		records[2] = stats[2];
		_resultPerfects.innerHTML += `<br>${text.result.newRecord[leng]}`;
	} else _resultPerfects.innerHTML += `<br>${text.result.record[leng]}: ${records[2]}`;

	_resultGreen.innerHTML = `${text.result.green[leng]}: ${colors[0]} (${((colors[0]/colors[3])*100).toFixed(1)}%)`;
	_resultYellow.innerHTML = `${text.result.yellow[leng]}: ${colors[1]} (${((colors[1]/colors[3])*100).toFixed(1)}%)`;
	_resultRed.innerHTML = `${text.result.red[leng]}: ${colors[2]} (${((colors[2]/colors[3])*100).toFixed(1)}%)`;

	saveRecordData();
}

_resultContinue.addEventListener('click',()=>{
	_screen.removeChild(_resultWindow);
	_gameScene.style.pointerEvents = "revert-layer";
	_gameScene.style.filter = "revert-layer";
	_screen.removeChild(_gameScene);
	loadMenuScene();
	soundClick2.load();
	soundClick2.play();
})


//datos local storage

function saveRecordData() {
	window.localStorage.setItem("recordStorage", true);
	window.localStorage.setItem("records", JSON.stringify(records));
}

function saveActualGame() {
	window.localStorage.setItem("gameSaved", true);

	window.localStorage.setItem("player", JSON.stringify(player));
	window.localStorage.setItem("enemy", JSON.stringify(enemy));

	window.localStorage.setItem("solution", JSON.stringify(solution));

	window.localStorage.setItem("stage", JSON.stringify(stage));
	window.localStorage.setItem("round", JSON.stringify(round));
	window.localStorage.setItem("trys", JSON.stringify(trys));
	window.localStorage.setItem("guess", JSON.stringify(guess));
	window.localStorage.setItem("prevGuess", JSON.stringify(prevGuess));

	window.localStorage.setItem("actualSlot", JSON.stringify(actualSlot));
	window.localStorage.setItem("actualLine", JSON.stringify(actualLine));

	window.localStorage.setItem("stats", JSON.stringify(stats));
	window.localStorage.setItem("colors", JSON.stringify(colors));
	//window.localStorage.setItem("aceptando", JSON.stringify(aceptando));
}

function deleteActualGame() {
	window.localStorage.setItem("gameSaved", false);

	localStorage.removeItem(player);
	localStorage.removeItem(enemy);
	localStorage.removeItem(solution);

	localStorage.removeItem(stage);
	localStorage.removeItem(round);
	localStorage.removeItem(trys);
	localStorage.removeItem(guess);
	localStorage.removeItem(prevGuess);

	localStorage.removeItem(actualSlot);
	localStorage.removeItem(actualLine);

	localStorage.removeItem(stats);
	localStorage.removeItem(colors);
}

