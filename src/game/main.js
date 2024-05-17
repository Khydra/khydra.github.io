var numbers = [1,2,3,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20];
var statsTab = 0;

var stage = 1;
var round = 0;
var solution = [];
var trys = 0;
var pause = false;
var stats = [0,0,0];
var colors = [0,0,0,0];

var perfect = false;
var actualSlot = 0;
var actualLine = 0;
var guess = [];
var prevGuess = [[],[],[],[],[],[]];

function newGame() {
	window.localStorage.setItem("gameActive", true);
	deleteActualGame();
	clean();
	defaultPlayers();
	stage = 1;
	round = 0;
	pause = false;
 	colors = [0,0,0,0];
 	stats = [0,0,0];
	//resetMap();
	nextRound();
}

function continueGame() {
	user = JSON.parse(window.localStorage.getItem("user"));
	enemy = JSON.parse(window.localStorage.getItem("enemy"));
	playersArray = [user,enemy];

	playersArray.forEach((unit,index)=>{
		let per = (100 * unit.hp[0]) / unit.hp[1];
		_unitHeatlhBarActual[unit.id].style.width = `${per}%`;
		_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
		_unitHeatlhBarNumber[index].innerHTML = `${playersArray[index].hp[0]} / ${playersArray[index].hp[1]}`;
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
	changeStatsTab(statsTab);
	enemyStatsTab();

	_playerImage.style.backgroundImage = `url('./img/p${user.img}_1.png')`;
	_enemyImage.style.backgroundImage = `url('./img/p${enemy.img}_1.png')`;
	if(JSON.parse(window.localStorage.getItem("freezePreventing"))==true) acceptUnit();
}

function nextRound() {
	round++;
	_roundText.innerHTML = `${text.battle.round[leng]} ${round}`;
	_stageText.innerHTML = `${text.battle.stage[leng]} ${stage}`;
	stats[1]++;
	pause = false;
	resetMap();
	healRound();
	enemyStatsTab();
	changeStatsTab(statsTab);
	saveActualGame();
}

function nextStage() {
	round = 0;
	stage++;
	stats[0]++;
	user.block[1]=1;
	healStage();
	setEnemy();
	nextRound();
	enemyStatsTab();
	changeStatsTab(statsTab);
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

  	for (let i=0; i<1; i++) {
   	 	let randNum = Math.floor(Math.random()*4)+(enemy.element*5);
    	let splicedItem = numCopy.splice(randNum, 1)[0];
    	sol.push(splicedItem);
  	}
  	for (let i=0; i<4; i++) {
   	 	let randNum = Math.floor(Math.random()*numCopy.length);
    	let splicedItem = numCopy.splice(randNum, 1)[0];
    	sol.push(splicedItem);
  	}
  	return sol;
}

function showResults() {
	pause = true;
	_screen.appendChild(_resultWindow);
	_gameScene.style.pointerEvents = "none";
	_gameScene.style.filter = "brightness(0.1)";

	showSolution();
	checkRecords();
	coinReward();
}

function coinReward() {
	let rewardCoins = Math.ceil(stats[0]*1.7);
	rewardCoins += Math.ceil(stats[1]*0.3);
	rewardCoins += Math.ceil(stats[2]*5);
	coins += rewardCoins;
	_resultCoins.innerHTML = `${rewardCoins} ${text.skill.coin[leng]} ${text.result.obtain[leng]}`;
	window.localStorage.setItem("coins", JSON.stringify(coins));
}

function showSolution() {
	for (let i=0; i<5; i++) {
		_resultSolutionSquare[i].style.opacity = 1;
		_resultSolutionSquare[i].style.backgroundImage = `url('./img/p${solution[i]}_1.png')`;
		if (solution[i]===guess[i]) {
			_resultSolutionSquare[i].style.backgroundColor = "#87DE1D";
			_resultSolutionSquare[i].style.borderColor = "#5f9b14";
		}
		else {
			_resultSolutionSquare[i].style.backgroundColor = "#de1d57";
			_resultSolutionSquare[i].style.borderColor = "#9b143d";
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

	window.localStorage.setItem("user", JSON.stringify(user));
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
}

function deleteActualGame() {
		window.localStorage.setItem("gameSaved", false);

		localStorage.removeItem(user);
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

function shuffle(array) {
	  let currentIndex = array.length,  randomIndex;

	  while (currentIndex > 0) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex--;
		    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	  }

	  return array;
}

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

_gameReturnButton.addEventListener('mouseover',()=>{
		if (pause) return;
		soundHover3.load();
		soundHover3.play();
})
