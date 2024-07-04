
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Cloud extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 129, y ?? 126, texture || "Cloud", frame);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.checkCollision.down = false;
		this.body.pushable = false;
		this.body.setOffset(0, 40);
		this.body.setSize(96, 19, false);

		/* START-USER-CTR-CODE */
		this.origX =  x ?? 129;
		this.direction = "right";

		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	maxmove = 0;
	/** @type {number} */
	velocity = 50;

	/* START-USER-CODE */

	update() {
		if (!this.maxmove) return;

		if (this.direction === "right") {
			this.setVelocityX(this.velocity);
		} else {
			this.setVelocityX(-this.velocity);
		}
		if (this.x >= this.origX + this.maxmove ) {
			this.direction = "left"
		} else if (this.x <= this.origX) {
			this.direction = "right"
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
