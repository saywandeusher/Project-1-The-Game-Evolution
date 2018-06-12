// //square
// c.fillStyle = "green";
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "pink";
// c.fillRect(200, 200, 100, 100)

// //Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "blue";
// c.stroke();


// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', function(){
    canvas.width = innerWidth
    canvas.height = innerHeight

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

// Objects
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.draw();
        this.draw2();
        this.radius += 0.3;
    };

    this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'red';
    c.stroke();
    c.closePath();
    };

    this.draw2 = function() {
    c.beginPath();
    c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
    };
}

// Implementation
let circles;
circles = [];
score = 0;

function init() {
    for (let i = 0; i < 1; i++){
        const radius = 0;
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

setInterval(function(){init()}, 2000);

//user's keydown
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (circles[0].radius < 25) {
                circles.shift();
            }else{
                score = score + 1;
                console.log("+1");
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
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < circles.length; i++) {
        if (circles[i] && circles[i].radius > 30) {
            circles.shift();
        }
    }

    circles.forEach(function (item){
    item.update();
    })


}

init();
animate();









