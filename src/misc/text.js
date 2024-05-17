const text = {
	init: ["CLICK PARA COMENZAR", "CLICK TO START"],
	menu: {
		0: ["NUEVA PARTIDA", "NEW GAME"],
		1: ["CONTINUAR", "CONTINUE"],
		2: ["TALENTOS", "SKILL TREE"],
		3: ["OPCIONES", "SETTINGS"],
		4: ["SALIR", "QUIT"],
	},
	settings: {
		return: ["VOLVER", "BACK"],
		lenguageOption: ["IDIOMA", "LENGUAGE"],
		lenguageValue: ["ESPAÑOL", "ENGLISH"],
		volume: ["VOLUMEN", "VOLUME"]
	},
	battle: {
		round: ["RONDA","ROUND"],
		stage: ["NIVEL","STAGE"],
		element: {
			0: ["FUEGO","FIRE"],
			1: ["AGUA","WATER"],
			2: ["RAYO","THUNDER"],
			3: ["TIERRA","EARTH"],
			4: ["LUZ","LIGHT"],
		}
	},
	result: {
		defeat: ["DERROTA", "DEFEAT"],
		return: ["VOLVER AL MENU", "RETURN TO MENU"],
		wins: ["VICTORIAS", "WINS"],
		rounds: ["RONDAS", "ROUNDS"],
		perfects: ["PERFECTOS", "PERFECTS"],
		newRecord: ["¡Nuevo récord!", "New record!"],
		record: ["Récord", "Record"],
		green: ["Aciertos", "Green"],
		yellow: ["Parciales", "Yellow"],
		red: ["Fallos", "Red"],
		obtain: ["OBTENIDAS", "OBTAINED"],
	},
	upgrade: {
		tittle: ["SELECCIONA UNA MEJORA", "UPGRADE SELECTION"],
	},
	skill: {
		coin: ["MONEDAS", "COINS"],	
	},
	stats: {
		tab: {
			0: ["OFENSIVA","OFFENSIVE"],
			1: ["DEFENSIVA","DEFENSIVE"],
		},
		off: {
			0: ["Daño acierto <span class='blue'>(base)</span>"],
			1: ["Daño parcial <span class='blue'>(base)</span>"],
			2: ["Daño crítico <span class='pink'>(bonus)</span>"],
			3: ["Daño fuego <span class='pink'>(bonus)</span>"],
			4: ["Daño agua <span class='pink'>(bonus)</span>"],
			5: ["Daño rayo <span class='pink'>(bonus)</span>"],
			6: ["Daño tierra <span class='pink'>(bonus)</span>"],
			7: ["Daño inicio ronda <span class='pink'>(bonus)</span>"],
			8: ["Daño tras perfecto"],
		},
		def:{
			0: ["Salud"],
			1: ["Curación/Mapa"],
			2: ["Curación/Ronda"],
			3: ["Curación/Acierto"],
			4: ["Curación tras perfecto"],
			5: ["Crecimiento <span class='blue'>(acumulaciones)</span>"],
			6: ["Bloqueo"],
			7: ["Resurección"],
		},
		enemy: {
			0: ["Afinidad"],
			1: ["Debilidad"],
			2: ["Daño"],
			3: ["Efecto"],
		},
		misc: {
			0: ["<span class='pink'>No disponible</span>", "<span class='pink'>Not available</span>"],
			1: ["<span class='green'>Disponible</span>", "<span class='green'>Available</span>"],
		}
	}
}

function updateLenguage() {
	_initPrompt.innerHTML = text.init[leng];

	for (let i=0;i<5;i++) _menuButtonArray[i].innerHTML = text.menu[i][leng];

	_skillTreeTittle.innerHTML = text.menu[2][leng];
	_skillTreeReturn.innerHTML = text.settings.return[leng];

	_settingsTittle.innerHTML = text.menu[3][leng];
	_settingsReturn.innerHTML = text.settings.return[leng];
	_settingsLenguageOption.innerHTML = text.settings.lenguageOption[leng];
	_settingsLenguageValue.innerHTML = text.settings.lenguageValue[leng];
	_settingsVolumeOption.innerHTML = text.settings.volume[leng];

	_upgradeTittle.innerHTML = text.upgrade.tittle[leng];
	
	_resultText.innerHTML = text.result.defeat[leng];
	_resultContinue.innerHTML = text.result.return[leng];
}