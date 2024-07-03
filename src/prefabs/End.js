
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { gameData } from "../GameScene";
import Level1 from "../levels/Level1";
/* END-USER-IMPORTS */

export default class End extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 739.1999225444039, y ?? 542.5305074580895);

		// new_Piskel__1_
		const new_Piskel__1_ = scene.add.image(0.8000774555961243, -0.5305074580894598, "New Piskel (1)");
		new_Piskel__1_.scaleX = 2;
		new_Piskel__1_.scaleY = 2;
		this.add(new_Piskel__1_);

		// end
		const end = scene.physics.add.image(1.8000774555961243, 1.4694925419105402, "end");
		end.scaleX = 0.2;
		end.scaleY = 0.2;
		end.body.moves = false;
		end.body.allowGravity = false;
		end.body.setSize(360, 360, false);
		this.add(end);

		this.end = end;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		/** @type {Level1} */
		this.level = scene;

		
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Image} */
	end;

	/* START-USER-CODE */

	awake() {
		console.log(gameData.player, this.end);
		/* this.level.physics.add.overlap(gameData.player, this.end, () => {
			gameData.level += 1;
			gameData.playerLive = 4
			gameData.playerLiveLabel.setLive(gameData.playerLive)
			this.level.scene.remove("Level1");
			this.level.scene.launch("Level2");
		}); */
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
