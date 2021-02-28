/* eslint-disable no-undef */
import 'phaser';
import Button from '../Components/Button'
import config from '../Config/config'

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init(data) {
    this.previousScene = data.previousScene;
  }

  create() {
    this.add.image(400, 300, 'restBG');

    this.gameButton = new Button(
      this,
      config.width / 2,
      config.height / 2 - 100,
      'blueButton1',
      'blueButton2',
      'Try Again',
      'PlayGame'
    );
    // this.gameButton.create();

    // this.optionsButton = new Button('Save score', 1, 'rexUI', this);
    // this.optionsButton.create();

    // this.menuButton = new Button('Main Menu', 0, 'Title', this);
    // this.menuButton.create();
  }
}
