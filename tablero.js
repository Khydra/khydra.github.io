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
	if(i!=15 && i!=22) _unidadesArray[i].style.backgroundImage = `url('./img/p${i+1}_1.png')`;
	_unidadesContenedor.appendChild(_unidadesArray[i]);

}

_unidadesArray[15].id = "delete";
_unidadesArray[15].innerHTML = "⌫";
_unidadesArray[22].id = "enter";
_unidadesArray[22].innerHTML = "ENTER";

_unidadesArray.forEach((u,index)=>{
	u.addEventListener('click',()=>{
		if (pause) return;
		if (inResultScreen) return showResults();
		if (index==15) {
			deletePenguin();
		} else if (index==22) {
			aceptar();
		} else {
			addPenguin(index+1);
		}
	})
})

_screen.addEventListener('click',()=>{
	if (inResultScreen) return showResults();
})

var actualSlot = 0;
var actualLine = 0;
var guess = []
var prevGuess = [[],[],[],[],[],[]];

function addPenguin(p) {
	if (guess.includes(p)) return;
	if(actualSlot<5) {
		if (!mute) {
			soundClick.load();
			soundClick.play();
		}
		_casillasArray[actualLine][actualSlot].style.backgroundImage = `url('./img/p${p}_1.png')`;
		_casillasArray[actualLine][actualSlot].style.animation = "zoom .3s";
		guess[actualSlot] = p;
		actualSlot++;
	}
}

function deletePenguin() {
	if(actualSlot>0) {
		if (!mute) {
			soundDelete.load();
			soundDelete.play();
		}
		actualSlot--;
		guess[actualSlot] = null;
		_casillasArray[actualLine][actualSlot].style.backgroundImage = ``;
		_casillasArray[actualLine][actualSlot].style.animation = "revert-layer";
	}
}

var aceptando = false;
function aceptar() {
	if (actualSlot==5) {
		aceptando = true;
		saveActualGame();
		pause = true;
		prevGuess[actualLine] = [...guess];
		checkGuess();
		arraysEqual(guess,solution);
		setTimeout(()=>{
			if (trys==5) showResults();
			else if (!win) {
				trys++;
				guess = [];
				actualSlot = 0;
				actualLine++;
				pause = false;
				aceptando = false;
				saveActualGame();
			} else showResults();
		},2600);
	}
}

function checkGuess() {
	guess.forEach((p,index)=>{
		_casillasArray[actualLine][index].style.backgroundImage = `url('./img/p${p}_1.png')`;
		setTimeout(()=>{
			if (solution.includes(p)) {
				if (solution[index]===p) {
					if (!mute) {
						soundCorrect.load();
						soundCorrect.play();
					}
					_casillasArray[actualLine][index].style.backgroundColor = "#375";
					_casillasArray[actualLine][index].style.borderColor = "#5c9277";
					_unidadesArray[p-1].style.backgroundColor = "#375";
					_casillasArray[actualLine][index].style.animation = "unzoom .3s";
				}
				else {
					if (!mute) {
						soundAlmost.load();
						soundAlmost.play();
					}
					_casillasArray[actualLine][index].style.backgroundColor = "#9f9222";
					_casillasArray[actualLine][index].style.borderColor = "#d2c555";
					_unidadesArray[p-1].style.backgroundColor = "#9f9222";
				}
			} else {
				if (!mute) {
					soundIncorrect.load();
					soundIncorrect.play();
				}
				_casillasArray[actualLine][index].style.backgroundColor = "#733";
				_casillasArray[actualLine][index].style.borderColor = "#925c5c";
				_unidadesArray[p-1].style.backgroundColor = "#733";
				_casillasArray[actualLine][index].style.animation = "shake .5s";
			}
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

	win = true;
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