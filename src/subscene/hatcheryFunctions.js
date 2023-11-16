function displayHatchery() {
	_subSceneContent.appendChild(_hatcheryScene);
	inHatchery = true;
	updateHatchery();
}

function updateHatchery() {
	if (actualHatcheryTab==0) return showPenguinShop();
	else return showMonsterShop();
}

function showPenguinShop() {
	_hatcheryScene.appendChild(_hatcheryContainerArray[0]);
	for (let i=0; i<2;i++) _penguinShopStockArray[i].innerHTML = `${eggs[i].stock} ${text.hatchery.remaining[leng]}`;
	(eggs[0].stock==0) ? _penguinShopPriceArray[0].innerHTML = 'Agotado' : _penguinShopPriceArray[0].innerHTML = `$${eggs[0].price}`;
	(eggs[1].stock==0) ? _penguinShopPriceArray[1].innerHTML = 'Agotado' : _penguinShopPriceArray[1].innerHTML = `${eggs[1].price}🧊`;
}

function showMonsterShop() {
	_hatcheryScene.appendChild(_hatcheryContainerArray[1]);
	for (let i=0; i<3; i++) {
		_monsterUnlockName[i].innerHTML = monsterUnlocks[actualUnlocks[i]].name[leng];
		_monsterUnlockPrice[i].innerHTML = `${text.temple.price[leng]}: ${monsterUnlocks[actualUnlocks[i]].cost} 🍪`;
		_monsterUnlockDescription[i].innerHTML = monsterUnlocks[actualUnlocks[i]].description[leng];
	}
}

function buyEgg(method) {
	if (eggs[method].stock==0) return;
	if (method==0) {
		if (gold<eggs[method].price) return;
		changeGold(-eggs[method].price)
		eggs[method].price = Math.ceil(eggs[method].price*eggs[method].increase);
		eggs[method].stock--;
		getEgg();
	} else {
		if (gems<eggs[method].price) return;
		changeGems(-eggs[method].price);
		eggs[method].price = Math.ceil(eggs[method].price*eggs[method].increase);
		eggs[method].stock--;
		getEgg();
	}
}

function getEgg() {
	_penguinShopContainerArray[0].style.pointerEvents = "none";
	_penguinShopContainerArray[1].style.pointerEvents = "none";
	let p = Math.floor(Math.random() * penguinNotOwnArray.length);
	let pId = penguinNotOwnArray[p].id;
	_penguinShopEggReward.style.backgroundImage = `url('${penguinNotOwnArray[p].img}')`;
	_penguinShopEgg.style.opacity = 0;
	_penguinShopEggContainer.appendChild(_penguinShopEggUp);
	_penguinShopEggContainer.appendChild(_penguinShopEggDown);
	_penguinShopEggContainer.appendChild(_penguinShopEggReward);
	_penguinShopEggUp.style.animation = "eggHatchings 1.5s, eggHatchingU 4s";
	_penguinShopEggDown.style.animation = "eggHatchings 1.5s, eggHatchingD 4s";
	_penguinShopEggReward.style.animation = "sprite 0.6s steps(4) infinite, penguinHatch 4s";
	adquierePenguin(penguinArray[pId]);
	setTimeout(()=>{
		_penguinShopEggContainer.removeChild(_penguinShopEggUp);
		_penguinShopEggContainer.removeChild(_penguinShopEggDown);
		_penguinShopEggContainer.removeChild(_penguinShopEggReward);
		_penguinShopFloorContainer.appendChild(_penguinShopEggReward);
		_penguinShopEggReward.style.animation = "sprite 0.6s steps(4) infinite, penguinFallDoor 2s forwards";
		_penguinShopEgg.style.opacity = 1;
		_penguinShopEgg.style.animation = "newEgg 1.5s";
	},4000)
	setTimeout(()=>{
		_penguinShopEgg.style.animation = "";
		_penguinShopFloorContainer.removeChild(_penguinShopEggReward);
		_penguinShopContainerArray[0].style.pointerEvents = "all";
		_penguinShopContainerArray[1].style.pointerEvents = "all";
		updateOwnPenguinImage();
		updateHatchery();
	},6000)
}

function buyEggSelect(method) {
	if (eggs[method].stock==0) return
	_penguinShopContainerArray[method].style.cursor = "pointer";
}

function buyEggDefault(method) {
	_penguinShopContainerArray[method].style.cursor = "default";
	_penguinShopPriceArray[method].style.top = "revert-layer";
	_penguinShopStockArray[method].style.top = "revert-layer";
}

for (let i=0; i<3; i++) {
	_monsterUnlockButton[i].addEventListener('click', ()=> {
	if (monsterUnlocks[actualUnlocks[i]].cost>cookies) return;
		changeCookies(-monsterUnlocks[actualUnlocks[i]].cost);
		monsterUnlocks[actualUnlocks[i]].unlocked = true;
		unlockMonsterUpgrade(actualUnlocks[i]);
		updateHatchery();
	});
}

function unlockMonsterUpgrade(id) {
	switch (id) {
	  	case 0:
			_penguinInfoBot.appendChild(_pauseButton);
			actualUnlocks[0] = 1; 
	   		break;
	   	case 1:
	   		_enemyHealthBarNumber.innerHTML = Math.floor(enemy.hp[0])
			actualUnlocks[0] = 20; 
			break;
		case 2:
			console.log("empty");
			break;
		case 3:
			console.log("empty");
			break;
		case 4:
			console.log("empty");
			break;
		case 5:
			dpc[0]+=1;
			actualUnlocks[1] = 6;
			break;
		case 6:
			dpc[0]+=1;
			actualUnlocks[1] = 15; 
			break;
		case 7:
			dpc[0]+=2;
			actualUnlocks[1] = 8;
			break;
		case 8:
			dpc[0]+=2;
			actualUnlocks[1] = 17;
			break;
		case 9:
			dpc[0]+=3;
			actualUnlocks[1] = 19;
			break;
		case 10:
			penguinArray.forEach((p)=>{
				p.hp[1] +=10;
				if (!p.dead) p.hp[0] +=10;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 16;
			break;
		case 11:
			penguinArray.forEach((p)=>{
				p.hp[1] +=20;
				if (!p.dead) p.hp[0] +=20;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 7;
			break;
		case 12:
			penguinArray.forEach((p)=>{
				p.hp[1] +=30;
				if (!p.dead) p.hp[0] +=30;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 18;
			break;
		case 13:
			penguinArray.forEach((p)=>{
				p.hp[1] +=40;
				if (!p.dead) p.hp[0] +=40;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 9;
			break;
		case 14:
			penguinArray.forEach((p)=>{
				p.hp[1] +=50;
				if (!p.dead) p.hp[0] +=50;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 48;
			break;	
		case 15:
			penguinArray.forEach((p)=>{
				p.fatigue[1] +=10;
				if (p.exhausted) p.exhausted = false;;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 10;
			break;	
		case 16:
				penguinArray.forEach((p)=>{
				p.fatigue[1] +=20;
				if (p.exhausted) p.exhausted = false;;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 11;
			break;	
		case 17:
			penguinArray.forEach((p)=>{
				p.fatigue[1] +=30;
				if (p.exhausted) p.exhausted = false;;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 12;
			break;	
		case 18:
			penguinArray.forEach((p)=>{
				p.fatigue[1] +=40;
				if (p.exhausted) p.exhausted = false;;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 13;
			break;	
		case 19:
			penguinArray.forEach((p)=>{
				p.fatigue[1] +=50;
				if (p.exhausted) p.exhausted = false;;
			});
			displayPenguin(actualPenguin);
			actualUnlocks[1] = 14;
			break;	
		case 20:
			_buildingArray[0].appendChild(_hospitalAutoButton);
			actualUnlocks[0] = 21; 
			break;	
		case 21:
			_buildingArray[1].appendChild(_saunaAutoButton);
			actualUnlocks[0] = 32; 
			break;	
		case 22:
			_contentLeft.appendChild(_potionHealth);
			actualUnlocks[2] = 28; 
			break;	
		case 23:
			potionHealth.recover += 10;
			actualUnlocks[2] = 29; 
			break;	
		case 24:
			potionHealth.cd[1] -= 15;
			potionHealth.cd[0] -= 15;
			if (potionFatigue.cd[0]<=0) potionFatigue.cd[0] = 1;
			actualUnlocks[2] = 30; 
			break;	
		case 25:
			potionHealth.units[1]+=1;
			potionHealth.units[0]+=1;
			actualUnlocks[2] = 31; 
			_potionHealthUnits.innerHTML = potionHealth.units[0];
			break;	
		case 26:
			potionHealth.recover += 25;
			actualUnlocks[2] = 64; 
			break;	
		case 27:
			_contentLeft.appendChild(_potionFatigue);
			actualUnlocks[2] = 22; 
			break;	
		case 28:
			potionFatigue.recover += 10;
			actualUnlocks[2] = 23; 
			break;	
		case 29:
			potionFatigue.cd[1] -= 15;
			potionFatigue.cd[0] -= 15;
			if (potionFatigue.cd[0]<=0) potionFatigue.cd[0] = 1;
			actualUnlocks[2] = 24; 
			break;	
		case 30:
			potionFatigue.units[1]+=1;
			potionFatigue.units[0]+=1;
			actualUnlocks[2] = 25; 
			_potionFatigueUnits.innerHTML = potionFatigue.units[0];
			break;	
		case 31:
			potionFatigue.recover += 25;
			actualUnlocks[2] = 26; 
			break;	
		case 32: //heroe
			types[0].lvl++;
			actualUnlocks[0] = 33; 
			typeDescriptionUpdate(0);
			break;	
		case 33: //heroe
			types[0].lvl++;
			actualUnlocks[0] = 36; 
			typeDescriptionUpdate(0);
			break;	
		case 34: //heroe
			types[0].lvl++;
			actualUnlocks[0] = 35; 
			typeDescriptionUpdate(0);
			break;	
		case 35: //heroe
			types[0].lvl++;
			actualUnlocks[0] = 2; 
			typeDescriptionUpdate(0);
			break;	
		case 36: //jornalero
			types[1].lvl++;
			actualUnlocks[0] = 37; 
			typeDescriptionUpdate(1);
			break;	
		case 37: //jornalero
			types[1].lvl++;
			actualUnlocks[0] = 40; 
			typeDescriptionUpdate(1);
			break;
		case 38: //jornalero
			types[1].lvl++;
			actualUnlocks[0] = 39; 
			typeDescriptionUpdate(1);
			break;	
		case 39: //jornalero
			types[1].lvl++;
			actualUnlocks[0] = 34; 
			typeDescriptionUpdate(1);
			break;
		case 40: //luchador
			types[2].lvl++;
			actualUnlocks[0] = 41; 
			typeDescriptionUpdate(2);
			break;	
		case 41: //luchador
			types[2].lvl++;
			actualUnlocks[0] = 44; 
			typeDescriptionUpdate(2);
			break;
		case 42: //luchador
			types[2].lvl++;
			actualUnlocks[0] = 43; 
			typeDescriptionUpdate(2);
			break;	
		case 43: //luchador
			types[1].lvl++;
			actualUnlocks[0] = 38; 
			typeDescriptionUpdate(1);
			break;
		case 44: //floral
			types[3].lvl++;
			actualUnlocks[0] = 45; 
			typeDescriptionUpdate(3);
			break;	
		case 45: //floral
			types[3].lvl++;
			actualUnlocks[0] = 46; 
			typeDescriptionUpdate(3);
			break;
		case 46: //floral
			types[3].lvl++;
			actualUnlocks[0] = 47; 
			typeDescriptionUpdate(3);
			break;	
		case 47: //floral
			types[3].lvl++;
			actualUnlocks[0] = 42; 
			typeDescriptionUpdate(3);
			break;

		case 48: //guerrero
			types[4].lvl++;
			actualUnlocks[1] = 49; 
			typeDescriptionUpdate(4);
			break;	
		case 49: //guerrero
			types[4].lvl++;
			actualUnlocks[1] = 52; 
			typeDescriptionUpdate(4);
			break;
		case 50: //guerrero
			types[4].lvl++;
			actualUnlocks[1] = 51; 
			typeDescriptionUpdate(4);
			break;	
		case 51: //guerrero
			types[4].lvl++;
			actualUnlocks[1] = 3; 
			typeDescriptionUpdate(4);
			break;
		case 52: //brujo
			types[6].lvl++;
			actualUnlocks[1] = 53; 
			typeDescriptionUpdate(6);
			break;	
		case 53: //brujo
			types[6].lvl++;
			actualUnlocks[1] = 56; 
			typeDescriptionUpdate(6);
			break;
		case 54: //brujo
			types[6].lvl++;
			actualUnlocks[1] = 55; 
			typeDescriptionUpdate(6);
			break;	
		case 55: //brujo
			types[6].lvl++;
			actualUnlocks[1] = 50; 
			typeDescriptionUpdate(6);
			break;
		case 56: //villano
			types[7].lvl++;
			actualUnlocks[1] = 57; 
			typeDescriptionUpdate(7);
			break;	
		case 57: //villano
			types[7].lvl++;
			actualUnlocks[1] = 60; 
			typeDescriptionUpdate(7);
			break;
		case 58: //villano
			types[7].lvl++;
			actualUnlocks[1] = 59; 
			typeDescriptionUpdate(7);
			break;	
		case 59: //villano
			types[7].lvl++;
			actualUnlocks[1] = 54; 
			typeDescriptionUpdate(7);
			break;
		case 60: //tirador
			types[8].lvl++;
			actualUnlocks[1] = 61; 
			typeDescriptionUpdate(8);
			break;	
		case 61: //tirador
			types[8].lvl++;
			actualUnlocks[1] = 62; 
			typeDescriptionUpdate(8);
			break;
		case 62: //tirador
			types[8].lvl++;
			actualUnlocks[1] = 63; 
			typeDescriptionUpdate(8);
			break;	
		case 63: //tirador
			types[8].lvl++;
			actualUnlocks[1] = 58; 
			typeDescriptionUpdate(8);
			break;

		case 64: //sombra
			types[9].lvl++;
			actualUnlocks[2] = 65; 
			typeDescriptionUpdate(9);
			break;	
		case 65: //sombra
			types[9].lvl++;
			actualUnlocks[2] = 68; 
			typeDescriptionUpdate(9);
			break;
		case 66: //sombra
			types[9].lvl++;
			actualUnlocks[2] = 67; 
			typeDescriptionUpdate(9);
			break;	
		case 67: //sombra
			types[9].lvl++;
			actualUnlocks[2] = 4; 
			typeDescriptionUpdate(9);
			break;
		case 68: //samurai
			types[10].lvl++;
			actualUnlocks[2] = 69; 
			typeDescriptionUpdate(10);
			break;	
		case 69: //samurai
			types[10].lvl++;
			actualUnlocks[2] = 72; 
			typeDescriptionUpdate(10);
			break;
		case 70: //samurai
			types[10].lvl++;
			actualUnlocks[2] = 71; 
			typeDescriptionUpdate(10);
			break;	
		case 71: //samurai
			types[10].lvl++;
			actualUnlocks[2] = 66; 
			typeDescriptionUpdate(10);
			break;
		case 72: //gloton
			types[12].lvl++;
			actualUnlocks[2] = 73; 
			typeDescriptionUpdate(12);
			break;	
		case 73: //gloton
			types[12].lvl++;
			actualUnlocks[2] = 76; 
			typeDescriptionUpdate(12);
			break;
		case 74: //gloton
			types[12].lvl++;
			actualUnlocks[2] = 75; 
			typeDescriptionUpdate(12);
			break;	
		case 75: //gloton
			types[12].lvl++;
			actualUnlocks[2] = 70; 
			typeDescriptionUpdate(12);
			break;
		case 76: //ninja
			types[13].lvl++;
			actualUnlocks[2] = 77; 
			typeDescriptionUpdate(13);
			break;	
		case 77: //ninja
			types[13].lvl++;
			actualUnlocks[2] = 78; 
			typeDescriptionUpdate(13);
			break;
		case 78: //ninja
			types[13].lvl++;
			actualUnlocks[2] = 79; 
			typeDescriptionUpdate(13);
			break;	
		case 79: //ninja
			types[13].lvl++;
			actualUnlocks[2] = 74; 
			typeDescriptionUpdate(13);
			break;
	}
}