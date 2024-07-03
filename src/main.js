import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import GameScene from './GameScene'
import UIScene from './UIScene'
import BackgroundScene from './BackgroundScene'
import Level1 from './levels/Level1'
import Level2 from './levels/Level2'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	antialias: false,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
		},
	},
	scene: [BackgroundScene, GameScene, Level1, Level2, UIScene],
}

export default new Phaser.Game(config)
