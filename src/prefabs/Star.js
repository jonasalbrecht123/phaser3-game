
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Star extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 350, y ?? 257, texture || "star", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(24, 22, false);

		/* START-USER-CTR-CODE */
		this.setBounceY(Phaser.Math.FloatBetween(0.6, 0.9))
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
