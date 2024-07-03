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
		this.physics.world.setBounds(-300, 0, 10000, 100000)
		gameData.playerLive = 3
		 
		

		//this.bombSpawner = new BombSpawner(this, BOMB_KEY)
		//const bombsGroup = this.bombSpawner.group
		
		//this.player = this.createPlayer()
		//gameData.player = this.player
		//this.stars = this.createStars()
        

		//const platforms = this.createPlatforms()
       

		
        //this.physics.add.collider(this.player, bombsGroup, this.hitBomb, null, this)

		//this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this)

		//const voi = this.scene.scene.add.rectangle(0, 1950, 100000, 50)
		//const borders = this.physics.add.staticGroup()
		//borders.add(voi)
		//this.physics.add.overlap(this.player, borders, this.dead, null, this)

		//this.cursors = this.input.keyboard.createCursorKeys()
		//const l = new Level1()
		//this.scene.launch(l)
		/** @type {Level1} */
		// @ts-ignore
		this.level = this.scene.launch('Level1')

		//this.physics.add.collider(this.player, this.level.platforms.list)

		//this.cameras.main.startFollow(this.player)

		this.scene.launch('UIScene')

	}
		

        collectStar(player, star)
        {
            star.disableBody(true, true)

            gameData.scoreLabel.add(10)
			this.newlife +=1

            if (this.stars.countActive(true) === 0)
            {
				gameData.level += 1;
				//this.platforms.children.iterate((child) => {
				//	child.destroy()
				//})
				this.platforms.clear()
				this.createPlatforms()
                //  A new batch of stars to collect
                this.stars.children.iterate((child) => {
                    child.enableBody(true, child.x, 1000, true, true)
                })
            }
        	
			if (this.newlife === 5)
			{
				gameData.playerLive +=1
				gameData.playerLiveLabel.setLive(gameData.playerLive)
				this.newlife = 0
			}

                this.bombSpawner.spawn(player.x)
        }

    createPlatforms()
    {
        this.platforms = this.physics.add.staticGroup()

		this.platforms.create(400, 1568, GROUND_KEY).setScale(2).refreshBody()
		this.platforms.create(1200, 1568, GROUND_KEY).setScale(2).refreshBody()
		this.platforms.create(1800, 1568, GROUND_KEY).setScale(2).refreshBody()
		this.platforms.create(2400, 1568, GROUND_KEY).setScale(2).refreshBody()
	
		if (gameData.level === 1) {
			this.platforms.create(600, 1400, GROUND_KEY)
			this.platforms.create(1400, 1300, GROUND_KEY)
			this.platforms.create(50, 1250, GROUND_KEY)
			this.platforms.create(750, 1220, GROUND_KEY)
			this.platforms.create(2250, 1220, GROUND_KEY)
		} else if (gameData.level === 2) {
			this.platforms.create(600, 1400, GROUND_KEY)
			this.platforms.create(1400, 1300, GROUND_KEY)
			this.platforms.create(50, 1250, GROUND_KEY)
			this.platforms.create(750, 1220, GROUND_KEY)
		}

		this.physics.add.collider(this.player, this.platforms)
		this.physics.add.collider(this.stars, this.platforms)
		this.physics.add.collider(this.bombSpawner.group, this.platforms)
		return this.platforms
	}

    createPlayer()
    {
		const player = new Player(this, 79, 1465);
		//const player = this.physics.add.sprite(100, 1450, DUDE_KEY)
		player.setBounce(0.2)
		player.setCollideWorldBounds(true)

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		})
		
		this.anims.create({
			key: 'turn',
			frames: [ { key: DUDE_KEY, frame: 4 } ],
			frameRate: 20
		})
		
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		})
        return player
    }
    createStars()
	{
		let stars = this.physics.add.group({
			key: STAR_KEY,
			repeat: 15,
			setXY: { x: 12, y: 1000, stepX: 100 },
		})
		
		stars.children.iterate((child) => {
			child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
		})

		return stars
	}

    hitBomb(player, bomb)
	{   
		if (gameData.immunity === 0) {
			gameData.playerLive-=1
		gameData.playerLiveLabel?.reduce()
		gameData.immunity = 1000
		this.time.addEvent({
			delay: 1000,
			callback: () => {
			gameData.immunity = 0
			}
		})	
		if(gameData.playerLive == 0)
		{ 
			this.physics.pause()

			player.setTint(0xff0000)

			player.anims.play('turn')
		
			this.gameOver = true
		}else {
			player.setTint(0xff0000)
			this.time.addEvent({
			delay: 500,
			callback: () => {
				player.setTint()
			}
			})
		}
	}
	}

	dead() {
		this.gameOver = true
		this.physics.pause()
		gameData.playerLive = 0
	}

}
