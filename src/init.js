_initScene = document.createElement('div');
_initScene.id = "init-scene";

_initTittle = document.createElement('div');
_initTittle.className = "game-tittle";
_initTittle.innerHTML = "DUNGEDLE";
_initPrompt = document.createElement('div');
_initPrompt.id = "init-prompt";

_initScene.appendChild(_initTittle);
_initScene.appendChild(_initPrompt);

_menuScene = document.createElement('div');
_menuScene.id = "menu-scene";

_menuTittle = document.createElement('div');
_menuTittle.className = "game-tittle";
_menuTittle.innerHTML = "DUNGEDLE";

_menuBeta = document.createElement('div');
_menuBeta.className = "menu-beta";
_menuBeta.innerHTML = "BETA!";
_menuScene.appendChild(_menuBeta);

_menuTweet = document.createElement('div');
_menuTweet.className = "menu-tweet";
_menuTweet.innerHTML = "@Khydra98";
_menuScene.appendChild(_menuTweet);

_menuTweet.addEventListener('click',()=>{window.open("https://twitter.com/khydra98");})

_menuButtonContainer = document.createElement('div');
_menuButtonContainer.id = "menu-button-container";
_menuScene.appendChild(_menuButtonContainer);

_menuButtonArray = [];
for (let i=0;i<3;i++) {
	_menuButtonArray[i] = document.createElement('div');
	_menuButtonArray[i].className = "button-menu";
	_menuButtonContainer.appendChild(_menuButtonArray[i]);
}

_menuScene.appendChild(_menuTittle);

_initScene.addEventListener('click',()=>{
	_screen.removeChild(_initScene);
	soundStart.load();
	soundStart.play();
	loadMenuScene();
})

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
	loadSettingsScene();
})

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

function loadSettingsScene() {
	_screen.appendChild(_settingsScene);
}

loadInitScene();

