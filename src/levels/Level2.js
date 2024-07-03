
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "../prefabs/Player";
import Platforms from "../prefabs/Platforms";
import End from "../prefabs/End";
/* START-USER-IMPORTS */
import GameLogic from "../GameLogic";
/* END-USER-IMPORTS */

export default class Level2 extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// player
		const player = new Player(this, 687, 1326);
		this.add.existing(player);
		player.visible = true;

		// platforms
		const platforms = this.add.container(0, 0);

		// platforms_1
		const platforms_1 = new Platforms(this, 700, 1526);
		platforms_1.scaleX = 1;
		platforms_1.scaleY = 5.8;
		platforms.add(platforms_1);

		// platforms_3
		const platforms_3 = new Platforms(this, 1079, 1526);
		platforms_3.scaleX = 1;
		platforms_3.scaleY = 8.902342010902576;
		platforms.add(platforms_3);

		// platforms_4
		const platforms_4 = new Platforms(this, 1317682, 1526);
		platforms.add(platforms_4);

		// platforms_6
		const platforms_6 = new Platforms(this, 1404, 1633);
		platforms_6.scaleX = 1;
		platforms_6.scaleY = 2.182095839447032;
		platforms.add(platforms_6);

		// platforms_2
		const platforms_2 = new Platforms(this, 1722, 1526);
		platforms_2.scaleX = 1;
		platforms_2.scaleY = 8.979325499491111;
		platforms.add(platforms_2);

		// new_Piskel__3_
		const new_Piskel__3_ = this.add.image(1346, 1351, "New Piskel (3)");
		new_Piskel__3_.scaleX = 3.5;
		new_Piskel__3_.scaleY = 3.5;

		// lava_removebg_preview
		const lava_removebg_preview = this.add.tileSprite(1340, 1518, 543, 459, "Lava-removebg-preview");
		lava_removebg_preview.scaleX = 0.3;
		lava_removebg_preview.scaleY = 0.3;

		// lava_removebg_preview_1
		const lava_removebg_preview_1 = this.add.tileSprite(1462, 1518, 543, 459, "Lava-removebg-preview");
		lava_removebg_preview_1.scaleX = 0.3;
		lava_removebg_preview_1.scaleY = 0.3;

		// lava_removebg_preview_2
		const lava_removebg_preview_2 = this.add.tileSprite(1462, 1619, 543, 459, "Lava-removebg-preview");
		lava_removebg_preview_2.scaleX = 0.3;
		lava_removebg_preview_2.scaleY = 0.3;
		lava_removebg_preview_2.angle = -180;

		// lava_removebg_preview_3
		const lava_removebg_preview_3 = this.add.tileSprite(1340, 1616.739004548566, 543, 459, "Lava-removebg-preview");
		lava_removebg_preview_3.scaleX = 0.3;
		lava_removebg_preview_3.scaleY = 0.3;
		lava_removebg_preview_3.angle = -180;

		// end
		const end = new End(this, 1852, 933);
		this.add.existing(end);

		this.player = player;
		this.platforms = platforms;
		this.end = end;

		this.events.emit("scene-awake");
	}

	/** @type {Player} */
	player;
	/** @type {Phaser.GameObjects.Container} */
	platforms;
	/** @type {End} */
	end;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		for (const platform of this.platforms.list) {
			// @ts-ignore
			platform.refreshBody();
		}
		this.createColliders()

		this.cameras.main.startFollow(this.player)
		this.cursors = this.input.keyboard.createCursorKeys();
		this.gameLogic = new GameLogic();
	}

	createColliders()
    {
		this.physics.add.collider(this.player, this.platforms.list)
		// starsCollider
		//this.physics.add.collider(this.stars.list, this.platforms.list);

		// playerStarCollider
		//this.physics.add.overlap(this.player, this.stars.list, (obj1, obj2) => this.gameLogic.collectStar(obj1, obj2, this.bombSpawner), undefined, this);

		// playerBombCollider
		//this.physics.add.overlap(this.player, this.bombSpawner.group, (obj1, obj2) => this.gameLogic.hitBomb(this, obj1, obj2), undefined, this);

		// bombCollider
		//this.physics.add.collider(this.bombSpawner.group, this.platforms.list);

		this.physics.add.overlap(this.player, this.end.end, () => this.gameLogic.hitEnd(this)); 
	}

	 update()
	{
        this.gameLogic.update(this.player, this.cursors)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
