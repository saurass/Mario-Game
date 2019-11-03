class Util {
	static imageCache = {};

	static loadImg(imgSrc) {
		return new Promise((resolve, reject) => {
			let img = new Image();
			img.src = imgSrc;
			img.onload = function() {
				Util.imageCache[imgSrc] = img;
				resolve(img);
			}
			img.onerror = reject;
		});
	}

	static loadImgResources(resourcesArr, callback) {
		let promiseArr = [];
		resourcesArr.forEach(function(res) {
			promiseArr.push(Util.loadImg(res));
		});
		Promise.all(promiseArr).then(function() {
			callback();
		});
	}

	static sleep(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, ms)
		});
	}
}