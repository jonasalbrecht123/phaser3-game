import { gameData } from "./GameScene"
import Level1 from "./levels/Level1"
import Level2 from "./levels/Level2"
import Player from "./prefabs/Player"

export default class GameLogic {
    constructor( /** @type {Level1 | Level2} */ scene) {
        this.scene = scene;
    }

    update(
        /** @type {Player} */ player,
        /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */ cursors
    )
	{
        if (cursors.left.isDown)
            {
                player.setVelocityX(-160)

                player.anims.play('left', true)
            }
            else if (cursors.right.isDown)
            {
                player.setVelocityX(160)

                player.anims.play('right', true)
            }
            else
            {
                player.setVelocityX(0)

                player.anims.play('turn')
            }

            if (cursors.up.isDown && player.body.touching.down)
            {
                player.setVelocityY(-330)
            }
        }

    collectStar(player, star, bombSpawner)
    {
        star.disableBody(true, true)

        gameData.scoreLabel.add(10)
        this.newlife +=1
        
        if (this.newlife === 5)
        {
            gameData.playerLive +=1
            gameData.playerLiveLabel.setLive(gameData.playerLive)
            this.newlife = 0
        }

        bombSpawner.spawn(player.x, player.y)
    }

    hitBomb(player, bomb)
	{   
		this.takeDamage();
	}
	

    hitEnd() {
            const maxLevel = 2
        
			gameData.level += 1;
            if (gameData.level > maxLevel) {
                // Letztes level erreicht
                return;
            }
			gameData.playerLive = 3
			gameData.playerLiveLabel.setLive(gameData.playerLive)
			this.scene.scene.remove(`Level${gameData.level - 1}`);
            this.scene.scene.launch(`Level${gameData.level}`);
		
    }

    hitStachel( /** @type {Player} */ player) {
        this.takeDamage();
    }

    takeDamage() {
        if (gameData.immunity === 0) {
			gameData.playerLive-=1
		gameData.playerLiveLabel?.reduce()
		gameData.immunity = 1000
		this.scene.time.addEvent({
			delay: 1000,
			callback: () => {
			gameData.immunity = 0
			}
		})	
		if(gameData.playerLive == 0)
		{ 
			this.scene.physics.pause()

			this.scene.player.setTint(0xff0000)

			this.scene.player.anims.play('turn')
		
			this.gameOver = true
		}else {
			this.scene.player.setTint(0xff0000)
			this.scene.time.addEvent({
			delay: 500,
			callback: () => {
				this.scene.player.setTint()
			}
			})
		}
        
        }
    }
}