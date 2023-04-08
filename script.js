let x;
let y;
let direction = 0; //from the vehicle
let speedY = 0;
let speedX = 0;
let counter = 0; //=time not in seconds
let i = 0;
let points = 0;


var config = {
    type: Phaser.AUTO,
    width: 2500,
    height: 1000,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('vehicle','vehicle.png'); //vehicle
    this.load.image('s3','s3.png'); //background
}

function create ()
{
    this.add.image(950,500,"s3").setScale(1.65);
    this.vehicle = this.add.image(110,920,"vehicle").setScale(0.03);
    this.cursors = this.input.keyboard.createCursorKeys();
    //game.scene.scenes[0].vehicle.angle = 180;
}

function update ()
{

    if (this.cursors.left.isDown)
    {
        direction -= 4;
    }
    if (this.cursors.right.isDown)
    {
        direction += 4;
    }
    if (this.cursors.up.isDown)
    {
        speedY -= Math.cos(toRadians(direction)) * 0.05;
        speedX += Math.sin(toRadians(direction)) * 0.05;
    }

    if (direction < 0) direction = 360 + direction;
    if (direction > 360) direction = direction - 360;
    game.scene.scenes[0].vehicle.angle = direction;

    

    this.vehicle.y = this.vehicle.y + speedY;    
    this.vehicle.x = this.vehicle.x + speedX; 

    points = counter / 70;  //because 700 is to much
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}
function toAngle (radians) {
    return (radians * 180) / Math.PI;
}

