function displayTemple() {
	_subSceneContent.appendChild(_templeScene);
	inTemple = true;
	updateTemple();
}

function updateTemple() {
	if (actualPenguin.inRoster) {
		//_buttonLvl.style.opacity = .7;
		//_buttonEvolve.style.opacity = .7;
		_buttonLvl.style.pointerEvents = "none";
		_buttonEvolve.style.pointerEvents = "none";
		for (let i=0; i<5; i++) {
			//_templeRowElements[i+1][4].style.opacity = 0.5;
			_templeRowElements[i+1][4].style.pointerEvents = "none";
			_templeRowElements[i+1][4].style.cursor = "default";
		}
	} else {
		//_buttonLvl.style.opacity = 1;
		//_buttonEvolve.style.opacity = 1;
		_buttonLvl.style.pointerEvents = "all";
		_buttonEvolve.style.pointerEvents = "all";
		_buttonEvolve.style.cursor = "pointer";
		for (let i=0; i<5; i++) {
			//_templeRowElements[i+1][4].style.opacity = 1;
			_templeRowElements[i+1][4].style.pointerEvents = "all";
			_templeRowElements[i+1][4].style.cursor = "pointer";
		}
	}

	(actualTempleTab==0) ? showPenguinTemple(actualPenguin.id) : showPassiveTemple(actualPenguin.id);
}

function showPenguinTemple(id) {
	if (!penguinArray[id].own) return;
	_templeUpgradePenguinText.innerHTML = `${text.temple.upPenText[leng]} ${penguinArray[id].name[leng]}`;
	_templeUpgradePassiveText.innerHTML = `${text.temple.upPasText[leng]} ${penguinArray[id].passive.name[leng]}`
	_templeScene.appendChild(_templeContainerArray[0]);
	showLvlUp();
	showEvolve();
}

function showLvlUp() {
	_templeLvlElements[1][0].innerHTML = `${actualPenguin.lvl} ➔ ${actualPenguin.lvl+1}`;
	_templeLvlElements[1][1].innerHTML = `${Math.floor(actualPenguin.pow[0])} ➔ ${Math.floor(actualPenguin.pow[0] + actualPenguin.scale.lvl[0])}`;
	_templeLvlElements[1][2].innerHTML = `${Math.floor(actualPenguin.hp[1])} ➔ ${Math.floor(actualPenguin.hp[1] + actualPenguin.scale.lvl[1])}`;
	_templeLvlElements[1][3].innerHTML = `${Math.floor(actualPenguin.fatigue[1])} ➔ ${Math.floor(actualPenguin.fatigue[1] + actualPenguin.scale.lvl[2])}`;
	_templeLvlElements[1][4].innerHTML = `${actualPenguin.scale.lvl[3]}g`
}

function showEvolve() {
	if (actualPenguin.star!=5) {
		_templeEvolveElements[1][0].innerHTML = starEvolve();
		_templeEvolveElements[1][1].innerHTML = `${actualPenguin.spd[1]/10}s ➔ ${(actualPenguin.spd[1] + actualPenguin.scale.evolve[0])/10}s`;
		_templeEvolveElements[1][2].innerHTML = `${Math.floor(actualPenguin.hp[1])} ➔ ${Math.floor(actualPenguin.hp[1] + actualPenguin.scale.evolve[1])}`;
		_templeEvolveElements[1][3].innerHTML = `${Math.floor(actualPenguin.fatigue[1])} ➔ ${Math.floor(actualPenguin.fatigue[1] + actualPenguin.scale.evolve[2])}`;
		_templeEvolveElements[1][4].innerHTML =  `${actualPenguin.scale.evolve[3]}❄`;
		_buttonEvolve.innerHTML = text.temple.evolve[leng];
		//_buttonEvolve.style.pointerEvents = "revert-layer";
		//_buttonEvolve.style.cursor = "revert-layer";
		//_buttonEvolve.style.opacity = "revert-layer";
	} else {
		_templeEvolveElements[1][0].innerHTML = `★★★★★`;
		_templeEvolveElements[1][1].innerHTML = `${actualPenguin.spd[1]/10}s`;
		_templeEvolveElements[1][2].innerHTML = `${Math.floor(actualPenguin.hp[1])}`;
		_templeEvolveElements[1][3].innerHTML = `${Math.floor(actualPenguin.fatigue[1])}`;
		_templeEvolveElements[1][4].innerHTML =  `-`;
		_buttonEvolve.innerHTML = "MAX";
		_buttonEvolve.style.pointerEvents = "none";
		_buttonEvolve.style.cursor = "default";
		//_buttonEvolve.style.opacity = "0.7";
	}
}

function starEvolve() {
	if (actualPenguin.star==1) return `★ ➔ ★★`;
	else if (actualPenguin.star==2) return `★★ ➔ ★★★`;
	else if (actualPenguin.star==3) return `★★★ ➔ ★★★★`;
	return `★★★★ ➔ ★★★★★`;
}

_buttonLvl.addEventListener('click',()=>{
	if (actualPenguin.inRoster) return;
	if (gold>=actualPenguin.scale.lvl[3]) {
		changeGold(-actualPenguin.scale.lvl[3])
		lvlUp(actualPenguin);
	}
})

const lvlUp = (p) => {
	p.scale.lvl[3] = Math.floor(p.scale.lvl[3]*1.15);
	p.lvl++;
	p.pow[0] += p.scale.lvl[0];
	p.hp[1] += p.scale.lvl[1];
	p.hp[0] += p.scale.lvl[1];
	p.fatigue[1] += p.scale.lvl[2];
	if (p==actualPenguin) displayPenguin(p);
	if (p.lvl == 50) achievement[6].progress++;
	else if (p.lvl == 100) achievement[7].progress++;
	else if (p.lvl == 250) achievement[8].progress++;
	else if (p.lvl == 1000) achievement[9].progress++;
}

_buttonEvolve.addEventListener('click',()=>{
	if (actualPenguin.inRoster) return;
	if (gems>=actualPenguin.scale.evolve[3] && actualPenguin.star<5) {
		changeGems(-actualPenguin.scale.evolve[3]);
		actualPenguin.img = penguinSprites[actualPenguin.id][actualPenguin.star];
		actualPenguin.scale.evolve[3] = Math.floor(actualPenguin.scale.evolve[3]*3.5);
		actualPenguin.star++;
		actualPenguin.spd[1] += actualPenguin.scale.evolve[0];
		actualPenguin.hp[1] += actualPenguin.scale.evolve[1];
		actualPenguin.hp[0] += actualPenguin.scale.evolve[1];
		actualPenguin.fatigue[1] += actualPenguin.scale.evolve[2];
		displayPenguin(actualPenguin);
		/*actualPenguin.passive.req.forEach((r)=>{
			r[actualPenguin.star-1]+=r[actualPenguin.star-2];
			r[actualPenguin.star-2]=0;
		})*/
		if (actualPenguin.star == 2) achievement[10].progress++;
		else if (actualPenguin.star == 3) achievement[11].progress++;
		else if (actualPenguin.star == 4) achievement[12].progress++;
		else if (actualPenguin.star == 5) achievement[13].progress++;
	}
})

function showPassiveTemple(id) {
	if (!penguinArray[id].own) return;
	_templeScene.appendChild(_templeContainerArray[1]);
	passiveSelectedId = id;
	passiveDescriptionUpdate(id);
	for (let i=0; i<5; i++) {
		if (i<penguinArray[id].passive.scale.length) {
			colorCondition(id,i);
			_templeRowElements[i+1][0].innerHTML = penguinArray[id].passive.attributeText[leng][i];
			_templeRowElements[i+1][1].innerHTML = textCondition(i);
			_templeRowElements[i+1][2].innerHTML = priceCondition(i);
			_templeRowElements[i+1][3].innerHTML = starCondition(i);
			_templeRowElements[i+1][4].innerHTML = buyCondition(i);
			//_templeRowElements[i+1][4].style.pointerEvents = "all";
		} else {
			_templeRowElements[i+1][0].innerHTML = "";
			_templeRowElements[i+1][1].innerHTML = "";
			_templeRowElements[i+1][2].innerHTML = "";
			_templeRowElements[i+1][3].innerHTML = "";
			_templeRowElements[i+1][4].innerHTML = "";
			_templeRowElements[i+1][4].style.pointerEvents = "none";
		}
	}
}

function starCondition(i) {
	let p = actualPenguin.passive;
	if (p.req[i][0]!=0) return "★☆☆☆☆";
	if (p.req[i][1]!=0) return  "★★☆☆☆";
	if (p.req[i][2]!=0) return "★★★☆☆";
	if (p.req[i][3]!=0) return  "★★★★☆";
	if (p.req[i][4]!=0) return "★★★★★";
	return  "-";	
}

function textCondition(i) {
	if (actualPenguin.passive.req[i][4]!=0) return `${Math.round(actualPenguin.passive.value[i]*100)/100} ➔ 
													${Math.round((actualPenguin.passive.value[i]+actualPenguin.passive.scale[i])*100)/100}`;
	return `${Math.round(actualPenguin.passive.value[i]*100)/100}`;
}

function priceCondition(i) {
	if (actualPenguin.passive.req[i][4]!=0) return `${actualPenguin.passive.price[i][0]}`
	return  "-";		
}

function buyCondition(i) {
	if (actualPenguin.passive.req[i][4]!=0) return `${text.temple.buy[leng]}`
	return  "MAX";	
}

function colorCondition(id,i) {
	if(penguinArray[id].passive.req[i][penguinArray[id].star-1]==0) {
		for (let j=0;j<5;j++) {
			_templeRowElements[i+1][j].style.color = "#AD343E";
		}
		_templeRowElements[i+1][4].style.pointerEvents = "none";
		//_templeRowElements[i+1][4].style.cursor = "default";
	} else {
		for (let j=0;j<5;j++) {
			_templeRowElements[i+1][j].style.color = "revert-layer";
		}
		//_templeRowElements[i+1][4].style.pointerEvents = "all";
		//_templeRowElements[i+1][4].style.cursor = "pointer";
	}
}

_templeRowElements[1][4].addEventListener('click', ()=>upgradeValue(0));
_templeRowElements[2][4].addEventListener('click', ()=>upgradeValue(1));
_templeRowElements[3][4].addEventListener('click', ()=>upgradeValue(2));
_templeRowElements[4][4].addEventListener('click', ()=>upgradeValue(3));
_templeRowElements[5][4].addEventListener('click', ()=>upgradeValue(4));