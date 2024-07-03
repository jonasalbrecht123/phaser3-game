
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 405, y ?? 202, texture || "dude", frame ?? 4);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 48, false);

		/* START-USER-CTR-CODE */
		
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create() {
	}

	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
