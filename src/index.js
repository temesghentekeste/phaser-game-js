import 'phaser';
const container = document.querySelector('.container');
function preload() {
  this.load.image(
    'bug1',
    'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png'
  );
  this.load.image(
    'bug2',
    'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png'
  );
  this.load.image(
    'bug3',
    'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png'
  );
  this.load.image(
    'platform',
    'https://content.codecademy.com/courses/learn-phaser/physics/platform.png'
  );
  this.load.image(
    'codey',
    'https://content.codecademy.com/courses/learn-phaser/physics/codey.png'
  );
}

const gameState = {
  score: 0,
};

function create() {
  // Add your code below:
  gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(0.8);

  // Add your code below:
  const platforms = this.physics.add.staticGroup();
  platforms.create(225, 510, 'platform');

  // Add your code below: to prevent overlap
  this.physics.add.collider(gameState.player, platforms);
  gameState.player.setCollideWorldBounds(true);

  // Adding controls: cursors
  gameState.cursors = this.input.keyboard.createCursorKeys();

  const bugs = this.physics.add.group();

  const bugGen = () => {
    const xCoordinate = Math.random() * 450;
    bugs.create(xCoordinate, 10, 'bug1');
  };

  // Add timer events to generate enemies
  const bugGenLoop = this.time.addEvent({
    callback: bugGen,
    delay: 1000,
    callbackScope: this,
    loop: true,
  });

  // Displays initial Score: 0 text
  gameState.scoreText = this.add.text(195, 485, 'Score: 0', {
    fontSize: '15px',
    fill: '#000000',
  });

  // Add logic to destroy enemies upon collision with the platform
  this.physics.add.collider(bugs, platforms, function (singleEnemy) {
    singleEnemy.destroy();

    // Increment score here
    gameState.score += 10;

    gameState.scoreText.setText(`Score: ${gameState.score}`);
  });

  // Losing condition
  this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();

    this.physics.pause();

    this.add.text(180, 250, 'Game Over', {
      fontSize: '15px',
      fill: '#000000',
    });
  });
}

function update() {
  // Control velocity of the player
  if (gameState.cursors.left.isDown) {
    gameState.player.setVelocityX(-160);
  } else if (gameState.cursors.right.isDown) {
    gameState.player.setVelocityX(110);
  } else {
    gameState.player.setVelocityX(0);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: 'b9eaff',
  parent: container,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      enableBody: true,
      debug: true,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);
