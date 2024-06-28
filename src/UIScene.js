import { gameData } from "./GameScene";
import PlayerLabel from "./PlayerLabel";
import ScoreLabel from "./ScoreLabel";

export default class UI extends Phaser.Scene   {
    constructor() {
        super({ key: 'UIScene' });
    }

    preload() {

        this.load.image('Restart_Key','assets/Restart Button.png') 
    }

    create() {
  
        gameData.playerLiveLabel = this.createplayerLive(16, 48, gameData.playerLive)
        gameData.scoreLabel = this.createScoreLabel(16, 16, 0)
        

            
    }

    update() {
        if (gameData.playerLive === 0) {
            const restartButton = this.createRestartButton()
        }
    }

    createplayerLive (x, y, Live)
    {
        console.log(Live)
const style = { fontSize: '32px', fill: '#000' }
		const label = new PlayerLabel(this, x, y, Live, style)

		this.add.existing(label)

		return label
	}
    createScoreLabel(x, y, score)
	{
		const style = { fontSize: '32px', fill: '#000' }
		const label = new ScoreLabel(this, x, y, score, style)

		this.add.existing(label)

		return label
	}
    createRestartButton()
	{
		const resetButton = this.add.image(400, 300, 'Restart_Key')
		resetButton.setInteractive()
		resetButton.setScale(0.1)
		resetButton.on('pointerdown', () => location.reload())
	}	
}