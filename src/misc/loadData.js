var volume = 100;
var leng = 0;
var records = [0,0,0];
var coins = 0;
var talentObtained = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//load
if (window.localStorage.getItem("settingStorage")=="true") {
	volume = JSON.parse(window.localStorage.getItem("volume"));
	leng = JSON.parse(window.localStorage.getItem("leng"));
}

if (window.localStorage.getItem("recordStorage")=="true") records = JSON.parse(window.localStorage.getItem("records"));

if (window.localStorage.getItem("coins")!=null) coins = JSON.parse(window.localStorage.getItem("coins"));
if (window.localStorage.getItem("talentObtained")!=null) talentObtained = JSON.parse(window.localStorage.getItem("talentObtained"));
