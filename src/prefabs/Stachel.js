
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Stachel extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 406, y ?? 254, texture || "New Piskel (3)", frame);

		this.scaleX = 2;
		this.scaleY = 2;
		scene.physics.add.existing(this, true);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.setSize(16, 16, false);

		/* START-USER-CTR-CODE */
		
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
