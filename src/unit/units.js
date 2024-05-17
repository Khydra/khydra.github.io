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

const _lineArray = [];
const _squareArray = [[],[],[],[],[],[]];

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

const _unitsArray = [];
for (let i=0; i<20;i++) {
	_unitsArray[i] = document.createElement('div');
	_unitsArray[i].style.backgroundImage = `url('./img/p${i+1}_1.png')`;

	if (i<5) {
		_unitsArray[i].className = "unit unit-left";
		_unitsFireContainer.appendChild(_unitsArray[i]);
	} else if (i<10) {
		_unitsWaterContainer.appendChild(_unitsArray[i]);
		_unitsArray[i].className = "unit unit-right";
	} else if (i<15) {
		_unitsThunderContainer.appendChild(_unitsArray[i]);
		_unitsArray[i].className = "unit unit-left";
	} else {
		_unitsEarthContainer.appendChild(_unitsArray[i]);
		_unitsArray[i].className = "unit unit-right";
	} 
}

const _unitAcceptButton  = document.createElement('div');
_unitAcceptButton.id = "unit-accept-button";
_bottomBar.appendChild(_unitAcceptButton);
const _unitDeleteButton  = document.createElement('div');
_unitDeleteButton.id = "unit-delete-button";
_bottomBar.appendChild(_unitDeleteButton);

_unitAcceptButton.innerHTML = "ENTER";
_unitDeleteButton.innerHTML = "DELETE";

_unitAcceptButton.addEventListener('click',()=>{if (!pause) acceptUnit()})
_unitDeleteButton.addEventListener('click',()=>{if (!pause) deleteUnit()})

_unitAcceptButton.addEventListener('mouseover',()=>{
		if (pause) return;
		soundHover3.load();
		soundHover3.play();
})

_unitDeleteButton.addEventListener('mouseover',()=>{
		if (pause) return;
		soundHover3.load();
		soundHover3.play();
})

_unitsArray.forEach((u,index)=>{
	u.addEventListener('click',()=>{
		if (!pause) addUnit(index+1);
	})
})

