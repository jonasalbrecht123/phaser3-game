import Phaser from 'phaser'

const formatScore = (playerLiveLabel) => `Live: ${playerLiveLabel}`

export default class playerLiveLabel extends Phaser.GameObjects.Text
{
	constructor(scene, x, y, Live, style)
	{
		super(scene, x, y, formatScore(Live), style)

		this.Live = Live
	}

	setLive(Live)
	{
		this.Live  = Live
		this.updateLiveText()
	}
  
	reduce(hitBomb)
	{
		this.setLive(this.Live - 1)
	}
    
  
	updateLiveText()
	{
		this.setText(formatScore(this.Live))
	}
}