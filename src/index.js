import 'phaser'
const container = document.querySelector('.container')
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

const gameState = {};

function create() {
  // Add your code below:
  gameState.codey = this.physics.add.sprite(300, 300, 'codey');
}

function update() {}

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
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);
