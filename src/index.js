import  'phaser';

const container = document.querySelector('.container')
const gameState = {}
function preload() {
  // Load in the sprite here!

  this.load.image(
    'codey',
    'https://content.codecademy.com/courses/learn-phaser/codey.png'
  );

  this.load.image(
    'sky',
    'https://content.codecademy.com/courses/learn-phaser/sky.jpg'
    );

  }
  
  function create() {
    
    // Put the background image here!
    gameState.image = this.add.image(200, 200, 'sky')
    // Create a sprite game object here!
    this.add.sprite(40, 80, 'codey');
    gameState.text = this.add.text(50, 500, "MY Game")
}

function update() {
  gameState.text.x += 1;
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: '#5f2a55',
  parent: container,
  scene: {
    create,
    preload,
    update
  },
};

const game = new Phaser.Game(config);
