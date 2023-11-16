var roster = [null,null,null,null];

function rosterAdd(p) {
	if (p.hp[0]<1 || p.inBuilding[0] || p.inBuilding[1] || p.inBuilding[2]) return;
	if ((p.type[1].id==11 || p.type[1].id==11) && types[11].active) return;

	p.inRoster = true;
	_rosterButton.innerHTML = text.rightContainer.rosterButtonRemove[leng];
	_rosterButton.className = 'roster-button-on';

	for (let i=0;i<roster.length;i++) {
		if (roster[i] == null) {
			roster[i] = p;
			p.hp[0] = Math.floor(p.hp[0]);
			p.position = i;
			_penguinRosterArray[i].style.backgroundImage = `url(${p.img})`;

			_unitBattleBarContainerArray[i].appendChild(_penguinRosterChargeBarArray[i]);
			_penguinRosterChargeBarArray[i].appendChild(_penguinRosterChargeBarActualArray[i]);
			_penguinRosterChargeBarActualArray[i].style.width = '0%';

			_unitBattleBarContainerArray[i].appendChild(_penguinRosterHealthBarArray[i]);
			_penguinRosterHealthBarArray[i].appendChild(_penguinRosterHealthBarActualArray[i]);

			_unitBattleBarContainerArray[i].appendChild(_penguinRosterFatigueBarArray[i]);
			_penguinRosterFatigueBarArray[i].appendChild(_penguinRosterFatigueBarActualArray[i]);

			let perHp = (p.hp[0]/p.hp[1])*100;
			let perFat = (p.fatigue[0]/p.fatigue[1])*100;
			_penguinRosterHealthBarActualArray[i].style.width = `${perHp}%`;
			_penguinRosterFatigueBarActualArray[i].style.width = `${perFat}%`;
				
			if (i==0) {
				_unitPenguinArray[p.id].style.background = "linear-gradient(18deg, #8c1f26 0%, #bf5259 100%)";
				_unitPenguinArray[p.id].style.borderColor = "#af272f";
			} else if (i==1){
				_unitPenguinArray[p.id].style.background = "linear-gradient(18deg, #006a8a 0%, #339dbd 100%)";
				_unitPenguinArray[p.id].style.borderColor = "#0085ad";
			} else if (i==2) {
				_unitPenguinArray[p.id].style.background = "linear-gradient(18deg, #3d7022 0%, #70a355 100%)";
				_unitPenguinArray[p.id].style.borderColor = "#4c8c2b";
			} else {
				_unitPenguinArray[p.id].style.background = "linear-gradient(18deg, #bb8800 0%, #eebb33 100%)";
				_unitPenguinArray[p.id].style.borderColor = "#eaaa00";
			}
				
			let elementImg = document.createElement('img');
			elementImg.src = p.img;
			_unitBattleArray[i].appendChild(elementImg);
			displayPenguin(p);

			if (p.type[0].id==11 || p.type[1].id==11) types[11].active = true;
			return;
		}
	}
}

function rosterRemove(p) {
	if (enemy.status[2] != null && p.type[0].id!=14 && p.type[1].id!=14) {
		_statusIconArray[2].style.animation = "highlight 0.3s";
		setTimeout(()=>{_statusIconArray[2].style.animation = ""},350);
		return;
	}

	if (p.passive.onRetire) usePassive(p,2);
	p.inRoster = false;
	_rosterButton.innerHTML = text.rightContainer.rosterButtonAdd[leng];
	_rosterButton.className = 'roster-button-off';

	for (let i=0;i<roster.length;i++) {
		if (roster[i] == p) {
			if (enemy.status[3] != null && p.type[0].id!=14 && p.type[1].id!=14) {
				healEnemy(Math.floor((enemy.hp[1]*enemy.status[3])/100))
				_statusIconArray[3].style.animation = "highlight 0.3s";
				setTimeout(()=>{_statusIconArray[3].style.animation = ""},350);
			}
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
			displayPenguin(p);
			return;
		}
	}
}

function rosterChargeBar() {
	roster.forEach((p, index)=>{
		if (p!=null && p.hp[0]>1) {
			chargePenguin(p);
			let per = (p.spd[0]/p.spd[1])*100;
			_penguinRosterChargeBarActualArray[index].style.width = `${per}%`;
		}
	})
}

_rosterButton.addEventListener('click',()=>{
	(actualPenguin.inRoster) ? rosterRemove(actualPenguin) : rosterAdd(actualPenguin);
	if (!actualPenguin.inRoster) {
		if (actualPenguin.inBuilding[0]) hospitalChange();
		else if (actualPenguin.inBuilding[1]) saunaChange();
		else if (actualPenguin.inBuilding[2]) mineChange();
	}
});

_penguinRosterArray.forEach((p, index)=>{
	p.addEventListener('click',()=>{
		if (roster[p.id.slice(14)]==null) return;
		actualPenguin = roster[p.id.slice(14)];
		if (roster[index].passive.onSelf) {usePassive(roster[index],3);}
		displayPenguin(actualPenguin);
	});

	p.addEventListener('mouseover',()=>{
		if (roster[p.id.slice(14)]==null) return;
		_penguinRosterArray[p.id.slice(14)].style.cursor = "pointer";
	})

	p.addEventListener('mouseout',()=>{
		if (roster[p.id.slice(14)]==null) return;
		_penguinRosterArray[p.id.slice(14)].style.cursor = "revert-layer";
	})
});

_unitBattleArray.forEach((p)=> {
	p.addEventListener('mousedown',()=>{
		if (roster[p.id.slice(11)]==null) return;
		actualPenguin = roster[p.id.slice(11)];
		displayPenguin(actualPenguin);
	});
})
