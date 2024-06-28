export default class Background extends Phaser.Scene   {
    constructor() {
        super({ key: 'BackgroundScene' });
    }

    preload() {
        this.load.image('sky', 'assets/sky.png')
    }

    create() {
        this.add.image(400, 300, 'sky')


        this.scene.launch('GameScene')    
    }
}