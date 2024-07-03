
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bombs extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 371, y ?? 234, texture || "bomb", frame);

		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1;
		this.body.bounce.y = 1;
		//this.body.allowGravity = false;
		//this.body.collideWorldBounds = true;
		this.body.setSize(14, 14, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
