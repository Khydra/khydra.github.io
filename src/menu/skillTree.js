

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
