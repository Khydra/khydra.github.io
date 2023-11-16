//FUNCTIONS
function adquierePenguin(p) {
	p.own = true;
	achievement[5].progress++;
	penguinOwnArray.push(p);
	penguinNotOwnArray.filter((penguin,index) => {
		if (penguinOwnArray.includes(penguin)) penguinNotOwnArray.splice(index,1)
	});
}

function displayPenguin(p) {
	if (inTemple) updateTemple();
	//if (inIglu) updateIglu();
	if (inJournal && actualJournalTab==1) generateStadistics();

	_penguinName.innerHTML = p.name[leng];
	_penguinLevel.innerHTML = `${textPenguinInfo.stats.level[leng]} ${p.lvl}`;
	_penguinImage.style.backgroundImage = `url(${p.img})`;
	_penguinTypeArray[0].innerHTML = `${p.type[0].name[leng]}`;
	_penguinTypeArray[1].innerHTML = `${p.type[1].name[leng]}`;

	_penguinHealth.innerHTML = `${textPenguinInfo.stats.health[leng]}: ${Math.floor(p.hp[0])}/${Math.floor(p.hp[1])}`;
	_penguinPower.innerHTML = `${textPenguinInfo.stats.power[leng]}: ${Math.floor(p.pow[0]+p.pow[1])}`;
	_penguinSpeed.innerHTML = `${textPenguinInfo.stats.speed[leng]}: ${Math.round((p.spd[1]/10)*100)/100}s`;
	_penguinFatigue.innerHTML = `${textPenguinInfo.stats.fatigue[leng]}: ${Math.ceil(p.fatigue[0])}/${Math.floor(p.fatigue[1])}`;

	if (p.inRoster || p.inBuilding[0] || p.inBuilding[1] || p.inBuilding[2]) {
		if (p.inRoster) _rosterButton.innerHTML = text.rightContainer.rosterButtonRemove[leng];
		else if (p.inBuilding[0]) _rosterButton.innerHTML = text.rightContainer.rosterButtonHospital[leng];
		else if (p.inBuilding[1]) _rosterButton.innerHTML = text.rightContainer.rosterButtonSauna[leng];
		else if (p.inBuilding[2]) _rosterButton.innerHTML = text.rightContainer.rosterButtonMine[leng];
		_rosterButton.className = 'roster-button-on';
	} else if (roster[0]!=null && roster[1]!=null && roster[2]!=null && roster[3]!=null ) {
		_rosterButton.innerHTML = text.rightContainer.rosterButtonFull[leng];
		_rosterButton.className = 'roster-button-dis';
	} else {
		_rosterButton.innerHTML = text.rightContainer.rosterButtonAdd[leng];
		_rosterButton.className = 'roster-button-off';
	}
	passiveDescriptionUpdate(p.id);
	showStars();
	_penguinStatInfo.innerHTML = p.passive.description[leng];
}

function chargePenguin(p) {
	if (p.hp[0]<1 || p.exhausted) return;
	if (p.spd[0]<p.spd[1]) p.spd[0]++;
	else {
		p.spd[0] = 0;
		let dmg = Math.floor(p.pow[0])+p.pow[1];
		let crt = false;

		if (p.type[0].id==6 || p.type[1].id == 6) {
			let n = Math.floor(Math.random() * 100).toFixed(1);
			if (types[6].bonus[types[6].lvl]>n) {
				if (monsterUnlocks[22].unlocked) cdPotionDown(0);
				if (monsterUnlocks[27].unlocked) cdPotionDown(1);
			}
		}
		if (p.type[0].id==8 || p.type[1].id == 8) {
			let n = Math.floor(Math.random() * 100).toFixed(1);
			if (types[8].bonus[types[8].lvl]>n) {
				crt = true;
				dmg*=2;
			}
		}
		if (p.type[0].id==10 || p.type[1].id == 10) {
			let n = Math.floor(Math.random() * 100).toFixed(1);
			if (types[10].bonus[types[10].lvl]>n) {
				crt = true;
				dmg=Math.ceil(dmg*1.25);
			}
		}
		if (p.type[0].id==9 || p.type[1].id == 9) {
			let heal = Math.ceil(dmg*types[9].bonus[types[9].lvl]/100);
			healthChangePenguin(p, heal);
		} 

		if (!enemy.boss && (p.type[0].id==7 || p.type[1].id==7)) dmg += Math.ceil(dmg * types[7].bonus[types[7].lvl]);
		else if (enemy.boss && (p.type[0].id==0 || p.type[1].id==0 )) dmg += Math.ceil(dmg * types[0].bonus[types[0].lvl]);

		damageEnemy(dmg, p.position, 0, p.type, crt);

		if (p.type[0].id==12 || p.type[1].id==12) fatigueChangePenguin(p,1+types[12].bonus[types[12].lvl])
		else fatigueChangePenguin(p,1);

		if (enemy.status[4]!=0) fatigueChangePenguin(p,enemy.status[4]);
		p.stats[0]++;
		p.stats[1]+=dmg;
		if (p.passive.onHit) usePassive(p);
	}
}

function evasionPenguin(p) { //falta cambiar color animacion etc para q no sea copy paste del daño
	let evasion = document.createElement('div');

	evasion.classList = 'num-evasion';
	evasion.innerHTML = `evasion`;
	evasion.style.animation = `numAnimDmg 2s`;
	_penguinRosterArray[p.position].style.transform = "translateX(-8px)"
	_mainScene.appendChild(evasion);
	if (p.position == 0) {
		evasion.style.bottom = `60px`;
		evasion.style.left = `70px`;
	} else if (p.position==1) {
		evasion.style.bottom = `95px`;
		evasion.style.left = `160px`;
	} else if(p.position==2) {
		evasion.style.bottom = `140px`;
		evasion.style.left = `230px`;
	} else {
		evasion.style.bottom = `185px`;
		evasion.style.left = `300px`;
	}
	setTimeout(() => {
		_penguinRosterArray[p.position].style.transform = "translateX(0px)"
		_mainScene.removeChild(evasion)
	}, 2000);
}

function healthChangePenguin(p,v,st=null,anim=true) {
	let crt = false;
	if (st!=null) {
		p.type.forEach((t)=>{
			if (t.id==st) {
				v*=2;
				crt=true;
			}
		});
	}
	p.hp[0] += v;
	if (v<0) p.stats[2] -= v;
	if (p.hp[0] >p.hp[1]) p.hp[0] = p.hp[1];
	else if (p.hp[0] <= 0) p.hp[0] = 0;
	let per = (p.hp[0]/p.hp[1])*100;
	_penguinRosterHealthBarActualArray[p.position].style.width = `${per}%`;
	if (p.hp[0]==0) defeatedPenguin(p);
	if (actualPenguin == p) displayPenguin(p);
	if (anim) penguinHealthChangeNumAnim(v, p.position, crt);
}

function fatigueChangePenguin(p,v) {
	p.fatigue[0] += v;
	if (p.fatigue[0]>p.fatigue[1]) {
		p.fatigue[0] = p.fatigue[1];
		p.exhausted = true;
		p.stats[4]++;
		achievement[15].progress++;
		stadistics.fatigated++;
	} else if (p.fatigue[0] <= 0) {
		p.fatigue[0] = 0;
		p.exhausted = false;
	}
	let per = (p.fatigue[0]/p.fatigue[1])*100;
	_penguinRosterFatigueBarActualArray[p.position].style.width = `${per}%`;
	if (actualPenguin == p) displayPenguin(p);
}

function defeatedPenguin(p) {
	p.stats[3]++; 
	stadistics.deads++;
	achievement[14].progress++; 
	_penguinRosterChargeBarActualArray[p.position].style.width = `0%`;
	_penguinRosterHealthBarActualArray[p.position].style.width = `0%`;
	p.spd[0] = 0;

	if (p.passive.onRetire) usePassive(p,2);
	if (enemy.status[8] != null) {
		healEnemy(Math.floor((enemy.hp[1]*enemy.status[8])/100));
		_statusIconArray[8].style.animation = "highlight 0.3s";
		setTimeout(()=>{_statusIconArray[8].style.animation = ""},350);
	}
	p.inRoster = false;

	for (let i=0;i<roster.length;i++) {
		if (roster[i] == p) {
			roster[i].pow[1] = 0;
			roster[i].spd[0] = 0;
			roster[i] = null;
			p.position = null;
			
			_penguinRosterArray[i].style.backgroundImage = ``;

			_penguinRosterChargeBarArray[i].removeChild(_penguinRosterChargeBarActualArray[i]);
			_unitBattleBarContainerArray[i].removeChild(_penguinRosterChargeBarArray[i]);

			_penguinRosterHealthBarArray[i].removeChild(_penguinRosterHealthBarActualArray[i]);
			_unitBattleBarContainerArray[i].removeChild(_penguinRosterHealthBarArray[i]);
			
			_penguinRosterFatigueBarArray[i].removeChild(_penguinRosterFatigueBarActualArray[i]);
			_unitBattleBarContainerArray[i].removeChild(_penguinRosterFatigueBarArray[i]);

			_unitPenguinArray[p.id].style.background = "revert-layer";
			_unitPenguinArray[p.id].style.borderColor = "revert-layer";
			_unitBattleArray[i].removeChild(_unitBattleArray[i].firstElementChild);
		
			if (p.type[0].id==11 || p.type[1].id==11) types[11].active = false;
			return;
		}
	}
}

//USABLES
_unitPenguinContainer.addEventListener('mousedown',(e)=>{
	if (e.target.className != "unit-penguin") return;
	if (!penguin[e.target.id.slice(12)].own) return;
	unitClickSound();
	actualPenguin = penguin[e.target.id.slice(12)];
	displayPenguin(actualPenguin);
});

function updateOwnPenguinImage() {
	for (let i=0; i<penguinArray.length; i++) {
		if (_unitPenguinArray[i].hasChildNodes()) _unitPenguinArray[i].removeChild(_unitPenguinArray[i].firstChild);
		let elementImg = document.createElement('img');
		elementImg.src = penguin[i].img;
		_unitPenguinArray[i].appendChild(elementImg);
		if (!penguin[i].own) elementImg.className = "blur";
		(penguin[i].own) ? _unitPenguinArray[i].className = "unit-penguin" : _unitPenguinArray[i].className = "unit-penguin-bloq";
	}
}

function showStars() {
	for (let i=0; i<5; i++) {
		//if (unitSelected.star>i) $unitStars[i].style.opacity = 1;
		//else $unitStars[i].style.opacity = 0.5;
		_penguinStarArray[i].className = "star-off";
		if (actualPenguin.star>i) setTimeout(()=>{ _penguinStarArray[i].className = "star";},10)
	}
}

function penguinHealthChangeNumAnim(v, pos, crt) {
	let num = document.createElement('div');
	if (v>0) {
		num.classList = 'num-heal';
		num.innerHTML = `+${v}`;
		num.style.animation = `numAnimDmg 3s`;
	} else {
		num.classList = 'num-dmg';
		(crt) ? num.innerHTML = `${v}!` : num.innerHTML = `${v}`;
		num.style.animation = `numAnimDmg 3s`;
	}
	_mainScene.appendChild(num);
	if (pos == 0) {
		num.style.bottom = `80px`;
		num.style.left = `77px`;
		//if (v<0) num.style.color = `#af272f`
	} else if (pos==1) {
		num.style.bottom = `80px`;
		num.style.left = `220px`;
		//if (v<0) num.style.color = `#0085ad`
	} else if(pos==2) {
		num.style.bottom = `160px`;
		num.style.left = `145px`;
		//if (v<0) num.style.color = `#4c8c2b`
	} else {
		num.style.bottom = `160px`;
		num.style.left = `290px`;
		//if (v<0) num.style.color = `#eaaa00`
	}
	setTimeout(() => _mainScene.removeChild(num), 3000);
}
