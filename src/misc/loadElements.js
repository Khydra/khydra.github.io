const _screen = document.getElementById('screen');

//INIT
const _initScene = document.createElement('div');
_initScene.id = "init-scene";

const _initTittle = document.createElement('div');
_initTittle.className = "game-tittle";
_initTittle.innerHTML = "DUNGEDLE";
const _initPrompt = document.createElement('div');
_initPrompt.id = "init-prompt";

_initScene.appendChild(_initTittle);
_initScene.appendChild(_initPrompt);

//MENU
const _menuScene = document.createElement('div');
_menuScene.id = "menu-scene";

const _menuTittle = document.createElement('div');
_menuTittle.className = "game-tittle";
_menuTittle.innerHTML = "DUNGEDLE";
_menuScene.appendChild(_menuTittle);

const _menuBeta = document.createElement('div');
_menuBeta.className = "menu-beta";
_menuBeta.innerHTML = "BETA!";
_menuScene.appendChild(_menuBeta);

const _menuTweet = document.createElement('div');
_menuTweet.className = "menu-tweet";
_menuTweet.innerHTML = "@Khydra98";
_menuScene.appendChild(_menuTweet);

const _menuButtonContainer = document.createElement('div');
_menuButtonContainer.id = "menu-button-container";
_menuScene.appendChild(_menuButtonContainer);

const _menuButtonArray = [];

for (let i=0;i<5;i++) {
	_menuButtonArray[i] = document.createElement('div');
	_menuButtonArray[i].className = "button-menu";
	_menuButtonContainer.appendChild(_menuButtonArray[i]);
}

//SETTINGS
const _settingsScene = document.createElement('div');
_settingsScene.id = "settings-scene";

const _settingsTittle = document.createElement('div');
_settingsTittle.id = "settings-tittle";
_settingsScene.appendChild(_settingsTittle);

const _settingsReturn = document.createElement('div');
_settingsReturn.id = "settings-return";
_settingsReturn.className = "button-menu";
_settingsScene.appendChild(_settingsReturn);

const _settingsContainer = document.createElement('div');
_settingsContainer.id = "settings-container";
_settingsScene.appendChild(_settingsContainer);

const _settingsLenguageOption = document.createElement('div');
_settingsLenguageOption.id = "lenguage-option";
_settingsLenguageOption.className = "settings-option";
_settingsContainer.appendChild(_settingsLenguageOption);

const _settingsLenguageValue = document.createElement('div');
_settingsLenguageValue.id = "lenguage-value";
_settingsLenguageValue.className = "settings-value";
_settingsContainer.appendChild(_settingsLenguageValue);

const _settingsVolumeOption = document.createElement('div');
_settingsVolumeOption.id = "volume-option";
_settingsVolumeOption.className = "settings-option";
_settingsContainer.appendChild(_settingsVolumeOption);

const _settingsVolumeValue = document.createElement('div');
_settingsVolumeValue.id = "volume-value";
_settingsVolumeValue.className = "settings-value";
_settingsContainer.appendChild(_settingsVolumeValue);
_settingsVolumeValue.innerHTML = `${volume}%`;

const lengaugeArrow = [];
const volumeArrow = [];

for (let i=0;i<2;i++) {
	lengaugeArrow[i] = document.createElement('div');
	lengaugeArrow[i].id = `lengauge-arrow${i}`;
	lengaugeArrow[i].className = "setting-arrow";

	volumeArrow[i] = document.createElement('div');
	volumeArrow[i].id = `volume-arrow${i}`;
	volumeArrow[i].className = "setting-arrow";

	(i==0) ? lengaugeArrow[i].innerHTML = '◄' : lengaugeArrow[i].innerHTML = '►';
	(i==0) ? volumeArrow[i].innerHTML = '◄' : volumeArrow[i].innerHTML = '►';

	_settingsContainer.appendChild(lengaugeArrow[i]);
	_settingsContainer.appendChild(volumeArrow[i]);

	lengaugeArrow[i].addEventListener('click',()=>{changeLenguage(i)});
	volumeArrow[i].addEventListener('click',()=>{changeVolume(i)})
}

//SKILL TREE
const _skillTreeScene = document.createElement('div');
_skillTreeScene.id = "skillTree-scene";

const _skillTreeTittle = document.createElement('div');
_skillTreeTittle.id = "st-tittle";
_skillTreeScene.appendChild(_skillTreeTittle);

const _skillTreeReturn = document.createElement('div');
_skillTreeReturn.id = "st-return";
_skillTreeReturn.className = "button-menu";
_skillTreeScene.appendChild(_skillTreeReturn);

const _skillTreeCoin = document.createElement('div');
_skillTreeCoin.id = "st-coin";
_skillTreeScene.appendChild(_skillTreeCoin);

//GAME
const _gameScene = document.createElement('div');
_gameScene.id = "game-scene";

const _board = document.createElement('div');
_board.id = "board";
_gameScene.appendChild(_board)
const _bottomBar = document.createElement('div');
_bottomBar.id = "bottom-bar";
_gameScene.appendChild(_bottomBar)

const _roundText = document.createElement('div');
_roundText.id = "round-text";
_bottomBar.appendChild(_roundText);

const _stageText = document.createElement('div');
_stageText.id = "stage-text";
_bottomBar.appendChild(_stageText);

const _unitsContainer = document.createElement('div');
_unitsContainer.id = "units-container";
_bottomBar.appendChild(_unitsContainer);

const _gameReturnButton = document.createElement('div');
_gameReturnButton.id = "game-return-button";
_gameReturnButton.innerHTML = "⚙";
_gameScene.appendChild(_gameReturnButton);

//RESULTS
const _resultWindow = document.createElement('div');
_resultWindow.id = "result-window";

const _resultText = document.createElement('div');
_resultText.id = "result-text";
const _resultContinue = document.createElement('div');
_resultContinue.id = "result-continue";

const _resultSolution = document.createElement('div');
_resultSolution.id = "result-solution";
_resultSolution.className = "line";
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

const _resultCoins = document.createElement('div');
_resultCoins.className = "result-coins";
_resultColorsContainer.appendChild(_resultCoins);