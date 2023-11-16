var actualJournalTab = 0;
var leng = 1;
var autosave = 0;
var musicSound = 100;
var volumeSound = 100;
var lastSaveDate = new Date().toJSON();

const autosaveText = [['Disabled','Desactivado'],['Activated','Activado']]

var achievement = {
	0: {
		name: ["Click kingdom", "Reinado click"],
		description: [``, ``],
		progress: 0,
		mission: 0,
		todo: [20,500,9000,36000,150000,470000,1000000],
		reward: [1,3,5,7,10,15,25]
	},
	1: {
		name: ["Click ", "Click furioso"],
		description: [``, ``],
		progress: 0,
		mission: 0,
		todo: [100,1000,5000,25000,500000,2000000,10000000],
		reward: [1,3,5,7,10,15,25]
	},
	2: {
		name: ["Greedy", "Avaricioso"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [777,5000,25000,150000,500000,1000000,50000000],
		reward: [1,3,5,7,10,15,25]
	},
	3: {
		name: ["", "Manorota"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [777,5000,25000,150000,500000,1000000,50000000],
		reward: [1,3,5,7,10,15,25]
	},
	4: {
		name: ["", "Matador"],
		description: [``, ``],
		progress: 0,
		mission: 0,
		todo: [5,30,100,200,500,1000,2500],
		reward: [1,3,5,7,10,15,25]
	},
	5: {
		name: ["Collector", "Coleccionista"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	6: {
		name: ["Penguins lvl 30", "Pingüinos nivel 50"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	7: {
		name: ["Penguins lvl 100", "Pingüinos nivel 100"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	8: {
		name: ["Penguins lvl 250", "Pingüinos nivel 250"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	9: {
		name: ["Penguins lvl 1000", "Pingüinos nivel 1000"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	10: {
		name: ["2 Star evolution", "Evolución 2 estrellas"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	11: {
		name: ["3 Star evolution", "Evolución 3 estrellas"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	12: {
		name: ["4 Star evolution", "Evolución 4 estrellas"],
		description: [``,``],
		progress: 0,
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	13: {
		name: ["5 Star evolution", "Evolución 5 estrellas"],
		description: [``,``],
		progress: 0,
		progress: 0,
		mission: 0,
		todo: [5,10,15,20,25,30,40],
		reward: [1,3,5,7,10,15,25]
	},
	14: {
		name: ["Deadge", "Entierro"],
		description: [``,``],
		progress: 0,
		progress: 0,
		mission: 0,
		todo: [10,100,400,1200,2450,6000,15000],
		reward: [1,3,5,7,10,15,25]
	},
	15: {
		name: ["Sleptzzz", "A la cama"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [10,100,400,1200,2450,6000,15000],
		reward: [1,3,5,7,10,15,25]
	},
	16: {
		name: ["", "Hospitalario"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,600,3000,10000,25000,90000,500000],
		reward: [1,3,5,7,10,15,25]
	},
	17: {
		name: ["", "Cómo nuevo"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,600,3000,10000,25000,90000,500000],
		reward: [1,3,5,7,10,15,25]
	},
	18: {
		name: ["Hard worker", "Trabajo duro"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,600,3000,10000,25000,90000,500000],
		reward: [1,3,5,7,10,15,25]
	},
	19: {
		name: ["", "Cazarecompensas"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,600,3000,10000,25000,90000,500000],
		reward: [1,3,5,7,10,15,25]
	},
	20: {
		name: ["", "Incansable"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,600,3000,10000,25000,90000,500000],
		reward: [1,3,5,7,10,15,25]
	},
	21: {
		name: ["", "Salvador"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,600,3000,10000,25000,90000,500000],
		reward: [1,3,5,7,10,15,25]
	},
	22: {
		name: ["", "Talar talar talar talar"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [500,12000,30000,70000,200000,500000,1000000],
		reward: [1,3,5,7,10,15,25]
	},
	23: {
		name: ["", "Superporra"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	24: {
		name: ["", "Echar raíces"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	25: {
		name: ["", "Cocinillas"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	26: {
		name: ["", "Superpingüino"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	27: {
		name: ["Like a ninja", "Cómo un ninja"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	28: {
		name: ["Like a samurai", "Cómo un samurai"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	29: {
		name: ["", "Vitalesco"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	30: {
		name: ["", "Marcador"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	31: {
		name: ["", "Millonario explotador"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	32: {
		name: ["", "Click carmesi"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	33: {
		name: ["", "Click lima"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	34: {
		name: ["", "Click cobalto"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	35: {
		name: ["", "Click ámbar"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	36: {
		name: ["", "Contragolpe"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	37: {
		name: ["", "Incendio"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	38: {
		name: ["", "Cargar maldad"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17500,50000],
		reward: [1,3,5,7,10,15,25]
	},
	39: {
		name: ["", "Ingrediente tomate"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17250,50000],
		reward: [1,3,5,7,10,15,25]
	},
	40: {
		name: ["", "Ingrediente champiñón"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17250,50000],
		reward: [1,3,5,7,10,15,25]
	},
	41: {
		name: ["", "Ingrediente mozarella"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17250,50000],
		reward: [1,3,5,7,10,15,25]
	},
	42: {
		name: ["", "Ingrediente albahaca"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [100,500,2200,5000,10000,17250,50000],
		reward: [1,3,5,7,10,15,25]
	},
	43: {
		name: ["", "Travesura"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [50,300,700,3000,7000,12600,25000],
		reward: [1,3,5,7,10,15,25]
	},
	44: {
		name: ["", "Legado"],
		description: [``,``],
		progress: 0,
		mission: 0,
		todo: [6,20,80,270,666,1380,3000],
		reward: [1,3,5,7,10,15,25]
	}
}

//STADISTICS
var stadistics = {
	clicks: 0,
	clickDmg: 0,
	goldTotal: 0,
	goldWasted: 0,
	enemiesKilled: 0,
	bossKilled: 0,
	maxLevel: 0,
	totalLevel: 0,
	deads: 0,
	fatigated: 0,
	hospitalRestored: 0,
	suanaRestored: 0,
	goldMine: 0,
	potionsUsed: 0,
	achievements: 0
}

var passiveStadistics = {
	0: {
		text: [
		["Activations"],["Activaciones","Fatiga reducida"]
		],
		value: [0,0]
	},
	1: {
		text: [
		["Activations"],["Activaciones","Vida curada"]
		],
		value: [0,0]
	},
	2: {
		text: [
		["Activations"],["Activaciones","Daño causado"]
		],
		value: [0,0]
	},
	3: {
		text: [
		["Activations"],["Activaciones","Poder acumulado"]
		],
		value: [0,0]
	},
	4: {
		text: [
		["Activations"],["Activaciones","Poder acumulado"]
		],
		value: [0,0]
	},
	5: {
		text: [
		["Activations"],["Activaciones","Salud curada","Fatiga reducida"]
		],
		value: [0,0,0]
	},
	6: {
		text: [
		["Activations"],["Activaciones","Poder obtenido"]
		],
		value: [0,0]
	},
	7: {
		text: [
		["Activations"],["Activaciones","Velocidad obtenida"]
		],
		value: [0,0]
	},
	8: {
		text: [
		["Activations"],["Activaciones","Ataques adicionales", "Daño causado"]
		],
		value: [0,0,0]
	},
	9: {
		text: [
		["Activations"],["Activaciones","Salud curada","Salud obtenida"]
		],
		value: [0,0,0]
	},
	10: {
		text: [
		["Activations"],["Activaciones","Marcas explotadas","Daño causado"]
		],
		value: [0,0,0]
	},
	11: {
		text: [
		["Activations"],["Activaciones","Daño causado","Mineros explotados"]
		],
		value: [0,0,0]
	},
	12: {
		text: [
		["Activations"],["Activaciones","Clicks realizados","Fatiga consumida","Salud restaurada"]
		],
		value: [0,0,0,0]
	},
	13: {
		text: [
		["Activations"],["Activaciones","Clicks realizados","Fatiga consumida","Fatiga reducida"]
		],
		value: [0,0,0,0]
	},
	14: {
		text: [
		["Activations"],["Activaciones","Clicks realizados","Fatiga consumida"]
		],
		value: [0,0,0]
	},
	15: {
		text: [
		["Activations"],["Activaciones","Clicks realizados","Fatiga consumida","Daño causado"]
		],
		value: [0,0,0,0]
	},
	16: {
		text: [
		["Activations"],["Activaciones","Daño causado","Salud regenerada"]
		],
		value: [0,0,0]
	},
	17: {
		text: [
		["Activations"],["Fatiga consumida","Daño causado"]
		],
		value: [0,0]
	},
	18: {
		text: [
		["Activations"],["Activaciones","Cargas obtenidas","Daño causado"]
		],
		value: [0,0,0]
	},
	19: {
		text: [
		["Activations"],["Activaciones","Daño causado","Daño multiplicado"]
		],
		value: [0,0,0]
	},
	20: {
		text: [
		["Activations"],["Activaciones","Fatiga reducida"]
		],
		value: [0,0]
	},
	21: {
		text: [
		["Activations"],["Activaciones","Curación"]
		],
		value: [0,0]
	},
	22: {
		text: [
		["Activations"],["Activaciones","Poder acumulado"]
		],
		value: [0,0]
	},
	23: {
		text: [
		["Activaciones","",""],["Activaciones","Daño enemigos","Daño aliados"]
		],
		value: [0,0]
	},
	24: {
		text: [
		["Activaciones","",""],["Activaciones","Salud perdida","Poder otorgado","Salud restaurada","Fatiga reducida"]
		],
		value: [0,0,0,0,0]
	}
}

