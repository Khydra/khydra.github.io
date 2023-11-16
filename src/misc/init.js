//if new game
dpc = [5,0];
zone = 1;
room = 1;
gold = 5000;
cookies = 17;
gems = 52;
activeBattle = false 
labName = "Laboratory R0-D1"

potionHealth = {
	units: [1,1],
	recover: 5,
	cd: [120,120]
};

potionFatigue = {
	units: [1,1],
	recover: 5,
	cd: [120,120]
};

if (window.localStorage.getItem("dataSaved")=="true") {
	labName = JSON.parse(window.localStorage.getItem("labName"));
	dpc = JSON.parse(window.localStorage.getItem("dpc"));
	gold = JSON.parse(window.localStorage.getItem("gold"));
	cookies = JSON.parse(window.localStorage.getItem("cookies"));
	gems = JSON.parse(window.localStorage.getItem("gems"));
	activeBattle = JSON.parse(window.localStorage.getItem("activeBattle"));
	leng = JSON.parse(window.localStorage.getItem("leng"));
	zone = JSON.parse(window.localStorage.getItem("zone"));
	room = JSON.parse(window.localStorage.getItem("room"));
	types = JSON.parse(window.localStorage.getItem("types"));

	enemy = JSON.parse(window.localStorage.getItem("enemy"));

	penguin = JSON.parse(window.localStorage.getItem("penguin"));
	roster = JSON.parse(window.localStorage.getItem("roster"));
	//penguinNotOwnArray = JSON.parse(window.localStorage.getItem("penguinNotOwnArray"));
	//penguinOwnArray = JSON.parse(window.localStorage.getItem("penguinOwnArray"));

	igluUpgrades = JSON.parse(window.localStorage.getItem("igluUpgrades"));

	hospitalPenguins = JSON.parse(window.localStorage.getItem("hospitalPenguins"));
	saunaPenguins = JSON.parse(window.localStorage.getItem("saunaPenguins"));
	minePenguins = JSON.parse(window.localStorage.getItem("minePenguins"));

	eggs = JSON.parse(window.localStorage.getItem("eggs"));
	actualUnlocks = JSON.parse(window.localStorage.getItem("actualUnlocks"));
	monsterUnlocks = JSON.parse(window.localStorage.getItem("monsterUnlocks"));

	potionFatigue = JSON.parse(window.localStorage.getItem("potionFatigue"));
	potionHealth = JSON.parse(window.localStorage.getItem("potionHealth"));

	achievement = JSON.parse(window.localStorage.getItem("achievement"));
	stadistics = JSON.parse(window.localStorage.getItem("stadistics"));
	passiveStadistics = JSON.parse(window.localStorage.getItem("passiveStadistics"));

	volumeSound = JSON.parse(window.localStorage.getItem("volumeSound"));
	musicSound = JSON.parse(window.localStorage.getItem("musicSound"));

	autosave = JSON.parse(window.localStorage.getItem("autosave"));
	lastSaveDate = JSON.parse(window.localStorage.getItem("lastSaveDate"));
}

updateOwnPenguinImage();
actualPenguin = penguin[0];

mouseOverEnemy = false;
_labName.innerHTML = labName;
var potions = [potionHealth, potionFatigue];
displayEnemy();

//if load data

changeLenguage(leng); 
changeTab(3);

//always
displayPenguin(actualPenguin);

_gold.innerHTML = `$${convert(gold)}`;
_gems.innerHTML = `🧊${gems}`;
_cookies.innerHTML = `🍪${cookies}`;

_potionHealthUnits.innerHTML = potionHealth.units[0];
_potionFatigueUnits.innerHTML = potionFatigue.units[0];

if (monsterUnlocks[0].unlocked) _penguinInfoBot.appendChild(_pauseButton);
if (monsterUnlocks[22].unlocked) _contentLeft.appendChild(_potionHealth);
if (monsterUnlocks[27].unlocked) _contentLeft.appendChild(_potionFatigue);
if (monsterUnlocks[20].unlocked) _buildingArray[0].appendChild(_hospitalAutoButton);
if (monsterUnlocks[21].unlocked) _buildingArray[1].appendChild(_saunaAutoButton);

setVolume(0,musicSound, true);
setVolume(1,volumeSound, true);

function saveLocalInfo() {
	window.localStorage.setItem("dataSaved", true);
	window.localStorage.setItem("labName", JSON.stringify(labName));
	window.localStorage.setItem("dpc", JSON.stringify(dpc));
	window.localStorage.setItem("gold", JSON.stringify(gold));
	window.localStorage.setItem("cookies", JSON.stringify(cookies));
	window.localStorage.setItem("gems", JSON.stringify(gems));
	window.localStorage.setItem("activeBattle", JSON.stringify(activeBattle));
	window.localStorage.setItem("leng", JSON.stringify(leng));
	window.localStorage.setItem("zone", JSON.stringify(zone));
	window.localStorage.setItem("room", JSON.stringify(room));

	window.localStorage.setItem("types", JSON.stringify(types));

	window.localStorage.setItem("penguinNotOwnArray", JSON.stringify(penguinNotOwnArray));
	window.localStorage.setItem("penguinOwnArray", JSON.stringify(penguinOwnArray));

	window.localStorage.setItem("enemy", JSON.stringify(enemy));

	window.localStorage.setItem("penguin", JSON.stringify(penguin));
	window.localStorage.setItem("roster", JSON.stringify(roster));
	
	window.localStorage.setItem("igluUpgrades", JSON.stringify(igluUpgrades));
	window.localStorage.setItem("hospitalPenguins", JSON.stringify(hospitalPenguins));
	window.localStorage.setItem("saunaPenguins", JSON.stringify(saunaPenguins));
	window.localStorage.setItem("minePenguins", JSON.stringify(minePenguins));

	window.localStorage.setItem("eggs", JSON.stringify(eggs));
	window.localStorage.setItem("actualUnlocks", JSON.stringify(actualUnlocks));
	window.localStorage.setItem("monsterUnlocks", JSON.stringify(monsterUnlocks));

	window.localStorage.setItem("potionFatigue", JSON.stringify(potionFatigue));
	window.localStorage.setItem("potionHealth", JSON.stringify(potionHealth));

	window.localStorage.setItem("achievement", JSON.stringify(achievement));
	window.localStorage.setItem("stadistics", JSON.stringify(stadistics));
	window.localStorage.setItem("passiveStadistics", JSON.stringify(passiveStadistics));

	window.localStorage.setItem("musicSound", JSON.stringify(musicSound));
	window.localStorage.setItem("volumeSound", JSON.stringify(volumeSound));

	window.localStorage.setItem("autosave", JSON.stringify(autosave));
	window.localStorage.setItem("lastSaveDate", JSON.stringify(lastSaveDate));
}

activeBattle = false;
penguinArray = [
	penguin[0],penguin[1],penguin[2],penguin[3],penguin[4],penguin[5],penguin[6],penguin[7],penguin[8],penguin[9],
	penguin[10],penguin[11],penguin[12],penguin[13],penguin[14],penguin[15],penguin[16],penguin[17],penguin[18],penguin[19],
	penguin[20],penguin[21],penguin[22],penguin[23],penguin[24]
];

penguinArray.forEach((p)=>{
	(p.own) ? penguinOwnArray.push(p) : penguinNotOwnArray.push(p);
})

//cargar roster
for (let i=0;i<roster.length;i++) {
	if (roster[i] != null) {
		roster[i] = penguin[roster[i].id];
		p = roster[i];

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
	}
}

//cargar imagenes si te has dejado bichos en el hospital etc
hospitalPenguins.forEach((p,index)=> {
	if (p!=null) {
		let elementImg = document.createElement('img');
		elementImg.src = p.img;
		hospitalPenguins[index] = penguin[p.id];
		_buildingSlotArray[0][index].appendChild(elementImg);
	}
});

saunaPenguins.forEach((p,index)=> {
	if (p!=null) {
		let elementImg = document.createElement('img');
		elementImg.src = p.img;
		saunaPenguins[index] = penguin[p.id];
		_buildingSlotArray[1][index].appendChild(elementImg);
	}
});

minePenguins.forEach((p,index)=> {
	if (p!=null) {
		let elementImg = document.createElement('img');
		elementImg.src = p.img;
		minePenguins[index] = penguin[p.id];
		_buildingSlotArray[2][index].appendChild(elementImg);
	}
});