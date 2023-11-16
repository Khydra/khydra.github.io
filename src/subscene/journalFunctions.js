function displayJournal(){
	_subSceneContent.appendChild(_journalScene);
	inJournal = true;
	updateJournal();
}

function updateJournal() {
	if (actualJournalTab==0) return showOptions();
	else if (actualJournalTab==1) return showStadistics();
	else return showAchievements();
}

function showAchievements() {
	_journalScene.appendChild(_journalContainerArray[0]);
	generateAchievements();
}

function generateAchievements() {
	for (let i=0; i<44; i++) {
		achievementDescriptionUpdate(i);
		if(achievement[i].mission<7) {
			_journalNameArray[i].innerHTML = `${achievement[i].name[leng]} (${achievement[i].mission+1})`;
			_journalDescriptionArray[i].innerHTML = achievement[i].description[leng];
			_journalActualArray[i].innerHTML = `Actual: ${Math.floor(achievement[i].progress)}`;
			_journalButtonArray[i].innerHTML = `${text.journal.obtain[leng]} ${achievement[i].reward[achievement[i].mission]}❄`;
		} else {
			_journalNameArray[i].innerHTML = `${achievement[i].name[leng]}`;
			_journalDescriptionArray[i].innerHTML = achievement[i].description[leng];
			_journalButtonArray[i].innerHTML = `${text.journal.completed[leng]}`;
			_journalActualArray[i].innerHTML= `Actual: ${text.journal.completed[leng]}`;
			_journalButtonArray[i].style.pointerEvents = "none";
			_journalButtonArray[i].style.backgroundColor = "#cc1555"
			_achievementContainerArray[i].style.background = "rgb(0,0,0,0.6)";
		}
	}
}

function showStadistics() {
	_journalScene.appendChild(_journalContainerArray[1]);
	generateStadistics();
}

function showOptions() {
	_journalScene.appendChild(_journalContainerArray[2]);
}

function achievementDescriptionUpdate(id) {
	if (achievement[id].mission==7) return;
	switch (id) {
	  	case 0: achievement[0].description = [
			``,
			`
			Haz click sobre el enemigo ${achievement[0].todo[achievement[0].mission]} veces.`];
	   		break;
	   	case 1: achievement[1].description = [
			``,
			`
			Haz ${achievement[1].todo[achievement[1].mission]} de daño click.`];
	   		break;
	   	case 2: achievement[2].description = [
			``,
			`
			Consigue un total de ${achievement[2].todo[achievement[2].mission]} g.`];
	   		break;
	   	case 3: achievement[3].description = [
			``,
			`
			Gasta un total de ${achievement[3].todo[achievement[3].mission]} g.`];
	   		break;
	   	case 4: achievement[4].description = [
			``,
			`
			Acaba con ${achievement[4].todo[achievement[4].mission]} enemigos.`];
	   		break;
	   	case 5: achievement[5].description = [
			``,
			`
			Consigue ${achievement[5].todo[achievement[5].mission]} pingüinos.`];
	   		break;
	   	case 6: achievement[6].description = [
			``,
			`
			Consigue ${achievement[6].todo[achievement[6].mission]} pingüinos nivel 50.`];
	   		break;
	   	case 7: achievement[7].description = [
			``,
			`
			Consigue ${achievement[7].todo[achievement[7].mission]} pingüinos nivel 100.`];
	   		break;
	   	case 8: achievement[8].description = [
			``,
			`
			Consigue ${achievement[8].todo[achievement[8].mission]} pingüinos nivel 250.`];
	   		break;
	   	case 9: achievement[9].description = [
			``,
			`
			Consigue ${achievement[9].todo[achievement[9].mission]} pingüinos nivel 1000.`];
	   		break;
	   	case 10: achievement[10].description = [
			``,
			`
			Consigue ${achievement[10].todo[achievement[10].mission]} pingüinos 2 estrellas.`];
	   		break;
	   	case 11: achievement[11].description = [
			``,
			`
			Consigue ${achievement[11].todo[achievement[11].mission]} pingüinos 3 estrellas.`];
	   		break;
	   	case 12: achievement[12].description = [
			``,
			`
			Consigue ${achievement[12].todo[achievement[12].mission]} pingüinos 4 estrellas.`];
	   		break;
	   	case 13: achievement[13].description = [
			``,
			`
			Consigue ${achievement[13].todo[achievement[13].mission]} pingüinos 5 estrellas.`];
	   		break;
	   	case 14: achievement[14].description = [
			``,
			`
			Debilita a ${achievement[14].todo[achievement[14].mission]} pingüinos.`];
	   		break;
	   	case 15: achievement[15].description = [
			``,
			`
			Cansa a ${achievement[15].todo[achievement[15].mission]} pingüinos.`];
	   		break;
	   	case 16: achievement[16].description = [
			``,
			`
			Restaura ${achievement[16].todo[achievement[16].mission]} vida en el Hospital.`];
	   		break;
	   	case 17: achievement[17].description = [
			``,
			`
			Restaura ${achievement[17].todo[achievement[17].mission]} fatiga en la sauna.`];
	   		break;
	   	case 18: achievement[18].description = [
			``,
			`
			Consigue ${achievement[18].todo[achievement[18].mission]} oro en la mina.`];
	   		break;
	   	case 19: achievement[19].description = [
			``,
			`
			Obtén ${achievement[19].todo[achievement[19].mission]} recompensas.`];
	   		break;
	   	case 20: achievement[20].description = [
			``,
			`
			Restaura ${achievement[20].todo[achievement[20].mission]} fatiga con RESILIENCIA.`];
	   		break;
	   	case 21: achievement[21].description = [
			``,
			`
			Cura ${achievement[21].todo[achievement[21].mission]} salud con SALVAVIDAS.`];
	   		break;
	   	case 22: achievement[22].description = [
			``,
			`
			Daña ${achievement[22].todo[achievement[22].mission]} con QUITAR CORTEZA.`];
	   		break;
	   	case 23: achievement[23].description = [
			``,
			`
			Acumula ${achievement[23].todo[achievement[23].mission]} poder con ABONO FERTIL.`];
	   		break;
	   	case 24: achievement[24].description = [
			``,
			`
			Apoya a ${achievement[24].todo[achievement[24].mission]} pingüinos con PUCHERO.`];
	   		break;
	   	case 25: achievement[25].description = [
			``,
			`
			Apoya a ${achievement[25].todo[achievement[25].mission]} pingÚinos con PUCHERO.`];
	   		break;
	   	case 26: achievement[26].description = [
			``,
			`
			Acumula ${achievement[26].todo[achievement[26].mission]} poder con ACUMULAR KI.`];
	   		break;
	   	case 27: achievement[27].description = [
			``,
			`
			Ataca ${achievement[27].todo[achievement[27].mission]} veces con GENP.`];
	   		break;
	   	case 28: achievement[28].description = [
			``,
			`
			Ataca ${achievement[28].todo[achievement[28].mission]} veces con ONIU.`];
	   		break;
	   	case 29: achievement[29].description = [
			``,
			`
			Acumula ${achievement[29].todo[achievement[29].mission]} vida con SACRIFICIO.`];
	   		break;
	   	case 30: achievement[30].description = [
			``,
			`
			Rompe ${achievement[30].todo[achievement[30].mission]} marcas de MARCAJE MÁGICO.`];
	   		break;
	   	case 31: achievement[31].description = [
			``,
			`
			Aprovecha a ${achievement[31].todo[achievement[31].mission]} mineros con GÜINORÁN.`];
	   		break;
	   	case 32: achievement[32].description = [
			``,
			`
			Activa ${achievement[32].todo[achievement[32].mission]} veces T. CARMESÍ.`];
	   		break;
	   	case 33: achievement[33].description = [
			``,
			`
			Activa ${achievement[33].todo[achievement[33].mission]} veces T. LIMA.`];
	   		break;
	   	case 34: achievement[34].description = [
			``,
			`
			Activa ${achievement[34].todo[achievement[34].mission]} veces T. COBALTO.`];
	   		break;
	   	case 35: achievement[35].description = [
			``,
			`
			Activa ${achievement[35].todo[achievement[35].mission]} veces T. ÁMBAR.`];
	   		break;
	   	case 36: achievement[36].description = [
			``,
			`
			Causa ${achievement[36].todo[achievement[36].mission]} daño con RIPOSTE LASER.`];
	   		break;
	   	case 37: achievement[37].description = [
			``,
			`
			Causa ${achievement[37].todo[achievement[37].mission]} daño con IGNICIÓN.`];
	   		break;
	   	case 38: achievement[38].description = [
			``,
			`
			Acumula ${achievement[38].todo[achievement[38].mission]} cargas de RAYO MORTAL.`];
	   		break;
	   	case 39: achievement[39].description = [
			``,
			`
			Causa ${achievement[39].todo[achievement[39].mission]} daño con ESTACIÓN TOMATE.`];
	   		break;
	   	case 40: achievement[40].description = [
			``,
			`
			Restaura ${achievement[40].todo[achievement[40].mission]} fatiga con ESTACIÓN CHAMPIÑÓN.`];
	   		break;
	   	case 41: achievement[41].description = [
			``,
			`
			Cura ${achievement[41].todo[achievement[41].mission]} salud con ESTACIÓN MOZARELLA.`];
	   		break;
	   	case 42: achievement[42].description = [
			``,
			`
			Acumula ${achievement[42].todo[achievement[42].mission]} poder con ESTACIÓN ALBAHACA.`];
	   		break;
	   	case 43: achievement[43].description = [
			``,
			`
			Golpea a ${achievement[43].todo[achievement[43].mission]} pingüinos con TARTA BOMBA.`];
	   		break;
	   	case 44: achievement[44].description = [
			``,
			`
			Muere ${achievement[44].todo[achievement[44].mission]} veces usando AUREOLA.`];
	   		break;
	}
}

function generateStadistics() {
	let gen = [
		``,
		`Clicks: ${stadistics.clicks}
		<br>Daño click: ${stadistics.clickDmg}
		<br>Oro obtenido: ${Math.floor(stadistics.goldTotal)}
		<br>Oro gastado: ${stadistics.goldWasted}
		<br>Enemigos derrotados: ${stadistics.enemiesKilled}
		<br>Jefes derrotados: ${stadistics.bossesKilled}
		<br>Pinguinos en propiedad: ${penguinOwnArray.length}/40
		<br>Nivel máximo pingüino: ${stadistics.maxLevel}
		<br>Nivel total pingüinos: ${stadistics.totalLevel}
		<br>Pingüinos muertos: ${stadistics.deads}
		<br>Pingüinos fatigados: ${stadistics.fatigated}
		<br>Pociones utilizadas: ${stadistics.potionsUsed}
		<br>Vida restaurada en el hospital: ${Math.floor(stadistics.hospitalRestored)}
		<br>Fatiga restaurada en la sauna: ${Math.floor(stadistics.suanaRestored)}
		<br>Oro obtenido en la mina: ${Math.floor(stadistics.goldMine)}
		<br>Logros: ${stadistics.achievements}/308`
	];
	_stadisticsGeneral.innerHTML = gen[leng];

	_stadisticsPenguinTittle.innerHTML = actualPenguin.name[leng];
	let pen = [
		`Hits: ${actualPenguin.stats[0]}
		<br> Damage dealt: ${actualPenguin.stats[1]}
		<br> Health lost: ${actualPenguin.stats[2]}
		<br> Times dead: ${actualPenguin.stats[3]}
		<br> Times exhausted: ${actualPenguin.stats[4]}
		<br> Gold invested: ${actualPenguin.stats[5]}`,
		`Golpes realizados: ${actualPenguin.stats[0]}
		<br> Daño causado: ${actualPenguin.stats[1]}
		<br> Vida perdida: ${actualPenguin.stats[2]}
		<br> Veces muerto: ${actualPenguin.stats[3]}
		<br> Veces cansado: ${actualPenguin.stats[4]}
		<br> Oro invertido: ${actualPenguin.stats[5]}
	`
	]
	_stadisticsPenguin.innerHTML = pen[leng];

	_stadisticsPassiveTittle.innerHTML = actualPenguin.passive.name[leng];
	_stadisticsPassive.innerHTML="";
	for (let i=0;i<passiveStadistics[actualPenguin.id].value.length; i++) {
		_stadisticsPassive.innerHTML += `${passiveStadistics[actualPenguin.id].text[leng][i]}: ${passiveStadistics[actualPenguin.id].value[i]}<br>`
	}
}

function claimReward(id) {
	if (achievement[id].mission==7) return;
	if (achievement[id].progress>=achievement[id].todo[achievement[id].mission]) {
		stadistics.achievements++;
		changeGems(achievement[id].reward[achievement[id].mission]);
		achievement[id].mission++;
		achievementDescriptionUpdate(id);
		generateAchievements();
	}	
}

//OPTIONS

_lenguage.addEventListener('click', ()=>{
	button0Sound();
	leng++;
	if (leng==2) leng = 0;
	changeLenguage();
	displayPenguin(actualPenguin);
})

_save.addEventListener('click', saveGame);

function saveGame(){
	console.log("saved");
	lastSaveDate = new Date().toJSON();
	_lastSave.innerHTML = `${text.journal.lastSave[leng]}: ${lastSaveDate.slice(0, 10)} ${lastSaveDate.slice(11, 19)}`;
	saveLocalInfo();
}

_autosave.addEventListener('click', ()=>{
	button0Sound();
	autosave++;
	if (autosave==2) autosave = 0;
	_autosave.innerHTML = `${text.journal.autosave[leng]}: ${autosaveText[autosave][leng]}`;
});

_exitSave.addEventListener('click', ()=>{
	saveGame();
	setTimeout(()=>{ window.close();}, 200);
});

_exit.addEventListener('click', ()=>{
	window.close();
});

_deleteSave.addEventListener('click', ()=>{
	localStorage.clear();
	window.close();
});

_soundBarContainerArray[0].addEventListener('click',(e)=>{
	let value;
	(e.offsetX<150) ? value = Math.floor((e.offsetX/300)*100) : value = Math.ceil((e.offsetX/300)*100);
	setVolume(0,value);
})
_soundBarContainerArray[1].addEventListener('click',(e)=>{
	let value;
	(e.offsetX<150) ? value = Math.floor((e.offsetX/300)*100) : value = Math.ceil((e.offsetX/300)*100);
	setVolume(1,value);
})

function setVolume(control, value, init=false) {
	if (value<0) value=0;
	_soundNumberArray[control].innerHTML = `${value}%`;
	_soundBarActualArray[control].style.width = `${value*3}px`;

	if (control == 0) {
		 musicSound = value
	} else {
		volumeSound = value;
		soundEffects.forEach((sound)=>{sound.volume=volumeSound/100});
		if (!init) button0Sound();
	}
	
}

