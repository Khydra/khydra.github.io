var penguin = {
	0: {
		id: 0,
		name: ["","ELPEN GÜENITO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [`RESILIENCIE`,`RESILIENCIA`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Fatiga reducida`]],
			value: [5,1],
			scale: [0.2,1], 
			price: [[20,1.15],[550,1.25]],
			req: [[10,15,15,25,40],[1,2,2,2,5]], 
			onHit: true //0
		},
		type: [types[0], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p01_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	1: {
		id: 1,
		name: ["","PINGÜINO PLAYERO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [`LIFE GUARD`,`SALVAVIDAS`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Curación`]],
			value: [2,1],
			scale: [0.5,1], 
			price: [[320,1.18],[550,1.25]],
			req: [[12,12,12,16,16],[1,2,2,2,5]],
			onHit: true //0
		},
		type: [types[1], types[14]],
		fatigue: [0,100], 
		img: './img/sprites/p02_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	2: {
		id: 2,
		name: ["","PINGÜINO LEÑADOR"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`QUITAR CORTEZA`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Daño (%)`,`Usos`]],
			value: [10,1,1],
			scale: [0.2,0.1,1], 
			price: [[20,1.18],[330,4.25],[9000,7.25]],
			req: [[10,14,18,24,24],[5,5,7,7,16],[0,0,1,1,1]],
			limit: 1,
			onHit: true, //0
			onKill: true //1
		},
		type: [types[1], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p03_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	3: {
		id: 3,
		name: ["","CAVERNIGÜINO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`PORRAZO`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Aumento poder`,`Acumulaciones`]],
			value: [6,1,10],
			scale: [0.3,1,2], 
			price: [[20,1.18],[330,4.25],[9000,7.25]],
			req: [[10,14,18,24,24],[5,5,7,7,16],[0,0,1,1,1]],
			actual: [0,0], // chargs-pow
			onHit: true, //0
			onRetire: true //2
		},
		type: [types[2], types[12]],
		fatigue: [0,100], 
		img: './img/sprites/p04_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	4: {
		id: 4,
		name: ["","PINGÜINO TOCÓN"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`ABONO FERTIL`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Aumento poder`]],
			value: [6,1],
			scale: [0.3,1], 
			price: [[20,2.18],[330,150]],
			req: [[6,10,10,20,40],[1,1,2,2,2]],
			actual: [0],
			onKill: true //1
		},
		type: [types[3], types[5]],
		fatigue: [0,100], 
		img: './img/sprites/p05_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	5: {
		id: 5,
		name: ["","CHEF WINO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`PUCHERO`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Mejora velocidad`, `Curación`, `Fatiga reducida`]],
			value: [6,0.5,1,1],
			scale: [0.5,0.1,1,1], 
			price: [[320,1.18],[550,1.25],[550,1.25],[550,1.25]],
			req: [[12,12,12,16,16],[2,2,3,3,5],[1,2,2,2,5],[1,2,2,2,5]],
			onHit: true //0
		},
		type: [types[1], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p06_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	6: {
		id: 6,
		name: ["","PINGÜINO SAIYAN"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`ACUMULAR KI`],
			description: [[],[]],
			attributeText: [[],[`Aumento poder`,`Poder obtenible`,`% Poder perdido`]],
			value: [1,15,70],
			scale: [1,3,-1], 
			price: [[75,1.18],[330,4.25],[100,1.05]],
			req: [[2,2,3,3,4],[4,4,7,15,20],[10,10,13,13,25]],
			actual: [0],
			onHit: true, //0
			onRetire: true, //2
			onSelf: true //3
		},
		type: [types[0], types[2]],
		fatigue: [0,100], 
		img: './img/sprites/p07_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	7: {
		id: 7,
		name: ["","GENP, EL DESERTOR"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`DESTREZA`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Mejora velocidad`,`Velocidad max.`]],
			value: [5,-0.1,-0.5],
			scale: [0.2,-0.1,-0.1], 
			price: [[75,1.18],[5000,2.3],[100,1.05]],
			req: [[20,20,30,30,40],[0,1,0,0,1],[2,3,3,5,7]],
			actual: [0],
			onHit: true, //0
			onRetire: true //2
		},
		type: [types[9], types[11]],
		fatigue: [0,100], 
		img: './img/sprites/p08_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	8: {
		id: 8,
		name: ["","ONIU, EL HONORABLE"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`RITMO SAMURAI`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Número de golpes`,`Poder golpes (%)`]],
			value: [4,3,5],
			scale: [0.7,1,0.5], 
			price: [[75,1.35],[5000,5],[256,2.27]],
			req: [[12,6,6,8,14],[0,1,0,1,2],[5,5,5,5,10]],
			onHit: true //0
		},
		type: [types[10], types[11]],
		fatigue: [0,100], 
		img: './img/sprites/p09_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	9: {
		id: 9,
		name: ["","PINGÜINO PALADÍN"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`SACRIFICIO`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Curación`,`Aumento salud`]],
			value: [0.5,3,1],
			scale: [0.1,1,1], 
			price: [[25,1.11],[300,1.25],[8000,9.27]],
			req: [[15,15,20,15,20],[3,3,3,3,3],[1,1,2,2,4]],
			actual: [0],
			onEnemyHit: true //4
		},
		type: [types[4], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p10_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	10: {
		id: 10,
		name: ["","PINGÜINO CICATRIZANTE"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`MARCAJE MÁGICO`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Daño explosión`]],
			value: [2.5,15],
			scale: [0.7,6], 
			price: [[195,1.11],[450,1.85]],
			req: [[7,8,8,10,12],[8,10,10,12,10]],
			active: false,
			onHit: true, //0
			onKill: true, //1
			onRetire: true //2
		},
		type: [types[6], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p11_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	11: {
		id: 11,
		name: ["","BATGÜINO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`GÜINORÁN`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Daño`,`Daño bonus`]],
			value: [7.5,15,1],
			scale: [0.7,6,1], 
			price: [[195,1.11],[450,1.85],[450,1.85]],
			req: [[7,8,8,10,12],[8,10,10,12,10],[8,10,10,12,10]],
			onHit: true //0
		},
		type: [types[0], types[15]],
		fatigue: [0,100], 
		img: './img/sprites/p12_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	12: {
		id: 12,
		name: ["","TELEGÜINO CARMESÍ"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`TELEPORTAL CARMESÍ`],
			description: [[],[]],
			attributeText: [[],[`Consumo fatiga`,`Probabilidad (%)`,`Curación`]],
			value: [1,0.2,3],
			scale: [-1,0.1,1], 
			price: [[9000,1.3],[20,1.1],[900,3]],
			req: [[1,1,1,2,3],[5,15,10,12,12],[1,1,1,1,1]],
			onEnemyClick: true //5
		},
		type: [types[3], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p13_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	13: {
		id: 13,
		name: ["","TELEGÜINO LIMA"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`TELEPORTAL LIMA`],
			description: [[],[]],
			attributeText: [[],[`Consumo fatiga`,`Probabilidad (%)`,`Fatiga reducida`]],
			value: [1,0.2,3],
			scale: [-1,0.1,1], 
			price: [[9000,1.3],[20,1.1],[900,3]],
			req: [[1,1,1,2,3],[5,15,10,12,12],[1,1,1,1,1]],
			onEnemyClick: true //5
		},
		type: [types[3], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p13_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	14: {
		id: 14,
		name: ["","TELEGÜINO COBALTO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`TELEPORTAL COBALTO`],
			description: [[],[]],
			attributeText: [[],[`Consumo fatiga`,`Probabilidad (%)`]],
			value: [1,0.01],
			scale: [-1,0.03], 
			price: [[9000,1.5],[25,1.1]],
			req: [[1,1,1,2,3],[25,25,40,40,50]],
			onEnemyClick: true //5
		},
		type: [types[3], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p13_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	15: {
		id: 15,
		name: ["","TELEGÜINO ÁMBAR"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`TELEPORTAL ÁMBAR`],
			description: [[],[]],
			attributeText: [[],[`Consumo fatiga`,`Probabilidad (%)`,`Daño`]],
			value: [1,0.2,5],
			scale: [-1,0.1,1], 
			price: [[9000,1.3],[20,1.1],[900,5]],
			req: [[1,1,1,2,3],[5,15,10,12,12],[5,6,7,8,9]],
			onEnemyClick: true //5
		},
		type: [types[3], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p13_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	16: {
		id: 16,
		name: ["","PINGÜINO GALÁCTICO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`RIPOSTE LÁSER`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Daño`,`Curación`]],
			value: [9,5,3],
			scale: [1,2,1], 
			price: [[200,1.5],[20,2.1],[20,1.7]],
			req: [[3,3,3,5,5],[5,7,7,17,50],[5,5,10,15,45]],
			onEnemyHit: true //4
		},
		type: [types[0], types[4]],
		fatigue: [0,100], 
		img: './img/sprites/p17_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	17: {
		id: 17,
		name: ["","CHIQUIGÜINA MÁGICA"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`IGNICIÓN`],
			description: [[],[]],
			attributeText: [[],[`Consumo fatiga`,`Daño quemadura`]],
			value: [50,10],
			scale: [-1,10], 
			price: [[490,3.1],[20000,4.91]],
			req: [[5,5,10,10,10],[2,3,8,10,30]]
		},
		type: [types[6], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p18_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	18: {
		id: 18,
		name: ["","MALVIGÜINO PERFECTO"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`RAYO MORTAL`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Cargas por golpe`,`Daño adicional`]],
			value: [9,1,13],
			scale: [0.5,1,27], 
			price: [[80,1.1],[5000,2.8],[450,1.92]],
			req: [[5,5,6,12,10],[1,2,3,1,4],[4,3,5,10,20]],
			actual: [0],
			onHit: true //0
		},
		type: [types[7], types[null]],
		fatigue: [0,100], 
		img: './img/sprites/p19_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	19: {
		id: 19,
		name: ["","TORGÜINO TOMATE"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`ESTACIÓN TOMATE`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Daño base`,`Daño por torgüino`]],
			value: [2,5,2],
			scale: [0.5,1,0.5], 
			price: [[20,1.15],[68,1.55],[300,3.85]],
			req: [[10,5,5,25,10],[3,3,4,4,15],[3,4,4,6,12]],
			onHit: true //0
		},
		type: [types[13], types[12]],
		fatigue: [0,100], 
		img: './img/sprites/p20_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	20: {
		id: 20,
		name: ["","TORGÜINO CHAMPIÑÓN"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`ESTACIÓN CHAMPIÑÓN`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Fatiga reducida`]],
			value: [2,-20],
			scale: [0.5,-3], 
			price: [[20,1.15],[86,1.25]],
			req: [[10,5,5,25,10],[3,4,4,6,12]],
			onHit: true //0
		},
		type: [types[13], types[12]],
		fatigue: [0,100], 
		img: './img/sprites/p20_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	21: {
		id: 21,
		name: ["","TORGÜINO MOZZARELLA"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`ESTACIÓN MOZZARELLA`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Curación`]],
			value: [2,20],
			scale: [0.5,3], 
			price: [[20,1.15],[86,1.25]],
			req: [[10,5,5,25,10],[3,4,4,6,12]],
			onHit: true //0
		},
		type: [types[13], types[12]],
		fatigue: [0,100], 
		img: './img/sprites/p20_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	22: {
		id: 22,
		name: [``,`ESTACIÓN ALBAHACA`],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`ABONO FERTIL`],
			description: [[],[]],
			attributeText: [[],[`Probabilidad (%)`,`Aumento poder`]],
			value: [2,2],
			scale: [0.2,1], 
			price: [[20,1.11],[450,9.85]],
			req: [[15,15,15,15,15],[2,3,2,3,2]],
			actual: [0],
			onHit: true //0
		},
		type: [types[13], types[12]],
		fatigue: [0,100], 
		img: './img/sprites/p20_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	23: {
		id: 23,
		name: ["","PINGÜINO BROMISTA"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`TARTA BOMBA`],
			description: [[],[]],
			attributeText: [[],[`Probs (%)`,`Daño enemigos`,`Daño aliados`]],
			value: [5,100,100],
			scale: [0.1,5,-1], 
			price: [[20,1.1],[300,1.15],[300,1.75]],
			req: [[10,15,15,25,40],[8,5,5,10,25],[5,5,5,10,10]],
			onHit: true //0
		},
		type: [types[8], types[14]],
		fatigue: [0,100], 
		img: './img/sprites/p24_1.png', 
		lvl: 1, 
		own: false, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	},
	24: {
		id: 24,
		name: ["","PINGÜINO CELESTIAL"],
		hp: [100,100],
		pow: [2,0],
		spd: [0,60],
		passive: {
			name: [``,`AUREOLA`],
			description: [[],[]],
			attributeText: [[],[`Probs (%)`,`Salud perdida (%)`,`Aumento poder`,`Curación`,`Fatiga reducida`]],
			value: [95,60,1,5,5],
			scale: [0.1,-1,1,2,3], 
			price: [[20,1.1],[300,1.15],[300,1.75],[300,1.75],[300,1.75]],
			req: [[10,15,15,25,40],[8,5,5,10,25],[5,5,5,10,10],[5,5,5,10,10],[5,5,5,10,10]],
			onHit: true //0
		},
		type: [types[8], types[14]],
		fatigue: [0,100], 
		img: './img/sprites/p25_1.png', 
		lvl: 1, 
		own: true, 
		inRoster: false, 	
		inBuilding: [false,false,false], 
		star: 1, 
		exhausted: false, 
		stats: [0,0,0,0,0,0], 
		position: null,
		scale: {
			lvl: [0.2,0.7,2.2,10],
			evolve: [-11,50,50,1]
		}
	}
}

var penguinNotOwnArray = [];
var penguinOwnArray = [];

var penguinArray = [
	penguin[0],penguin[1],penguin[2],penguin[3],penguin[4],penguin[5],penguin[6],penguin[7],penguin[8],penguin[9],
	penguin[10],penguin[11],penguin[12],penguin[13],penguin[14],penguin[15],penguin[16],penguin[17],penguin[18],penguin[19],
	penguin[20],penguin[21],penguin[22],penguin[23],penguin[24]
];