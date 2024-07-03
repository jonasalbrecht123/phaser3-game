
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Platforms from "../prefabs/Platforms";
import Star from "../prefabs/Star";
import Heart from "../prefabs/Heart";
import End from "../prefabs/End";
import Player from "../prefabs/Player";
/* START-USER-IMPORTS */
import Bomb from "../prefabs/Bombs"
import BombSpawner from "../BombSpawner";
import GameScene, { gameData } from "../GameScene";
import GameLogic from "../GameLogic";
const BOMB_KEY = 'bomb'
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// platforms
		const platforms = this.add.layer();

		// platform
		const platform = new Platforms(this, 600, 1400);
		platforms.add(platform);

		// platform_1
		const platform_1 = new Platforms(this, 50, 1250);
		platforms.add(platform_1);

		// platform_2
		const platform_2 = new Platforms(this, 765, 1189);
		platforms.add(platform_2);

		// platform_3
		const platform_3 = new Platforms(this, 396, 1568);
		platform_3.scaleX = 2;
		platform_3.scaleY = 2;
		platforms.add(platform_3);

		// platform_4
		const platform_4 = new Platforms(this, 1195, 1568);
		platform_4.scaleX = 2;
		platform_4.scaleY = 2;
		platforms.add(platform_4);

		// platform_5
		const platform_5 = new Platforms(this, 1498, 1257);
		platforms.add(platform_5);

		// platform_6
		const platform_6 = new Platforms(this, 1989, 1568);
		platform_6.scaleX = 2;
		platform_6.scaleY = 2;
		platforms.add(platform_6);

		// platform_7
		const platform_7 = new Platforms(this, 1702.8918222252694, 1075.348054106187);
		platforms.add(platform_7);

		// platform_9
		const platform_9 = new Platforms(this, 2402, 1178);
		platform_9.setOrigin(0.5526538402404685, 0.5);
		platforms.add(platform_9);

		// platform_10
		const platform_10 = new Platforms(this, 2778, 1568);
		platform_10.scaleX = 2;
		platform_10.scaleY = 2;
		platforms.add(platform_10);

		// platform_8
		const platform_8 = new Platforms(this, 199, 1568);
		platform_8.scaleX = 2;
		platform_8.scaleY = 2;
		platforms.add(platform_8);

		// stars
		const stars = this.add.layer();

		// start
		const start = new Star(this, 0, 792);
		stars.add(start);

		// start_1
		const start_1 = new Star(this, 847, 792);
		stars.add(start_1);

		// start_2
		const start_2 = new Star(this, 175, 792);
		stars.add(start_2);

		// start_3
		const start_3 = new Star(this, 1677, 792);
		stars.add(start_3);

		// start_4
		const start_4 = new Star(this, 361, 792);
		stars.add(start_4);

		// start_5
		const start_5 = new Star(this, 1435, 792);
		stars.add(start_5);

		// start_7
		const start_7 = new Star(this, 525, 792);
		stars.add(start_7);

		// start_8
		const start_8 = new Star(this, 1080, 792);
		stars.add(start_8);

		// start_9
		const start_9 = new Star(this, 721, 792);
		stars.add(start_9);

		// start_10
		const start_10 = new Star(this, 1201, 792);
		stars.add(start_10);

		// start_6
		const start_6 = new Star(this, 1797, 792);
		stars.add(start_6);

		// start_11
		const start_11 = new Star(this, 2098, 792);
		stars.add(start_11);

		// start_12
		const start_12 = new Star(this, 2356, 792);
		stars.add(start_12);

		// start_13
		const start_13 = new Star(this, 2499, 792);
		stars.add(start_13);

		// bombs
		const bombs = this.add.layer();

		// heart
		const heart = new Heart(this, 1750, 1366);
		this.add.existing(heart);

		// end
		const end = new End(this, 308, 1478);
		this.add.existing(end);

		// player
		const player = new Player(this, 16, 1398);
		this.add.existing(player);

		// collider
		this.physics.add.collider(player, end, this.hitEnd);

		this.platforms = platforms;
		this.stars = stars;
		this.bombs = bombs;
		this.end = end;
		this.player = player;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	platforms;
	/** @type {Phaser.GameObjects.Layer} */
	stars;
	/** @type {Phaser.GameObjects.Layer} */
	bombs;
	/** @type {End} */
	end;
	/** @type {Player} */
	player;

	/* START-USER-CODE */

	/** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
	cursors;

	gameOver = false;

	score = 0;

	create() {

		this.editorCreate();

		for (const platform of this.platforms.list) {

			// @ts-ignore
			platform.refreshBody();
		}
		this.gameLogic = new GameLogic();
		this.bombSpawner = new BombSpawner(this, BOMB_KEY)
		this.createColliders()


		this.cameras.main.startFollow(this.player)

		this.cursors = this.input.keyboard.createCursorKeys();

		gameData.player = this.player;

		/** @type {GameScene} */
		// @ts-ignore
		//this.gameScene = this.scene.launch('GameScene')
	}

	update() {
		this.gameLogic.update(this.player, this.cursors);
	}

	createColliders()
    {
		this.physics.add.collider(this.player, this.platforms.list)
		// starsCollider
		this.physics.add.collider(this.stars.list, this.platforms.list);

		// playerStarCollider
		this.physics.add.overlap(this.player, this.stars.list, (obj1, obj2) => this.gameLogic.collectStar(obj1, obj2, this.bombSpawner), undefined, this);

		// playerBombCollider
		this.physics.add.overlap(this.player, this.bombSpawner.group, (obj1, obj2) => this.gameLogic.hitBomb(this, obj1, obj2), undefined, this);

		// bombCollider
		this.physics.add.collider(this.bombSpawner.group, this.platforms.list);

		 this.physics.add.overlap(this.player, this.end.end, () => this.gameLogic.hitEnd(this)); 
	}


	hitEnd()
	{
		console.log("end");
	}






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
