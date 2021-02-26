import 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StratScene' });
  }

  create() {
    this.add.text(100, 200, 'Click To Start', {
      fontSize: '2rem',
      fontWeight: '900',
      fill: '#000000',
    });

    this.input.on('pointerup', () => {
      // Add your code below:
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
    });
  }
}
