function displayIglu() {
	_subSceneContent.appendChild(_igluScene);
	inIglu = true;
	updateIglu();
}

function updateIglu() {
	if (actualIgluTab==0) return showHospital();
	else if (actualIgluTab==1) return showSauna();
	else return showMine();
}

function showHospital() {
	_igluScene.appendChild(_igluContainerArray[0]);
	hospitalUpgradesDescriptionUpdate(0);
	hospitalUpgradesDescriptionUpdate(1);
	for (let j=0; j<igluUpgrades[0].slot.value;j++) _buildingSlotArray[0][j].className = "building-slot";
	(actualPenguin.inBuilding[0]) ? _buildingButtonArray[0].innerHTML = "-" : _buildingButtonArray[0].innerHTML = "+";
}

function showSauna() {
	_igluScene.appendChild(_igluContainerArray[1]);
	saunaUpgradesDescriptionUpdate(0);
	saunaUpgradesDescriptionUpdate(1);
	for (let j=0; j<igluUpgrades[1].slot.value;j++) _buildingSlotArray[1][j].className = "building-slot";
	(actualPenguin.inBuilding[1]) ? _buildingButtonArray[1].innerHTML = "-" : _buildingButtonArray[1].innerHTML = "+";
}

function showMine() {
	_igluScene.appendChild(_igluContainerArray[2]);
	mineUpgradesDescriptionUpdate(0);
	mineUpgradesDescriptionUpdate(1);
	for (let j=0; j<igluUpgrades[2].slot.value;j++) _buildingSlotArray[2][j].className = "building-slot";
	(actualPenguin.inBuilding[2]) ? _buildingButtonArray[2].innerHTML = "-" : _buildingButtonArray[2].innerHTML = "+";
}

_buildingButtonArray[0].addEventListener('click',hospitalChange)

function hospitalChange() {
	if (actualPenguin.inBuilding[1] || actualPenguin.inBuilding[2] || actualPenguin.inRoster) return;
	if (actualPenguin.inBuilding[0]) {
		actualPenguin.inBuilding[0] = false;
		hospitalPenguins.forEach((p,index)=> {
			if (p!=null && p.id==actualPenguin.id) {
				hospitalPenguins[index] = null;
				displayPenguin(actualPenguin);
				_buildingSlotArray[0][index].removeChild(_buildingSlotArray[0][index].firstElementChild);
			} 
		});
	} else {
		for (let i=0;i<igluUpgrades[0].slot.value;i++) {
			if (hospitalPenguins[i]==null) {
				actualPenguin.inBuilding[0] = true;
				let elementImg = document.createElement('img');
				elementImg.src = actualPenguin.img;
				hospitalPenguins[i] = actualPenguin;
				displayPenguin(actualPenguin);
				return _buildingSlotArray[0][i].appendChild(elementImg);	
			} 
		}
	}
}

function hospitalHealing() {
	hospitalPenguins.forEach((p)=>{
		if (p!=null && p.hp[0]<p.hp[1]) {
			p.hp[0] += igluUpgrades[0].heal.value*0.1;
			stadistics.hospitalRestored += igluUpgrades[0].heal.value*0.1;
			achievement[16].progress += igluUpgrades[0].heal.value*0.1;
			if (p.hp[0]>p.hp[1]) p.hp[0] = p.hp[1];
			else if (p.hp[0] <= 0) p.hp[0] = 0;
			if (actualPenguin == p) _penguinHealth.innerHTML = `${textPenguinInfo.stats.health[leng]}: ${Math.floor(p.hp[0])}/${Math.floor(p.hp[1])}`;
		}
	})
}

function hospitalUpgradesDescriptionUpdate(id) {
	switch (id) {
	  	case 0: 
	  		if (igluUpgrades[0].slot.value<8) {
	  			_buildingSlotArray[0][igluUpgrades[0].slot.value-1].className = "building-slot";
				_hospitalRowElements[1][0].innerHTML = igluUpgrades[0].slot.name[leng];
				_hospitalRowElements[1][1].innerHTML = `${igluUpgrades[0].slot.value} ➔ ${igluUpgrades[0].slot.value+igluUpgrades[0].slot.scale}`;
				_hospitalRowElements[1][2].innerHTML = igluUpgrades[0].slot.price;
				_hospitalRowElements[1][3].innerHTML = text.temple.buy[leng];
			} else {
				_buildingSlotArray[0][igluUpgrades[0].slot.value-1].className = "building-slot";
				_hospitalRowElements[1][0].innerHTML = igluUpgrades[0].slot.name[leng];
				_hospitalRowElements[1][1].innerHTML = `8`;
				_hospitalRowElements[1][2].innerHTML = "-";
				_hospitalRowElements[1][3].innerHTML = `MAX`;
			}
	   	break;
	   	case 1: 
		   	if (igluUpgrades[0].heal.value<3) {
				_hospitalRowElements[2][0].innerHTML = igluUpgrades[0].heal.name[leng]
				_hospitalRowElements[2][1].innerHTML = `${Math.round(igluUpgrades[0].heal.value*100)/100} ➔ 
														${Math.round((igluUpgrades[0].heal.value+igluUpgrades[0].heal.scale)*100)/100}`
				_hospitalRowElements[2][2].innerHTML = igluUpgrades[0].heal.price;
				_hospitalRowElements[2][3].innerHTML = text.temple.buy[leng];
			} else {
				_hospitalRowElements[2][0].innerHTML = igluUpgrades[0].heal.name[leng]
				_hospitalRowElements[2][1].innerHTML = `3`
				_hospitalRowElements[2][2].innerHTML = "-";
				_hospitalRowElements[2][3].innerHTML = `MAX`;
			}
			let des = [`Heals ${Math.round(igluUpgrades[0].heal.value*100)/100} health/s`,`Los pingüinos se curan ${Math.round(igluUpgrades[0].heal.value*100)/100} salud cada segundo.`]
			_buildingDescriptionArray[0].innerHTML = des[leng];
	   	break;
	}
}

function hospitalUpgrade(id) {
	switch (id) {
	  	case 0: 
	  		if (gold<igluUpgrades[0].slot.price || igluUpgrades[0].slot.value==8) return;
	  		changeGold(-igluUpgrades[0].slot.price)
		  	igluUpgrades[0].slot.value+=igluUpgrades[0].slot.scale;
		  	igluUpgrades[0].slot.price = Math.floor(igluUpgrades[0].slot.price*=8.5);
			hospitalUpgradesDescriptionUpdate(0);
	   	break;
	   	case 1: 
	   		if (gold<igluUpgrades[0].heal.price || igluUpgrades[0].heal.value==3) return;
	   		changeGold(-igluUpgrades[0].heal.price)
	   		igluUpgrades[0].heal.value = Math.round((igluUpgrades[0].heal.value+igluUpgrades[0].heal.scale)*100)/100;
	  		igluUpgrades[0].heal.price = Math.floor(igluUpgrades[0].heal.price*=1.5);
			hospitalUpgradesDescriptionUpdate(1);
	   	break;
	}
}

_hospitalRowElements[1][3].addEventListener('click',()=>hospitalUpgrade(0));
_hospitalRowElements[2][3].addEventListener('click',()=>hospitalUpgrade(1));

//sauna

_buildingButtonArray[1].addEventListener('click',saunaChange);

function saunaChange() {
	if (actualPenguin.inBuilding[0] || actualPenguin.inBuilding[2] || actualPenguin.inRoster) return;
	if (actualPenguin.inBuilding[1]) {
		_buildingButtonArray[1].innerHTML = "+";
		actualPenguin.inBuilding[1] = false;
		saunaPenguins.forEach((p,index)=> {
			if (p!=null && p.id==actualPenguin.id) {
				saunaPenguins[index] = null;
				displayPenguin(actualPenguin);
				_buildingSlotArray[1][index].removeChild(_buildingSlotArray[1][index].firstElementChild);	
			} 
		});
	} else {
		for (let i=0;i<igluUpgrades[1].slot.value;i++) {
			_buildingButtonArray[1].innerHTML = "-" 
			if (saunaPenguins[i]==null) {
				actualPenguin.inBuilding[1] = true;
				let elementImg = document.createElement('img');
				elementImg.src = actualPenguin.img;
				saunaPenguins[i] = actualPenguin;
				displayPenguin(actualPenguin);
				return _buildingSlotArray[1][i].appendChild(elementImg);	
			} 
		}
	}
}

function saunaHealing() {
	saunaPenguins.forEach((p)=>{
		if (p!=null && p.fatigue[0]>0) {
			p.fatigue[0] -= (igluUpgrades[1].heal.value * 0.1);
			stadistics.suanaRestored += igluUpgrades[1].heal.value*0.1;
			achievement[17].progress += igluUpgrades[1].heal.value*0.1;
			if (p.fatigue[0]<0) p.fatigue[0] = 0;
			if (actualPenguin == p) _penguinFatigue.innerHTML = `${textPenguinInfo.stats.fatigue[leng]}: ${Math.ceil(p.fatigue[0])}/${Math.floor(p.fatigue[1])}`;
		}
	})
}

function saunaUpgradesDescriptionUpdate(id) {
	switch (id) {
	  	case 0: 
	  		if (igluUpgrades[1].slot.value<8) {
	  			_buildingSlotArray[1][igluUpgrades[1].slot.value-1].className = "building-slot";
				_saunaRowElements[1][0].innerHTML = igluUpgrades[1].slot.name[leng];
				_saunaRowElements[1][1].innerHTML = `${igluUpgrades[1].slot.value} ➔ ${igluUpgrades[1].slot.value+igluUpgrades[1].slot.scale}`;
				_saunaRowElements[1][2].innerHTML = igluUpgrades[1].slot.price;
				_saunaRowElements[1][3].innerHTML = text.temple.buy[leng];
			} else {
				_buildingSlotArray[1][igluUpgrades[1].slot.value-1].className = "building-slot";
				_saunaRowElements[1][0].innerHTML = igluUpgrades[1].slot.name[leng];
				_saunaRowElements[1][1].innerHTML = `8`;
				_saunaRowElements[1][2].innerHTML = "-";
				_saunaRowElements[1][3].innerHTML = `MAX`;
			}
	   	break;
	   	case 1: 
		   	if (igluUpgrades[1].heal.value<3) {
				_saunaRowElements[2][0].innerHTML = igluUpgrades[1].heal.name[leng]
				_saunaRowElements[2][1].innerHTML = `${Math.round(igluUpgrades[1].heal.value*100)/100} ➔ 
														${Math.round((igluUpgrades[1].heal.value+igluUpgrades[1].heal.scale)*100)/100}`
				_saunaRowElements[2][2].innerHTML = igluUpgrades[1].heal.price;
				_saunaRowElements[2][3].innerHTML = text.temple.buy[leng];
			} else {
				_saunaRowElements[2][0].innerHTML = igluUpgrades[1].heal.name[leng]
				_saunaRowElements[2][1].innerHTML = `3`
				_saunaRowElements[2][2].innerHTML = "-";
				_saunaRowElements[2][3].innerHTML = `MAX`;
			}
			let des = [`Penguins restore ${Math.round(igluUpgrades[1].heal.value*100)/100} fatigue/s`,`Los pingüinos restauran ${Math.round(igluUpgrades[1].heal.value*100)/100} fatiga cada segundo.`]
			_buildingDescriptionArray[1].innerHTML = des[leng];
	   	break;
	}
}

function saunaUpgrade(id) {
	switch (id) {
	  	case 0: 
	  		if (gold<igluUpgrades[1].slot.price || igluUpgrades[1].slot.value==8) return;
	  		changeGold(-igluUpgrades[1].slot.price)
		  	igluUpgrades[1].slot.value+=igluUpgrades[1].slot.scale;
		  	igluUpgrades[1].slot.price = Math.floor(igluUpgrades[1].slot.price*=8.5);
			saunaUpgradesDescriptionUpdate(0);
	   	break;
	   	case 1: 
	   		if (gold<igluUpgrades[1].heal.price || igluUpgrades[1].heal.value==3) return;
	   		changeGold(-igluUpgrades[1].heal.price)
	   		igluUpgrades[1].heal.value = Math.round((igluUpgrades[1].heal.value+igluUpgrades[1].heal.scale)*100)/100;
	  		igluUpgrades[1].heal.price = Math.floor(igluUpgrades[1].heal.price*=1.5);
			saunaUpgradesDescriptionUpdate(1);
	   	break;
	}
}

_saunaRowElements[1][3].addEventListener('click',()=>saunaUpgrade(0));
_saunaRowElements[2][3].addEventListener('click',()=>saunaUpgrade(1));

//mine
_buildingButtonArray[2].addEventListener('click',mineChange);

function mineChange() {
	if (actualPenguin.inBuilding[0] || actualPenguin.inBuilding[1] || actualPenguin.inRoster || actualPenguin.id==11) return;
	if (actualPenguin.inBuilding[2]) {
		actualPenguin.inBuilding[2] = false;
		minePenguins.forEach((p,index)=> {
			if (p!=null && p.id==actualPenguin.id) {
				minePenguins[index] = null;
				displayPenguin(actualPenguin);
				_buildingSlotArray[2][index].removeChild(_buildingSlotArray[2][index].firstElementChild);
			} 
		});
	} else {
		for (let i=0;i<igluUpgrades[2].slot.value;i++) {
			if (minePenguins[i]==null) {
				actualPenguin.inBuilding[2] = true;
				let elementImg = document.createElement('img');
				elementImg.src = actualPenguin.img;
				minePenguins[i] = actualPenguin;
				displayPenguin(actualPenguin);
				return _buildingSlotArray[2][i].appendChild(elementImg);	
			} 
		}
	}
}

function mining() {
	minePenguins.forEach((p)=>{
		if (p!=null) {
			let bonus = 1;
			p.type.forEach((t)=>{if (t.id==1) bonus+=t.bonus[t.lvl]})
			let goldExtracted = Math.ceil(igluUpgrades[2].extract.value*0.1*bonus);
			changeGold(goldExtracted);
			stadistics.goldMine += goldExtracted;
			achievement[18].progress += goldExtracted;
		}
	})
}


function mineUpgradesDescriptionUpdate(id) {
	switch (id) {
	  	case 0: 
	  		if (igluUpgrades[2].slot.value<8) {
	  			_buildingSlotArray[2][igluUpgrades[2].slot.value-1].className = "building-slot";
				_mineRowElements[1][0].innerHTML = igluUpgrades[2].slot.name[leng];
				_mineRowElements[1][1].innerHTML = `${igluUpgrades[2].slot.value} ➔ ${igluUpgrades[2].slot.value+igluUpgrades[2].slot.scale}`;
				_mineRowElements[1][2].innerHTML = igluUpgrades[2].slot.price;
				_mineRowElements[1][3].innerHTML = text.temple.buy[leng];
			} else {
				_buildingSlotArray[2][igluUpgrades[2].slot.value-1].className = "building-slot";
				_mineRowElements[1][0].innerHTML = igluUpgrades[2].slot.name[leng];
				_mineRowElements[1][1].innerHTML = `8`;
				_mineRowElements[1][2].innerHTML = "-";
				_mineRowElements[1][3].innerHTML = `MAX`;
			}
	   	break;
	   	case 1: 
		   	if (igluUpgrades[2].extract.value<10) {
				_mineRowElements[2][0].innerHTML = igluUpgrades[2].extract.name[leng]
				_mineRowElements[2][1].innerHTML = `${Math.round(igluUpgrades[2].extract.value*100)/100} ➔ 
														${Math.round((igluUpgrades[2].extract.value+igluUpgrades[2].extract.scale)*100)/100}`
				_mineRowElements[2][2].innerHTML = igluUpgrades[2].extract.price;
				_mineRowElements[2][3].innerHTML = text.temple.buy[leng];
			} else {
				_mineRowElements[2][0].innerHTML = igluUpgrades[2].extract.name[leng]
				_mineRowElements[2][1].innerHTML = `10`
				_mineRowElements[2][2].innerHTML = "-";
				_mineRowElements[2][3].innerHTML = `MAX`;
			}
			let des = [`Each penguin mine ${Math.round(igluUpgrades[2].extract.value*100)/100} gold per second`,`Cada pingüino extrae ${Math.round(igluUpgrades[2].extract.value*100)/100} oro cada segundo.`]
			_buildingDescriptionArray[2].innerHTML = des[leng];
	   	break;
	}
}

function mineUpgrade(id) {
	switch (id) {
	  	case 0: 
	  		if (gold<igluUpgrades[2].slot.price || igluUpgrades[2].slot.value==8) return;
	  		changeGold(-igluUpgrades[2].slot.price)
		  	igluUpgrades[2].slot.value+=igluUpgrades[2].slot.scale;
		  	igluUpgrades[2].slot.price = Math.floor(igluUpgrades[2].slot.price*=8.5);
			mineUpgradesDescriptionUpdate(0);
	   	break;
	   	case 1: 
	   		if (gold<igluUpgrades[2].extract.price || igluUpgrades[2].extract.value==10) return;
	   		changeGold(-igluUpgrades[2].extract.price)
	   		igluUpgrades[2].extract.value = Math.round((igluUpgrades[2].extract.value+igluUpgrades[2].extract.scale)*100)/100;
	  		igluUpgrades[2].extract.price = Math.floor(igluUpgrades[2].extract.price*=1.5);
			mineUpgradesDescriptionUpdate(1);
	   	break;
	}
}

_mineRowElements[1][3].addEventListener('click',()=>mineUpgrade(0));
_mineRowElements[2][3].addEventListener('click',()=>mineUpgrade(1));


//autoassign

function autoAssignHospital() {
	penguinOwnArray.forEach((pown)=>{
		if (pown.inBuilding[0]) {
		_buildingButtonArray[0].innerHTML = "+";
		pown.inBuilding[0] = false;
		hospitalPenguins.forEach((p,index)=> {
			if (p==pown) {
				hospitalPenguins[index] = null;
				_buildingSlotArray[0][index].removeChild(_buildingSlotArray[0][index].firstElementChild);
			} 
		});
		}
	});
	
	let orderHpPenguinsArray = penguinOwnArray.sort((a, b) => (a.hp[0]/a.hp[1]) - (b.hp[0]/b.hp[1]));
	let countSlots = 0;

	for (let i=0; i<orderHpPenguinsArray.length; i++) {
		if (!orderHpPenguinsArray[i].inRoster && !orderHpPenguinsArray[i].inBuilding[0] && !orderHpPenguinsArray[i].inBuilding[1] &&
			!orderHpPenguinsArray[i].inBuilding[2] && orderHpPenguinsArray[i].hp[0] != orderHpPenguinsArray[i].hp[1]) {
			orderHpPenguinsArray[i].inBuilding[0] = true;
			let elementImg = document.createElement('img');
			elementImg.src = orderHpPenguinsArray[i].img;
			hospitalPenguins[countSlots] = orderHpPenguinsArray[i];
			_buildingSlotArray[0][countSlots].appendChild(elementImg);
			countSlots++;
			if (igluUpgrades[0].slot.value==countSlots) return;
		}
	}
}

function autoAssignSauna() {
	penguinOwnArray.forEach((pown)=>{
		if (pown.inBuilding[1]) {
		_buildingButtonArray[1].innerHTML = "+";
		pown.inBuilding[1] = false;
		saunaPenguins.forEach((p,index)=> {
			if (p==pown) {
				saunaPenguins[index] = null;
				_buildingSlotArray[1][index].removeChild(_buildingSlotArray[1][index].firstElementChild);
			} 
		});
		}
	});
	
	let orderFatiguePenguinsArray = penguinOwnArray.sort((b, a) => (a.fatigue[0]) - (b.fatigue[0]));
	let countSlots = 0;
	//orderFatiguePenguinsArray.forEach(p=>console.log(p.fatigue[0]))
	for (let i=0; i<orderFatiguePenguinsArray.length; i++) {
		if (!orderFatiguePenguinsArray[i].inRoster && !orderFatiguePenguinsArray[i].inBuilding[0] && !orderFatiguePenguinsArray[i].inBuilding[1] &&
			!orderFatiguePenguinsArray[i].inBuilding[2] && orderFatiguePenguinsArray[i].fatigue[0] != 0) {
			orderFatiguePenguinsArray[i].inBuilding[1] = true;
			let elementImg = document.createElement('img');
			elementImg.src = orderFatiguePenguinsArray[i].img;
			saunaPenguins[countSlots] = orderFatiguePenguinsArray[i];
			_buildingSlotArray[1][countSlots].appendChild(elementImg);
			countSlots++;
			if (igluUpgrades[1].slot.value==countSlots) return;
		}
	}
}


_hospitalAutoButton.addEventListener('click', autoAssignHospital)
_saunaAutoButton.addEventListener('click', autoAssignSauna)

_buildingSlotArray.forEach((arr)=>{
	arr.forEach((s, index)=>{
		s.addEventListener("click",()=>{
			if (s.className=="building-slot-bloq") return
			else {
				if (actualIgluTab==0) { //hospital
					if (hospitalPenguins[index]!=null) {
						actualPenguin = penguin[hospitalPenguins[index].id];
						displayPenguin(actualPenguin);
					} else return;
				} else if (actualIgluTab==1) { //sauna
					if (saunaPenguins[index]!=null) {
						actualPenguin = penguin[saunaPenguins[index].id];
						displayPenguin(actualPenguin);
					} else return;
				} else if(actualIgluTab==2) { //mina
					if (minePenguins[index]!=null) {
						actualPenguin = penguin[minePenguins[index].id];
						displayPenguin(actualPenguin);
					} else return;
				}
			}
		})
	})
})