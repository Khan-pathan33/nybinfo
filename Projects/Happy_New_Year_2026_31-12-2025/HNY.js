// // setTimeout(() => {
// //     document.getElementById("year").innerText = "2026";
// //     document.getElementById("year").style.color = "gold";
// //     document.getElementById("welcome").style.display = "block";
// // }, 3000);

// // /* Fireworks (Line Style) */
// // const canvas = document.getElementById("canvas");
// // const ctx = canvas.getContext("2d");

// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;

// // class Firework {
// //     constructor(x, y) {
// //         this.x = x;
// //         this.y = y;
// //         this.life = 70;
// //         this.color = `hsl(${Math.random() * 360},100%,60%)`;
// //         this.lines = [];

// //         for (let i = 0; i < 40; i++) {
// //             this.lines.push({
// //                 angle: (Math.PI * 2 / 40) * i,
// //                 length: 0
// //             });
// //         }
// //     }

// //     draw() {
// //         ctx.strokeStyle = this.color;
// //         ctx.lineWidth = 2.5;
// //         this.lines.forEach(l => {
// //             ctx.beginPath();
// //             ctx.moveTo(this.x, this.y);
// //             ctx.lineTo(
// //                 this.x + Math.cos(l.angle) * l.length,
// //                 this.y + Math.sin(l.angle) * l.length
// //             );
// //             ctx.stroke();
// //         });
// //     }

// //     update() {
// //         this.lines.forEach(l => l.length += 6);
// //         this.life--;
// //     }
// // }

// // let fireworks = [];

// // function createFirework() {
// //     fireworks.push(
// //         new Firework(
// //             Math.random() * canvas.width,
// //             Math.random() * canvas.height / 2
// //         )
// //     );
// // }

// // function animate() {
// //     ctx.fillStyle = "rgba(0,0,0,0.2)";
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);

// //     if (Math.random() < 0.07) createFirework();

// //     fireworks.forEach((f, i) => {
// //         f.draw();
// //         f.update();
// //         if (f.life <= 0) fireworks.splice(i, 1);
// //     });

// //     requestAnimationFrame(animate);
// // }

// // animate();
// /* Countdown */
// let timeLeft = 10;
// const timerEl = document.getElementById("timer");
// const yearEl = document.getElementById("year");
// const newYearEl = document.getElementById("newyear");
// const quoteEl = document.getElementById("quote");

// const countdown = setInterval(() => {
//     timeLeft--;
//     timerEl.innerText = "⏳ " + timeLeft;

//     if (timeLeft === 0) {
//         clearInterval(countdown);

//         yearEl.innerText = "2026";
//         yearEl.style.color = "gold"; // 2026 color

//         timerEl.style.display = "none";
//         newYearEl.style.display = "block";
//         quoteEl.style.display = "block";
//     }
// }, 1000);

// /* Fireworks (Line Style – Background) */
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// class Firework {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.life = 60;
//         this.color = `hsl(${Math.random() * 360},100%,60%)`;
//         this.lines = [];

//         for (let i = 0; i < 34; i++) {
//             this.lines.push({
//                 angle: (Math.PI * 2 / 34) * i,
//                 length: 0
//             });
//         }
//     }

//     draw() {
//         ctx.strokeStyle = this.color;
//         ctx.lineWidth = 2;
//         this.lines.forEach(l => {
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);
//             ctx.lineTo(
//                 this.x + Math.cos(l.angle) * l.length,
//                 this.y + Math.sin(l.angle) * l.length
//             );
//             ctx.stroke();
//         });
//     }

//     update() {
//         this.lines.forEach(l => l.length += 5);
//         this.life--;
//     }
// }

// let fireworks = [];

// function createFirework() {
//     fireworks.push(
//         new Firework(
//             Math.random() * canvas.width,
//             Math.random() * canvas.height / 2
//         )
//     );
// }

// function animate() {
//     ctx.fillStyle = "rgba(0,0,0,0.15)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     if (Math.random() < 0.04) createFirework();

//     fireworks.forEach((f, i) => {
//         f.draw();
//         f.update();
//         if (f.life <= 0) fireworks.splice(i, 1);
//     });

//     requestAnimationFrame(animate);
// }

// animate();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fireworks class
class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 50 + Math.random()*30;
        this.particles = [];
        for (let i=0;i<30;i++){
            this.particles.push({
                x:this.x,
                y:this.y,
                dx:(Math.random()-0.5)*6,
                dy:(Math.random()-0.5)*6,
                color:`hsl(${Math.random()*360},100%,70%)`,
                size:2 + Math.random()*3,
                life:30 + Math.random()*30
            });
        }
    }
    update(){
        this.particles.forEach((p,i)=>{
            p.x+=p.dx;
            p.y+=p.dy;
            p.life--;
            if(p.life<=0) this.particles.splice(i,1);
        });
        this.life--;
    }
    draw(){
        this.particles.forEach(p=>{
            ctx.fillStyle=p.color;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fill();
        });
    }
}

let fireworks = [];

// Animate background fireworks
function animateBackground(){
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if(Math.random()<0.05) fireworks.push(new Firework(Math.random()*canvas.width, Math.random()*canvas.height/2));
    fireworks.forEach((f,i)=>{
        f.update();
        f.draw();
        if(f.life<=0 && f.particles.length===0) fireworks.splice(i,1);
    });
    requestAnimationFrame(animateBackground);
}
animateBackground();

// Countdown for 2025
const yearEl = document.getElementById("year");
const timerEl = document.getElementById("timer");
const funEl = document.getElementById("fun");
const quoteEl = document.getElementById("quote");
const newYearEl = document.getElementById("newyear");

let timeLeft = 10;
const countdown = setInterval(()=>{
    timeLeft--;
    timerEl.innerText = "⏳ " + timeLeft;
    yearEl.style.color = `hsl(${Math.random()*360},100%,70%)`;
    yearEl.style.textShadow = `0 0 30px hsl(${Math.random()*360},100%,70%),0 0 60px hsl(${Math.random()*360},100%,70%)`;
    if(timeLeft===0){
        clearInterval(countdown);
        yearEl.style.display="none";
        timerEl.style.display="none";
        funEl.style.display="none";
        // Show quote with fireworks background
        quoteEl.style.display="block";
        setTimeout(()=>{
            quoteEl.style.display="none";
            newYearEl.style.display="block";
            startFireworkLetters(["HAPPY","NEW YEAR","2026"]);
        },5000); // 5s display for quote
    }
},1000);

// Firework letters
let particles = [];
let explosions = [];
let words = [];
let currentWordIndex = 0;
let wordFormed = false;

function createParticlesForWord(word){
    particles=[];
    explosions=[];
    wordFormed=false;
    const offCanvas = document.createElement("canvas");
    offCanvas.width = canvas.width;
    offCanvas.height = canvas.height;
    const offCtx = offCanvas.getContext("2d");
    offCtx.font = "bold 180px Arial";
    offCtx.fillStyle = "white";
    const textWidth = offCtx.measureText(word).width;
    offCtx.fillText(word, canvas.width/2 - textWidth/2, canvas.height/2);
    const imageData = offCtx.getImageData(0,0,canvas.width,canvas.height);

    for(let y=0;y<canvas.height;y+=4){
        for(let x=0;x<canvas.width;x+=4){
            const idx = (y*canvas.width + x)*4;
            if(imageData.data[idx+3]>128){
                particles.push({
                    x: Math.random()*canvas.width,
                    y: canvas.height+Math.random()*50,
                    targetX: x,
                    targetY: y,
                    color:`hsl(${Math.random()*360},100%,70%)`,
                    size: 3 + Math.random()*2,
                    speed: 0.03 + Math.random()*0.03,
                    exploded:false
                });
            }
        }
    }
}

function explodeParticle(p){
    const count = 40 + Math.random()*30;
    for(let i=0;i<count;i++){
        explosions.push({
            x:p.x,
            y:p.y,
            dx:(Math.random()-0.5)*6,
            dy:(Math.random()-0.5)*6,
            color:`hsl(${Math.random()*360},100%,70%)`,
            life:30 + Math.random()*30,
            size:2 + Math.random()*3
        });
    }
}

function startFireworkLetters(wordArray){
    words = wordArray;
    currentWordIndex = 0;
    createParticlesForWord(words[currentWordIndex]);
}

function animateLetters(){
    // Background fireworks lightly
    ctx.fillStyle="rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    let done=true;
    particles.forEach(p=>{
        if(!p.exploded){
            p.x += (p.targetX - p.x)*p.speed;
            p.y += (p.targetY - p.y)*p.speed;
            if(Math.abs(p.x-p.targetX)<2 && Math.abs(p.y-p.targetY)<2){
                p.exploded=true;
                explodeParticle(p);
            } else done=false;
            ctx.fillStyle=p.color;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fill();
        }
    });

    explosions.forEach((e,i)=>{
        ctx.fillStyle=e.color;
        ctx.beginPath();
        ctx.arc(e.x,e.y,e.size,0,Math.PI*2);
        ctx.fill();
        e.x += e.dx;
        e.y += e.dy;
        e.life--;
        if(e.life<=0) explosions.splice(i,1);
    });

    if(done && explosions.length===0 && !wordFormed){
        wordFormed=true;
        setTimeout(()=>{
            if(currentWordIndex < words.length-1){
                currentWordIndex++;
                createParticlesForWord(words[currentWordIndex]);
            }
        },800);
    }

    requestAnimationFrame(animateLetters);
}

animateLetters();