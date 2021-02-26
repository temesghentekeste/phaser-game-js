import 'phaser';

const container = document.querySelector('.container');
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

  // Load sound
  this.load.audio(
    'awesome',
    'https://content.codecademy.com/courses/learn-phaser/reallyawesome.mp3'
  );

  this.load.audio(
    'incredible',
    'https://content.codecademy.com/courses/learn-phaser/incredible.mp3'
  );
}

function create() {
  // Put the background image here!
  gameState.image = this.add.image(200, 200, 'sky');
  // Create a sprite game object here!
  gameState.codey = this.add.sprite(40, 80, 'codey');
  gameState.text = this.add.text(50, 500, 'MY Game');

  gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
  gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);

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

  // Add buttons
  // add our 'incredible' sound to our scene here!
  gameState.incredible = this.sound.add('incredible');
  gameState.awesome = this.sound.add('awesome');

  // Display "Incredible" and "Really, really awesome" buttons
  gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa);
  gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada);
  gameState.incredibleText = this.add.text(150, 135, 'Incredible', {
    fill: '#222222',
    font: '20px Times New Roman',
  });
  gameState.awesomeText = this.add.text(110, 385, 'Really, really awesome', {
    fill: '#222222',
    font: '20px Times New Roman',
  });
  gameState.incredibleBox.setInteractive();
  gameState.awesomeBox.setInteractive();

  // add a 'pointerup' handler to incredibleBox here:
  gameState.incredibleBox.on('pointerup', function () {
    gameState.incredible.play();
  });

  gameState.awesomeBox.on('pointerup', function () {
    gameState.awesome.play();
  });
}

function update() {
  gameState.text.x += 1;

  if (gameState.cursors.left.isDown) {
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
    update,
  },
};

const game = new Phaser.Game(config);
