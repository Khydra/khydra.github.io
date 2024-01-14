_menuTweet.addEventListener('click',()=>{window.open("https://twitter.com/khydra98");})

_initScene.addEventListener('click',()=>{
	_screen.removeChild(_initScene);
	soundStart.load();
	soundStart.play();
	loadMenuScene();
})




loadInitScene();

