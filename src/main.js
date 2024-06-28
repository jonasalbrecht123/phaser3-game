import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import GameScene from './GameScene'
import UIScene from './UIScene'
import BackgroundScene from './BackgroundScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
		},
	},
	scene: [BackgroundScene, GameScene, UIScene],
}

export default new Phaser.Game(config)
