function changeLenguage(v) {
	(v==0) ? leng-- : leng++;
	if (leng==text.init.length) leng = 0;
	else if (leng<0) leng = text.init.length-1;
	updateLenguage();
	soundClick.load();
	soundClick.play();
}

function changeVolume(v) {
	(v==0) ? volume-=5 : volume+=5;
	if (volume>100) volume=100;
	else if (volume<0) volume=0;
	_settingsVolumeValue.innerHTML = `${volume}%`;
	soundArray.forEach((sound)=>{sound.volume=volume/100});
	soundClick.load();
	soundClick.play();
}

function saveSettingsData() {
	window.localStorage.setItem("settingStorage", true);
	window.localStorage.setItem("volume", JSON.stringify(volume));
	window.localStorage.setItem("leng", JSON.stringify(leng));
}

_settingsReturn.addEventListener('mouseover',()=>{
	soundHover.load();
	soundHover.play()
})

_settingsReturn.addEventListener('click',()=>{
	_screen.removeChild(_settingsScene);
	loadMenuScene();
	saveSettingsData();
	soundSelect.load();
	soundSelect.play();
})