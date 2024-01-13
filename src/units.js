var unit = {
	//FIRE
	0: {
		name: ["",""],
		img: "",
		element: 0//fire,
	},1: {
		name: ["",""],
		img: "",
		element: 0//fire,
	},2: {
		name: ["",""],
		img: "",
		element: 0//fire,
	},3: {
		name: ["",""],
		img: "",
		element: 0//fire,
	},4: {
		name: ["",""],
		img: "",
		element: 0//fire,
	},
	//WATER
	5: {
		name: ["",""],
		img: "",
		element: 1//water,
	},6: {
		name: ["",""],
		img: "",
		element: 1//water,
	},7: {
		name: ["",""],
		img: "",
		element: 1//water,
	},8: {
		name: ["",""],
		img: "",
		element: 1//water,
	},9: {
		name: ["",""],
		img: "",
		element: 1//water,
	},
	//LIGHT
	10: {
		name: ["",""],
		img: "",
		element: 4//light,
	},
	//THUNDER
	12: {
		name: ["",""],
		img: "",
		element: 2//thunder,
	},13: {
		name: ["",""],
		img: "",
		element: 2//thunder,
	},14: {
		name: ["",""],
		img: "",
		element: 2//thunder,
	},15: {
		name: ["",""],
		img: "",
		element: 2//thunder,
	},16: {
		name: ["",""],
		img: "",
		element: 2//thunder,
	},
	//EARTH
	17: {
		name: ["",""],
		img: "",
		element: 3//earth,
	},18: {
		name: ["",""],
		img: "",
		element: 3//earth,
	},19: {
		name: ["",""],
		img: "",
		element: 3//earth,
	},20: {
		name: ["",""],
		img: "",
		element: 3//earth,
	},21: {
		name: ["",""],
		img: "",
		element: 3//earth,
	}
}

const elementColors = [
	["red"],
	["blue"],
	["yellow"],
	["brown"],
	["white"]
];

_lineArray = [];
_squareArray = [[],[],[],[],[],[]];

for (let i=0; i<6;i++) {
	_lineArray[i] = document.createElement('div');
	_lineArray[i].className = "line";
	_board.appendChild(_lineArray[i]);
	for (let j=0; j<5; j++) {
		_squareArray[i][j] = document.createElement('div');
		_squareArray[i][j].className = "square";
		_lineArray[i].appendChild(_squareArray[i][j]);
	}
}

_unitsArray = [];
for (let i=0; i<23;i++) {
	_unitsArray[i] = document.createElement('div');
	_unitsArray[i].className = "unidad";
	if(i!=11 && i!=22) {
		_unitsArray[i].style.backgroundImage = `url('./img/p${i+1}_1.png')`;
		_unitsArray[i].style.borderColor = elementColors[unit[i].element][0];
	}
	_unitsContainer.appendChild(_unitsArray[i]);
}

function updateUnits() {
	
}

_unitsArray[11].id = "delete";
_unitsArray[11].innerHTML = "⌫";
_unitsArray[22].id = "enter";
_unitsArray[22].innerHTML = "ENTER";

_unitsArray.forEach((u,index)=>{
	u.addEventListener('click',()=>{
		if (pause) return;
		if (index==11) {
			deletePenguin();
		} else if (index==22) {
			aceptar();
		} else {
			addPenguin(index+1);
		}
	})
})

