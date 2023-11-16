var actualHatcheryTab=0;

var eggs = {
	0: {
		price: 200,
		increase: 3.8,
		stock: 19
	}, 
	1: {
		price: 20,
		increase: 1.1,
		stock: 19
	}
}

var actualUnlocks = [0,5,27];
var monsterUnlocks = {
	0: {
		name: ["", "PAUSAR BATALLA"],
		description: [``, `Desbloquea un botón para pausar el combate.`],
		cost: 1,
		unlocked: false
	},
	1: {
		name: ["", "MOSTRAR VIDA"],
		description: [``, `Muestra la vida del enemigo.`],
		cost: 1,
		unlocked: true
	},
	2: {
		name: ["", "TEST I"],
		description: [``, `No hace nada por ahora.`],
		cost: 0,
		unlocked: false
	},
	3: {
		name: ["", "TEST II"],
		description: [``, `No hace nada por ahora.`],
		cost: 0,
		unlocked: false
	},
	4: {
		name: ["", "TEST III"],
		description: [``, `No hace nada por ahora.`],
		cost: 0,
		unlocked: false
	},
	5: {
		name: ["", "DPC I"],
		description: [``, `Aumenta en 1 el daño por click.`],
		cost: 1,
		unlocked: false
	},
	6: {
		name: ["", "DPC II"],
		description: [``, `Aumenta en 1 el daño por click.`],
		cost: 3,
		unlocked: false
	},
	7: {
		name: ["", "DPC III"],
		description: [``, `Aumenta en 2 el daño por click.`],
		cost: 5,
		unlocked: false
	},
	8: {
		name: ["", "DPC IV"],
		description: [``, `Aumenta en 2 el daño por click.`],
		cost: 10,
		unlocked: false
	},
	9: {
		name: ["", "DPC V"],
		description: [``, `Aumenta en 3 el daño por click.`],
		cost: 25,
		unlocked: false
	},
	10: {
		name: ["", "VIDA I"],
		description: [``, `Aumenta en 10 la vida de todos los pingüinos.`],
		cost: 3,
		unlocked: false
	},
	11: {
		name: ["", "VIDA II"],
		description: [``, `Aumenta en 20 la vida de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	12: {
		name: ["", "VIDA III"],
		description: [``, `Aumenta en 30 la vida de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	13: {
		name: ["", "VIDA IV"],
		description: [``, `Aumenta en 40 la vida de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	14: {
		name: ["", "VIDA V"],
		description: [``, `Aumenta en 50 la vida de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	15: {
		name: ["", "FATIGA I"],
		description: [``, `Aumenta en 10 la fatiga de todos los pingüinos.`],
		cost: 3,
		unlocked: false,
	},
	16: {
		name: ["", "FATIGA II"],
		description: [``, `Aumenta en 20 la fatiga de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	17: {
		name: ["", "FATIGA III"],
		description: [``, `Aumenta en 30 la fatiga de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	18: {
		name: ["", "FATIGA IV"],
		description: [``, `Aumenta en 40 la fatiga de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	19: {
		name: ["", "FATIGA V"],
		description: [``, `Aumenta en 50 la fatiga de todos los pingüinos.`],
		cost: 0,
		unlocked: false,
	},
	20: {
		name: ["", "AUTO HOSPITAL"],
		description: [``, `Desbloquea un botón para añadir los pingüinos mas heridos al Hospital.`],
		cost: 5,
		unlocked: false,
	},
	21: {
		name: ["", "AUTO SAUNA"],
		description: [``, `Desbloquea un botón para añadir los pingüinos mas fatigados a la Sauna.`],
		cost: 5,
		unlocked: false,
	},
	22: {
		name: ["", "POCIÓN SALUD I"],
		description: [``, `Desbloquea una poción que restaura salud a los pingüinos activos.`],
		cost: 3,
		unlocked: false,
	},
	23: {
		name: ["", "POCIÓN SALUD II"],
		description: [``, `Aumenta la cura de salud en 10`],
		cost: 5,
		unlocked: false,
	},
	24: {
		name: ["", "POCIÓN SALUD III"],
		description: [``, `Reduce el enfriamiento de la poción 15 segundos.`],
		cost: 5,
		unlocked: false,
	},
	25: {
		name: ["", "POCIÓN SALUD IV"],
		description: [``, `Añade una carga adicional.`],
		cost: 10,
		unlocked: false,
	},
	26: {
		name: ["", "POCIÓN SALUD V"],
		description: [``, `Aumenta la cura de salud en 25.`],
		cost: 10,
		unlocked: false,
	},
	27: {
		name: ["", "POCIÓN FATIGA I"],
		description: [``, `Desbloquea una poción que restaura fatiga a los pingüinos activos.`],
		cost: 3,
		unlocked: false,
	},
	28: {
		name: ["", "POCIÓN FATIGA II"],
		description: [``, `Aumenta la cura de fatiga en 10.`],
		cost: 5,
		unlocked: false,
	},
	29: {
		name: ["", "POCIÓN FATIGA III"],
		description: [``, `Reduce el enfriamiento de la poción 15 segundos.`],
		cost: 5,
		unlocked: false,
	},
	30: {
		name: ["", "POCIÓN FATIGA IV"],
		description: [``, `Añade una carga adicional.`],
		cost: 10,
		unlocked: false,
	},
	31: {
		name: ["", "POCIÓN FATIGA V"],
		description: [``, `Aumenta la cura de fatiga en 25.`],
		cost: 10,
		unlocked: false,
	},
	32: {
		name: ["", "HEROICIDAD I"],
		description: [``, `Aumenta el daño contra jefes de la clase HEROE.`],
		cost: 3,
		unlocked: false,
	},
	33: {
		name: ["", "HEROICIDAD II"],
		description: [``, `Aumenta el daño contra jefes de la clase HEROE.`],
		cost: 5,
		unlocked: false,
	},
	34: {
		name: ["", "HEROICIDAD III"],
		description: [``, `Aumenta el daño contra jefes de la clase HEROE.`],
		cost: 7,
		unlocked: false,
	},
	35: {
		name: ["", "HEROICIDAD IV"],
		description: [``, `Aumenta el daño contra jefes de la clase HEROE.`],
		cost: 10,
		unlocked: false,
	},
	36: {
		name: ["", "JORNADA LAB. I"],
		description: [``, `Aumenta la extracción de oro de la clase JORNALERO.`],
		cost: 3,
		unlocked: false,
	},
	37: {
		name: ["", "JORNADA LAB. II"],
		description: [``, `Aumenta la extracción de orode la clase JORNALERO.`],
		cost: 5,
		unlocked: false,
	},
	38: {
		name: ["", "JORNADA LAB. III"],
		description: [``, `Aumenta la extracción de oro de la clase JORNALERO.`],
		cost: 7,
		unlocked: false,
	},
	39: {
		name: ["", "JORNADA LAB. IV"],
		description: [``, `Aumenta la extracción de oro de la clase JORNALERO.`],
		cost: 10,
		unlocked: false,
	},
	40: {
		name: ["", "LUCHADORES I"],
		description: [``, `Aumenta el daño por click de la clase JORNALERO.`],
		cost: 10,
		unlocked: false,
	},
	41: {
		name: ["", "LUCHADORES II"],
		description: [``, `Aumenta el daño por click de la clase JORNALERO.`],
		cost: 5,
		unlocked: false,
	},
	42: {
		name: ["", "LUCHADORES III"],
		description: [``, `Aumenta el daño por click de la clase JORNALERO.`],
		cost: 7,
		unlocked: false,
	},
	43: {
		name: ["", "LUCHADORES IV"],
		description: [``, `Aumenta el daño por click de la clase JORNALERO.`],
		cost: 10,
		unlocked: false,
	},
	44: {
		name: ["", "PRIMAVERA I"],
		description: [``, `Aumenta la regeneración de salud de la clase FLORAL.`],
		cost: 10,
		unlocked: false,
	},
	45: {
		name: ["", "PRIMAVERA II"],
		description: [``, `Aumenta la regeneración de salud de la clase FLORAL.`],
		cost: 5,
		unlocked: false,
	},
	46: {
		name: ["", "PRIMAVERA III"],
		description: [``, `Aumenta la regeneración de salud de la clase FLORAL.`],
		cost: 7,
		unlocked: false,
	},
	47: {
		name: ["", "PRIMAVERA IV"],
		description: [``, `Aumenta la regeneración de salud de la clase FLORAL.`],
		cost: 10,
		unlocked: false,
	},
	48: {
		name: ["", "GUERRA I"],
		description: [``, `Aumenta la probabilidad de subir de nivel de la clase GUERRERO.`],
		cost: 3,
		unlocked: false,
	},
	49: {
		name: ["", "GUERRA II"],
		description: [``, `Aumenta la probabilidad de subir de nivel de la clase GUERRERO.`],
		cost: 5,
		unlocked: false,
	},
	50: {
		name: ["", "GUERRA III"],
		description: [``, `Aumenta la probabilidad de subir de nivel de la clase GUERRERO.`],
		cost: 7,
		unlocked: false,
	},
	51: {
		name: ["", "GUERRA IV"],
		description: [``, `Aumenta la probabilidad de subir de nivel de la clase GUERRERO.`],
		cost: 10,
		unlocked: false,
	},
	52: {
		name: ["", "ALQUIMIA I"],
		description: [``, `Aumenta la probabilidad de recuperar pociones de la clase BRUJO.`],
		cost: 3,
		unlocked: false,
	},
	53: {
		name: ["", "ALQUIMIA II"],
		description: [``, `Aumenta la probabilidad de recuperar pociones de la clase BRUJO.`],
		cost: 5,
		unlocked: false,
	},
	54: {
		name: ["", "ALQUIMIA III"],
		description: [``, `Aumenta la probabilidad de recuperar pociones de la clase BRUJO.`],
		cost: 7,
		unlocked: false,
	},
	55: {
		name: ["", "ALQUIMIA IV"],
		description: [``, `Aumenta la probabilidad de recuperar pociones de la clase BRUJO.`],
		cost: 10,
		unlocked: false,
	},
	56: {
		name: ["", "MALDAD I"],
		description: [``, `Aumenta el daño de la clase VILLANO.`],
		cost: 3,
		unlocked: false,
	},
	57: {
		name: ["", "MALDAD II"],
		description: [``, `Aumenta el daño de la clase VILLANO.`],
		cost: 5,
		unlocked: false,
	},
	58: {
		name: ["", "MALDAD III"],
		description: [``, `Aumenta el daño de la clase VILLANO.`],
		cost: 7,
		unlocked: false,
	},
	59: {
		name: ["", "MALDAD IV"],
		description: [``, `Aumenta el daño de la clase VILLANO.`],
		cost: 10,
		unlocked: false,
	},
	60: {
		name: ["", "PUNTERIA I"],
		description: [``, `Aumenta la regeneración de salud de la clase TIRADOR.`],
		cost: 3,
		unlocked: false,
	},
	61: {
		name: ["", "PUNTERIA II"],
		description: [``, `Aumenta la regeneración de salud de la clase TIRADOR.`],
		cost: 5,
		unlocked: false,
	},
	62: {
		name: ["", "PUNTERIA III"],
		description: [``, `Aumenta la regeneración de salud de la clase TIRADOR.`],
		cost: 7,
		unlocked: false,
	},
	63: {
		name: ["", "PUNTERIA IV"],
		description: [``, `Aumenta la regeneración de salud de la clase TIRADOR.`],
		cost: 10,
		unlocked: false,
	},
	64: {
		name: ["", "OSCURIDAD I"],
		description: [``, `Aumenta la curación de la clase SOMBRA.`],
		cost: 3,
		unlocked: false,
	},
	65: {
		name: ["", "OSCURIDAD II"],
		description: [``, `Aumenta la curación de la clase SOMBRA.`],
		cost: 5,
		unlocked: false,
	},
	66: {
		name: ["", "OSCURIDAD III"],
		description: [``, `Aumenta la curación de la clase SOMBRA.`],
		cost: 7,
		unlocked: false,
	},
	67: {
		name: ["", "OSCURIDAD IV"],
		description: [``, `Aumenta la curación de la clase SOMBRA.`],
		cost: 10,
		unlocked: false,
	},
	68: {
		name: ["", "HONOR I"],
		description: [``, `Aumenta el índice de crítico la clase SAMURAI.`],
		cost: 3,
		unlocked: false,
	},
	69: {
		name: ["", "HONOR II"],
		description: [``, `Aumenta el índice de crítico la clase SAMURAI.`],
		cost: 5,
		unlocked: false,
	},
	70: {
		name: ["", "HONOR III"],
		description: [``, `Aumenta el índice de crítico la clase SAMURAI.`],
		cost: 7,
		unlocked: false,
	},
	71: {
		name: ["", "HONOR IV"],
		description: [``, `Aumenta el índice de crítico la clase SAMURAI.`],
		cost: 10,
		unlocked: false,
	},
	72: {
		name: ["", "SACIEDAD I"],
		description: [``, `Reduce el consumo de fatiga de la clase GLOTÓN.`],
		cost: 3,
		unlocked: false,
	},
	73: {
		name: ["", "SACIEDAD II"],
		description: [``, `Reduce el consumo de fatiga de la clase GLOTÓN.`],
		cost: 5,
		unlocked: false,
	},
	74: {
		name: ["", "SACIEDAD III"],
		description: [``, `Reduce el consumo de fatiga de la clase GLOTÓN.`],
		cost: 7,
		unlocked: false,
	},
	75: {
		name: ["", "SACIEDAD IV"],
		description: [``, `Reduce el consumo de fatiga de la clase GLOTÓN.`],
		cost: 10,
		unlocked: false,
	},
	76: {
		name: ["", "AGILIDAD I"],
		description: [``, `Aumenta la evasión de la clase NINJA.`],
		cost: 3,
		unlocked: false,
	},
	77: {
		name: ["", "AGILIDAD II"],
		description: [``, `Aumenta la evasión de la clase NINJA.`],
		cost: 5,
		unlocked: false,
	},
	78: {
		name: ["", "AGILIDAD III"],
		description: [``, `Aumenta la evasión de la clase NINJA.`],
		cost: 7,
		unlocked: false,
	},
	79: {
		name: ["", "AGILIDAD IV"],
		description: [``, `Aumenta la evasión de la clase NINJA.`],
		cost: 10,
		unlocked: false,
	}
}

