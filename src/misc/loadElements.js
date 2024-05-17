const _screen = document.getElementById('screen');

//INIT
const _initScene = document.createElement('div');
_initScene.id = "init-scene";

const _initTittle = document.createElement('div');
_initTittle.className = "game-tittle";

const _initPrompt = document.createElement('div');
_initPrompt.id = "init-prompt";

_initScene.appendChild(_initTittle);
_initScene.appendChild(_initPrompt);

//MENU
const _menuScene = document.createElement('div');
_menuScene.id = "menu-scene";

const _menuTittle = document.createElement('div');
_menuTittle.className = "game-tittle";
_menuScene.appendChild(_menuTittle);

const _menuBeta = document.createElement('div');
_menuBeta.className = "menu-beta";
_menuBeta.innerHTML = "Beta";
_menuScene.appendChild(_menuBeta);

const _menuButtonContainer = document.createElement('div');
_menuButtonContainer.id = "menu-button-container";
_menuScene.appendChild(_menuButtonContainer);

const _menuButtonArray = [];

for (let i=0;i<5;i++) {
	_menuButtonArray[i] = document.createElement('div');
	_menuButtonArray[i].className = "button-menu";
	_menuButtonArray[i].id = `button-menu-${i}`;
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

const _skillTreeBg = document.createElement('div');
_skillTreeBg.id = "st-background";
_skillTreeScene.appendChild(_skillTreeBg);

const _skillTreeContainer = [];
const _skillTreeName = [];
const _skillTreeDescp = [];
const _skillTreeButton = [];
const _skillTreeLevel = [];
for (let i=0; i<15; i++) {
	_skillTreeContainer[i] = document.createElement('div');
	_skillTreeContainer[i].className = "st-container";
	_skillTreeBg.appendChild(_skillTreeContainer[i]);

	_skillTreeName[i] = document.createElement('div');
	_skillTreeName[i].className = "st-name";
	_skillTreeContainer[i].appendChild(_skillTreeName[i]);

	_skillTreeDescp[i] = document.createElement('div');
	_skillTreeDescp[i].className = "st-descp";
	_skillTreeContainer[i].appendChild(_skillTreeDescp[i]);

	_skillTreeLevel[i] = document.createElement('div');
	_skillTreeLevel[i].className = "st-level";
	_skillTreeContainer[i].appendChild(_skillTreeLevel[i]);

	_skillTreeButton[i] = document.createElement('div');
	_skillTreeButton[i].className = "st-button";
	_skillTreeContainer[i].appendChild(_skillTreeButton[i]);	
	_skillTreeButton[i].addEventListener('click',()=>{buyTalent(i)})
	_skillTreeButton[i].addEventListener('mouseover',()=>{
		soundHover2.load();
		soundHover2.play();
	})
}

//GAME
const _gameScene = document.createElement('div');
_gameScene.id = "game-scene";

const _board = document.createElement('div');
_board.id = "board";
_gameScene.appendChild(_board)

const _bottomBar = document.createElement('div');
_bottomBar.id = "bottom-bar";
_gameScene.appendChild(_bottomBar)

const _floor = document.createElement('div');
_floor.id = "floor";
_gameScene.appendChild(_floor)

const _wall = document.createElement('div');
_wall.id = "wall";
_gameScene.appendChild(_wall)

const _wallShadow = document.createElement('div');
_wallShadow.id = "wall-shadow";
_gameScene.appendChild(_wallShadow)

const _roundText = document.createElement('div');
_roundText.id = "round-text";
_bottomBar.appendChild(_roundText);

const _stageText = document.createElement('div');
_stageText.id = "stage-text";
_bottomBar.appendChild(_stageText);

const _unitsContainer = document.createElement('div');
_unitsContainer.id = "units-container";
_bottomBar.appendChild(_unitsContainer);

const _unitsFireContainer = document.createElement('div');
_unitsFireContainer.id = "units-fire-container";
_unitsFireContainer.className = "units-container";
_bottomBar.appendChild(_unitsFireContainer);

const _unitsWaterContainer = document.createElement('div');
_unitsWaterContainer.id = "units-water-container";
_unitsWaterContainer.className = "units-container";
_bottomBar.appendChild(_unitsWaterContainer);

const _unitsThunderContainer = document.createElement('div');
_unitsThunderContainer.id = "units-thunder-container";
_unitsThunderContainer.className = "units-container";
_bottomBar.appendChild(_unitsThunderContainer);

const _unitsEarthContainer = document.createElement('div');
_unitsEarthContainer.id = "units-earth-container";
_unitsEarthContainer.className = "units-container";
_bottomBar.appendChild(_unitsEarthContainer);

const _gameReturnButton = document.createElement('div');
_gameReturnButton.id = "game-return-button";
_gameReturnButton.innerHTML = "MENU";
_bottomBar.appendChild(_gameReturnButton);

const _playerContainer = document.createElement('div');
_playerContainer.id = "user-container";
_playerContainer.className = "player-container";

const _enemyContainer = document.createElement('div');
_enemyContainer.id = "enemy-container";
_enemyContainer.className = "player-container";

_gameScene.appendChild(_playerContainer);
_gameScene.appendChild(_enemyContainer);

const _playerImage = document.createElement('div');
_playerImage.id = "user-image";
_playerImage.className = "player-image";

const _enemyImage = document.createElement('div');
_enemyImage.id = "enemy-image";
_enemyImage.className = "player-image";

_playerContainer.appendChild(_playerImage);
_enemyContainer.appendChild(_enemyImage);

_unitHeatlhBar = [];
_unitHeatlhBarActual = [];
_unitHeatlhBarNumber = [];

for (let i=0;i<2;i++) {
	_unitHeatlhBar[i] = document.createElement('div');
	_unitHeatlhBar[i].className = `hb p${i}`;
	_unitHeatlhBarActual[i] = document.createElement('div');
	_unitHeatlhBarActual[i].className = "hb-actual";
	_unitHeatlhBarNumber[i] = document.createElement('div');
	_unitHeatlhBarNumber[i].className = "hb-number";

	_unitHeatlhBar[i].appendChild(_unitHeatlhBarActual[i]);
	_unitHeatlhBar[i].appendChild(_unitHeatlhBarNumber[i]);
}

_playerContainer.appendChild(_unitHeatlhBar[0]);
_enemyContainer.appendChild(_unitHeatlhBar[1]);

const _statsPlayersContainer = [];
const _statsPlayers = [];
const _statsPlayersTittle = [];

for (let i=0;i<2;i++) {
	_statsPlayersContainer[i] = document.createElement('div');
	_statsPlayersContainer[i].className = `stat-player-container p${i}`;

	_statsPlayers[i] = document.createElement('div');
	_statsPlayers[i].className = "stat-player";

	_statsPlayersTittle[i] = document.createElement('div');
	_statsPlayersTittle[i].className = `stat-player-tittle`;
}

const _statsUserArrow = document.createElement('div');
_statsUserArrow.id = `stat-user-arrow`;
_statsUserArrow.innerHTML = "►"

_playerContainer.appendChild(_statsPlayersContainer[0]);
_statsPlayersContainer[0].appendChild(_statsPlayersTittle[0]);
_statsPlayersContainer[0].appendChild(_statsUserArrow);
_statsPlayersContainer[0].appendChild(_statsPlayers[0]);
_enemyContainer.appendChild(_statsPlayersContainer[1]);
_statsPlayersContainer[1].appendChild(_statsPlayersTittle[1]);
_statsPlayersContainer[1].appendChild(_statsPlayers[1]);

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

const _resultSolutionSquare = [];
for (let i=0; i<5; i++) {
	_resultSolutionSquare[i] = document.createElement('div');
	_resultSolutionSquare[i].className = "square";
	_resultSolution.appendChild(_resultSolutionSquare[i]);
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
_resultYellow.className = "result-color blue";
const _resultRed = document.createElement('div');
_resultRed.className = "result-color pink";

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
_resultWindow.appendChild(_resultCoins);
