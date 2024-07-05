
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "../prefabs/Player";
import Platforms from "../prefabs/Platforms";
import End from "../prefabs/End";
import Stachel from "../prefabs/Stachel";
import Cloud from "../prefabs/Cloud";
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
		const player = new Player(this, 687, 1291);
		this.add.existing(player);
		player.visible = true;

		// platforms
		const platforms = this.add.container(0, 0);

		// platforms_1
		const platforms_1 = new Platforms(this, 700, 1477);
		platforms_1.scaleX = 0.9966715830603535;
		platforms_1.scaleY = 6.265715774250138;
		platforms.add(platforms_1);

		// platforms_4
		const platforms_4 = new Platforms(this, 1317682, 1526);
		platforms.add(platforms_4);

		// platforms_3
		const platforms_3 = new Platforms(this, 1081, 1477);
		platforms_3.scaleX = 0.9966715830603535;
		platforms_3.scaleY = 6.265715774250138;
		platforms.add(platforms_3);

		// platforms_2
		const platforms_2 = new Platforms(this, 1984, 1477);
		platforms_2.scaleX = 0.6198819463138973;
		platforms_2.scaleY = 6.265715774250138;
		platforms.add(platforms_2);

		// platforms_5
		const platforms_5 = new Platforms(this, 3374, 1101);
		platforms_5.scaleX = 0.6198819463138973;
		platforms_5.scaleY = 6.265715774250138;
		platforms.add(platforms_5);

		// end
		const end = new End(this, 2065, 103);
		this.add.existing(end);

		// stachel_container
		const stachel_container = this.add.container(0, 0);

		// stachel
		const stachel = new Stachel(this, 751, 1361);
		stachel_container.add(stachel);

		// stachel_1
		const stachel_1 = new Stachel(this, 3266, 985);
		stachel_container.add(stachel_1);

		// stachel_2
		const stachel_2 = new Stachel(this, 3295, 985);
		stachel_container.add(stachel_2);

		// stachel_3
		const stachel_3 = new Stachel(this, 3325, 985);
		stachel_container.add(stachel_3);

		// stachel_4
		const stachel_4 = new Stachel(this, 3401, 985);
		stachel_container.add(stachel_4);

		// stachel_5
		const stachel_5 = new Stachel(this, 3434, 985);
		stachel_container.add(stachel_5);

		// stein_boden
		const stein_boden = this.add.image(1359, 1533, "Stein boden");
		stein_boden.scaleX = 1.1790779621865843;
		stein_boden.scaleY = 0.4976786900835035;

		// stein_boden_1
		const stein_boden_1 = this.add.image(1602, 1533, "Stein boden");
		stein_boden_1.scaleX = 1.1790779621865843;
		stein_boden_1.scaleY = 0.4976786900835035;

		// stein_boden_2
		const stein_boden_2 = this.add.image(1115, 1533, "Stein boden");
		stein_boden_2.scaleX = 1.1790779621865795;
		stein_boden_2.scaleY = 0.4976786900835035;

		// stein_boden_3
		const stein_boden_3 = this.add.image(871, 1533, "Stein boden");
		stein_boden_3.scaleX = 1.1790779621865775;
		stein_boden_3.scaleY = 0.4976786900835035;

		// stein_boden_4
		const stein_boden_4 = this.add.image(628, 1533, "Stein boden");
		stein_boden_4.scaleX = 1.1790779621865797;
		stein_boden_4.scaleY = 0.4976786900835035;

		// stein_boden_5
		const stein_boden_5 = this.add.image(1858, 1533, "Stein boden");
		stein_boden_5.scaleX = 1.1790779621865843;
		stein_boden_5.scaleY = 0.4976786900835035;

		// clouds
		const clouds = this.add.container(0, 0);

		// cloud
		const cloud = new Cloud(this, 1077, 1269);
		cloud.scaleX = 2;
		cloud.scaleY = 2;
		clouds.add(cloud);

		// cloud_1
		const cloud_1 = new Cloud(this, 1306, 1160);
		cloud_1.scaleX = 2;
		cloud_1.scaleY = 2;
		clouds.add(cloud_1);

		// cloud_2
		const cloud_2 = new Cloud(this, 1697, 1241);
		cloud_2.scaleX = 2;
		cloud_2.scaleY = 2;
		clouds.add(cloud_2);

		// cloud_3
		const cloud_3 = new Cloud(this, 2235, 1125);
		cloud_3.scaleX = 2;
		cloud_3.scaleY = 2;
		clouds.add(cloud_3);

		// cloud_4
		const cloud_4 = new Cloud(this, 2659, 1035);
		cloud_4.scaleX = 2;
		cloud_4.scaleY = 2;
		clouds.add(cloud_4);

		// cloud_5
		const cloud_5 = new Cloud(this, 3814, 929);
		cloud_5.scaleX = 2;
		cloud_5.scaleY = 2;
		clouds.add(cloud_5);

		// lava_container
		const lava_container = this.add.container(0, 0);

		// lava_removebg_preview
		const lava_removebg_preview = this.physics.add.staticImage(1341, 1474, "Lava-removebg-preview");
		lava_removebg_preview.scaleX = 0.29754812758203547;
		lava_removebg_preview.scaleY = 0.3324682019039274;
		lava_removebg_preview.body.setOffset(0, 125);
		lava_removebg_preview.body.setSize(543, 459, false);
		lava_container.add(lava_removebg_preview);

		// lava_removebg_preview_1
		const lava_removebg_preview_1 = this.physics.add.staticImage(1462, 1474, "Lava-removebg-preview");
		lava_removebg_preview_1.scaleX = 0.29754812758203547;
		lava_removebg_preview_1.scaleY = 0.3324682019039274;
		lava_removebg_preview_1.body.setOffset(0, 127);
		lava_removebg_preview_1.body.setSize(543, 459, false);
		lava_container.add(lava_removebg_preview_1);

		// lava_removebg_preview_2
		const lava_removebg_preview_2 = this.physics.add.staticImage(1583, 1474, "Lava-removebg-preview");
		lava_removebg_preview_2.scaleX = 0.29754812758203547;
		lava_removebg_preview_2.scaleY = 0.3324682019039274;
		lava_removebg_preview_2.body.setOffset(0, 127);
		lava_removebg_preview_2.body.setSize(543, 459, false);
		lava_container.add(lava_removebg_preview_2);

		// lava_removebg_preview_3
		const lava_removebg_preview_3 = this.physics.add.staticImage(1704, 1474, "Lava-removebg-preview");
		lava_removebg_preview_3.scaleX = 0.29754812758203547;
		lava_removebg_preview_3.scaleY = 0.3324682019039274;
		lava_removebg_preview_3.body.setOffset(0, 127);
		lava_removebg_preview_3.body.setSize(543, 459, false);
		lava_container.add(lava_removebg_preview_3);

		// lava_removebg_preview_4
		const lava_removebg_preview_4 = this.physics.add.staticImage(1799.5052490234375, 1474, "Lava-removebg-preview");
		lava_removebg_preview_4.scaleX = 0.29754812758203547;
		lava_removebg_preview_4.scaleY = 0.3324682019039274;
		lava_removebg_preview_4.body.setOffset(0, 127);
		lava_removebg_preview_4.body.setSize(543, 459, false);
		lava_container.add(lava_removebg_preview_4);

		// stein_boden_6
		const stein_boden_6 = this.add.image(2112, 1533, "Stein boden");
		stein_boden_6.scaleX = 1.1790779621865843;
		stein_boden_6.scaleY = 0.4976786900835035;

		// stein_boden_7
		const stein_boden_7 = this.add.image(3375, 1171, "Stein boden");
		stein_boden_7.scaleX = 1.1372317441597861;
		stein_boden_7.scaleY = 0.5116742396806367;

		// hearts
		const hearts = this.add.layer();

		// cloud (prefab fields)
		cloud.maxmove = 250;
		cloud.velocity = 70;

		// cloud_1 (prefab fields)
		cloud_1.maxmove = 300;
		cloud_1.velocity = 80;

		// cloud_2 (prefab fields)
		cloud_2.maxmove = 400;
		cloud_2.velocity = 80;

		// cloud_3 (prefab fields)
		cloud_3.maxmove = 400;
		cloud_3.velocity = 80;

		// cloud_4 (prefab fields)
		cloud_4.maxmove = 400;
		cloud_4.velocity = 80;

		// cloud_5 (prefab fields)
		cloud_5.maxmove = 600;
		cloud_5.velocity = 80;

		this.player = player;
		this.platforms = platforms;
		this.end = end;
		this.stachel_container = stachel_container;
		this.clouds = clouds;
		this.lava_container = lava_container;
		this.hearts = hearts;

		this.events.emit("scene-awake");
	}

	/** @type {Player} */
	player;
	/** @type {Phaser.GameObjects.Container} */
	platforms;
	/** @type {End} */
	end;
	/** @type {Phaser.GameObjects.Container} */
	stachel_container;
	/** @type {Phaser.GameObjects.Container} */
	clouds;
	/** @type {Phaser.GameObjects.Container} */
	lava_container;
	/** @type {Phaser.GameObjects.Layer} */
	hearts;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.gameLogic = new GameLogic(this);

		for (const obj of this.platforms.list) {
			// @ts-ignore
			obj.refreshBody();
		}
		for (const obj of this.stachel_container.list) {
			// @ts-ignore
			obj.refreshBody();
		}

		for (const obj of this.lava_container.list) {
			// @ts-ignore
			obj.refreshBody();
		}
		if (this.hearts) {
			for (const obj of this.hearts.list) {
				// @ts-ignore
				obj.refreshBody();
			}
		}
		this.createColliders()

		this.cameras.main.startFollow(this.player)
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	createColliders()
    {
		// stachelCollider
		this.physics.add.collider(this.player, this.stachel_container.list, () => this.gameLogic.hitStachel(this.player));

		this.physics.add.collider(this.player, this.platforms.list)

		this.clouds.iterate((cloud)=> {
			this.physics.add.collider(this.player, cloud)
		})

		this.physics.add.overlap(this.player, this.lava_container.list, () => this.gameLogic.hitLava())

		// starsCollider
		//this.physics.add.collider(this.stars.list, this.platforms.list);

		// playerStarCollider
		//this.physics.add.overlap(this.player, this.stars.list, (obj1, obj2) => this.gameLogic.collectStar(obj1, obj2, this.bombSpawner), undefined, this);

		// playerBombCollider
		//this.physics.add.overlap(this.player, this.bombSpawner.group, (obj1, obj2) => this.gameLogic.hitBomb(this, obj1, obj2), undefined, this);

		// bombCollider
		//this.physics.add.collider(this.bombSpawner.group, this.platforms.list);

		this.physics.add.overlap(this.player, this.end.end, () => this.gameLogic.hitEnd());

		if (this.hearts) {
			this.physics.add.overlap(this.player, this.hearts.list, (pl, heart) => this.gameLogic.hitHeart(heart)); 
		}
	}

	 update()
	{
        this.gameLogic.update(this.player, this.cursors)
		this.clouds.iterate((cloud)=> {
			cloud.update()
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
