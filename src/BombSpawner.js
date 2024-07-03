import Phaser from 'phaser'
import Bombs from './prefabs/Bombs'

export default class BombSpawner
{
	/**
	 * @param {Phaser.Scene} scene
	 */
	constructor(scene, bombKey = 'bomb')
	{
		this.scene = scene
		this.key = bombKey

		this._group = this.scene.physics.add.group()
	}

	get group()
	{
		return this._group
	}

	spawn(playerX, playerY)
	{
		//const x = (playerX < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)


        //const bomb = new Bombs(this.scene, playerX, playerY - 200)
	   	const bomb = this.group.create(playerX, playerY - 200, this.key)
		//this.group.add(bomb)
        bomb.setBounce(1)
        //bomb.setCollideWorldBounds(true)
		bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
		
		return bomb
	}
}