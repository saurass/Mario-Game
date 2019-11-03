function Mario(enemies) {
	let ctx;
	let marioRest = "./assets/images/mario/mario-rest.png";
	let marioJump = "./assets/images/mario/mario-jump.png";
	let marioLeft = "./assets/images/mario/mario-run-left.png";
	let marioRight = "./assets/images/mario/mario-run-right.png";
	let posX = 0;
	let posY = 560;
	let jumpHeight = 100, jflag = -1;
	let runIntervalVal;
	let marioImg = marioRest;
	let img;
	let start = new Date().getTime();
	let playingAudio = null;
	let dead = false;
	let audio = {
		marioTheme: new Audio("./assets/audio/mariotheme.ogg"),
		marioSmallJump: new Audio("./assets/audio/mariosmalljump.wav"),
		marioDie: new Audio("./assets/audio/mariodie.wav")
	}

	this.render = function(context) {
		ctx = context;
		img = Util.imageCache[marioImg];
		draw();
	}

	this.handleEvent = function(event) {
		if(event.run)
			run.call(this, 2.5);
		else
			rest.call(this, event);

		if(event.left)
			run.call(this, -2.5);
		else
			rest.call(this, event);

		if(event.jump && posY == 560)
			jump.call(this);

		if(isCollided.call(this) || hasFallen.call(this))
			die.call(this);
	}

	var jump = async function() {
		marioImg = marioJump;
		audio.marioSmallJump.play();
		posY -= 2;
		console.log(posY);
		while(posY != 560) {
			marioImg = marioJump;
			await Util.sleep(1)
			posY += 2 * jflag;

			if(posY <= 400)
				jflag = 1;
		}
		jflag = -1;
	}

	var run = function(speed) {
		audio.marioTheme.play();
		posX += speed;
		let timeStamp = new Date().getTime();
		if(timeStamp - start > 200 && posY == 560) {
			if(marioImg == marioLeft)
				marioImg = marioRight;
			else
				marioImg = marioLeft;
			start = timeStamp;
		}

	}

	var rest = function(event) {
		if(!event.run && !event.left && posY == 560)
			marioImg = marioRest;
	}

	var isCollided = function() {
		for(var i = 0; i < enemies.length; i++) {
			if(Math.abs(enemies[i].posX - posX) <= 51)
				return true;
		}
		return false;
	}

	var hasFallen = function() {
		return false;
	}

	var die = function() {
		for(sound in audio)
			audio[sound].pause();
		dead = true;
		posY += 500;
		audio.marioDie.play();
	}

	var draw = function() {
		ctx.drawImage(img, posX, posY, 50, 70);
	}
}