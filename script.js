let startBtn = document.getElementById('startBtn')
let splashScreen = document.getElementById('splashScreen')

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

function text(txt, fnt, x, y, color) {
    ctx.font = fnt;
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y);
}

// Objects
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.draw();
        this.draw2();
        this.radius -= 0.4;
    };

    this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
    };

    this.draw2 = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
    };
}

// Implementation
let circles;
circles = [];
score = 0;

function init() {
    for (let i = 0; i < 1; i++){
        const radius = 30;
        let x = randomIntFromRange(30, canvas.width - 30);
        let y = randomIntFromRange(30, canvas.height - 30);
        const color = 'blue';

        if(i !== 0) {
            for (let j = 0; j < circles.length; j++) {
                if (distance(x, y, circles[j].x, circles[j].y) - 30 * 2 < 0) {
                    x = randomIntFromRange(30, canvas.width - 30);
                    y = randomIntFromRange(30, canvas.height - 30); 

                    j = -1;          
                }
            }
        }
        circles.push(new Circle(x, y, radius, color));
    }
}

//makes the circle appear every 1sec
setInterval(function(){init()}, 1000);

//user's keydown
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (circles[0] && circles[0].radius < 12) {
                score = score + 3;
                console.log("+3");
                circles.shift();
            }else if (circles[0] && circles[0].radius < 20 && circles[0].radius > 12) { 
                score = score + 1;
                console.log("+1");
                circles.shift();
            }else{
                console.log('missed')
                circles.shift();
            }
            break;
        case 'ArrowDown':
            circles[1].color = 'red';
            score = score + 1;
            console.log("+1")
            break;
        case 'ArrowLeft':
            circles[2].color = 'red';
            score = score + 1;
            console.log("+1")
            break;
        case 'ArrowRight':
            circles[3].color = 'red';
            score = score + 1;
            console.log("+1")
    }
};

// Animation Loop
function animategame() {
    requestAnimationFrame(animategame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    for (i = 0; i < circles.length; i++) {
        if (circles[i] && circles[i].radius < 10) {
            circles.shift();
        }
    }

    text('Score: ' + score, '30px Comic Sans MS', 10, 40, 'black');

    circles.forEach(function (item){
    item.update();
    })


}

function startMenu(){
    splashScreen.style.display = 'none';
    menu.style.display = 'block';
}

function showCanvas(){
    menu.style.display = 'none';
    canvas.style.display = 'block';
    init();
    setTimeout(function(){animategame()},3000); 
    setTimeout(function(){text("Are you ready?", '30px Comic Sans MS', 150, 300, 'blue')},500);
    setTimeout(function(){text("Go!", '30px Comic Sans MS', 380, 300, 'red')},2000);    
}








