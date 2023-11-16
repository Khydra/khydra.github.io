const _screen = document.getElementById('screen');

const _contentLeft = document.createElement('div');
const _contentRight = document.createElement('div');
const _contentCenter = document.createElement('div');

_contentLeft.id = 'content-left';
_contentRight.id = 'content-right';
_contentCenter.id = 'content-center';

_screen.appendChild(_contentLeft);
_screen.appendChild(_contentRight);
_screen.appendChild(_contentCenter);

const _separatorRight = document.createElement('div');
_separatorRight.id = 'separator-left';
_screen.appendChild(_separatorRight);
const _separatorLeft = document.createElement('div');
_separatorLeft.id = 'separator-right';
_screen.appendChild(_separatorLeft);

const _blackBg = document.createElement('div');
_blackBg.id = 'black-bg';
const _changeNameWindow = document.createElement('div');
_changeNameWindow.id = 'change-name-window';
const _changeNameWindowButton = document.createElement('div');
_changeNameWindowButton.id = 'change-name-window-button';
_changeNameWindow.appendChild(_changeNameWindowButton);
const _changeNameWindowLabel = document.createElement('div');
_changeNameWindowLabel.id = 'change-name-window-label';
_changeNameWindow.appendChild(_changeNameWindowLabel);
const _changeNameWindowInput = document.createElement('input');
_changeNameWindowInput.setAttribute("type", "text");
_changeNameWindowInput.setAttribute("maxlength", "25");
_changeNameWindowInput.id = 'change-name-window-input';
_changeNameWindow.appendChild(_changeNameWindowInput);
//LEFT
const _labName = document.createElement('div');
_labName.id = 'lab-name';
_contentLeft.appendChild(_labName);

const _gold = document.createElement('div');
_gold.id = 'gold';
_contentLeft.appendChild(_gold);

const _gems = document.createElement('div');
_gems.id = 'gems';
_contentLeft.appendChild(_gems);

const _cookies = document.createElement('div');
_cookies.id = 'cookies';
_contentLeft.appendChild(_cookies);

const _unitBattleContainer = document.createElement('div');
_unitBattleContainer.id = 'unit-battle-container';
_contentLeft.appendChild(_unitBattleContainer);

const _unitBattleTittle = document.createElement('div');
_unitBattleTittle.id = 'unit-battle-tittle';
_unitBattleContainer.appendChild(_unitBattleTittle);

const _unitBattleContainerArray = [];
const _unitBattleArray = [];
const _unitBattleBarContainerArray = []

for (let i=0; i<4; i++) {
	_unitBattleContainerArray[i] = document.createElement('div');
	_unitBattleContainerArray[i].id = `unit-battle-container${i}`;
	_unitBattleContainerArray[i].className = `unit-battle-container`;
	_unitBattleContainer.appendChild(_unitBattleContainerArray[i]);

	_unitBattleArray[i] = document.createElement('div');
	_unitBattleArray[i].id = `unit-battle${i}`;
	_unitBattleArray[i].className = `unit-battle`;
	_unitBattleContainerArray[i].appendChild(_unitBattleArray[i]);

	_unitBattleBarContainerArray[i] = document.createElement('div');
	_unitBattleBarContainerArray[i].id = `unit-battle-bar-container${i}`;
	_unitBattleBarContainerArray[i].className = `unit-battle-bar-container`;
	_unitBattleContainerArray[i].appendChild(_unitBattleBarContainerArray[i]);
}

const _unitPenguinContainer = document.createElement('div');
_unitPenguinContainer.id = 'unit-penguin-container';
_contentLeft.appendChild(_unitPenguinContainer);

const _unitPenguinTittle = document.createElement('div');
_unitPenguinTittle.id = 'unit-penguin-tittle';
_unitPenguinContainer.appendChild(_unitPenguinTittle);

const _unitPenguinContainerBg = document.createElement('div');
_unitPenguinContainerBg.id = 'unit-penguin-container-bg';
_unitPenguinContainer.appendChild(_unitPenguinContainerBg);

const _unitPenguinArray = [];

for (let i=0; i<39; i++) {
	_unitPenguinArray[i] = document.createElement('div');
	_unitPenguinArray[i].id = `unit-penguin${i}`;
	_unitPenguinArray[i].className = `unit-penguin-bloq`;
	_unitPenguinContainerBg.appendChild(_unitPenguinArray[i]);
}

//CENTER
const _mainScene = document.createElement('div');
_mainScene.id = 'main-scene';
_contentCenter.appendChild(_mainScene);

//test scenario
const _battleWallR = document.createElement('div');
_battleWallR.id = 'battle-wall-r';
_battleWallR.className = 'battle-wall';
_mainScene.appendChild(_battleWallR);

const _battleDoorR = document.createElement('div');
_battleDoorR.id = 'battle-door-r';
_battleWallR.appendChild(_battleDoorR);

const _battleWallL = document.createElement('div');
_battleWallL.id = 'battle-wall-l';
_battleWallL.className = 'battle-wall';
_mainScene.appendChild(_battleWallL);

const _battleFloor = document.createElement('div');
_battleFloor.id = 'battle-floor';
_mainScene.appendChild(_battleFloor);

const _battleFloorDrop = document.createElement('div');
_battleFloorDrop.id = 'battle-floor-drop';
_battleFloorDrop.innerHTML = "DROP ENEMY HERE ;)"
_battleFloor.appendChild(_battleFloorDrop);


const _battleFloorEArray = [];
const _battleFloorPArray = [];
for (let i=0; i<4; i++) {
	_battleFloorEArray[i] = document.createElement('div');
	_battleFloorEArray[i].id = `battle-floor-e${i}`;

	_battleFloorPArray[i] = document.createElement('div');
	_battleFloorPArray[i].id = `battle-floor-p${i}`;

	_battleFloor.appendChild(_battleFloorEArray[i]);
	_battleFloor.appendChild(_battleFloorPArray[i]);
}

const _claw0 = document.createElement('div');
_claw0.id = 'claw0';
_mainScene.appendChild(_claw0);
const _claw1 = document.createElement('div');
_claw1.id = 'claw1';
_claw0.appendChild(_claw1);
const _claw2 = document.createElement('div');
_claw2.id = 'claw2';
_claw0.appendChild(_claw2);
const _claw3 = document.createElement('div');
_claw3.id = 'claw3';
_claw0.appendChild(_claw3);

const _battleWallC = document.createElement('div');
_battleWallC.id = 'battle-wall-c';
_mainScene.appendChild(_battleWallC);

const _battleTV = document.createElement('div');
_battleTV.id = 'battle-tv';
_mainScene.appendChild(_battleTV);

const _battleGlass = document.createElement('div');
_battleGlass.id = 'battle-glass';
_mainScene.appendChild(_battleGlass);


//

const _ubication = document.createElement('div');
_ubication.id = 'ubication';
//_mainScene.appendChild(_ubication);
_battleGlass.appendChild(_ubication);

const _enemy = document.createElement('div');
_enemy.id = 'enemy';
_mainScene.appendChild(_enemy);

const _enemyHealthBar = document.createElement('div');
_enemyHealthBar.id = 'enemy-health-bar';
//_mainScene.appendChild(_enemyHealthBar);
_battleTV.appendChild(_enemyHealthBar);

const _enemyHealthBarActual = document.createElement('div');
_enemyHealthBarActual.id = 'enemy-health-bar-actual';
_enemyHealthBar.appendChild(_enemyHealthBarActual);

const _enemyHealthBarNumber = document.createElement('div');
_enemyHealthBarNumber.id = 'enemy-health-bar-number';
//_enemyHealthBar.appendChild(_enemyHealthBarNumber);
_battleTV.appendChild(_enemyHealthBarNumber);

const _enemyStatusContainer = document.createElement('div');
_enemyStatusContainer.id = 'enemy-status-container';
_battleTV.appendChild(_enemyStatusContainer);

const _statusIconArray = [];

for (let i=0;i<10;i++){
	_statusIconArray[i] = document.createElement('div');
	_statusIconArray[i].id = `status-icon${i}`;
	_statusIconArray[i].className = 'status-icon';
}

const _statusInfo = document.createElement('div');
_statusInfo.id = 'status-info';

const _enemyImage = document.createElement('div');
_enemyImage.id = 'enemy-image';
_mainScene.appendChild(_enemyImage);
const _enemyName = document.createElement('div');
_enemyName.id = 'enemy-name';
//_mainScene.appendChild(_enemyName);
_battleTV.appendChild(_enemyName);

const _penguinRosterArray = [];
const _penguinRosterChargeBarArray = [];
const _penguinRosterChargeBarActualArray = [];
const _penguinRosterHealthBarArray = [];
const _penguinRosterHealthBarActualArray = [];
const _penguinRosterFatigueBarArray = [];
const _penguinRosterFatigueBarActualArray = [];

for (let i=0; i<4; i++) {
	_penguinRosterArray[i] = document.createElement('div');
	_penguinRosterArray[i].id = `penguin-roster${i}`;
	_penguinRosterArray[i].className = `penguin-roster`;

	_penguinRosterChargeBarArray[i] = document.createElement('div');
	_penguinRosterChargeBarArray[i].id = `penguin-roster-charge-bar${i}`;
	_penguinRosterChargeBarArray[i].className = `penguin-roster-charge-bar`;

	_penguinRosterChargeBarActualArray[i] = document.createElement('div');
	_penguinRosterChargeBarActualArray[i].id = `penguin-roster-charge-bar-actual${i}`;
	_penguinRosterChargeBarActualArray[i].className = `penguin-roster-charge-bar-actual`;

	_penguinRosterHealthBarArray[i] = document.createElement('div');
	_penguinRosterHealthBarArray[i].id = `penguin-roster-health-bar${i}`;
	_penguinRosterHealthBarArray[i].className = `penguin-roster-health-bar`;

	_penguinRosterHealthBarActualArray[i] = document.createElement('div');
	_penguinRosterHealthBarActualArray[i].id = `penguin-roster-health-bar-actual${i}`;
	_penguinRosterHealthBarActualArray[i].className = `penguin-roster-health-bar-actual`;

	_penguinRosterFatigueBarArray[i] = document.createElement('div');
	_penguinRosterFatigueBarArray[i].id = `penguin-roster-fatigue-bar${i}`;
	_penguinRosterFatigueBarArray[i].className = `penguin-roster-fatigue-bar`;

	_penguinRosterFatigueBarActualArray[i] = document.createElement('div');
	_penguinRosterFatigueBarActualArray[i].id = `penguin-roster-fatigue-bar-actual${i}`;
	_penguinRosterFatigueBarActualArray[i].className = `penguin-roster-fatigue-bar-actual`;

	_mainScene.appendChild(_penguinRosterArray[i]);
}

const _subScene = document.createElement('div');
_subScene.id = 'sub-scene';
_contentCenter.appendChild(_subScene);

const _tabContainer = document.createElement('div');
_tabContainer.id = 'tab-container';
_subScene.appendChild(_tabContainer);

const _tabArray = [];

for (let i=0; i<4; i++) {
	_tabArray[i] = document.createElement('div');
	_tabArray[i].id = `tab${i}`;
	_tabArray[i].className = `tab`;
	_tabContainer.appendChild(_tabArray[i]);
}

const _subSceneContent = document.createElement('div');
_subSceneContent.id = 'sub-scene-content';
_subScene.appendChild(_subSceneContent);

//RIGHT
const _penguinInfoTop = document.createElement('div');
_penguinInfoTop.id = 'penguin-info-top';
const _penguinInfoMid = document.createElement('div');
_penguinInfoMid.id = 'penguin-info-mid';
const _penguinInfoBot = document.createElement('div');
_penguinInfoBot.id = 'penguin-info-bot';

_contentRight.appendChild(_penguinInfoTop);
_contentRight.appendChild(_penguinInfoMid);
_contentRight.appendChild(_penguinInfoBot);

const _penguinName = document.createElement('div');
_penguinName.id = 'penguin-name';
const _penguinStarContainer = document.createElement('div');
_penguinStarContainer.id = 'penguin-star-container';
const _penguinLevel = document.createElement('div');
_penguinLevel.id = 'penguin-level';

_penguinInfoTop.appendChild(_penguinName);
_penguinInfoTop.appendChild(_penguinStarContainer);
_penguinInfoTop.appendChild(_penguinLevel);

const _penguinStarArray = [];
for (let i=0; i<5; i++) {
	_penguinStarArray[i] = document.createElement('div');
	_penguinStarArray[i].className = `penguin-star`;
	_penguinStarContainer.appendChild(_penguinStarArray[i]);
	_penguinStarArray[i].innerHTML = `🟊`;
}

const _penguinTypeContainer = document.createElement('div');
_penguinTypeContainer.id = 'penguin-type-container';
_penguinInfoMid.appendChild(_penguinTypeContainer);

const _penguinTypeArray = [];

for (let i=0; i<2; i++) {
	_penguinTypeArray[i] = document.createElement('div');
	_penguinTypeArray[i].className = `penguin-type`;
	_penguinTypeContainer.appendChild(_penguinTypeArray[i]);
}

const _penguinInfoMidBg = document.createElement('div');
_penguinInfoMidBg.id = 'penguin-info-mid-bg';
_penguinInfoMid.appendChild(_penguinInfoMidBg);

const _penguinTypeOverContainer = document.createElement('div');
_penguinTypeOverContainer.className = 'penguin-type-over-container';

const _penguinPower = document.createElement('div');
_penguinPower.id = 'penguin-power';
const _penguinHealth = document.createElement('div');
_penguinHealth.id = 'penguin-health';
const _penguinSpeed = document.createElement('div');
_penguinSpeed.id = 'penguin-speed';
const _penguinFatigue = document.createElement('div');
_penguinFatigue.id = 'penguin-fatigue';
const _penguinImage = document.createElement('div');
_penguinImage.id = 'penguin-image';

_penguinInfoMid.appendChild(_penguinPower);
_penguinInfoMid.appendChild(_penguinHealth);
_penguinInfoMid.appendChild(_penguinSpeed);
_penguinInfoMid.appendChild(_penguinFatigue);
_penguinInfoMid.appendChild(_penguinImage);

const _rosterButton = document.createElement('div');
_rosterButton.id = 'roster-button';
_penguinInfoMid.appendChild(_rosterButton);

const _penguinStatInfo = document.createElement('div');
_penguinStatInfo.id = 'penguin-stats-info';
_penguinInfoBot.appendChild(_penguinStatInfo);

//unlocks

const _pauseButton = document.createElement('div');
_pauseButton.id = 'pause-button';

const _potionHealth = document.createElement('div');
_potionHealth.id = 'potion-health';
_potionHealth.className = 'potion';

const _potionHealthUnits = document.createElement('div');
_potionHealthUnits.className = 'potion-units';
_potionHealth.appendChild(_potionHealthUnits);

const _potionFatigue = document.createElement('div');
_potionFatigue.id = 'potion-fatigue';
_potionFatigue.className = 'potion';

const _potionFatigueUnits = document.createElement('div');
_potionFatigueUnits.className = 'potion-units';
_potionFatigue.appendChild(_potionFatigueUnits);

const _potionHealthOverContainer = document.createElement('div');
_potionHealthOverContainer.id = 'potion-health-over-container';
_potionHealthOverContainer.className = 'potion-over-container';

const _potionFatigueOverContainer = document.createElement('div');
_potionFatigueOverContainer.id = 'potion-fatigue-over-container';
_potionFatigueOverContainer.className = 'potion-over-container';

const _hospitalAutoButton = document.createElement('div');
_hospitalAutoButton.className = 'auto-button';
_hospitalAutoButton.innerHTML = `AUTO`;

const _saunaAutoButton = document.createElement('div');
_saunaAutoButton.className = 'auto-button';
_saunaAutoButton.innerHTML = `AUTO`;

