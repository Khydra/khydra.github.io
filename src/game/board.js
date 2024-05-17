function addUnit(p) {
	if (guess.includes(p)) return;
	if (actualSlot<5) {
		soundClick.load();
		soundClick.play();
		_squareArray[actualLine][actualSlot].style.opacity = 1;
		_squareArray[actualLine][actualSlot].style.backgroundImage = `url('./img/p${p}_1.png')`;
		_squareArray[actualLine][actualSlot].style.animation = "zoom .3s";
		guess[actualSlot] = p;
		actualSlot++;
	}
}

function deleteUnit() {
	if(actualSlot>0) {
		soundDelete.load();
		soundDelete.play();
		actualSlot--;
		guess[actualSlot] = null;
		_squareArray[actualLine][actualSlot].style.opacity = "revert-layer";
		_squareArray[actualLine][actualSlot].style.backgroundImage = `revert-layer`;
		_squareArray[actualLine][actualSlot].style.animation = "revert-layer";
	}
}

function acceptUnit() {
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
			else if (enemy.hp[0]==0) {
				tryGrowth();
				return upgradeSelection();//nextStage()
			}
			else if (trys==5 || perfect) {
				return nextRound();
			}
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
					damage("succes",(p-1));
					_squareArray[actualLine][index].style.opacity = 1;
					_squareArray[actualLine][index].style.backgroundColor = "#87DE1D";
					_squareArray[actualLine][index].style.borderColor = "#5f9b14";
					_unitsArray[p-1].style.backgroundColor = "#87DE1D";
					_unitsArray[p-1].style.borderColor = "#5f9b14";
					_squareArray[actualLine][index].style.animation = "unzoom .3s";
					colors[0]++;
				}
				else {
					soundAlmost.load();
					soundAlmost.play();
				
					damage("partial",(p-1));
					_squareArray[actualLine][index].style.opacity = 1;
					_squareArray[actualLine][index].style.backgroundColor = "#199BDF";
					_squareArray[actualLine][index].style.borderColor = "#126d9c";
					_unitsArray[p-1].style.backgroundColor = "#199BDF";
					_unitsArray[p-1].style.borderColor = "#126d9c";
					colors[1]++;
				}
			} else {
				soundIncorrect.load();
				soundIncorrect.play();
				let block = tryBlock();
				if (enemy.hp[0]>0 && !block) changeHealth(-enemy.red, user);
				tryResurect();
				_squareArray[actualLine][index].style.opacity = 1;
				_squareArray[actualLine][index].style.backgroundColor = "#de1d57";
				_squareArray[actualLine][index].style.borderColor = "#9b143d";
				_unitsArray[p-1].style.backgroundColor = "#de1d57";
				_unitsArray[p-1].style.borderColor = "#9b143d";
				_squareArray[actualLine][index].style.animation = "shake .5s";
				colors[2]++;
			}
			colors[3]++;
		},500*index)
	})
}

function tryResurect() {
	if (user.resurrection[0]==1 && user.resurrection[1]==1){
		user.resurrection[1]=0;
		let heal = Math.floor(user.hp[1]*0.3);
		changeHealth(heal, user);
	}
}

function tryBlock() {
	if (user.block[0]==1 && user.block[1]==1){
		user.block[1]=0;
		return true;
	}
	return false;
}

function tryGrowth() {
	if (user.growth[0]>0 && (user.hp[0]==user.hp[1])) {
		user.growth[1]++;
		user.hp[1]++;
	}
}

function clean() {
	_unitsArray.forEach((u)=>{
		u.style.backgroundColor = "revert-layer";
		u.style.borderColor = "revert-layer";
	});
	for (let i=0; i<6;i++) {
		for (let j=0; j<5; j++) {
			_squareArray[i][j].style.opacity = "revert-layer";
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
			_squareArray[i][index].style.opacity = 1;
			_squareArray[i][index].style.backgroundImage = `url('./img/p${p}_1.png')`;
			if (solution.includes(p)) {
				if (solution[index]===p) {
					_squareArray[i][index].style.backgroundColor = "#87DE1D";
					_squareArray[i][index].style.borderColor = "#5f9b14";
					_unitsArray[p-1].style.backgroundColor = "#87DE1D";
					_unitsArray[p-1].style.borderColor = "#5f9b14";
				}
				else {
					_squareArray[i][index].style.backgroundColor = "#199BDF";
					_squareArray[i][index].style.borderColor = "#126d9c";
					_unitsArray[p-1].style.backgroundColor = "#199BDF";
					_unitsArray[p-1].style.borderColor = "#126d9c";
				}
			} else {
				_squareArray[i][index].style.backgroundColor = "#de1d57";
				_squareArray[i][index].style.borderColor = "#9b143d";
				_unitsArray[p-1].style.backgroundColor = "#de1d57";
				_unitsArray[p-1].style.borderColor = "#9b143d";

			}
		})
	}
}
