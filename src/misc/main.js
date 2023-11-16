var dpc;
var gold;
var cookies;
var gems;
var activeBattle;
var actualPenguin;
var mouseOverEnemy;
var zone;
var room;

const render = setInterval(()=>{
	if (activeBattle) {
		rosterChargeBar();
		chargeEnemy();
		if (enemy.status[0]!=null) {
			let heal = ((enemy.hp[1]/400).toFixed(1))/10;
			healEnemy(heal);
		}
		if (mouseOverEnemy && penguin[17].inRoster) usePassive(penguin[17]);
	}
	hospitalHealing();
	saunaHealing();
}, 100); 

const tabsRender = setInterval(()=>{
	if (inJournal && actualJournalTab==0) return generateAchievements();
	else if (inJournal && actualJournalTab==1) return generateStadistics();
}, 1000); 

const secondRender = setInterval(()=>{
	mining();
	if (activeBattle) {
		if (enemy.status[9]!=null) enemyPoison();
		roster.forEach((p)=>{
			if (p!=null && (p.type[0].id==3 || p.type[1].id==3)) {
				let h = (p.hp[1]/100)*types[3].bonus[types[3].lvl]
				healthChangePenguin(p,h,null,false);
			}
		})
	}
	if (monsterUnlocks[22].unlocked) cdPotionDown(0);
	if (monsterUnlocks[27].unlocked) cdPotionDown(1);
	
}, 1000); 

const cdPotionDown = (i) => {
	if (potions[i].units[0]<potions[i].units[1]) {
		(i==0) ? _potionHealthOverContainer.innerHTML = potionTextUpdate(0) : _potionFatigueOverContainer.innerHTML = potionTextUpdate(1);
		potions[i].cd[0]-=1;
		if (potions[i].cd[0] == 0) {
			potions[i].cd[0] = potions[i].cd[1];
			potions[i].units[0] +=1;
			(i==0) ? _potionHealthUnits.innerHTML = potions[i].units[0] : _potionFatigueUnits.innerHTML = potionFatigue.units[0];	
		}
	}
}

function changeGold(q) {
	if (q>0){
		stadistics.goldTotal+=q;
		achievement[2].progress+=q;
	} else {
		stadistics.goldWasted-=q;
		achievement[3].progress-=q;
	} 
	gold+=q;
	_gold.innerHTML = `$${convert(gold)}`;

};

function changeGems(q) {
	gems+=q;
	_gems.innerHTML = `❄️${gems}`;
};

function changeCookies(q) {
	cookies+=q;
	_cookies.innerHTML = `🍪${cookies}`;
};


//TABS
var inTemple = false;
var inIglu = false;
var inJournal = false;
var inHatchery = false;
_tabContainer.addEventListener('mousedown',(e)=>{
	tabSound();
	changeTab(e.target.id.slice(3))
})

const tabsFunctions = [displayIglu,displayHatchery,displayTemple,displayJournal];

function changeTab(tab) { 
	inTemple = false;
	inIglu = false;
    inJournal = false;
    inHatchery = false;
	_tabArray.forEach((t, index)=>{(tab==index) ? t.className = "tab tab-selected" : t.className = "tab"})
	if (_subSceneContent.hasChildNodes()) _subSceneContent.removeChild(_subSceneContent.firstChild);
	tabsFunctions[tab]();
}

//STATUS ENEMIGO
_statusIconArray.forEach((e)=>{
	e.addEventListener('mouseover', ()=>{
		let n = e.id.slice(11);
		_statusInfo.innerHTML = iconsDescriptions[n][leng];
		_mainScene.appendChild(_statusInfo);
	});
	e.addEventListener('mouseout', ()=>{
		_mainScene.removeChild(_statusInfo);
	})
})

//values
function convert(n) {
    if (n < 1e5) return Math.floor(n);
    if (n >= 1e5 && n < 1e6)  return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12)  return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
 
let pause = false;
_pauseButton.addEventListener('click', ()=>{
	if (!pause) {
 		pause = true;
 		activeBattle = false;
 		_mainScene.style.filter = "grayscale(90%)"
	} else {
		pause = false;
		activeBattle = true;
		_mainScene.style.filter = "revert-layer"
	}
})

var potionHealth;
var potionFatigue;

/*
const potionHealth = {
	units: [1,1],
	recover: 5,
	cd: [120,120]
}

const potionFatigue = {
	units: [1,1],
	recover: 5,
	cd: [120,120]
}
*/

_potionHealth.addEventListener('click',()=>{
	if (potionHealth.units[0] > 0) {
		roster.forEach((p)=>{
			if (p!=null) {
				if (p.type[0].id == 12 || p.type[1].id == 12) healthChangePenguin(p, (potionHealth.recover*2), index);
				else healthChangePenguin(p, potionHealth.recover);
			}
		});
		if (potionHealth.units[0]==0) potionHealth.cd[0] = potionHealth.cd[1];
		potionHealth.units[0]-=1;
		stadistics.potionsUsed++;	
		_potionHealthUnits.innerHTML = potionHealth.units[0];
		_potionHealthOverContainer.innerHTML = potionTextUpdate(0);
	}
})

_potionHealth.addEventListener('mouseover',()=>{
	_contentCenter.appendChild(_potionHealthOverContainer);
	_potionHealthOverContainer.innerHTML = potionTextUpdate(0);
})

_potionHealth.addEventListener('mouseout',()=>{
	_contentCenter.removeChild(_potionHealthOverContainer);				
})

_potionFatigue.addEventListener('click',()=>{
	if (potionFatigue.units[0] > 0) {
		roster.forEach((p)=>{
			if (p!=null) {
				if (p.type[0].id == 12 || p.type[1].id == 12) fatigueChangePenguin(p,-potionFatigue.recover*2);
				else fatigueChangePenguin(p,-potionFatigue.recover);	
			}
		});
		if (potionFatigue.units[0]==0) potionFatigue.cd[0] = potionFatigue.cd[1];
		potionFatigue.units[0]-=1;
		stadistics.potionsUsed++;
		_potionFatigueUnits.innerHTML = potionFatigue.units[0];
		_potionFatigueOverContainer.innerHTML = potionTextUpdate(1);
	}
})

_potionFatigue.addEventListener('mouseover',()=>{
	_contentCenter.appendChild(_potionFatigueOverContainer);
	_potionFatigueOverContainer.innerHTML = potionTextUpdate(1);
	
})

_potionFatigue.addEventListener('mouseout',()=>{
	_contentCenter.removeChild(_potionFatigueOverContainer);				
})

function potionTextUpdate(t) {
	if (t==0) {
		if (leng==0) {

		} else if (leng==1) {
			return `
				<span class="yellow">Poción de vida:</span> Regenera <span class="hp"> ${potionHealth.recover} salud</span> a los pingüinos en combate.
				<br><span class="yellow">Pociones</span> en reserva: <span class="pow">${potionHealth.units[0]}/${potionHealth.units[1]}</span>.
				<br>Próxima <span class="yellow">poción</span> en: <span class="spd">${potionHealth.cd[0]}s</span>.
			`
		}
	} 
	else {
		if (leng==0) {

		} else if (leng==1) {
			return  `
				<span class="yellow">Poción de fatiga:</span> Reduce <span class="fat"> ${potionFatigue.recover} fatiga</span> a los pingüinos en combate.
				<br><span class="yellow">Pociones</span> en reserva: <span class="pow">${potionFatigue.units[0]}/${potionFatigue.units[1]}</span>.
				<br>Próxima <span class="yellow">poción</span> en: <span class="spd">${potionFatigue.cd[0]}s</span>.
			`
		}
	}
}

//glass

_mainScene.addEventListener('mouseenter',()=>{
	_battleGlass.style.top = "-280px"
})

_mainScene.addEventListener('mouseleave',()=>{
	_battleGlass.style.top = "revert-layer"
})

_labName.addEventListener('click',()=>{
	_screen.appendChild(_blackBg);
	_blackBg.appendChild(_changeNameWindow);
	_changeNameWindowLabel.innerHTML = text.unlocks.labName[leng];
	_changeNameWindowButton.innerHTML = text.unlocks.accept[leng];
	_changeNameWindowInput.placeholder = labName;
})

_changeNameWindowButton.addEventListener('click', ()=>{
	_blackBg.removeChild(_changeNameWindow);
	_screen.removeChild(_blackBg);
	if (_changeNameWindowInput.value.trim() != "") {
		labName = _changeNameWindowInput.value;
		_labName.innerHTML = labName;
	} 

})