import GameScene from '../Scenes/GameScene';
const container = document.querySelector('.container');

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: 'b9eaff',
  parent: container,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    },
  },
  scene: [GameScene],
};

export default config;