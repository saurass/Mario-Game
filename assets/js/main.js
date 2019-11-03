var canvas = document.getElementById("mario-game");
canvas.height = 710;
canvas.width = 1500;

var ctx = canvas.getContext("2d");

level = {
	background: "#0000ff",
	bricks: [[0, 400], [500, 660], [700, 1000]],
	enemies: [new Goomba(200, 400)],
	imgResources: [
		'./assets/images/enemies/goomba-live.png',
		'./assets/images/enemies/goomba-flat.jpg',
		'./assets/images/field-element/brick.jpg',
		'./assets/images/mario/mario-rest.png',
		'./assets/images/mario/mario-jump.png',
		'./assets/images/mario/mario-run-left.png',
		'./assets/images/mario/mario-run-right.png',
	]
}

Util.loadImgResources(level.imgResources, main);

var event = new Event();
event.boot();
var mario = new Mario(level.enemies);
var platform = new Platform(ctx, level, mario);


function main() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	mario.handleEvent(event);
	platform.render();
	requestAnimationFrame(main);
}