
// player object
const player = {
	character: $('#player'),
	playerPos: 0
}

let difficulty = 1;
let speed;

console.log(player)

// ai object
const ai = {
	character: $('#ai'),
	aiPos: 0
}

console.log(ai)

let playerPosition = 0;
let aiPosition = 0;


// move the player
player.character.click(function() {
	console.log(this);

	setTimeout(function() {
		player.character.animate({
			'left' : `${playerPosition+=100}px`,
		})
		player.playerPos = playerPosition;

		result();


		}, 300)

	
})

const result = () => {
	if(player.playerPos === 1000) {
		alert('player won!')
		return true;
	}

	if(ai.aiPos >= 1000) {
		alert('AI won!');
		return true;
	}
	else {return false}

}


$("#start").click(function(){

	const moveAI = () =>{
		speed = 100* (difficulty * 0.7)

		ai.character.animate({
			'left' : `${(aiPosition= aiPosition+speed)}px`,
		})
		ai.aiPos = aiPosition;

		if(result()) {
			clearInterval(myvar);
		}
	}

	let myvar = setInterval(moveAI, 500);
})


$("#easy").click(function(){

	difficulty = 1;

})

$("#medium").click(function(){

	difficulty = 2;

})

$("#hard").click(function(){

	difficulty = 3;

})

$("#reset").click(function(){

	playerPosition = 0;
	aiPosition = 0;
	player.playerPos = 0;
	ai.aiPos = 0;
	ai.character.animate({
			'left' : `none`,
		})
	player.character.animate({
			'left' : `none`,
		})
	clearInterval(myvar);

})