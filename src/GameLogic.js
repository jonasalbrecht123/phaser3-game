import { gameData } from "./GameScene"
import Player from "./prefabs/Player"

export default class GameLogic {
    constructor() {

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

       // if (this.stars.countActive(true) === 0)
       // {
            //gameData.level += 1;
            //this.platforms.children.iterate((child) => {
            //	child.destroy()
            //})
            //this.platforms.clear()
            //this.createPlatforms()
            //  A new batch of stars to collect
         //   this.stars.children.iterate((child) => {
         //       child.enableBody(true, child.x, 1000, true, true)
           // })
       // }
        
        if (this.newlife === 5)
        {
            gameData.playerLive +=1
            gameData.playerLiveLabel.setLive(gameData.playerLive)
            this.newlife = 0
        }

        bombSpawner.spawn(player.x, player.y)
    }

    hitBomb(scene, player, bomb)
	{   
		if (gameData.immunity === 0) {
			gameData.playerLive-=1
		gameData.playerLiveLabel?.reduce()
		gameData.immunity = 1000
		scene.time.addEvent({
			delay: 1000,
			callback: () => {
			gameData.immunity = 0
			}
		})	
		if(gameData.playerLive == 0)
		{ 
			scene.physics.pause()

			player.setTint(0xff0000)

			player.anims.play('turn')
		
			this.gameOver = true
		}else {
			player.setTint(0xff0000)
			scene.time.addEvent({
			delay: 500,
			callback: () => {
				player.setTint()
			}
			})
		}
	}
	}

    hitEnd(scene) {
            const maxLevel = 2
        
			gameData.level += 1;
            if (gameData.level > maxLevel) {
                // Letztes level erreicht
                return;
            }
			gameData.playerLive = 3
			gameData.playerLiveLabel.setLive(gameData.playerLive)
			scene.scene.remove(`Level${gameData.level - 1}`);
            scene.scene.launch(`Level${gameData.level}`);
		
    }
}