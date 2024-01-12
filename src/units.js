var player,enemy;
var unitsArray = [];

function defaultUnits() {
	player = {
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
		red: 1
	};
	unitsArray = [player,enemy];
	unitsArray.forEach((unit,index)=>{
		_unitHeatlhBarActual[unit.id].style.width = `100%`;
		_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
		_unitHeatlhBarNumber[index].innerHTML = `${unitsArray[index].hp[0]} / ${unitsArray[index].hp[1]}`;
	});
}

_playerContainer = document.createElement('div');
_playerContainer.id = "player-container";
_playerContainer.className = "unit-container";

_enemyContainer = document.createElement('div');
_enemyContainer.id = "enemy-container";
_enemyContainer.className = "unit-container";

_gameScene.appendChild(_playerContainer);
_gameScene.appendChild(_enemyContainer);

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

//unitsArray.forEach((u,index)=>_unitHeatlhBarNumber[index].innerHTML = `${unitsArray[index].hp[0]} / ${unitsArray[index].hp[1]}`);

function setEnemy() {
	enemy.hp[1] = Math.floor(enemy.hp[1]*1.17);
	enemy.hp[0] = enemy.hp[1];
	if (stage%3==0) {enemy.red+=1;}
	_unitHeatlhBarActual[1].style.width = `100%`;
	_unitHeatlhBarNumber[1].innerHTML = `${enemy.hp[0]} / ${enemy.hp[1]}`;

}

var statsUnits = [];

for (let i=0;i<2;i++) {
	statsUnits[i] = document.createElement('div');
	statsUnits[i].className = "stat-unit";
}

_playerContainer.appendChild(statsUnits[0]);
_enemyContainer.appendChild(statsUnits[1]);

function showStats() {
	statsUnits[0].innerHTML = `
		HP Max: ${player.hp[1]}<br>
		Regen/Mapa: ${player.regenStage}<br>
		Regen/Ronda: ${player.regenRound + player.damage}<br>
		Daño verde: ${player.greenDamage + player.damage}<br>
		Daño amarillo: ${player.yellowDamage}<br>
		Cura en perfecto: ${player.perfect.heal}<br>
		Daño en perfecto: ${player.perfect.damage}<br>
		Daño extra inicio ronda: ${player.lineTurn[0].damage}<br>
	`

	statsUnits[1].innerHTML = `
		HP Max: ${enemy.hp[1]}<br>
		Daño: ${enemy.red}
	`
}
