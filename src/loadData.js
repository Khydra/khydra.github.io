var volume = 100;
var leng = 0;
var records = [0,0,0];

if (window.localStorage.getItem("settingStorage")=="true") {
	volume = JSON.parse(window.localStorage.getItem("volume"));
	leng = JSON.parse(window.localStorage.getItem("leng"));
}

if (window.localStorage.getItem("recordStorage")=="true") {
	records = JSON.parse(window.localStorage.getItem("records"));
}

