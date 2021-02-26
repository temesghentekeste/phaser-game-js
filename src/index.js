import  'phaser';

const container = document.querySelector('.container')
const gameState = {
  onColor: 0xaaffaa,
  offColor: 0xffaaaa,
};


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
    gameState.codey = this.add.sprite(40, 80, 'codey');
    gameState.text = this.add.text(50, 500, "MY Game")

      gameState.rect1 = this.add.rectangle(
        200,
        100,
        100,
        100,
        gameState.onColor
      );
      gameState.rect2 = this.add.rectangle(
        200,
        300,
        100,
        100,
        gameState.offColor
      );

      // add the switchedOn state here
      gameState.switchedOn = 'rect1';

      // set gameState.rect2 as interactive here
      gameState.rect2.setInteractive();

      // create the pointerup listener for rect2 here
      gameState.rect2.on('pointerup', function () {
        gameState.rect1.fillColor = gameState.offColor;
        gameState.rect2.fillColor = gameState.onColor;
      });

      // Add keyboard cursor events
      gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  gameState.text.x += 1;

  if(gameState.cursors.left.isDown) {
    gameState.codey.x -= 1;
  }

   if (gameState.cursors.right.isDown) {
     gameState.codey.x += 1;
   }

    if (gameState.cursors.space.isDown) {
      gameState.codey.y -= 2;
    }
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
