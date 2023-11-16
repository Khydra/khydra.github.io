function displayEnemy() {
	if (autosave) saveGame();
	enemySpawnAnim();
	_enemy.style.backgroundImage = `url(${enemy.img})`;
	_enemyName.innerHTML = enemy.name[leng];
	if (monsterUnlocks[1].unlocked) _enemyHealthBarNumber.innerHTML = Math.ceil(enemy.hp[0]);
	let per = (enemy.hp[0]/enemy.hp[1])*100;
	_enemyHealthBarActual.style.width = `${per}%`;
	
	iconDescriptionsEnemy();
	iconImageEnemy();
	
	setTimeout(()=>{ if(!pause) activeBattle = true;}, 2500);
	setTimeout(()=>{ 
		_enemy.style.animation = "revert-layer";
		_claw0.style.animation = "revert-layer";
	}, 2500);
}

function damageEnemy(v, pos, origen, type=null, crt=false) {
	if (enemy.status[6]!=null && type!=null) { //si el boss es inmune al tipo del pinguino
		let inmune = false;
		type.forEach((c)=>{if (enemy.status[6]==c.id) inmune = true;});
		if (inmune) return enemyDmgNumAnim(0,pos,"immune");
	}
	enemy.hp[0] -= v;	
	if (enemy.hp[0] <= 0) enemy.hp[0] = 0;
	let per = (enemy.hp[0]/enemy.hp[1])*100;
	if (monsterUnlocks[1].unlocked) _enemyHealthBarNumber.innerHTML = Math.ceil(enemy.hp[0]);
	_enemyHealthBarActual.style.width = `${per}%`;
	enemyDmgNumAnim(v, pos, origen, crt);
	if (enemy.hp[0]==0) defeatEnemy();
}

function healEnemy(v) {
	enemy.hp[0] += v;
	if (enemy.hp[0]>enemy.hp[1]) enemy.hp[0] = enemy.hp[1];
	let per = (enemy.hp[0]/enemy.hp[1])*100;
	if (monsterUnlocks[1].unlocked) _enemyHealthBarNumber.innerHTML = Math.ceil(enemy.hp[0]);
	_enemyHealthBarActual.style.width = `${per}%`;
}

function defeatEnemy() {

	activeBattle = false;
	achievement[4].progress++;
	stadistics.enemiesKilled++;
	changeGold(enemy.gold);

	if (enemy.boss) changeCookies(1);
	penguinArray.forEach((p)=> {
		if (p.own && (p.type[0].id==4 || (p.type[1]!=null && p.type[1].id==4))) {
			let n = Math.floor(Math.random() * 100).toFixed(1);
			if (types[4].bonus[types[4].lvl]>n) {
				lvlUp(p);
			}
		}
		if (p.passive.onKill) {
			usePassive(p,1);
			if (actualPenguin == p) displayPenguin(p);
		}
	});
	enemyDeadAnim();

	setTimeout(()=>{
		_enemyHealthBarActual.style.width = `0%`;
		if (monsterUnlocks[1].unlocked) _enemyHealthBarNumber.innerHTML = 0
	},100);
	setTimeout(()=>{changeRoom()},2000);
}

function chargeEnemy() {
	if (enemy.spd[0]<enemy.spd[1]) enemy.spd[0]++;
	else if (roster[0]!=null || roster[1]!=null || roster[2]!=null || roster[3]!=null) {
		//enemy.spd[0] = 0;
		attackEnemy();
	}
}

function attackEnemy() {
	enemy.spd[0] = 0;
	if (!enemy.status[1]) {
		let n = Math.floor(Math.random() * 4);
		while (roster[n]==null) n = Math.floor(Math.random() * 4);
		if (roster[n].passive.onEnemyHit) {
			usePassive(roster[n], 4)
			if (actualPenguin == roster[n]) displayPenguin(actualPenguin);
		}
		if (roster[n].type[0].id == 13 || roster[n].type[1].id == 13) {
			let p = Math.floor(Math.random() * 100).toFixed(1);
			if (types[13].bonus[types[13].lvl]>p) return evasionPenguin(roster[n]);	
		}
		healthChangePenguin(roster[n], -enemy.pow[0], enemy.status[7]);
	} else {
		roster.forEach((p)=>{
			if (p!=null) {
				if (p.passive.onHitted) {
					usePassive(p,4);
					if (actualPenguin == p) displayPenguin(p);
				}
				healthChangePenguin(p,-enemy.pow[0], enemy.status[7]);
			}
		});
	}
}

function enemyPoison() {
	let dmg = Math.ceil(enemy.hp[1]*0.0001);
	damageEnemy(dmg,null,null);
	enemyDmgNumAnim(dmg,4,2);
}

function iconImageEnemy() {
	let n = _enemyStatusContainer.childElementCount
	for (let i=0; i<n;i++) _enemyStatusContainer.removeChild(_enemyStatusContainer.firstChild);
	for (let i=0;i<_statusIconArray.length;i++) {if (enemy.status[i]!=null) _enemyStatusContainer.appendChild(_statusIconArray[i]);}
}

function iconDescriptionsEnemy() {
	if (enemy.status[0]!=null) iconsDescriptions[0] = [
		`Restores <span class="hp">${(enemy.hp[1]/400).toFixed(1)} health</span> each second.`,
		`Regenera <span class="hp">${(enemy.hp[1]/400).toFixed(1)} salud</span> cada segundo.`];
	if (enemy.status[3]!=null) iconsDescriptions[3] = [
		`Restores <span class="hp">${Math.floor((enemy.hp[1]*enemy.status[3])/100)} health</span> when removing a penguin from combat.`,
		`Regenera <span class="hp">${Math.floor((enemy.hp[1]*enemy.status[3])/100)} salud</span> al retirar un pinguino del combate.`];
	if (enemy.status[4]!=null) iconsDescriptions[4] = [
		`Penguins increase their <span class="fat">fatigue by ${enemy.status[4]} additional</span> when hitting`,
		`Los pingüinos aumentan su <span class="fat">fatiga en ${enemy.status[4]} adicional</span> al golpear.`];
	if (enemy.status[6]!=null) iconsDescriptions[6] = [
		`Inmune to <span class="yellow">${types[enemy.status[6]].name[leng]}</span> penguins.`,
		`Inmune a pingüinos de tipo <span class="yellow">${types[enemy.status[6]].name[leng]}</span>.`];
	if (enemy.status[7]!=null) iconsDescriptions[7] = [
		`Deals extra damage to <span class="yellow">${types[enemy.status[7]].name[leng]}</span> penguins.`,
		`Causa daño extra a pingüinos de tipo <span class="yellow">${types[enemy.status[7]].name[leng]}</span>.`];
	if (enemy.status[8]!=null) iconsDescriptions[8] = [
		`Restores <span class="hp">${Math.floor((enemy.hp[1]*enemy.status[8])/100)} health</span> when killing a penguin.`,
		`Regenera <span class="hp">${Math.floor((enemy.hp[1]*enemy.status[8])/100)} salud</span> al matar un pingüino.`];
	if (enemy.status[9]!=null) iconsDescriptions[8] = [
		`Loses <span class="hp">${Math.ceil(enemy.hp[1]*0.0001)} health</span> per second.`,
		`Pierde <span class="hp">${Math.ceil(enemy.hp[1]*0.0001)} salud</span> cada segundo.`];
}

const iconsDescriptions = {
	0:	[`Restores <span class="hp">${(enemy.hp[1]/400).toFixed(1) + enemy.status[0]} health</span> each second.`,
		`Regenera <span class="hp">${(enemy.hp[1]/400).toFixed(1) + enemy.status[0]} salud</span> cada segundo.`],
	1:	[`Hit all the penguins in the group.`,
		`Golpea a todos los pingüinos del grupo.`],
	2:	[`Prevents the penguins from being removed from the group.`,
		`Impide retirar a los pingüinos del grupo.`],
	3:	[`Restores <span class="hp">${enemy.status[3]} health</span> when removing a penguin from combat.`,
		`Regenera <span class="hp">${enemy.status[3]} salud</span> al retirar un pingüino del combate.`],
	4:	[`Penguins increase their <span class="fat">fatigue by ${enemy.status[4]} additional</span> when hitting`,
		`Los pingüinos aumentan su <span class="fat">fatiga en ${enemy.status[4]} adicional</span> al golpear.`],
	5:	[`Inmune to click damage.`,
		`Inmune al daño click.`],
	6:	[`Inmune to <span class="yellow">%%%</span> penguins.`,
		`Inmune a pingüinos de tipo <span class="yellow">%%%</span>.`],
	7:	[`Deals extra damage to<span class="yellow"> %%%</span> penguins.`,
		`Causa daño extra a pingüinos de tipo <span class="yellow">%%%</span>.`],
	8:	[`Restores <span class="hp">${enemy.status[8]}% health</span> when killing a penguin.`,
		`Regenera <span class="hp">${enemy.status[8]}% salud</span> al matar un pingüino.`],
	9:	[`Loses <span class="hp">${Math.ceil(enemy.hp[1]*0.0001)} health</span> per second.`,
		`Pierde <span class="hp">${Math.ceil(enemy.hp[1]*0.0001)} salud</span> cada segundo.`],
}

_enemy.addEventListener('click', ()=> {
	if (!activeBattle) return;
	if (activeBattle) {
		$clickEnemy.load();
		$clickEnemy.play();
		if (enemy.status[5]) {
			return clickAnimDmg(event.offsetX, event.offsetY, false);
		}
		let dmg = dpc[0]+dpc[1];
		let bonus = 1;

		roster.forEach((p)=>{if (p!=null && (p.type[0].id==2 || p.type[1].id==2)) bonus += types[2].bonus[types[2].lvl];});

		dmg = Math.floor(dmg*bonus);

		stadistics.clicks++;
		stadistics.clickDmg += dmg;
		achievement[0].progress++;
		achievement[1].progress += dmg;
		damageEnemy(dmg,null,null);

		clickAnimDmg(event.offsetX, event.offsetY, dmg);

		roster.forEach((p)=> {
			if (p!=null && p.passive.onEnemyClick) {
				usePassive(p,5);
				if (actualPenguin == p) displayPenguin(p);
			}
		});
	}
});

_enemy.addEventListener('mouseover', ()=> mouseOverEnemy = true);
_enemy.addEventListener('mouseout', ()=> mouseOverEnemy = false);

const clickAnimDmg = (x,y, dmg) => {
	x+=370;
	y+=20;
	let hit = document.createElement('div');
	hit.classList = 'click-dmg';
	(dmg !=false) ? hit.innerHTML = `-${dmg}` : hit.innerHTML = text.centerContainer.immune[leng];
	_mainScene.appendChild(hit);
	hit.style.left = `${x}px`;
	hit.style.top = `${y}px`;
	hit.style.animationName = `clickHit`;
	setTimeout(() => _mainScene.removeChild(hit), 1500);
}

const enemyDmgNumAnim = (v,pos,origen,crt=false) => {
	if (origen==null) return;
	let num = document.createElement('div');
	
	num.classList = `num-dmg-p${pos}`;
	if (origen == "immune"){
		num.innerHTML = text.centerContainer.immune[leng] 
		let x = Math.floor(Math.random() * 80) + 110;
		let y = Math.floor(Math.random() * 50) + 170;
		//num.style.left = `${_enemyHealthBarActual.offsetWidth-30}px`;
		num.style.right = `${x}px`; 
		num.style.fontSize = "28px";
		num.style.top = `${y}px`;
		num.style.animation = `clickHit 3s`;
	} else if (origen==0){
		(crt) ? num.innerHTML = `-${v}!` : num.innerHTML = `-${v}`;
		let x = Math.floor(Math.random() * 80) + 110;
		let y = Math.floor(Math.random() * 50) + 170;
		//num.style.left = `${_enemyHealthBarActual.offsetWidth+30}px`;
		num.style.right = `${x}px`; 
		num.style.top = `${y}px`;
		num.style.fontSize = "24px";
		num.style.animation = `clickHit 3s`;
	} else if (origen==1) {
		let x = Math.floor(Math.random() * 100);
		let y = Math.floor(Math.random() * 100);
		(crt) ? num.innerHTML = `-${v}!` : num.innerHTML = `-${v}`;
		num.style.left = `${450+x}px`;
		num.style.top = `${200+y}px`;
		num.style.animation = `numAnimSpell 3s`;
	} else if (origen==2) { //poison
		let x = Math.floor(Math.random() * 100);
		let y = Math.floor(Math.random() * 100);
		(crt) ? num.innerHTML = `-${v}!` : num.innerHTML = `-${v}`;
		num.style.left = `${450+x}px`;
		num.style.top = `${200+y}px`;
		num.style.animation = `numAnimPoison 3s ease-out`;
	}
	
	_mainScene.appendChild(num);
	setTimeout(() => _mainScene.removeChild(num), 3000);
}

const enemyDeadAnim = () => {
	_enemy.style.animation = "enemyDeadAnim 2s";
	_claw0.style.animation = "clawUp 2s";
}

const enemySpawnAnim = () => {
	_enemy.style.animation = "spawnEnemyAnim 2s";
	_claw0.style.animation = "clawDown 2.5s";
}

const generateEnemy = (boss=false) => {
	for (let i=0; i<enemy.status.length; i++) enemy.status[i] = null;
	if (!boss) {
		enemy.boss = false;
		enemy.gold = Math.floor(enemy.gold*1.1);
		enemy.hp[1] = Math.floor(enemy.hp[1]*1.1);	
	} else {
		enemy.boss = true;
		enemy.gold = Math.floor(enemy.gold*1.25);
		enemy.hp[1] = Math.floor(enemy.hp[1]*1.25);
		generateBossStatus();
	}
	//img
	//name
	//status
	
	enemy.hp[0] = enemy.hp[1];
	//enemySpawnAnim();
	displayEnemy();
}

const generateBossStatus = () => {
	switch (room) {
	  	case 10: 
	  		enemy.status[0] = true;
	  		enemy.status[2] = 1;
	   	break;	
	   	case 20: 
	  		enemy.status[1] = 1;
	  		enemy.status[3] = 10;
	  		enemy.status[7] = Math.floor(Math.random() * 13);
	   	break;
	   	case 30: 
	   		enemy.status[4] = Math.floor(Math.random() * 3) + Math.floor(zone/10);
	  		enemy.status[5] = 1;
	   	break;
	   	case 40: 
	   		enemy.status[0] = true;
	  		enemy.status[1] = 1;
	  		enemy.status[6] = Math.floor(Math.random() * 4);
	  		enemy.status[7] = Math.floor(Math.random() * 4);
	  		enemy.status[8] = 10;
	   	break;
	   	case 50: 
	  		enemy.status[0] = true;
	  		enemy.status[1] = 1;
	  		enemy.status[6] = Math.floor(Math.random() * 13);
	  		enemy.status[8] = 5;
	   	break;
	   	case 60: 
	  		enemy.status[2] = 1;
	  		enemy.status[4] = 1 + Math.floor(zone/8);
	  		enemy.status[6] = Math.floor(Math.random() * 13);
	  		enemy.status[7] = Math.floor(Math.random() * 13);
	   	break;
	   	case 70: 
	  		enemy.status[0] =true ;
	  		enemy.status[3] = 25;
	   	break;
	   	case 80: 
	  		enemy.status[0] = true;
	  		enemy.status[1] = 1;
	  		enemy.status[6] = Math.floor(Math.random() * 13);
	  		enemy.status[8] = 15;
	   	break;
	   	case 90: 
	  		enemy.status[0] = true;
	  		enemy.status[1] = 1;
	  		enemy.status[3] = 15;
	  		enemy.status[5] = 1;
	  		enemy.status[7] = Math.floor(Math.random() * 13);
	   	break;
	   	case 100: 
	  		enemy.status[0] = true;
	  		enemy.status[1] = 1;
	  		enemy.status[2] = 1;
	  		enemy.status[4] = Math.floor(Math.random() * 4) + Math.floor(zone/10);
	  		enemy.status[6] = Math.floor(Math.random() * 13);
	  		enemy.status[7] = Math.floor(Math.random() * 13);
	  		enemy.status[8] = 5;
	   	break;
	}
}

const changeRoom = () => {
	if (room==100) {
		room=1;
		zone++;
		generateEnemy();
	} else {
		room++;
		(room%10==0) ? generateEnemy(true) : generateEnemy();
	}
	_ubication.innerHTML = `${text.centerContainer.zone[leng]} ${zone} - ${text.centerContainer.room[leng]} ${room}`;
}