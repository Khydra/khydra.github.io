document.getElementById("games-web").addEventListener('click',(e)=>{
	startGame(e.target.id.slice(5));

});

function startGame(id) {
	if (id==0) {
		document.getElementsByClassName("tittle-web")[0].innerHTML = `PENGUIN CLICKER <span class='red-web'>beta </span>`

	} else {
		document.getElementsByClassName("empty-web")[0].innerHTML = "<span class='blue-web'>${ </span>"+
			"NO DISPONBLE <span class='red-web'>;( </span><span class='blue-web'> }</span>";
	}
}

function removeGame(id) {

}
