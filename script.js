// Initial Setup
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 600;
canvas.height = 600;

addEventListener('resize', function(){
    canvas.width = 600;
    canvas.height = 600;
})



function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function colorText(txt, fnt, x, y, color) {
    ctx.font = fnt;
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y);
}

function fadeOut(text, x, y) {
    var a = 1.0,   // full opacityle
        interval = setInterval(function () {
            canvas.width = canvas.width; // Cars the canvas
            ctx.fillStyle = "rgba(0, 0, 255, " + a + ")";
            ctx.font = "italic 20pt Arial";
            ctx.fillText(text, x, y);
            a = a - 0.03; // decrease opacity (fade out)
            if (a < 0) {
                canvas.width = canvas.width;
                clearInterval(interval);
            }
        }, 50); 
}



//user's keydown
score = 0;

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (circles[0] && circles[0].direction == 1 && circles[0].radius < 17) {
                score = score + 3;
                console.log("+3");
                circles.shift();

            }else if (circles[0] && circles[0].direction == 1 && circles[0].radius > 16 && circles[0].radius < 25 ) { 
                score = score + 1;
                console.log("+1");
                circles.shift();
            }else{
                console.log('missed')
                circles.shift();
            }
            break;

        case 'ArrowLeft':
            if (circles[0] && circles[0].direction == 2 && circles[0].radius < 17) {
                score = score + 3;
                console.log("+3");
                circles.shift();
            }else if (circles[0] && circles[0].direction == 2 && circles[0].radius > 16 && circles[0].radius < 25 ) { 
                score = score + 1;
                console.log("+1");
                circles.shift();
            }else{
                console.log('missed')
                circles.shift();
            }
            break;

        case 'ArrowRight':
            if (circles[0] && circles[0].direction == 3 && circles[0].radius < 17) {
                score = score + 3;
                console.log("+3");
                circles.shift();
            }else if (circles[0] && circles[0].direction == 3 && circles[0].radius > 16 && circles[0].radius < 25 ) { 
                score = score + 1;
                console.log("+1");
                circles.shift();
            }else{
                console.log('missed')
                circles.shift();
            }
            break;

        case 'ArrowDown':
            if (circles[0] && circles[0].direction == 4 && circles[0].radius < 17) {
                score = score + 3;
                console.log("+3");
                circles.shift();
            }else if (circles[0] && circles[0].direction == 4 && circles[0].radius > 16 && circles[0].radius < 25 ) { 
                score = score + 1;
                console.log("+1");
                circles.shift();
            }else{
                console.log('missed')
                circles.shift();
            }
            break;
    }
};


// creates circle
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.direction = Math.floor(Math.random() * 4) + 1;

    this.update = function() {
        this.draw();
        this.draw2();
        this.radius -= 0.4;
        this.randomizeArrow();
    };


    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    };

    this.draw2 = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    };

    this.randomizeArrow = function() {
            if (this.direction == 1) {
                var up = this.upArrow();
            }else if (this.direction == 2) {
                var left = this.leftArrow();
            }else if (this.direction == 3) {
                var right = this.rightArrow();
            }else if (this.direction == 4) {
                var down = this.downArrow();
            }
    }

    this.upArrow = function() {
        ctx.beginPath();
    //right(highernum go right , highernum go down)
        ctx.moveTo(this.x + 4, this.y + 1);
    //left(highernum go right , highernum go down)
        ctx.lineTo(this.x - 3, this.y + 1);
    //center(highernum go right , highernum go down)
        ctx.lineTo(this.x , this.y - 6);
        ctx.fill();
    //top(highernum go right , highernum go down)
        ctx.moveTo(this.x, this.y + 1);
    //bottom(highernum go right , highernum go down)
        ctx.lineTo(this.x, this.y + 8);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

    this.leftArrow = function() {
        ctx.beginPath();
    //top(highernum go right , highernum go down)
        ctx.moveTo(this.x , this.y - 4);
    //center(highernum go right , highernum go down)
        ctx.lineTo(this.x - 8, this.y);
    //bottom(highernum go right , highernum go down)
        ctx.lineTo(this.x , this.y + 4);
        ctx.fill();
    //top(highernum go right , highernum go down)
        ctx.moveTo(this.x -3, this.y );
    //bottom(highernum go right , highernum go down)
        ctx.lineTo(this.x +7, this.y );
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

    this.rightArrow = function() {
        ctx.beginPath();
    //top(highernum go right , highernum go down)
        ctx.moveTo(this.x + 1, this.y - 4);
    //center(highernum go right , highernum go down)
        ctx.lineTo(this.x + 8, this.y);
    //bottom(highernum go right , highernum go down)
        ctx.lineTo(this.x + 1, this.y + 4);
        ctx.fill();
    //top(highernum go right , highernum go down)
        ctx.moveTo(this.x -7, this.y );
    //bottom(highernum go right , highernum go down)
        ctx.lineTo(this.x +7, this.y );
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

    this.downArrow = function() {
        ctx.beginPath();
    //right(highernum go right , highernum go down)
        ctx.moveTo(this.x + 5, this.y + 1);
    //left(highernum go right , highernum go down)
        ctx.lineTo(this.x - 4, this.y + 1);
    //center(highernum go right , highernum go down)
        ctx.lineTo(this.x + 0.5 , this.y + 10);
        ctx.fill();
    //top(highernum go right , highernum go down)
        ctx.moveTo(this.x, this.y - 8);
    //bottom(highernum go right , highernum go down)
        ctx.lineTo(this.x, this.y );
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

}   

// Create circles at random location
let circles;
circles = [];

function init() {
    for (let i = 0; i < 1; i++){
        const radius = 50;
        let x = randomIntFromRange(50, canvas.width - 30);
        let y = randomIntFromRange(50, canvas.height - 30);
        const color = 'green';

        if(i !== 0) {
            for (let j = 0; j < circles.length; j++) {
                if (distance(x, y, circles[j].x, circles[j].y) - 50 * 2 < 0) {
                    x = randomIntFromRange(50, canvas.width - 30);
                    y = randomIntFromRange(50, canvas.height - 30); 

                    j = -1;          
                }
            }
        }
        circles.push(new Circle(x, y, radius, color));

    }
}

//makes the circle appear every 1sec
let turnOnInitial;

setInterval(function(){
    turnOnInitial = false;
}, 1000);

// Animation Loop
function animategame() {
    requestAnimationFrame(animategame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //If requestAnimateFrame is stopped, this code will not run and circles will stop generating
    if( turnOnInitial == false){
        turnOnInitial = init();
    }

    // creates the animation for the circle
    circles.forEach(function (item){
    item.update();
    })

    //remove circle on it's own
    for (i = 0; i < circles.length; i++) {
        if (circles[i] && circles[i].radius < 13) {
            circles.shift();
        }
    }

    //scoreboard
    colorText('Score: ' + score, '30px Comic Sans MS', 10, 40, 'black');

    //change the gif when condition is met
    if (score > 30) {
        backgroundImg1.style.display = 'none';
        backgroundImg2.style.display = 'block';
    }

}

let startBtn = document.getElementById('startBtn')
let splashScreen = document.getElementById('splashScreen')

function areYouReady() {
    let ready = setTimeout(function(){text("Are you ready?", '30px Comic Sans MS', 150, 300, 'blue')},500);
    setTimeout(function(){clearTimeout(ready)},2000);
}

function startMenu() {
    splashScreen.style.display = 'none';
    menu.style.display = 'block';
}

function showCanvas() {
    menu.style.display = 'none';
    canvas.style.display = 'block';
    backgroundImg1.style.display = 'block';
    setTimeout(function(){animategame()},3000); 
    // areYouReady();
    fadeOut('Are you Ready?', 210, 300);
    setTimeout(function(){colorText("Go!", '30px Comic Sans MS', 280, 300, 'red')},2000);    
}








