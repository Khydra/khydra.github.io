function loadInitScene() {
	updateLenguage();
	_screen.appendChild(_initScene);
}

function loadMenuScene() {
	_screen.appendChild(_menuScene);
	if (window.localStorage.getItem("gameActive")=="true") {
	_menuButtonArray[1].style.filter = "brightness(1)";
	_menuButtonArray[1].style.pointerEvents = "all";
	} else {
		_menuButtonArray[1].style.filter = "brightness(0.5)";
		_menuButtonArray[1].style.pointerEvents = "none";
	}
}

function loadGameScene(load) {
	_screen.appendChild(_gameScene);
	(load) ? continueGame() : newGame();
}

function loadSettingsScene() {_screen.appendChild(_settingsScene);}

function loadSkillTreeScene() {
	_screen.appendChild(_skillTreeScene);
	_skillTreeCoin.innerHTML = `${text.skill.coin[leng]}: ${coins}`
}

_menuButtonArray.forEach((button)=>{
	button.addEventListener('mouseover',()=>{
		soundHover.load();
		soundHover.play()
	})
})

_menuButtonArray[0].addEventListener('click',()=>{
	_screen.removeChild(_menuScene);
	soundSelect.load();
	soundSelect.play();
	loadGameScene(false);
})

_menuButtonArray[1].addEventListener('click',()=>{
	_screen.removeChild(_menuScene);
	soundSelect.load();
	soundSelect.play();
	loadGameScene(true);
})

_menuButtonArray[2].addEventListener('click',()=>{
	_screen.removeChild(_menuScene);
	soundSelect.load();
	soundSelect.play();
	loadSkillTreeScene();
})

_menuButtonArray[3].addEventListener('click',()=>{
	_screen.removeChild(_menuScene);
	soundSelect.load();
	soundSelect.play();
	loadSettingsScene();
})

_menuButtonArray[4].addEventListener('click',()=>{
	soundSelect.load();
	soundSelect.play();
	console.log("salir")
})
