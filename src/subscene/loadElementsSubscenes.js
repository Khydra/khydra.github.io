//iglu
const _igluScene = document.createElement('div');
_igluScene.id = 'iglu-scene';
_igluScene.className = 'subscene-container';

const _igluTabContainer = document.createElement('div')
_igluTabContainer.id = `iglu-tab-container`;
_igluScene.appendChild(_igluTabContainer);

const _igluTabArray = [];
for (let i=0; i<3; i++) {
	_igluTabArray[i] = document.createElement('div');
	(i==0) ? _igluTabArray[i].className = `tab tab-selected` : _igluTabArray[i].className = `tab`;
	_igluTabContainer.appendChild(_igluTabArray[i]);
	_igluTabArray[i].addEventListener('click',()=>{
		tabSound();
		actualIgluTab = i;
		if (_igluScene.contains(_igluContainerArray[0])) _igluScene.removeChild(_igluContainerArray[0]);
		if (_igluScene.contains(_igluContainerArray[1])) _igluScene.removeChild(_igluContainerArray[1]);
		if (_igluScene.contains(_igluContainerArray[2])) _igluScene.removeChild(_igluContainerArray[2]);
		_igluTabArray.forEach((t, index)=>{(i==index) ? t.className = "tab tab-selected" : t.className = "tab"})
		updateIglu();
	})
}

const _igluContainerArray = [];
for (let i=0; i<3; i++) {
	_igluContainerArray[i] = document.createElement('div');
	_igluContainerArray[i].className = "iglu-container";
}

const _buildingContainerArray = [];
const _buildingArray = [];
const _buildingDescriptionArray = [];
const _buildingSlotContainerArray = [[],[],[]];
const _buildingSlotArray = [[],[],[]];
const _buildingButtonArray = [];
const _buildingUpgradeBg = [];

for (let i=0; i<3; i++) {
	_buildingContainerArray[i] = document.createElement('div');
	_buildingContainerArray[i].className = "building-container";

	_buildingArray[i] = document.createElement('div');
	_buildingArray[i].className = "building";

	_buildingDescriptionArray[i] = document.createElement('div');
	_buildingDescriptionArray[i].className = "building-description";

	_buildingUpgradeBg[i] = document.createElement('div');
	_buildingUpgradeBg[i].className = "building-upgrade-bg";

	_buildingButtonArray[i] = document.createElement('div');
	_buildingButtonArray[i].className = "building-button";
	_buildingButtonArray[i].innerHTML = "+";

	_buildingSlotContainerArray[i] = document.createElement('div');
	_buildingSlotContainerArray[i].className = "building-slot-container";

	_igluContainerArray[i].appendChild(_buildingContainerArray[i]);
	_igluContainerArray[i].appendChild(_buildingUpgradeBg[i]);
	_buildingContainerArray[i].appendChild(_buildingArray[i]);
	_buildingArray[i].appendChild(_buildingDescriptionArray[i]);
	_buildingArray[i].appendChild(_buildingButtonArray[i]);
	_buildingArray[i].appendChild(_buildingSlotContainerArray[i]);

	for (let j=0; j<8;j++) {
		_buildingSlotArray[i][j] = document.createElement('div');
		_buildingSlotArray[i][j].className = "building-slot-bloq";
		_buildingSlotContainerArray[i].appendChild(_buildingSlotArray[i][j]);
	}
}

const _hospitalRowArray = []
const _hospitalRowElements = [[],[],[]];

for (let i=0;i<3;i++) {
	_hospitalRowArray[i] = document.createElement('div');
	_hospitalRowArray[i].className = 'building-row';
	_igluContainerArray[0].appendChild(_hospitalRowArray[i]);
	_hospitalRowArray[0].style.color = "#eaaa00";
	for (let j=0;j<4;j++) {
		_hospitalRowElements[i][j] = document.createElement('div');
		_hospitalRowElements[i][j].className = 'building-row-element';
		_hospitalRowArray[i].appendChild(_hospitalRowElements[i][j]);
	}
}

const _saunaRowArray = []
const _saunaRowElements = [[],[],[]];

for (let i=0;i<3;i++) {
	_saunaRowArray[i] = document.createElement('div');
	_saunaRowArray[i].className = 'building-row';
	_igluContainerArray[1].appendChild(_saunaRowArray[i]);
	_saunaRowArray[0].style.color = "#eaaa00";
	for (let j=0;j<4;j++) {
		_saunaRowElements[i][j] = document.createElement('div');
		_saunaRowElements[i][j].className = 'building-row-element';
		_saunaRowArray[i].appendChild(_saunaRowElements[i][j]);
	}
}

const _mineRowArray = []
const _mineRowElements = [[],[],[]];

for (let i=0;i<3;i++) {
	_mineRowArray[i] = document.createElement('div');
	_mineRowArray[i].className = 'building-row';
	_igluContainerArray[2].appendChild(_mineRowArray[i]);
	_mineRowArray[0].style.color = "#eaaa00";
	for (let j=0;j<4;j++) {
		_mineRowElements[i][j] = document.createElement('div');
		_mineRowElements[i][j].className = 'building-row-element';
		_mineRowArray[i].appendChild(_mineRowElements[i][j]);
	}
}

//HATCHERY
const _hatcheryScene = document.createElement('div');
_hatcheryScene.id = 'hatchery-scene';
_hatcheryScene.className = 'subscene-container';

const _hatcheryTabContainer = document.createElement('div')
_hatcheryTabContainer.id = `hatchery-tab-container`;
_hatcheryScene.appendChild(_hatcheryTabContainer);

const _hatcheryTabArray = [];
for (let i=0; i<2; i++) {
	_hatcheryTabArray[i] = document.createElement('div');
	(i==0) ? _hatcheryTabArray[i].className = `tab tab-selected` : _hatcheryTabArray[i].className = `tab`;
	_hatcheryTabContainer.appendChild(_hatcheryTabArray[i]);
	_hatcheryTabArray[i].addEventListener('click',()=>{
		tabSound();
		actualHatcheryTab = i;
		if (_hatcheryScene.contains(_hatcheryContainerArray[0])) _hatcheryScene.removeChild(_hatcheryContainerArray[0]);
		if (_hatcheryScene.contains(_hatcheryContainerArray[1])) _hatcheryScene.removeChild(_hatcheryContainerArray[1]);
		_hatcheryTabArray.forEach((t, index)=>{(i==index) ? t.className = "tab tab-selected" : t.className = "tab"})
		updateHatchery();
	})
}

const _hatcheryContainerArray = [];
for (let i=0; i<2; i++) {
	_hatcheryContainerArray[i] = document.createElement('div');
	_hatcheryContainerArray[i].className = "hatchery-container";
}
const _penguinShopTopBg = document.createElement('div');
_penguinShopTopBg.id = `penguin-shop-top-bg`;
_hatcheryContainerArray[0].appendChild(_penguinShopTopBg);
const _penguinShopTittle = document.createElement('div');
_penguinShopTittle.className = `penguin-shop-tittle`;
_penguinShopTopBg.appendChild(_penguinShopTittle);

const _penguinShopContainerArray = [];
const _penguinShopPriceArray = [];
const _penguinShopStockArray = [];

for (let i=0;i<2;i++) {
 	_penguinShopContainerArray[i] = document.createElement('div');
	_penguinShopContainerArray[i].className = `penguin-shop-container`;
	_penguinShopContainerArray[i].id = `penguin-shop-container${i}`;

	_penguinShopPriceArray[i] = document.createElement('div');
	_penguinShopPriceArray[i].className = `penguin-shop-price`;
	_penguinShopPriceArray[i].id = `penguin-shop-price${i}`;

	_penguinShopStockArray[i] = document.createElement('div');
	_penguinShopStockArray[i].className = `penguin-shop-stock`;

	_hatcheryContainerArray[0].appendChild(_penguinShopContainerArray[i]);
	_penguinShopContainerArray[i].appendChild(_penguinShopPriceArray[i]);
	_penguinShopContainerArray[i].appendChild(_penguinShopStockArray[i]);

	_penguinShopContainerArray[i].addEventListener('click',()=>buyEgg(i));
	_penguinShopContainerArray[i].addEventListener('mouseover',()=>buyEggSelect(i));
	_penguinShopContainerArray[i].addEventListener('mouseout', ()=>buyEggDefault(i));
}



const _penguinShopEggContainer = document.createElement('div');
_penguinShopEggContainer.id = `penguin-shop-egg-container`;
_hatcheryContainerArray[0].appendChild(_penguinShopEggContainer);

const _penguinShopEgg = document.createElement('div');
_penguinShopEgg.id = `penguin-shop-egg`;
_penguinShopEggContainer.appendChild(_penguinShopEgg);

const _penguinShopFloorContainer = document.createElement('div');
_penguinShopFloorContainer.className = `penguin-shop-floor-container`;
_hatcheryContainerArray[0].appendChild(_penguinShopFloorContainer);

const _penguinShopFloor = document.createElement('div');
_penguinShopFloor.className = `penguin-shop-floor`;
_penguinShopFloorContainer.appendChild(_penguinShopFloor);

const _penguinShopGlass = document.createElement('div');
_penguinShopGlass.id = `penguin-shop-glass`;
_hatcheryContainerArray[0].appendChild(_penguinShopGlass);

const _penguinShopDoor = document.createElement('div');
_penguinShopDoor.id = `penguin-shop-door`;
_penguinShopFloorContainer.appendChild(_penguinShopDoor);

const _penguinShopEggUp = document.createElement('div');
_penguinShopEggUp.id = `penguin-shop-egg-up`;
const _penguinShopEggDown = document.createElement('div');
_penguinShopEggDown.id = `penguin-shop-egg-down`;
const _penguinShopEggReward = document.createElement('div');
_penguinShopEggReward.id = `penguin-shop-egg-down-reward`;

const _monsterShopUnlockContainer = [];
const _monsterUnlockName = [];
const _monsterUnlockDescription = [];
const _monsterUnlockPrice = [];
const _monsterUnlockButton = [];

for (let i=0;i<3;i++) {
	_monsterShopUnlockContainer[i] = document.createElement('div');
	_monsterShopUnlockContainer[i].className = `monster-shop-unlock-container`;
	_hatcheryContainerArray[1].appendChild(_monsterShopUnlockContainer[i]);

	_monsterUnlockName[i] = document.createElement('div');
	_monsterUnlockName[i].className = `monster-unlock-name`;
	_monsterShopUnlockContainer[i].appendChild(_monsterUnlockName[i]);

	_monsterUnlockDescription[i] = document.createElement('div');
	_monsterUnlockDescription[i].className = `monster-unlock-description`;
	_monsterShopUnlockContainer[i].appendChild(_monsterUnlockDescription[i]);

	_monsterUnlockPrice[i] = document.createElement('div');
	_monsterUnlockPrice[i].className = `monster-unlock-price`;
	_monsterShopUnlockContainer[i].appendChild(_monsterUnlockPrice[i]);

	_monsterUnlockButton[i] = document.createElement('div');
	_monsterUnlockButton[i].className = `monster-unlock-button`;
	_monsterShopUnlockContainer[i].appendChild(_monsterUnlockButton[i]);
}

//TEMPLE
const _templeScene = document.createElement('div');
_templeScene.id = 'temple-scene';
_templeScene.className = 'subscene-container';

const _templeTabContainer = document.createElement('div')
_templeTabContainer.id = `temple-tab-container`;
_templeScene.appendChild(_templeTabContainer);


const _templeTabArray = [];
for (let i=0; i<2; i++) {
	_templeTabArray[i] = document.createElement('div');
	(i==0) ? _templeTabArray[i].className = `tab tab-selected` : _templeTabArray[i].className = `tab`;
	_templeTabContainer.appendChild(_templeTabArray[i]);
	_templeTabArray[i].addEventListener('click',()=>{
		tabSound();
		actualTempleTab = i;
		if (_templeScene.contains(_templeContainerArray[0])) _templeScene.removeChild(_templeContainerArray[0])
		if (_templeScene.contains(_templeContainerArray[1])) _templeScene.removeChild(_templeContainerArray[1])
		_templeTabArray.forEach((t, index)=>{(i==index) ? t.className = "tab tab-selected" : t.className = "tab"})
		updateTemple();
	})
}

const _templeContainerArray = [];
for (let i=0; i<2; i++) {
	_templeContainerArray[i] = document.createElement('div');
	_templeContainerArray[i].className = "temple-container";
}
//cont1
const _templeUpgradePenguinText = document.createElement('div');
_templeUpgradePenguinText.id = 'temple-upgrade-penguin-text';
_templeUpgradePenguinText.className = 'temple-upgrade-text';
_templeContainerArray[0].appendChild(_templeUpgradePenguinText);

const _templeLvlContainerBg = document.createElement('div');
_templeLvlContainerBg.id = 'temple-lvl-container-bg';
_templeLvlContainerBg.className = 'temple-container-bg';
_templeContainerArray[0].appendChild(_templeLvlContainerBg);

const _templeEvolveContainerBg = document.createElement('div');
_templeEvolveContainerBg.id = 'temple-evolve-container-bg';
_templeEvolveContainerBg.className = 'temple-container-bg';
_templeContainerArray[0].appendChild(_templeEvolveContainerBg);

const _templeLvlContainer = document.createElement('div');
_templeLvlContainer.id = 'temple-lvl-container';
_templeContainerArray[0].appendChild(_templeLvlContainer);

const _templeEvolveContainer = document.createElement('div');
_templeEvolveContainer.id = 'temple-evolve-container';
_templeContainerArray[0].appendChild(_templeEvolveContainer);

const _templeLvlArray = []
const _templeLvlElements = [[],[]];

for (let i=0;i<5;i++) {
	_templeLvlArray[i] = document.createElement('div');
	_templeLvlArray[i].className = 'temple-lvl';
	_templeLvlContainer.appendChild(_templeLvlArray[i]);
	_templeLvlArray[0].style.color = "#ffcc5c";
	for (let j=0;j<2;j++) {
		_templeLvlElements[j][i] = document.createElement('div');
		_templeLvlElements[j][i].className = 'temple-lvl-element';
		_templeLvlArray[i].appendChild(_templeLvlElements[j][i]);
	}
}

const _templeEvolveArray = []
const _templeEvolveElements = [[],[]];

for (let i=0;i<5;i++) {
	_templeEvolveArray[i] = document.createElement('div');
	_templeEvolveArray[i].className = 'temple-evolve';
	_templeEvolveContainer.appendChild(_templeEvolveArray[i]);
	_templeEvolveArray[0].style.color = "#ffcc5c";
	for (let j=0;j<2;j++) {
		_templeEvolveElements[j][i] = document.createElement('div');
		_templeEvolveElements[j][i].className = 'temple-evolve-element';
		_templeEvolveArray[i].appendChild(_templeEvolveElements[j][i]);
	}
}

const _templeUpgradePassiveText = document.createElement('div');
_templeUpgradePassiveText.id = 'temple-upgrade-passive-text';
_templeUpgradePassiveText.className = 'temple-upgrade-text';
_templeContainerArray[1].appendChild(_templeUpgradePassiveText);

const _buttonLvl = document.createElement('div');
_buttonLvl.className = "button-temple";
_buttonLvl.id = "button-lvl";
_templeLvlContainer.appendChild(_buttonLvl);

const _buttonEvolve = document.createElement('div');
_buttonEvolve.className = "button-temple";
_buttonEvolve.id = "button-evolve";
_templeEvolveContainer.appendChild(_buttonEvolve);

//cont2
const _templePasContainerBg = document.createElement('div');
_templePasContainerBg.id = 'temple-pas-container-bg';
_templeContainerArray[1].appendChild(_templePasContainerBg);

const _templeRowArray = []
const _templeRowElements = [[],[],[],[],[],[]];

for (let i=0;i<6;i++) {
	_templeRowArray[i] = document.createElement('div');
	_templeRowArray[i].className = 'temple-row';
	_templeContainerArray[1].appendChild(_templeRowArray[i]);
	_templeRowArray[0].style.color = "#ffcc5c";
	for (let j=0;j<5;j++) {
		_templeRowElements[i][j] = document.createElement('div');
		_templeRowElements[i][j].className = 'temple-row-element';
		_templeRowArray[i].appendChild(_templeRowElements[i][j]);
	}
}


//JOURNAL
const _journalScene = document.createElement('div');
_journalScene.id = 'journal-scene';
_journalScene.className = 'subscene-container';

const _journalTabContainer = document.createElement('div')
_journalTabContainer.id = `journal-tab-container`;
_journalScene.appendChild(_journalTabContainer);

const _journalTabArray = [];
for (let i=0; i<3; i++) {
	_journalTabArray[i] = document.createElement('div');
	(i==0) ? _journalTabArray[i].className = `tab tab-selected` : _journalTabArray[i].className = `tab`;
	_journalTabContainer.appendChild(_journalTabArray[i]);
	_journalTabArray[i].addEventListener('click',()=>{
		tabSound();
		actualJournalTab = i;
		if (_journalScene.contains(_journalContainerArray[0])) _journalScene.removeChild(_journalContainerArray[0])
		if (_journalScene.contains(_journalContainerArray[1])) _journalScene.removeChild(_journalContainerArray[1])
		if (_journalScene.contains(_journalContainerArray[2])) _journalScene.removeChild(_journalContainerArray[2])
		_journalTabArray.forEach((t, index)=>{(i==index) ? t.className = "tab tab-selected" : t.className = "tab"})
		updateJournal();
	})
}

const _journalContainerArray = [];
for (let i=0; i<3; i++) {
	_journalContainerArray[i] = document.createElement('div');
	_journalContainerArray[i].className = "journal-container";
}

const _settingsBg = document.createElement('div');
_settingsBg.id = 'settings-bg';
_journalContainerArray[2].appendChild(_settingsBg);

const _lenguage = document.createElement('div');
_lenguage.id = 'lenguage';
_lenguage.className = 'journal-label';
_journalContainerArray[2].appendChild(_lenguage);

const _resolution = document.createElement('div');
_resolution.id = 'resolution';
_resolution.className = 'journal-label';
_journalContainerArray[2].appendChild(_resolution);

const _music = document.createElement('div');
_music.id = 'music';
_music.className = 'journal-label';
_journalContainerArray[2].appendChild(_music);

const _sound = document.createElement('div');
_sound.id = 'sound';
_sound.className = 'journal-label';
_journalContainerArray[2].appendChild(_sound);

const _autosave = document.createElement('div');
_autosave.id = 'autosave';
_autosave.className = 'journal-label';
_journalContainerArray[2].appendChild(_autosave);

const _saveContainer = document.createElement('div');
_saveContainer.id = 'save-container';
_journalContainerArray[2].appendChild(_saveContainer);

const _soundBarContainerArray = [];
const _soundBarActualArray = [];
const _soundNumberArray = [];

for (let i=0; i<2;i++) {
	_soundBarContainerArray[i] = document.createElement('div');
	_soundBarContainerArray[i].id = `sound-bar-container${i}`;
	_soundBarContainerArray[i].className = `sound-bar-container`
	_journalContainerArray[2].appendChild(_soundBarContainerArray[i]);

	_soundBarActualArray[i] = document.createElement('div');
	_soundBarActualArray[i].id = `sound-bar-actual${i}`;
	_soundBarActualArray[i].className = `sound-bar-actual`;
	_soundBarContainerArray[i].appendChild(_soundBarActualArray[i]);

	_soundNumberArray[i] = document.createElement('div');
	_soundNumberArray[i].id = `sound-number${i}`;
	_soundNumberArray[i].className = `journal-label`;
	_journalContainerArray[2].appendChild(_soundNumberArray[i]);
}


const _save = document.createElement('div');
_save.id = 'save';
_save.className = 'setting-button';
_journalContainerArray[2].appendChild(_save);

const _exitSave = document.createElement('div');
_exitSave.id = 'exit-save';
_exitSave.className = 'setting-button';
_journalContainerArray[2].appendChild(_exitSave);

const _exit = document.createElement('div');
_exit.id = 'exit';
_exit.className = 'setting-button';
_journalContainerArray[2].appendChild(_exit);

const _deleteSave = document.createElement('div');
_deleteSave.id = 'delete-save';
_deleteSave.className = 'setting-button';
_journalContainerArray[2].appendChild(_deleteSave);

const _lastSave = document.createElement('div');
_lastSave.id = 'last-save';
_journalContainerArray[2].appendChild(_lastSave);

const _stadisticsGeneral = document.createElement('div');
_stadisticsGeneral.id = 'stadistics-general';
const _stadisticsGeneralBg = document.createElement('div');
_stadisticsGeneralBg.id = 'stadistics-general-bg';
const _stadisticsGeneralTittle = document.createElement('div');
_stadisticsGeneralTittle.id = 'stadistics-general-tittle';
_journalContainerArray[1].appendChild(_stadisticsGeneralBg);
_journalContainerArray[1].appendChild(_stadisticsGeneral);
_journalContainerArray[1].appendChild(_stadisticsGeneralTittle);

const _stadisticsPenguin = document.createElement('div');
_stadisticsPenguin.id = 'stadistics-penguin';
const _stadisticsPenguinTittle = document.createElement('div');
_stadisticsPenguinTittle.id = 'stadistics-penguin-tittle';
_journalContainerArray[1].appendChild(_stadisticsPenguin);
_journalContainerArray[1].appendChild(_stadisticsPenguinTittle);

const _stadisticsPassive = document.createElement('div');
_stadisticsPassive.id = 'stadistics-passive';
const _stadisticsPassiveTittle = document.createElement('div');
_stadisticsPassiveTittle.id = 'stadistics-passive-tittle';
_journalContainerArray[1].appendChild(_stadisticsPassive);
_journalContainerArray[1].appendChild(_stadisticsPassiveTittle);

const _achievementBg = document.createElement('div');
_achievementBg.id = "achievement-bg";
_journalContainerArray[0].appendChild(_achievementBg);

const _achievementContainerArray = [];
const _journalNameArray = [];
const _journalDescriptionArray = [];
const _journalActualArray = [];
const _journalButtonArray = [];

for (let i=0; i<60; i++) {
	_achievementContainerArray[i] = document.createElement('div');
	_achievementContainerArray[i].className = "achievement-container";

	_journalNameArray[i] = document.createElement('div');
	_journalNameArray[i].className = "journal-name";

	_journalDescriptionArray[i] = document.createElement('div');
	_journalDescriptionArray[i].className = "journal-description";

	_journalActualArray[i] = document.createElement('div');
	_journalActualArray[i].className = "journal-actual";

	_journalButtonArray[i] = document.createElement('div');
	_journalButtonArray[i].className = "journal-button";
	_journalButtonArray[i].addEventListener('click',()=>{claimReward(i)})

	_achievementContainerArray[i].appendChild(_journalNameArray[i]);
	_achievementContainerArray[i].appendChild(_journalDescriptionArray[i]);
	_achievementContainerArray[i].appendChild(_journalActualArray[i]);
	_achievementContainerArray[i].appendChild(_journalButtonArray[i]);
	_achievementBg.appendChild(_achievementContainerArray[i]);
}
//
