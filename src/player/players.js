var user, enemy;
var playersArray = [];

function defaultPlayers() {
	user = {
		id: 0,
		hp: [30,30],
		regenStage: 0,
		regenRound: 0,
		damage: 0,
		succes: {
			damage: 3,
			heal: 0
		},
		partial: {
			damage: 1
		},
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
		},
		critical: 1,
		elemental: {
			0: 0,
			1: 0,
			2: 0,
			3: 0
		},
		reroll: [0, 1],
		growth: [0, 0],
		block: [0, 1],
		resurrection: [0, 1],
		img: 7
	};
	userApplyUpgrades();
	enemy = {
		id: 1,
		hp: [15,15],
		red: 1,
		element: Math.floor(Math.random()*4),
		img: Math.floor(Math.random()*20)+1
	};
	playersArray = [user,enemy];
	playersArray.forEach((unit,index)=> {
		_unitHeatlhBarActual[unit.id].style.width = `100%`;
		_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
		_unitHeatlhBarNumber[index].innerHTML = `${playersArray[index].hp[0]} / ${playersArray[index].hp[1]}`;
	});

	_playerImage.style.backgroundImage = `url('./img/p${user.img}_1.png')`;
	_enemyImage.style.backgroundImage = `url('./img/p${enemy.img}_1.png')`;
}

function changeHealth(value, unit) {
	unit.hp[0] += value;
	if (unit.hp[0]>unit.hp[1]) unit.hp[0] = unit.hp[1];
	if (unit.hp[0]<0) unit.hp[0] = 0;
	let per = (100 * unit.hp[0]) / unit.hp[1];
	_unitHeatlhBarActual[unit.id].style.width = `${per}%`;
	_unitHeatlhBarNumber[unit.id].innerHTML = `${unit.hp[0]} / ${unit.hp[1]}`;
}

function setEnemy() {
	enemy.hp[1] = Math.floor(enemy.hp[1]*1.17);
	enemy.hp[0] = enemy.hp[1];
	enemy.element = Math.floor(Math.random()*4);
	enemy.img = Math.floor(Math.random()*20)
	if (stage%3==0) {enemy.red+=1;}
	_unitHeatlhBarActual[1].style.width = `100%`;
	_unitHeatlhBarNumber[1].innerHTML = `${enemy.hp[0]} / ${enemy.hp[1]}`;
	_enemyImage.style.backgroundImage = `url('./img/p${enemy.img}_1.png')`
}

function changeStatsTab(id) {
	_statsPlayersTittle[0].innerHTML = text.stats.tab[id][leng];
	switch (id) {
		case 0:
			_statsPlayers[0].innerHTML = `
				${text.stats.off[0]} </span> <span class="green">${user.succes.damage + user.damage}</span><br>
				${text.stats.off[1]} </span> <span class="green">${user.partial.damage + user.damage}</span><br>
				${text.stats.off[2]} <span class="green">+${user.critical}</span><br>
				${text.stats.off[3]} <span class="green">+${user.elemental[0]}</span><br>
				${text.stats.off[4]} <span class="green">+${user.elemental[0]}</span><br>
				${text.stats.off[5]} <span class="green">+${user.elemental[0]}</span><br>
				${text.stats.off[6]} <span class="green">+${user.elemental[0]}</span><br>
				${text.stats.off[7]} <span class="green">+${user.lineTurn[0].damage}</span><br>
				${text.stats.off[8]} <span class="green">${user.perfect.damage}</span><br>
			`
			break;
		case 1:
			_statsPlayers[0].innerHTML = `
				${text.stats.def[0]} <span class="green">${user.hp[1]}</span><br>
				${text.stats.def[1]} <span class="green">${user.regenStage}</span><br>
				${text.stats.def[2]} <span class="green">${user.regenRound}</span><br>
				${text.stats.def[3]} <span class="green">${user.succes.heal}</span><br>
				${text.stats.def[4]} <span class="green">${user.perfect.heal}</span><br>
				${text.stats.def[5]} <span class="green">${user.growth}</span><br>`
			if (user.block[0]==1 && user.block[1]==1) _statsPlayers[0].innerHTML += `${text.stats.def[6]} ${text.stats.misc[1][leng]}<br>`
			else _statsPlayers[0].innerHTML += `${text.stats.def[6]} ${text.stats.misc[0][leng]}<br>`
			if (user.resurrection[0]==1 && user.resurrection[1]==1) _statsPlayers[0].innerHTML += `${text.stats.def[7]} ${text.stats.misc[1][leng]}<br>`
			else _statsPlayers[0].innerHTML += `${text.stats.def[7]} ${text.stats.misc[0][leng]}<br>`
			break;
	}
}

function enemyStatsTab() {
	let deb = enemy.element+1;
	if (deb==4) deb = 0;
	console.log(deb)
	_statsPlayersTittle[1].innerHTML = "ENEMIGO";
	_statsPlayers[1].innerHTML = `
		${text.stats.enemy[0]} <span class='${elementNameClass[enemy.element]}'>${text.battle.element[enemy.element][leng]}</span><br>
		${text.stats.enemy[1]} <span class='${elementNameClass[deb]}'>${text.battle.element[deb][leng]}</span><br>
		${text.stats.enemy[2]} <span class='pink'>${enemy.red}</span><br>
	`
}

const elementNameClass = ['fire','water','thunder','earth']

function nextStatsTab() {
	statsTab++;
	if (statsTab==2) statsTab = 0;
	changeStatsTab(statsTab)
}

_statsUserArrow.addEventListener('click',()=>{
	soundClick.load();
	soundClick.play();
	nextStatsTab();
})