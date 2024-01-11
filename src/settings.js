_settingsScene = document.createElement('div');
_settingsScene.id = "menu-scene";

_settingsTittle = document.createElement('div');
_settingsTittle.className = "game-tittle";
_settingsTittle.innerHTML = "DUNGEDLE";
_settingsBeta = document.createElement('div');
_settingsBeta.className = "menu-beta";
_settingsBeta.innerHTML = "BETA!";
_settingsScene.appendChild(_settingsTittle);
_settingsScene.appendChild(_settingsBeta);

_settingsReturn = document.createElement('div');
_settingsReturn.id = "settings-return";
_settingsReturn.className = "button-menu";
_settingsScene.appendChild(_settingsReturn);

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

_settingsLenguageOption = document.createElement('div');
_settingsLenguageOption.id = "lenguage-option";
_settingsLenguageOption.className = "settings-option";
_settingsScene.appendChild(_settingsLenguageOption);

_settingsLenguageValue = document.createElement('div');
_settingsLenguageValue.id = "lenguage-value";
_settingsLenguageValue.className = "settings-value";
_settingsScene.appendChild(_settingsLenguageValue);

_settingsVolumeOption = document.createElement('div');
_settingsVolumeOption.id = "volume-option";
_settingsVolumeOption.className = "settings-option";
_settingsScene.appendChild(_settingsVolumeOption);

_settingsVolumeValue = document.createElement('div');
_settingsVolumeValue.id = "volume-value";
_settingsVolumeValue.className = "settings-value";
_settingsScene.appendChild(_settingsVolumeValue);
_settingsVolumeValue.innerHTML = `${volume}%`;

const lengaugeArrow = [];
const volumeArrow = [];

for (let i=0;i<2;i++) {
	lengaugeArrow[i] = document.createElement('div');
	lengaugeArrow[i].id = `lengauge-arrow${i}`;
	lengaugeArrow[i].className = "setting-arrow";

	volumeArrow[i] = document.createElement('div');
	volumeArrow[i].id = `volume-arrow${i}`;
	volumeArrow[i].className = "setting-arrow";

	(i==0) ? lengaugeArrow[i].innerHTML = '◄' : lengaugeArrow[i].innerHTML = '►';
	(i==0) ? volumeArrow[i].innerHTML = '◄' : volumeArrow[i].innerHTML = '►';

	_settingsScene.appendChild(lengaugeArrow[i]);
	_settingsScene.appendChild(volumeArrow[i]);

	lengaugeArrow[i].addEventListener('click',()=>{changeLenguage(i)});
	volumeArrow[i].addEventListener('click',()=>{changeVolume(i)})
}

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