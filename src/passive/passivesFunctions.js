function upgradeValue(v) {
	if (actualPenguin.inRoster || actualPenguin.passive.price[v][0]>gold) return;
	for (let i=0; i<actualPenguin.star; i++) {
		if (actualPenguin.passive.req[v][i]!=0) {
			changeGold(-actualPenguin.passive.price[v][0])
			actualPenguin.passive.value[v] += actualPenguin.passive.scale[v];
			actualPenguin.passive.req[v][i]--;
			actualPenguin.passive.price[v][0] = Math.floor(actualPenguin.passive.price[v][0]*actualPenguin.passive.price[v][1])
			showPassiveTemple(actualPenguin.id)
			passiveDescriptionUpdate(actualPenguin.id);
			displayPenguin(actualPenguin);
			return;
		}
	}
}

function passiveDescriptionUpdate(id) {
	switch (id) {
	  	case 0: penguin[0].passive.description = [
			``,
			`
			<span class="yellow">RESILIENCIA: </span>En ocasiones reduce la <span class="fat">fatiga</span> a todo el grupo después de 
			<span class="pow">atacar</span>. 
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[0].passive.value[0]*100)/100}%</span>. 
			<br>Fatiga reducida: <span class="fat">${penguin[0].passive.value[1]}</span>. `];
	   		break;
	   	case 1: penguin[1].passive.description = [
			``,
			`
			<span class="yellow">SALVAVIDAS: </span>En ocasiones regenera <span class="hp">salud</span> a todo el grupo después de <span class="pow">atacar</span>. 
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[1].passive.value[0]*100)/100}%</span>. 
			<br>Curación: <span class="hp">${penguin[1].passive.value[1]}</span>.`];
		   	break;
	   	case 2: penguin[2].passive.description = [
	   		``,
			`<span class="yellow">QUITAR CORTEZA: </span>En ocasiones causa daño adicional en funcion de la <span class="pow">vida máxima (%)</span> 
			del enemigo al <span class="pow">atacar</span>. Restaura sus usos al derrotar a un enemigo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[2].passive.value[0]*100)/100}%</span>. 
			<br>Daño adicional: <span class="pow"> ${Math.round(penguin[2].passive.value[1]*100)/100}% vida máxima</span>. 
			<br>Usos por enemigo: <span class="yellow"> ${penguin[2].passive.value[2]}</span>.
			<br>Usos restantes: <span class="yellow"> ${penguin[2].passive.limit}</span>.
			`];
			break;
		case 3: penguin[3].passive.description = [
	   		``,
			`<span class="yellow">PORRAZO: </span>En ocasiones aumenta su <span class="pow">poder</span> después de <span class="pow">atacar</span>. 
			El efecto se pierde al salir del grupo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[3].passive.value[0]*100)/100}%</span>.  
			<br>Aumento de poder: <span class="pow"> +${penguin[3].passive.value[1]}</span>. 
			<br>Acumulaciones máximas: <span class="yellow"> ${penguin[3].passive.value[2]}</span>.
			<br>Acumulaciones: <span class="yellow"> ${penguin[3].passive.actual[0]}/${penguin[3].passive.value[2]}</span>. 
			<br>Poder obtenido: <span class="pow"> ${penguin[3].passive.actual[1]}</span>.
			`]
			break;
	  	case 4: penguin[4].passive.description = [
	   		``,
			`<span class="yellow">ABONO FERTIL: </span>En ocasiones aumenta su <span class="pow">poder</span> de forma permanente después de derrotar a un enemigo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[4].passive.value[0]*100)/100}%</span>. 
			<br>Aumento de poder: <span class="pow"> +${penguin[4].passive.value[1]}</span>. 
			<br>Poder total acumulado: <span class="pow"> ${penguin[4].passive.actual[0]}</span>. 
			`]
			break;
		case 5: penguin[5].passive.description = [
	   		``,
			`<span class="yellow">PUCHERO: </span>En ocasiones da un empujón a la barra de <span class="blue">velocidad</span> 
			de los pingüinos <span class="yellow">glotones</span> del grupo después de <span class="pow">atacar</span>.
			Además les regenera la <span class="hp">salud</span> y les reduce el <span class="fat">cansancio</span>.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[5].passive.value[0]*100)/100}%</span>. 
			<br>Velocidad momentanea: <span class="blue"> ${Math.round(penguin[5].passive.value[1]*100)/100}s</span>. 
			<br>Curación: <span class="hp">${penguin[5].passive.value[2]}</span>. 
			<br>Fatiga reducida: <span class="fat">-${penguin[5].passive.value[3]}</span>. 
			`]
			break;
		case 6: penguin[6].passive.description = [
	   		``,
			`<span class="yellow">ACUMULAR KI: </span>Clickar en el Pingüino Sayian aumenta su <span class="pow">poder</span>. 
			Después de <span class="pow">atacar</span>, pierde parte de su <span class="pow">poder</span> en porcentaje basado en su máximo obtenible.
			<br><br>Aumento de poder: <span class="pow"> +${penguin[6].passive.value[0]}</span>. 
			<br>Poder máximo obtenible: <span class="pow"> ${penguin[6].passive.value[1]}</span>. 
			<br>Poder perdido al atacar: <span class="yellow"> ${penguin[6].passive.value[2]}%</span> 
			<span class="pow">(-${Math.floor((penguin[6].passive.value[1]*penguin[6].passive.value[2])/100)})</span>.
			<br>Poder obtenido: <span class="pow"> ${penguin[6].passive.actual[0]}</span>.

			`]
			break;
		case 7: penguin[7].passive.description = [
	   		``,
			`<span class="yellow">DESTREZA: </span>En ocasiones mejora su <span class="blue">velocidad</span> después de <span class="pow">atacar</span>. 
			El efecto se pierde al salir del grupo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[7].passive.value[0]*100)/100}%</span>. 
			<br>Mejora de velocidad: <span class="blue"> ${Math.round(penguin[7].passive.value[1]*-100)/100}s</span>. 
			<br>Velocidad máxima obtenible: <span class="blue"> ${Math.round(penguin[7].passive.value[2]*-100)/100}s</span>. 
			<br>Velocidad obtenida: <span class="blue"> ${Math.round(penguin[7].passive.actual[0]*-100)/100}s</span>.
			`]
			break;
		case 8: penguin[8].passive.description = [
	   		``,
			`<span class="yellow">RITMO SAMURAI: </span>En ocasiones realiza un <span class="pow">multiataque</span> después <span class="pow">atacar</span>.
			El <span class="pow">poder</span> de sus <span class="pow">ataques</span> se basa en un porcenaje de su <span class="pow">poder</span> base.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[8].passive.value[0]*100)/100}%</span>. 
			<br>Número de golpes: <span class="pow"> ${penguin[8].passive.value[1]}</span>. 
			<br>Poder golpe: <span class="yellow"> ${Math.round(penguin[8].passive.value[2]*100)/100}%</span> 
			<span class="pow">(${Math.ceil((penguin[8].pow[0]*penguin[8].passive.value[2])/100)})</span>. 
			`]
			break;
		case 9: penguin[9].passive.description = [
	   		``,
			`<span class="yellow">SACRIFICIO: </span>En ocasiones regenera <span class="hp">salud</span> al resto del grupo y
			aumenta su <span class="hp">salud máxima</span> al recibir un <span class="pow">ataque</span> enemigo.
			
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[9].passive.value[0]*100)/100}%</span>. 
			<br>Curación: <span class="hp"> ${penguin[9].passive.value[1]}</span>.
			<br>Aumento salud máxima: <span class="hp"> ${penguin[9].passive.value[2]}</span>. 
			<br>Salud máxima obtenida: <span class="hp"> ${penguin[9].passive.actual[0]}</span>. 
			`]
			break;
		case 10: penguin[10].passive.description = [
	   		``,
			`<span class="yellow">MARCAJE MÁGICO: </span>En ocasiones crea una marca sobre el enemigo después de <span class="pow">atacar</span>. 
			Clickar en la marca la hace estallar.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[10].passive.value[0]*100)/100}%</span>. 
			<br>Daño explosión: <span class="pow"> ${penguin[10].passive.value[1]}</span>. 
			`]
			break;
		case 11: penguin[11].passive.description = [
	   		``,
			`<span class="yellow">GÜINORÁN: </span>En ocasiones golpea con su güinorán al enemigo después de <span class="pow">atacar</span>. 
			El daño aumenta por cada pingüino trabajando en la mina.
			<br><br>Probabilidad: <span class="yellow"> ${Math.round(penguin[11].passive.value[0]*100)/100}%</span>. 
			<br>Daño: <span class="pow"> ${penguin[11].passive.value[1]}</span>.
			<br>Daño por minero: <span class="pow"> ${penguin[11].passive.value[2]}</span>.
			`]
			break;
		case 12: penguin[12].passive.description = [
	   		``,
			`<span class="yellow">TELEPORTAL CARMESÍ: </span> Clickar sobre el enemigo consume <span class="fat">fatiga</span>, 
			pero puede restaurar <span class="hp">salud</span> a todo el grupo.
			<br><br>Consumo fatiga: <span class="fat">${penguin[12].passive.value[0]}</span>. 
			<br>Probabilidad: <span class="yellow">${Math.round(penguin[12].passive.value[1]*100)/100}%</span>. 
			<br>Salud restaurada: <span class="hp">${penguin[12].passive.value[2]}</span>. 
			`]
			break;
		case 13: penguin[13].passive.description = [
	   		``,
			`<span class="yellow">TELEPORTAL LIMA: </span> Clickar sobre el enemigo consume <span class="fat">fatiga</span>, 
			pero puede reducir la <span class="fat">fatiga</span> a los pingüinos del grupo.
			<br><br>Consumo fatiga: <span class="fat">${penguin[13].passive.value[0]}</span>. 
			<br>Probabilidad: <span class="yellow">${Math.round(penguin[13].passive.value[1]*100)/100}%</span>. 
			<br>Fatiga reducida: <span class="fat">${penguin[13].passive.value[2]}</span>. 
			`]
			break;
		case 14: penguin[14].passive.description = [
	   		``,
			`<span class="yellow">TELEPORTAL COBALTO: </span> Clickar sobre el enemigo consume <span class="fat">fatiga</span>, 
			pero puede envenenarlo.
			<br><br>Consumo fatiga: <span class="fat">${penguin[14].passive.value[0]}</span>.  
			<br>Probabilidad: <span class="yellow">${Math.round(penguin[14].passive.value[1]*100)/100}%</span>.
			`]
			break;
		case 15: penguin[15].passive.description = [
	   		``,
			`<span class="yellow">TELEPORTAL ÁMBAR: </span> Clickar sobre el enemigo consume <span class="fat">fatiga</span>, 
			pero puede causar mucho <span class="pow">daño</span>.
			<br><br>Consumo fatiga: <span class="fat">${penguin[15].passive.value[0]}</span>. 
			<br>Probabilidad: <span class="yellow">${Math.round(penguin[15].passive.value[1]*100)/100}%</span>. 
			<br>Daño: <span class="pow">${penguin[15].passive.value[2]}</span>. 
			`]
			break;
		case 16: penguin[16].passive.description = [
	   		``,
			`<span class="yellow">RIPOSTE LASER: </span>En ocasiones lanza un <span class="pow">ataque</span> que regenera <span class="hp">salud</span> 
			después de recibir un <span class="pow">ataque</span> enemigo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[16].passive.value[0]*100)/100}%</span>. 
			<br>Daño contraataque: <span class="pow">${penguin[16].passive.value[1]}</span>. 
			<br>Salud regenerada: <span class="hp">${penguin[16].passive.value[2]}</span>. 
			`]
			break;
		case 17: penguin[17].passive.description = [
	   		``,
			`<span class="yellow">IGNICIÓN: </span>Prende el cursor en llamas. Cuando el cursor se encuentra cerca del enemigo le causa una quemadura, 
			pero consume mucho la <span class="fat">fatiga</span>.
			<br><br>Consumo fatiga: <span class="fat">${penguin[17].passive.value[0]}/s</span>. 
			<br>Daño quemadura: <span class="pow">${Math.round(penguin[17].passive.value[1]*100)/100}/s</span>. 
			`]
			break;
		case 18: penguin[18].passive.description = [
	   		``,
			`<span class="yellow">RAYO MORTAL: </span>En ocasiones acumula <span class="yellow">cargas</span> después de <span class="pow">atacar</span>. Al alcancar 
			<span class="yellow">300 cargas</span>, su próximo <span class="pow">ataque</span> será potenciado. Las <span class="yellow">cargas</span> se mantienen al 
			salir del grupo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[18].passive.value[0]*100)/100}%</span>. 
			<br>Cargas por golpe: <span class="yellow">+${penguin[18].passive.value[1]}</span>. 
			<br>Daño adicional: <span class="pow">${penguin[18].passive.value[2]}</span>. 
			<br>Cargas actuales: <span class="yellow">${penguin[18].passive.actual[0]}/300</span>. 
			`]
			break;
		case 19: penguin[19].passive.description = [
	   		``,
			`<span class="yellow">ESTACIÓN TOMATE: </span>En ocasiones causa <span class="pow">daño</span> al enemigo 
			después de <span class="pow">atacar</span>. El daño aumenta según el número de torgüinos en combate.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[19].passive.value[0]*100)/100}%</span>. 
			<br>Daño: <span class="pow">${penguin[19].passive.value[1]}</span>. 
			<br>Daño por torgüino: <span class="pow">${penguin[19].passive.value[2]}</span>.
			`]
			break;
		case 20: penguin[20].passive.description = [
	   		``,
			`<span class="yellow">ESTACIÓN CHAMPIÑÓN: </span>En ocasiones reduce la <span class="fat">fatiga</span> de los torgüinos del grupo
			después de <span class="pow">atacar</span>. 
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[20].passive.value[0]*100)/100}%</span>. 
			<br>Fatiga reducida: <span class="fat">${penguin[20].passive.value[1]}</span>. 
			`]
			break;
		case 21: penguin[21].passive.description = [
	   		``,
			`<span class="yellow">ESTACIÓN MOZZARELLA: </span>En ocasiones restaura la <span class="hp">salud</span> de los torgüinos del grupo
			después de <span class="pow">atacar</span>.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[21].passive.value[0]*100)/100}%</span>. 
			<br>Curación: <span class="hp">${penguin[21].passive.value[1]}</span>. 
			`]
			break;
		case 22: penguin[22].passive.description = [
	   		``,
			`<span class="yellow">ESTACIÓN ALBAHACA: </span>En ocasiones aumenta el <span class="pow">poder</span> de los torgüinos del grupo
			después de <span class="pow">atacar</span>. 
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[22].passive.value[0]*100)/100}%</span>. 
			<br>Aumento poder: <span class="pow">+${penguin[22].passive.value[1]}</span>. 
			`]
			break;
		case 23: penguin[23].passive.description = [
	   		``,
			`<span class="yellow">TARTA BOMBA: </span> En ocasiones lanza una tarta bomba después de <span class="pow">atacar</span> que causa
			daño a todos los participantes del combate. 
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[23].passive.value[0]*100)/100}%</span>.
			<br>Daño enemigos: <span class="pow">${penguin[23].passive.value[1]}</span>.
			<br>Daño aliados: <span class="pow">${penguin[23].passive.value[2]}</span>.	
			`]
			break;
		case 24: penguin[24].passive.description = [
	   		``,
			`<span class="yellow">AUREOLA: </span> En ocasiones reduce su propia <span class="hp">salud</span> después de <span class="pow">atacar</span>. Aumenta el 
			<span class="pow">poder</span>, restaura la <span class="hp">salud</span> y reduce la <span class="fat">fatiga</span> a los pingüinos <span class="yellow">
			heroes</span> del grupo.
			<br><br>Probabilidad: <span class="yellow">${Math.round(penguin[24].passive.value[0]*100)/100}%</span>.
			<br>Salud perdida: <span class="hp">${penguin[24].passive.value[1]}% (-${Math.floor(penguin[24].hp[1]*(penguin[24].passive.value[1]/100))})</span>.
			<br>Aumento poder: <span class="pow">+${penguin[24].passive.value[2]}</span>. 
			<br>Curación: <span class="hp">${penguin[24].passive.value[3]}</span>.
			<br>Fatiga reducida: <span class="fat">${penguin[24].passive.value[4]}</span>.
			`]
			break;
	}

	//venenos
	//clicks potentes/curativos/veneno/fatiga
}
