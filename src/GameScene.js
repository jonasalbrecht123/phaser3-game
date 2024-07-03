import Phaser from 'phaser'

import ScoreLabel from './ScoreLabel'
import BombSpawner from './BombSpawner'
import PlayerLabel from './PlayerLabel'
import Level1 from './levels/Level1'
import Player from './prefabs/Player'

const GROUND_KEY = 'ground'
const STAR_KEY = 'star'
const BOMB_KEY = 'bomb'
const DUDE_KEY = 'dude'

export const gameData = {
	player: undefined,
	playerLive: 3,
	playerLiveLabel: undefined,
	scoreLabel : undefined,
	immunity: 0,
	level: 1,
}

export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('GameScene')
	
    this.player = undefined
    this.cursors = undefined
    
    this.stars = undefined
    this.bombSpawner = undefined
	this.newlife = 0
    this.gameOver = false
    }

	preload()
	{
     
		this.load.image(GROUND_KEY, 'assets/platform.png')
		this.load.image(STAR_KEY, 'assets/star.png')
		this.load.image(BOMB_KEY, 'assets/bomb.png')

		this.load.spritesheet( DUDE_KEY, 
			'assets/dude.png',
			{ frameWidth: 32, frameHeight: 48 }
		)
		this.load.pack('assets', 'assets/asset-pack.json')
	}

	create()
	{
		gameData.playerLive = 3
		 
		this.level = this.scene.launch('Level1')
		this.scene.launch('UIScene')

	}

	dead() {
		this.gameOver = true
		this.physics.pause()
		gameData.playerLive = 0
	}

}
