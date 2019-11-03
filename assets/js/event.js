function Event() {
	this.run = false;
	this.left = false;
	this.jump = false;

	this.key = null;

	this.setKey = function(keyEvent, status) {
		switch(keyEvent.keyCode) {
			case 38:
				this.jump = status; break;
			case 39:
				this.run = status; break;
			case 37:
				this.left = status; break;
		}
	}

	this.boot = function() {
		let self = this;
		document.addEventListener('keydown', function(e) {
			self.setKey(e, true);
		});

		document.addEventListener('keyup', function(e) {
			self.setKey(e, false);
		});
	}

}