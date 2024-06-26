import Phaser from 'phaser'

import ScoreLabel from './ScoreLabel'
import BombSpawner from './BombSpawner'
import PlayerLabel from './PlayerLabel'

const GROUND_KEY = 'ground'
const STAR_KEY = 'star'
const BOMB_KEY = 'bomb'
const DUDE_KEY = 'dude'

export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('game-scene')
	
    this.player = undefined
    this.cursors = undefined
    this.scoreLabel = undefined
	this.playerLiveLabel = undefined
    this.stars = undefined
    this.bombSpawner = undefined
    this.playerLive = undefined
	this.newlife = 0
	this.level = 1
	this.immunity = 0
    this.gameOver = false
    }

	preload()
	{
        this.load.image('sky', 'assets/sky.png')
		this.load.image(GROUND_KEY, 'assets/platform.png')
		this.load.image(STAR_KEY, 'assets/star.png')
		this.load.image(BOMB_KEY, 'assets/bomb.png')
		this.load.image('Restart_Key','assets/Restart Button.png')

		this.load.spritesheet( DUDE_KEY, 
			'assets/dude.png',
			{ frameWidth: 32, frameHeight: 48 }
		)
	}

	create()
	{
		this.add.image(400, 300, 'sky')

		this.bombSpawner = new BombSpawner(this, BOMB_KEY)
		const bombsGroup = this.bombSpawner.group
		
		this.player = this.createPlayer()
		this.stars = this.createStars()
        this.playerLive = 3

		const platforms = this.createPlatforms()
		this.cameras.main.startFollow(this.player)
		this.scoreLabel = this.createScoreLabel(16, 16, 0)
        this.playerLiveLabel = this.createplayerLive(16, 48, this.playerLive)

		
        this.physics.add.collider(this.player, bombsGroup, this.hitBomb, null, this)

		this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this)

		this.cursors = this.input.keyboard.createCursorKeys()
	}

    update()
	{
        if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-160)
    
                this.player.anims.play('left', true)
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(160)
    
                this.player.anims.play('right', true)
            }
            else
            {
                this.player.setVelocityX(0)
    
                this.player.anims.play('turn')
            }
    
            if (this.cursors.up.isDown && this.player.body.touching.down)
            {
                this.player.setVelocityY(-330)
            }
        }
		

        collectStar(player, star)
        {
            star.disableBody(true, true)

            this.scoreLabel.add(10)
			this.newlife +=1

            if (this.stars.countActive(true) === 0)
            {
				this.level += 1;
				//this.platforms.children.iterate((child) => {
				//	child.destroy()
				//})
				this.platforms.clear()
				this.createPlatforms()
                //  A new batch of stars to collect
                this.stars.children.iterate((child) => {
                    child.enableBody(true, child.x, 0, true, true)
                })
            }
        	
			if (this.newlife === 5)
			{
				this.playerLive +=1
				this.playerLiveLabel.setLive(this.playerLive)
				this.newlife = 0
			}

                this.bombSpawner.spawn(player.x)
        }

    createPlatforms()
    {
        this.platforms = this.physics.add.staticGroup()

		this.platforms.create(400, 568, GROUND_KEY).setScale(2).refreshBody()
	
		if (this.level === 1) {
			this.platforms.create(600, 400, GROUND_KEY)
			this.platforms.create(50, 250, GROUND_KEY)
			this.platforms.create(750, 220, GROUND_KEY)
		} else if (this.level === 2) {
			this.platforms.create(600, 400, GROUND_KEY)
			this.platforms.create(50, 250, GROUND_KEY)
			this.platforms.create(750, 220, GROUND_KEY)
		}

		this.physics.add.collider(this.player, this.platforms)
		this.physics.add.collider(this.stars, this.platforms)
		this.physics.add.collider(this.bombSpawner.group, this.platforms)
		return this.platforms
	}

	createRestartButton()
	{
		const resetButton = this.add.image(400, 300, 'Restart_Key')
		resetButton.setInteractive()
		resetButton.setScale(0.1)
		resetButton.on('pointerdown', () => location.reload())
	}	
    createPlayer()
    {
		const player = this.physics.add.sprite(100, 450, DUDE_KEY)
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
		const stars = this.physics.add.group({
			key: STAR_KEY,
			repeat: 11,
			setXY: { x: 12, y: 0, stepX: 70 },
		})
		
		stars.children.iterate((child) => {
			child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
		})

		return stars
	}

    createScoreLabel(x, y, score)
	{
		const style = { fontSize: '32px', fill: '#000' }
		const label = new ScoreLabel(this, x, y, score, style)

		this.add.existing(label)

		return label
	}

    hitBomb(player, bomb)
	{   
		if (this.immunity === 0) {
		this.playerLive-=1
		this.playerLiveLabel.reduce()
		this.immunity = 1000
		this.time.addEvent({
			delay: 1000,
			callback: () => {
			this.immunity = 0
			}
		})	
		if(this.playerLive == 0)
		{ 
	        const restartButton = this.createRestartButton()
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
createplayerLive (x, y, Live)
    {
const style = { fontSize: '32px', fill: '#000' }
		const label = new PlayerLabel(this, x, y, Live, style)

		this.add.existing(label)

		return label
	}
}
