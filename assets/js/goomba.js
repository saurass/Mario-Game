function Goomba(initialPos, finalPos) {

	let enemyImgSrc = './assets/images/enemies/goomba-live.png';
	let ctx, img, pos = initialPos;
	let ipos = pos;
	let fpos = finalPos;
	let vX = 1;

	this.render = function(context) {
		ctx = context;
		img = Util.imageCache[enemyImgSrc];
		draw();
	}

	Object.defineProperty(this, "posX", {
		get: function() {
			return pos;
		}
	});

	var draw = function() {
		pos += vX;
		if(pos < ipos || pos > fpos - 50)
			vX *= -1;
		ctx.drawImage(img, pos, 580, 50, 50);
	}
}