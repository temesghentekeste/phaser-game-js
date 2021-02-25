import  'phaser';
function create() {
  let circle1 = this.add.circle(50, 100, 90, 0xfff070);
  let circle2 = this.add.circle(95, 300, 80, 0xff0000);
  let circle3 = this.add.circle(200, 200, 100, 0x9f00d0);
  let circle4 = this.add.circle(300, 400, 10, 0x00e030);

  // Add in a circle here!
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  scene: {
    create,
  },
};

const game = new Phaser.Game(config);
