_penguinTypeArray[0].addEventListener('mouseover',()=>{
	_contentCenter.appendChild(_penguinTypeOverContainer);
	_penguinTypeOverContainer.innerHTML = actualPenguin.type[0].description[leng];
})

_penguinTypeArray[0].addEventListener('mouseout',()=>{
	_contentCenter.removeChild(_penguinTypeOverContainer);
})

_penguinTypeArray[1].addEventListener('mouseover',()=>{
	_contentCenter.appendChild(_penguinTypeOverContainer);
	_penguinTypeOverContainer.innerHTML = actualPenguin.type[1].description[leng];
})

_penguinTypeArray[1].addEventListener('mouseout',()=>{
	_contentCenter.removeChild(_penguinTypeOverContainer);
})

var types = {
	null: {
		id: -1,
		name: ['','PINGÜINO'],
		description: [``,`Esta unidad és, en efecto, un pingüino.`],
	},
	0: { 
		id: 0,
		name: ['HERO','HÉROE'],
		description: [``,``],
		lvl: 0,
		bonus: [0.1, 0.15, 0.25, 0.35, 0.50]
	},
	1: { 
		id: 1,
		name: ['LABORER','JORNALERO'],
		description: [``,``],
		lvl: 0,
		bonus: [1.5,2,2.5,3,5]
	},
	2: { 
		id: 2,
		name: ['FIGHTER','LUCHADOR'],
		description: [``,``],
		lvl: 0,
		bonus: [0.25,0.4,0.6,1,1.5]
	},
	3: { 
		id: 3,
		name: ['NATURAL','FLORAL'],
		description: [``,``],
		lvl: 0,
		bonus: [0.5,0.7,1,1.3,1.8]
	},
	4: { 
		id: 4,
		name: ['WARRIOR','GUERRERO'],
		description: [``,``],
		lvl: 0,
		bonus: [0.5,1,2,3,5]
	},
	5: { 
		id: 5,
		name: ['','AUSENTE'],
		description: [``,``],
	},
	6: { 
		id: 6,
		name: ['SORCERER','BRUJO'],
		description: [``,``],
		lvl: 0,
		bonus: [20,25,35,55,70]
	},
	7: { 
		id: 7,
		name: ['','VILLANO'],
		description: [``,``],
		lvl: 0,
		bonus: [0.05,0.08,0.13,0.18,0.25]
	},
	8: { 
		id: 8,
		name: ['','TIRADOR'],
		description: [``,``],
		lvl: 0,
		bonus: [8,12,17,24,35]
	},
	9: { 
		id: 9,
		name: ['','SOMBRA'],
		description: [``,``],
		lvl: 0,
		bonus: [30,34,39,43,50]
	},
	10: { 
		id: 10,
		name: ['SAMURAI','SAMURAI'],
		description: [``,``],
		lvl: 0,
		bonus: [5,8,15,22,30]
	},
	11: { 
		id: 11,
		name: ['LIDER','LÍDER'],
		description: [``,``],
		active: false
	},
	12: { 
		id: 12,
		name: ['','GLOTÓN'],
		description: [``,``],
		lvl: 0,
		bonus: [5,4,3,2,1]
	},
	13: { 
		id: 13,
		name: ['','NINJA'],
		description: [``,``],
		lvl: 0,
		bonus: [2,4,6,8,10]
	},
	14: { 
		id: 14,
		name: ['','ESCURRIDIZO'],
		description: [``,``],
	},
	15: { 
		id: 15,
		name: ['','MILLONARIO'],
		description: [``,``],
	}
}

function typeDescriptionUpdate(id) {
	switch (id) {
	  	case 0: types[0].description = [
			``,
			`Aumenta su daño contra jefes un <span class="red">${types[0].bonus[types[0].lvl]*100}%</span>.`];
	   		break;
	   	case 1: types[1].description = [
			``,
			`Extrae oro adiocional en la mina. (x${types[1].bonus[types[1].lvl]})`];
		   	break;
	   	case 2: types[2].description = [
	   		``,
			`Aumenta el daño por click en ${types[2].bonus[types[2].lvl]*100}% si se encuentra en el grupo de combate.`];
			break;
		case 3: types[3].description = [
	   		``,
			`Recupera <span class="pink">${types[3].bonus[types[3].lvl]}% salud/s</span> si se encuentra en el grupo de combate. `]
			break;
		case 4: types[4].description = [
			``,
			`Puede subir de nivel al derrotar un enemigo si se encuentra en el grupo de combate. (${types[4].bonus[types[4].lvl]}%)`];
	   		break;
	   	case 5: types[5].description = [
			``,
			`Puede utilizar su habilidad sin estar en el grupo de combate.`];
		   	break;
	   	case 6: types[6].description = [
	   		``,
			`<span class="whiter">${types[6].bonus[types[6].lvl]}%</span> de reducir el enfriamiento de las pociones <span class="blue">1s</span> después de golpear.`];
			break;
		case 7: types[7].description = [
	   		``,
			`Aumenta su daño contra enemigos normales un <span class="red">${types[7].bonus[types[7].lvl]*100}%</span>.`]
			break;
		case 8: types[8].description = [
			``,
			`Obtiene ${types[8].bonus[types[8].lvl]}% de ocasionar golpes críticos <span class="red">(200% daño)</span> al golpear.`];
		   	break;
	   	case 9: types[9].description = [
	   		``,
			`Se cura el <span class="red">${types[9].bonus[types[9].lvl]}% daño</span> causado.`];
			break;
		case 10: types[10].description = [
	   		``,
			`Obtiene ${types[10].bonus[types[10].lvl]}% de ocasionar golpes críticos <span class="red">(125% daño)</span> al golpear o al 
			activar <span class="yellow">RITMO SAMURAI</span>.`]
			break;
		case 11: types[11].description = [
			``,
			`Únicamente puede haber un líder en activo.`];
	   		break;
	   	case 12: types[12].description = [
			``,
			`Consume <span class="green">${types[12].bonus[types[12].lvl]} fatiga</span> adicional al golpear. Recibe el doble de efecto de las pociones.`];
		   	break;
	   	case 13: types[13].description = [
	   		``,
			`Puede evadir ataques enemigos. (${types[13].bonus[types[13].lvl]}%)`];
			break;
		case 14: types[14].description = [
	   		``,
			`Puede huir siempre de combate sin consecuencia.`]
			break;
		case 15: types[15].description = [
			``,
			`No puede trabajar en la mina.`];
		   	break;
	}
}

for (let i=0;i<16;i++) typeDescriptionUpdate(i);

