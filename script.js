const canvas = document.getElementById('canvas1'); 
// context is equal to canvas variable
const ctx = canvas.getContext('2d');
// console.log(canvas);
// lets us see all the 2d canvas animatins
// we now have access to canvas 2d drawings.
// will be using canvas draw image method mainly

// set height and width of the play area
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
// creates a new image element
playerImage.src = 'images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523; // helps us determine the proper height and width of a sprite from a sprite sheet
let frameX = 0; // cycles sprite horiz
let frameY = 0; // cycles sprite vert
// by setting frame variables, we do not have to manually change sprites within the function
let gameFrame = 0;
const staggerFrames = 5;

// animation loop
function animate() {
    // clears canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/ staggerFrames) % 6;
    frameX = spriteWidth * position;
    // fills canvas
    // ctx.fillRect(100, 50, 100, 100);
    // draw image can take 9 arguments that crop the images
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();