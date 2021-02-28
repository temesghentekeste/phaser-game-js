import 'phaser';
const content = document.querySelector('#content')
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  backgroundColor: 0x444444,

  // physics settings
  physics: {
    default: 'arcade',
  },
};

export default config;
