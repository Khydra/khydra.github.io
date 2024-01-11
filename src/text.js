const text = {
	init: ["CLICK PARA COMENZAR", "CLICK TO START"],
	menu: {
		0: ["NUEVA PARTIDA", "NEW GAME"],
		1: ["CONTINUAR", "CONTINUE"],
		2: ["OPCIONES", "SETTINGS"],
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
	},
	result: {
		defeat: ["DERROTA", "DEFEAT"],
		return: ["VOLVER AL MENU", "RETURN TO MENU"],
		wins: ["VICTORIAS", "WINS"],
		rounds: ["RONDAS", "ROUNDS"],
		perfects: ["PERFECTOS", "PERFECTS"],
		newRecord: ["¡Nuevo récord!", "New record!"],
		record: ["Récord", "Record"],
		green: ["Verdes", "Green"],
		yellow: ["Amarillos", "Yellow"],
		red: ["Rojos", "Red"],
	},
	upgrade: {
		tittle: ["SELECCIONA UNA MEJORA", "UPGRADE SELECTION"],
	}
}

function updateLenguage() {
	_initPrompt.innerHTML = text.init[leng];
	for (let i=0;i<3;i++) _menuButtonArray[i].innerHTML = text.menu[i][leng];
	_settingsReturn.innerHTML = text.settings.return[leng];
	_settingsLenguageOption.innerHTML = text.settings.lenguageOption[leng];
	_settingsLenguageValue.innerHTML = text.settings.lenguageValue[leng];
	_settingsVolumeOption.innerHTML = text.settings.volume[leng];

	_upgradeTittle.innerHTML = text.upgrade.tittle[leng];
	_resultText.innerHTML = text.result.defeat[leng];
	_resultContinue.innerHTML = text.result.return[leng];

}