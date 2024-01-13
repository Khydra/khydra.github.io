/*var perfect = false;
var actualSlot = 0;
var actualLine = 0;
var guess = []
var prevGuess = [[],[],[],[],[],[]];*/

function addPenguin(p) {
	if (guess.includes(p)) return;
	if(actualSlot<5) {
		soundClick.load();
		soundClick.play();
		_squareArray[actualLine][actualSlot].style.backgroundImage = `url('./img/p${p}_1.png')`;
		_squareArray[actualLine][actualSlot].style.animation = "zoom .3s";
		guess[actualSlot] = p;
		actualSlot++;
	}
}

function deletePenguin() {
	if(actualSlot>0) {
		soundDelete.load();
		soundDelete.play();
		actualSlot--;
		guess[actualSlot] = null;
		_squareArray[actualLine][actualSlot].style.backgroundImage = ``;
		_squareArray[actualLine][actualSlot].style.animation = "revert-layer";
	}
}

function aceptar() {
	if (actualSlot==5) {
		window.localStorage.setItem("freezePreventing", JSON.stringify(true));
		saveActualGame();
		pause = true;
		prevGuess[actualLine] = [...guess];
		checkGuess();
		arraysEqual(guess,solution);
		setTimeout(()=>{
			window.localStorage.setItem("freezePreventing", JSON.stringify(false));
			if (user.hp[0]==0) return defeat();
			else if (enemy.hp[0]==0) return upgradeSelection();//nextStage()
			else if (trys==5 || perfect) return nextRound();
			else {
				trys++;
				guess = [];
				actualSlot = 0;
				actualLine++;
				pause = false;
				saveActualGame();
			} 
		},2600);
	}
}

function checkGuess() {
	guess.forEach((p,index)=>{
		_squareArray[actualLine][index].style.backgroundImage = `url('./img/p${p}_1.png')`;
		setTimeout(()=>{
			if (solution.includes(p)) {
				if (solution[index]===p) {
					soundCorrect.load();
					soundCorrect.play();

					damage("green",(p-1));
					_squareArray[actualLine][index].style.backgroundColor = "#375";
					_squareArray[actualLine][index].style.borderColor = "#5c9277";
					_unitsArray[p-1].style.backgroundColor = "#375";
					_squareArray[actualLine][index].style.animation = "unzoom .3s";
					colors[0]++;
				}
				else {
					soundAlmost.load();
					soundAlmost.play();
				
					damage("yellow",(p-1));
					_squareArray[actualLine][index].style.backgroundColor = "#9f9222";
					_squareArray[actualLine][index].style.borderColor = "#d2c555";
					_unitsArray[p-1].style.backgroundColor = "#9f9222";
					colors[1]++;
				}
			} else {
				soundIncorrect.load();
				soundIncorrect.play();

				if (enemy.hp[0]>0) changeHealth(-enemy.red, user);
				_squareArray[actualLine][index].style.backgroundColor = "#733";
				_squareArray[actualLine][index].style.borderColor = "#925c5c";
				_unitsArray[p-1].style.backgroundColor = "#733";
				_squareArray[actualLine][index].style.animation = "shake .5s";
				colors[2]++;
			}
			colors[3]++;
		},500*index)
	})
}

function clean() {
	_unitsArray.forEach((u)=>{u.style.backgroundColor = "revert-layer"});
	for (let i=0; i<6;i++) {
		for (let j=0; j<5; j++) {
			_squareArray[i][j].style.backgroundColor = "revert-layer";
			_squareArray[i][j].style.backgroundImage = "revert-layer";
			_squareArray[i][j].style.borderColor = "revert-layer";
			_squareArray[i][j].style.animation = "revert-layer";
		}
	}
}

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;
	for (var i = 0; i < a.length; ++i) if (a[i] !== b[i]) return false;

	stats[2]++;
	perfect = true;
	perfectTrigger();
}

function loadGuesses() {
	for (let i=0;i<actualLine;i++) {
		prevGuess[i].forEach((p,index)=>{
			_squareArray[i][index].style.backgroundImage = `url('./img/p${p}_1.png')`;
			if (solution.includes(p)) {
				if (solution[index]===p) {
					_squareArray[i][index].style.backgroundColor = "#375";
					_squareArray[i][index].style.borderColor = "#5c9277";
					_unitsArray[p-1].style.backgroundColor = "#375";

				}
				else {
					_squareArray[i][index].style.backgroundColor = "#9f9222";
					_squareArray[i][index].style.borderColor = "#d2c555";
					_unitsArray[p-1].style.backgroundColor = "#9f9222";
				}
			} else {
				_squareArray[i][index].style.backgroundColor = "#733";
				_squareArray[i][index].style.borderColor = "#925c5c";
				_unitsArray[p-1].style.backgroundColor = "#733";

			}
		})
	}
}
