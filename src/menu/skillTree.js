function talentUpdate() {
	for (let i=0; i<15;i++) {
		_skillTreeName[i].innerHTML = talent[i].name[leng];
		_skillTreeDescp[i].innerHTML = talent[i].descp[leng];
		_skillTreeLevel[i].innerHTML = `${talentObtained[i]}/${talent[i].price.length}`;
		_skillTreeButton[i].innerHTML = `${talent[i].price[talentObtained[i]]} ${text.skill.coin[leng]}`;
	}
}

function buyTalent(id) {
	if (coins>=talent[id].price[talentObtained[id]]) {
		soundBuy.load();
		soundBuy.play();
 		coins-=talent[id].price[talentObtained[id]];
 		talentObtained[id]++;
 		_skillTreeCoin.innerHTML = `${text.skill.coin[leng]}: ${coins}`;
		window.localStorage.setItem("talentObtained", JSON.stringify(talentObtained));
		window.localStorage.setItem("coins", JSON.stringify(coins));
		talentUpdate();
	} else {
		soundClick2.load();
		soundClick2.play();
	}
}

function userApplyUpgrades() {
	user.hp[0] += (talentObtained[0]*5);
	user.hp[1] += (talentObtained[0]*5);
	user.regenStage += (talentObtained[1]*2);
	user.ragenRound += (talentObtained[2]*1);
	user.damage += (talentObtained[3]*1);
	user.lineTurn[0].damage += (talentObtained[4]*1);
	user.succes.damage += (talentObtained[5]*3);
	user.partial.damage += (talentObtained[6]*1);
	user.critical += (talentObtained[7]*1);
	user.elemental[0] += (talentObtained[8]*1);
	user.elemental[1] += (talentObtained[8]*1);
	user.elemental[2] += (talentObtained[9]*1);
	user.elemental[3] += (talentObtained[9]*1);
	user.succes.heal = talentObtained[10]*1;

	user.growth = talentObtained[11];
	user.reroll = talentObtained[12];
	user.block = talentObtained[13];
	user.resurrection = talentObtained[14];
}

_skillTreeReturn.addEventListener('mouseover',()=>{
	soundHover.load();
	soundHover.play()
})

_skillTreeReturn.addEventListener('click',()=>{
	_screen.removeChild(_skillTreeScene);
	loadMenuScene();
	saveSettingsData();
	soundSelect.load();
	soundSelect.play();
})
