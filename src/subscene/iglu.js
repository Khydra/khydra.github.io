var actualIgluTab = 0;

var igluUpgrades = {
	0: { //HOPSITAL
		slot: {
			name: [`Slots`,`Ranuras`],
			value: 1,
			scale: 1, 
			price: 5000
		},
		heal: {
			name: [`Heal`,`Curación`],
			value: 0.5,
			scale: 0.1, 
			price: 180
		}
	},
	1: { //SAUNA
		slot: {
			name: [`Slots`,`Ranuras`],
			value: 1,
			scale: 1, 
			price: 5000
		},
		heal: {
			name: [`Fatigue restored`,`Fatiga restaurada`],
			value: 0.1,
			scale: 0.1, 
			price: 250
		}
	},
	2: { //MINE
		slot: {
			name: [`Slots`,`Ranuras`],
			value: 1,
			scale: 1, 
			price: 5000
		},
		extract: {
			name: [`Extract`,`Extracción`],
			value: 1,
			scale: 1, 
			price: 500
		}
	}
}

var hospitalPenguins = [null,null,null,null,null,null,null,null];
var saunaPenguins = [null,null,null,null,null,null,null,null];
var minePenguins = [null,null,null,null,null,null,null,null];
