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
const spriteHeight = 523;

// animation loop
function animate() {
    // clears canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // fills canvas
    // ctx.fillRect(100, 50, 100, 100);
    // draw image can take 9 arguments
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
};

animate();