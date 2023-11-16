const text = {
	leftContainer: {
		units: ['UNITS', 'UNIDADES'],
		team: ['TEAM', 'GRUPO']
	}, 
	rightContainer: {
		rosterButtonAdd: ['ADD TO TEAM ', 'AÑADIR AL GRUPO'],
		rosterButtonRemove: ['REMOVE FROM TEAM ', 'RETIRAR DEL GRUPO'],
		rosterButtonFull: ['TEAM IS FULL', 'GRUPO LLENO'],
		rosterButtonHospital: ['REMOVE FROM  HOSPITAL ', 'RETIRAR DEL HOPSITAL'],
		rosterButtonSauna: ['REMOVE FROM SAUNA', 'RETIRAR DE LA SAUNA'],
		rosterButtonMine: ['REMOVE FROM MINE', 'RETIRAR DE LA MINA'],
	}, 
	centerContainer: {
		iglu: ['IGLU', 'IGLÚ'],
		hatchery: ['HATCHERY', 'CRIADERO'],
		forge: ['TEMPLE', 'TEMPLO'],
		journal: ['JOURNAL', 'DIARIO'],
		zone: ['Test', 'Test'],
		room: ['Subject', 'Sujeto'],
		immune: [`immune`,`inmune`]
	},
	iglu: {
		buildings: ['BUILDINGS', 'CONSTRUCCIONES'],
		architect: ['ARCHITECT', 'ARQUITECTO'],
		hospital: ['HOSPITAL', 'HOSPITAL'],
		sauna: ['SAUNA', 'SAUNA'],
		mine: ['MINE', 'MINA'],
	},
	hatchery: {
		penguinShop: ['PENGUIN SHOP', 'TIENDA DE PINGÜINOS'],
		monsterShop: ['MONSTER SHOP', 'TIENDA MONSTRUOSA'],
		penguinShopTittle: ['PENGUIN DISPENSER','DISPENSADOR DE PINGÜINOS'],
		remaining: ['eggs remaining','huevos restantes']
	},
	temple: {
		attribute: ['ATTRIBUTE', 'ATRIBUTO'],
		upgrade: ['UPGRADE', 'MEJORA'],
		buy: ['BUY', 'COMPRAR'],
		price: ['PRICE', 'PRECIO'],
		condition: ['CONDITION', 'CONDICIÓN'],
		lvlUp: ['LEVEL UP', 'SUBIR NIVEL'],
		evolve: ['EVOLVE', 'EVOLUCIONAR'],
		upPenText: ['Upgrade ','Mejora al pingüino'],
		upPasText: ['Upgrade ability','Mejora la habilidad'],
		penguin: ['PENGUIN','PINGÜINO'],
		ability: ['ABILITY','HABILIDAD']
	},
	journal: {
		obtain: ['OBTAIN','RECLAMAR'],
		lenguage: ['LENGUAGE: English', 'IDIOMA: Español'],
		save: ['SAVE', 'GUARDAR'],
		exit: ['EXIT', 'SALIR'],
		exitSave: ['SAVE & EXIT', 'GUARDAR Y SALIR'],
		autosave: ['AUTOSAVE', 'AUTOGUARDADO'],
		lastSave: ['Last save', 'Último guardado'],
		deleteSave: ['DELETE FILE', 'BORRAR DATOS'],
		resolution: ['RESOLUTION: 1280x720', 'RESOLUCIÓN: 1280x720'],
		music: ['MUSIC VOLUME', 'VOLUMEN MÚSICA'],
		sound: ['EFFECTS VOLUME', 'VOLUMEN EFECTOS'],
		achievements: ['ACHIEVEMENTS', 'LOGROS'],
		stadistics: ['STADISTICS', 'ESTADÍSTICAS'],
		options: ['SETTINGS', 'OPCIONES'],
		general: ['GENERAL', 'GENERAL'],
		completed: ['COMPLETED', 'COMPLETADO']
	},
	unlocks: {
		pause: ['PAUSE', 'PAUSA'],
		labName: ['LABORATORY NAME', 'NOMBRE DEL LABORATORIO'],		
		accept: ['ACCEPT', 'ACEPTAR'],
	},
}

const changeLenguage = () =>{
	_lenguage.innerHTML = text.journal.lenguage[leng];
	_save.innerHTML = text.journal.save[leng];
	_exitSave.innerHTML = text.journal.exitSave[leng];
	_exit.innerHTML = text.journal.exit[leng];
	_deleteSave.innerHTML =text.journal.deleteSave[leng];
	_lastSave.innerHTML = `${text.journal.lastSave[leng]}: ${lastSaveDate.slice(0, 10)} ${lastSaveDate.slice(11, 19)}.`;
	_autosave.innerHTML = `${text.journal.autosave[leng]}: ${autosaveText[autosave][leng]}`;
	_resolution.innerHTML = text.journal.resolution[leng];
	_music.innerHTML = `${text.journal.music[leng]}`;
	_sound.innerHTML = `${text.journal.sound[leng]}`;

	_ubication.innerHTML = `${text.centerContainer.zone[leng]} ${zone} - ${text.centerContainer.room[leng]} ${room}`

	_enemyName.innerHTML = enemy.name[leng];

	_tabArray[0].innerHTML = text.centerContainer.iglu[leng];
	_tabArray[1].innerHTML = text.centerContainer.hatchery[leng];
	_tabArray[2].innerHTML = text.centerContainer.forge[leng];
	_tabArray[3].innerHTML = text.centerContainer.journal[leng];

	_unitPenguinTittle.innerHTML = text.leftContainer.units[leng]; 
	_unitBattleTittle.innerHTML = text.leftContainer.team[leng]; 

	_igluTabArray[0].innerHTML = text.iglu.hospital[leng];
	_igluTabArray[1].innerHTML = text.iglu.sauna[leng];
	_igluTabArray[2].innerHTML = text.iglu.mine[leng];

	_templeTabArray[0].innerHTML = text.temple.penguin[leng];
	_templeTabArray[1].innerHTML = text.temple.ability[leng];

	_hatcheryTabArray[0].innerHTML = text.hatchery.penguinShop[leng];
	_hatcheryTabArray[1].innerHTML = text.hatchery.monsterShop[leng];
	_penguinShopTittle.innerHTML = text.hatchery.penguinShopTittle[leng];
	_monsterUnlockButton[0].innerHTML = text.temple.buy[leng];
	_monsterUnlockButton[1].innerHTML = text.temple.buy[leng];
	_monsterUnlockButton[2].innerHTML = text.temple.buy[leng];

	_hospitalRowElements[0][0].innerHTML = text.temple.attribute[leng];
	_hospitalRowElements[0][1].innerHTML = text.temple.upgrade[leng];
	_hospitalRowElements[0][2].innerHTML = text.temple.price[leng];
	_saunaRowElements[0][0].innerHTML = text.temple.attribute[leng];
	_saunaRowElements[0][1].innerHTML = text.temple.upgrade[leng];
	_saunaRowElements[0][2].innerHTML = text.temple.price[leng];
	_mineRowElements[0][0].innerHTML = text.temple.attribute[leng];
	_mineRowElements[0][1].innerHTML = text.temple.upgrade[leng];
	_mineRowElements[0][2].innerHTML = text.temple.price[leng];

	_templeRowElements[0][0].innerHTML = text.temple.attribute[leng];
	_templeRowElements[0][1].innerHTML = text.temple.upgrade[leng];
	_templeRowElements[0][2].innerHTML = text.temple.price[leng];
	_templeRowElements[0][3].innerHTML = text.temple.condition[leng];
	_templeLvlElements[0][0].innerHTML = textPenguinInfo.stats.level[leng];
	_templeLvlElements[0][1].innerHTML = textPenguinInfo.stats.power[leng];
	_templeLvlElements[0][2].innerHTML = textPenguinInfo.stats.health[leng];
	_templeLvlElements[0][3].innerHTML = textPenguinInfo.stats.fatigue[leng];
	_templeLvlElements[0][4].innerHTML = text.temple.price[leng];
	_templeEvolveElements[0][0].innerHTML =  textPenguinInfo.stats.stars[leng];
	_templeEvolveElements[0][1].innerHTML = textPenguinInfo.stats.speed[leng];
	_templeEvolveElements[0][2].innerHTML = textPenguinInfo.stats.health[leng];
	_templeEvolveElements[0][3].innerHTML = textPenguinInfo.stats.fatigue[leng];
	_templeEvolveElements[0][4].innerHTML = text.temple.price[leng];

	_buttonLvl.innerHTML = text.temple.lvlUp[leng];
	_buttonEvolve.innerHTML = text.temple.evolve[leng];

	_journalTabArray[0].innerHTML = text.journal.options[leng];
	_journalTabArray[1].innerHTML = text.journal.stadistics[leng];
	_journalTabArray[2].innerHTML = text.journal.achievements[leng];
	
	

	_stadisticsGeneralTittle.innerHTML = text.journal.general[leng];

	_pauseButton.innerHTML = text.unlocks.pause[leng];
}

const textPenguinInfo = {
	stats: {
		class: ['CLASS','CLASE'],
		level: ['LEVEL', 'NIVEL'],
		stars: ['STARS', 'ESTRELLAS'],
		power: ['POWER', 'PODER'],
		speed: ['SPEED', 'VELOCIDAD'],
		fatigue: ['FATIGUE', 'FATIGA'],
		health: ['HEALTH', 'SALUD']
	}
}

