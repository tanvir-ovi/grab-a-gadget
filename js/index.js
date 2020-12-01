function randomGenerator() {
	let audio = new Audio("audio/winner.mp3");
	audio.play();
	let randomNumber = Math.floor(Math.random()*50)+1;
	document.querySelector(".winner").innerHTML=`Winner of this giveway is number ${randomNumber}`;
	document.querySelector(".winner").style.fontSize="3.5rem";
	$("body").addClass("game-over")
		setTimeout(function() {
			$("body").removeClass("game-over")
		}, 200);

}

