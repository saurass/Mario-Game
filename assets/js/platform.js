function Platform(ctx, level, player) {

	this.ctx = ctx;
	this.level = level;
	this.mario = player;

	function drawBrick() {
		let bricks = this.level.bricks;
		for(let i = 0; i < bricks.length; i++) {
			let brick = new Brick(bricks[i]);
			brick.render(this.ctx);
		}
	}

	function loadEnemies() {
		let enemies = this.level.enemies;
		for(let i = 0; i < enemies.length; i++) {
			enemies[i].render(this.ctx);
		}
	}

	function paintBackground() {
		this.ctx.fillStyle = this.level.background;
		this.ctx.fillRect(0, 0, 1500, 710);
	}

	function bootPlayer() {
		this.mario.render(this.ctx);
	}

	this.render = function() {
		paintBackground.call(this);
		drawBrick.call(this);
		loadEnemies.call(this);
		bootPlayer.call(this);
	}

}