var user, enemy;
var playersArray = [];

function defaultPlayers() {
	user = {
		id: 0,
		hp: [30,30],
		regenStage: 0,
		regenRound: 0,
		damage: 0,
		yellowDamage: 1,
		greenDamage: 3,
		perfect: {
			heal: 0,
			damage: 0
		},
		lineTurn: {
			0: {damage: 0},
			1: {damage: 0},
			2: {damage: 0},
			3: {damage: 0},
			4: {damage: 0},
			5: {damage: 0}
		}
	};
	enemy = {
		id: 1,
		hp: [15,15],
		red: 1,
		element: Math.floor(Math.random()*4)
	};
	playersArray = [user,enemy];
	playersArray.forEach((unit,index)=> {
		_unitHeatlhBarActual[unit.id].style.width = `100%`;
		_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
		_unitHeatlhBarNumber[index].innerHTML = `${playersArray[index].hp[0]} / ${playersArray[index].hp[1]}`;
	});
}

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
	_unitHeatlhBar[i].className = "hb";
	_unitHeatlhBarActual[i] = document.createElement('div');
	_unitHeatlhBarActual[i].className = "hb-actual";
	_unitHeatlhBarNumber[i] = document.createElement('div');
	_unitHeatlhBarNumber[i].className = "hb-number";

	_unitHeatlhBar[i].appendChild(_unitHeatlhBarActual[i]);
	_unitHeatlhBar[i].appendChild(_unitHeatlhBarNumber[i]);
}

_playerContainer.appendChild(_unitHeatlhBar[0]);
_enemyContainer.appendChild(_unitHeatlhBar[1]);

function changeHealth(value, unit) {
	unit.hp[0] += value;
	if (unit.hp[0]>unit.hp[1]) unit.hp[0] = unit.hp[1];
	if (unit.hp[0]<0) unit.hp[0] = 0;
	let per = (100 * unit.hp[0]) / unit.hp[1];
	_unitHeatlhBarActual[unit.id].style.width = `${per}%`;
	_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
}

//playersArray.forEach((u,index)=>_unitHeatlhBarNumber[index].innerHTML = `${playersArray[index].hp[0]} / ${playersArray[index].hp[1]}`);

function setEnemy() {
	enemy.hp[1] = Math.floor(enemy.hp[1]*1.17);
	enemy.hp[0] = enemy.hp[1];
	enemy.element = Math.floor(Math.random()*4);
	if (stage%3==0) {enemy.red+=1;}
	_unitHeatlhBarActual[1].style.width = `100%`;
	_unitHeatlhBarNumber[1].innerHTML = `${enemy.hp[0]} / ${enemy.hp[1]}`;
}

var statsPlayers = [];

for (let i=0;i<2;i++) {
	statsPlayers[i] = document.createElement('div');
	statsPlayers[i].className = "stat-unit";
}

_playerContainer.appendChild(statsPlayers[0]);
_enemyContainer.appendChild(statsPlayers[1]);

function showStats() {
	statsPlayers[0].innerHTML = `
		HP Max: ${user.hp[1]}<br>
		Regen/Mapa: ${user.regenStage}<br>
		Regen/Ronda: ${user.regenRound}<br>
		Daño verde (base): ${user.greenDamage + user.damage}<br>
		Daño amarillo (base): ${user.yellowDamage + user.damage}<br>
		Cura en perfecto: ${user.perfect.heal}<br>
		Daño en perfecto: ${user.perfect.damage}<br>
		Daño extra inicio ronda: ${user.lineTurn[0].damage}<br>
	`

	statsPlayers[1].innerHTML = `
		HP Max: ${enemy.hp[1]}<br>
		Daño: ${enemy.red}<br>
		Elemento: ${text.battle.element[enemy.element][leng]}
	`
}
