function Brick(brickObj) {

	this.brickObj = brickObj;
	this.brickImgSrc = "./assets/images/field-element/brick.jpg";

	this.render = function(ctx) {
		let min = this.brickObj[0];
		let max = this.brickObj[1];
		let img = Util.imageCache[this.brickImgSrc];
		// console.log(img);
		while(max > min) {
			ctx.drawImage(img, 0, 0, (Math.min(100, max - min) / 100) * img.width, img.height, min, 630, Math.min(100, max - min), 80);
			min += 100;
		}
	}
}