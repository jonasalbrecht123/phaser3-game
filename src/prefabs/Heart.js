
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Heart extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 438.00000000000006, y ?? 297.00000000000006, texture || "heart", frame);

		this.scaleX = 2.5;
		this.scaleY = 2.5;
		this.setOrigin(0.4812500000000002, 0.6971153846153847);
		scene.physics.add.existing(this, true);
		this.body.setOffset(56, 85);
		this.body.setSize(11, 10, false);

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
