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
playerImage.src = 'shadow_dog.png'

// animation loop
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillRect(50, 50, 100, 100);
    requestAnimationFrame(animate)
};

animate();