import 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StratScene' });
  }

  create() {
    this.add.text(150, 200, 'Click To Start', {
      fontSize: '15px',
      fill: '#000000',
    });
  }
}
