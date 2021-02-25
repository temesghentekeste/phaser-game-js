import  'phaser';

const container = document.querySelector('.container')
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
  this.add.image(200, 200, 'sky')
  // Create a sprite game object here!
  this.add.sprite(40, 80, 'codey');
  this.add.text(50, 500, "MY Game")
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
  },
};

const game = new Phaser.Game(config);
