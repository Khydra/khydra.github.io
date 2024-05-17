var soundStart = new Audio('./sfx/start.wav');
var soundSelect = new Audio('./sfx/select.wav');

var soundHover = new Audio('./sfx/hover.mp3');
var soundHover2 = new Audio('./sfx/hover2.wav');
var soundHover3 = new Audio('./sfx/hover3.ogg');
var soundClick = new Audio('./sfx/click.wav');
var soundClick2 = new Audio('./sfx/click2.wav');
var soundClick3 = new Audio('./sfx/click3.wav');

var soundDelete = new Audio('./sfx/delete.wav');
var soundCorrect = new Audio('./sfx/correct.wav');
var soundIncorrect = new Audio('./sfx/incorrect.wav');
var soundAlmost = new Audio('./sfx/almost.flac');

var soundDead = new Audio('./sfx/dead.wav');
var soundBuy = new Audio('./sfx/buy.wav');

var soundArray = [soundStart, soundSelect, soundHover, soundHover2, soundHover3, soundClick, soundClick2, soundClick3, soundDelete, soundCorrect, soundIncorrect, soundAlmost, soundDead, soundBuy];

soundArray.forEach((sound)=>{sound.volume=volume/100});

