_lineasArray = [];
_casillasArray = [[],[],[],[],[],[]];

for (let i=0; i<6;i++) {
	_lineasArray[i] = document.createElement('div');
	_lineasArray[i].className = "linea";
	_tablero.appendChild(_lineasArray[i]);
	for (let j=0; j<5; j++) {
		_casillasArray[i][j] = document.createElement('div');
		_casillasArray[i][j].className = "casilla";
		_lineasArray[i].appendChild(_casillasArray[i][j]);
	}
}

_unidadesArray = [];
for (let i=0; i<23;i++) {
	_unidadesArray[i] = document.createElement('div');
	_unidadesArray[i].className = "unidad";
	if(i!=11 && i!=22) _unidadesArray[i].style.backgroundImage = `url('./img/p${i+1}_1.png')`;
	_unidadesContenedor.appendChild(_unidadesArray[i]);

}

_unidadesArray[11].id = "delete";
_unidadesArray[11].innerHTML = "⌫";
_unidadesArray[22].id = "enter";
_unidadesArray[22].innerHTML = "ENTER";

_unidadesArray.forEach((u,index)=>{
	u.addEventListener('click',()=>{
		if (pause) return;
		if (index==11) {
			deletePenguin();
		} else if (index==22) {
			aceptar();
		} else {
			addPenguin(index+1);
		}
	})
})

var perfect = false;
var actualSlot = 0;
var actualLine = 0;
var guess = []
var prevGuess = [[],[],[],[],[],[]];

function addPenguin(p) {
	if (guess.includes(p)) return;
	if(actualSlot<5) {
		soundClick.load();
		soundClick.play();
		_casillasArray[actualLine][actualSlot].style.backgroundImage = `url('./img/p${p}_1.png')`;
		_casillasArray[actualLine][actualSlot].style.animation = "zoom .3s";
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
		_casillasArray[actualLine][actualSlot].style.backgroundImage = ``;
		_casillasArray[actualLine][actualSlot].style.animation = "revert-layer";
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
			if (player.hp[0]==0) return defeat();
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
		_casillasArray[actualLine][index].style.backgroundImage = `url('./img/p${p}_1.png')`;
		setTimeout(()=>{
			if (solution.includes(p)) {
				if (solution[index]===p) {
					soundCorrect.load();
					soundCorrect.play();

					damageGreen();
					_casillasArray[actualLine][index].style.backgroundColor = "#375";
					_casillasArray[actualLine][index].style.borderColor = "#5c9277";
					_unidadesArray[p-1].style.backgroundColor = "#375";
					_casillasArray[actualLine][index].style.animation = "unzoom .3s";
					colors[0]++;
				}
				else {
					soundAlmost.load();
					soundAlmost.play();
				
					damageYellow();
					_casillasArray[actualLine][index].style.backgroundColor = "#9f9222";
					_casillasArray[actualLine][index].style.borderColor = "#d2c555";
					_unidadesArray[p-1].style.backgroundColor = "#9f9222";
					colors[1]++;
				}
			} else {
				soundIncorrect.load();
				soundIncorrect.play();

				if (enemy.hp[0]>0) changeHealth(-enemy.red, player);
				_casillasArray[actualLine][index].style.backgroundColor = "#733";
				_casillasArray[actualLine][index].style.borderColor = "#925c5c";
				_unidadesArray[p-1].style.backgroundColor = "#733";
				_casillasArray[actualLine][index].style.animation = "shake .5s";
				colors[2]++;
			}
			colors[3]++;
		},500*index)
	})
}

function clean() {
	_unidadesArray.forEach((u)=>{u.style.backgroundColor = "revert-layer"});
	for (let i=0; i<6;i++) {
		for (let j=0; j<5; j++) {
			_casillasArray[i][j].style.backgroundColor = "revert-layer";
			_casillasArray[i][j].style.backgroundImage = "revert-layer";
			_casillasArray[i][j].style.borderColor = "revert-layer";
			_casillasArray[i][j].style.animation = "revert-layer";
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
			_casillasArray[i][index].style.backgroundImage = `url('./img/p${p}_1.png')`;
			if (solution.includes(p)) {
				if (solution[index]===p) {
					_casillasArray[i][index].style.backgroundColor = "#375";
					_casillasArray[i][index].style.borderColor = "#5c9277";
					_unidadesArray[p-1].style.backgroundColor = "#375";

				}
				else {
					_casillasArray[i][index].style.backgroundColor = "#9f9222";
					_casillasArray[i][index].style.borderColor = "#d2c555";
					_unidadesArray[p-1].style.backgroundColor = "#9f9222";
				}
			} else {
				_casillasArray[i][index].style.backgroundColor = "#733";
				_casillasArray[i][index].style.borderColor = "#925c5c";
				_unidadesArray[p-1].style.backgroundColor = "#733";

			}
		})
	}
}
