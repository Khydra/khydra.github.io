function randomDungedleTittle() {
	let tittleLetterArray = ['D','U','N','G','E','D','L','E'];
	let tittleWord = ""
	tittleLetterArray.forEach((letter)=>{
		let n = Math.floor(Math.random()*8);
		if (n<2) tittleWord += `<span class="pink">${letter}</span>`
		else if (n==3) tittleWord += `<span class="blue">${letter}</span>`
		else if (n==4) tittleWord += `<span class="green">${letter}</span>`
		else tittleWord += `${letter}`
	})
	return tittleWord;
}

var tittle = randomDungedleTittle();

_initTittle.innerHTML = tittle;
_menuTittle.innerHTML = tittle;

_initScene.addEventListener('click',()=>{
	_screen.removeChild(_initScene);
	soundStart.load();
	soundStart.play();
	loadMenuScene();
})

talentUpdate();
loadInitScene();
