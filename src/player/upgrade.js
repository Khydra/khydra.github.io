const _upgradeWindow = document.createElement('div');
_upgradeWindow.id = "upgrade-window";

const _upgradeTittle = document.createElement('div');
_upgradeTittle.id = "upgrade-tittle";
_upgradeWindow.appendChild(_upgradeTittle);

const _upgradeContainer = document.createElement('div');
_upgradeContainer.id = "upgrade-container";
_upgradeWindow.appendChild(_upgradeContainer);

const _upgradeOption = []; 
const _upgradeOptionName = [];
const _upgradeOptionDescp = [];

for (let i=0;i<3;i++) {
	_upgradeOption[i] = document.createElement('div');
	_upgradeOption[i].className = "upgrade-option";
	_upgradeContainer.appendChild(_upgradeOption[i]);

	_upgradeOptionName[i] = document.createElement('div');
	_upgradeOptionName[i].className = "upgrade-name";
	_upgradeOptionDescp[i] = document.createElement('div');
	_upgradeOptionDescp[i].className = "upgrade-descp";
	_upgradeOption[i].appendChild(_upgradeOptionName[i]);
	_upgradeOption[i].appendChild(_upgradeOptionDescp[i]);

	_upgradeOption[i].addEventListener('click',()=>{upgradeSelect(i)});
	_upgradeOption[i].addEventListener('mouseover',()=>{
		soundHover2.load();
		soundHover2.play();
	});
}

var upgradeOption = [];

function upgradeSelection() {
	pause = true;
	upgradeRoll();
	_screen.appendChild(_upgradeWindow);
	_gameScene.style.pointerEvents = "none";
	_gameScene.style.filter = "brightness(0.1)";
}

function upgradeSelect(upgrd) {
	soundClick3.load();
	soundClick3.play();
	getUpgrade(upgradeOption[upgrd]);
	_screen.removeChild(_upgradeWindow);
	_gameScene.style.pointerEvents = "revert-layer";
	_gameScene.style.filter = "revert-layer";
	nextStage();
}

function upgradeRoll() {
	for (let i=0; i<3; i++) {
		let option = Math.floor(Math.random() * 9);
		let tier = tierRoll();
		upgradeOption[i] = upgrade[option][tier];
		_upgradeOptionName[i].innerHTML = upgradeOption[i].name[leng];
		_upgradeOptionDescp[i].innerHTML = upgradeOption[i].descp[leng];
		_upgradeOption[i].style.borderColor = tierColor[tier][2];
		_upgradeOption[i].style.backgroundColor = tierColor[tier][1];
	}
}

function tierRoll() {
	let tier = Math.floor(Math.random() * 100)+1;
	if (tier<=75) return 0; // 75%
	else if (tier<=88) return 1; // 13%
	else if (tier<=94) return 2; // 6%
	else if (tier<=98) return 3; // 4%
	else return 4; //2%
}

function getUpgrade(upgrd) {
	switch(upgrd.id) {
		case 0: 
			user.hp[1] += upgrd.value;
			changeHealth(upgrd.value,user);
		break;
		case 1: user.regenRound += upgrd.value;
		break;
		case 2: user.regenStage += upgrd.value;
		break;
		case 3: user.perfect.heal += upgrd.value;
		break;
		case 4: user.damage += upgrd.value;
		break;
		case 5: user.succes.damage += upgrd.value;
		break;
		case 6: user.partial.damage += upgrd.value;
		break;
		case 7: user.lineTurn[0].damage += upgrd.value;
		break;
		case 8: user.perfect.damage += upgrd.value;
		break;
	}
}

const tierColor = {
	0: {
		0: "#d1c6b7",
		1: "#a79e92",
		2: "#dad1c5",
	},
	1: {
		0: "#AFE8AF",
		1: "#8cba8c",
		2: "#bfedbf",
	},
	2: {
		0: "#7b9cd5",
		1: "#627daa",
		2: "#95b0dd",
	},
	3: {
		0: "#cb7bd5",
		1: "#a262aa",
		2: "#d595dd",
	},
	4: {
		0: "#a95b20",
		1: "#d37228",
		2: "#dc8e53",
	},
}

function healRound() {
	if (user.regenRound==0) return;
	changeHealth(user.regenRound, user);
}

function healStage() {
	if (user.regenStage==0) return;
	changeHealth(user.regenStage, user);
}

function damage(type, u) {
	let dmg = user.damage;

	if (type == "partial") dmg += user.partial.damage;
	else if(type == "succes") {
		dmg +=  user.succes.damage; 
		if (user.succes.heal>0) changeHealth(user.succes.heal, user);
	}

	if (user.lineTurn[0].damage>0 && actualLine==0) dmg += user.lineTurn[0].damage;

	switch(unit[u].element) {
		case 0: 
			dmg+=user.elemental[0];
			if (enemy.element==3) dmg+=user.critical;
		break;
		case 1: 
			dmg+=user.elemental[1];
			if (enemy.element==0) dmg+=user.critical;
		break;
		case 2:
			dmg+=user.elemental[2];
			if (enemy.element==1) dmg+=user.critical;
		break;
		case 2:
			dmg+=user.elemental[3];
			if (enemy.element==2) dmg+=user.critical;
		break;
	}

	changeHealth(-dmg, enemy);
}

function perfectTrigger() {
	//heal
	if (user.perfect.heal>0) changeHealth(user.perfect.heal, user);
	//damage
	if (user.perfect.damage>0) changeHealth(user.perfect.damage, enemy);
}