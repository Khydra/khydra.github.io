var $button0 = new Audio('./sfx/test1.wav');
var $clickEnemy = new Audio('./sfx/test2.wav');
var $tab = new Audio('./sfx/test3.wav');
var $unitClick = new Audio('./sfx/test5.wav');

const soundEffects = [$button0, $clickEnemy, $tab, $unitClick];

const button0Sound = () => {
	$button0.load();
	$button0.play();
}

const unitClickSound = () => {
	$unitClick.load();
	$unitClick.play();
}

const tabSound = () => {
	$tab.load();
	$tab.play();
}