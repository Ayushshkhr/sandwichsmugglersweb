document.getElementById("clickMe").addEventListener("click", function() {
    document.querySelector("h1").textContent = "You Clicked Me! But How";
});

/*simple Counter*/
let count= 0;

document.getElementById("clickMe").addEventListener("click", function () {
    count++;
    document.getElementById("counter").textcontent = 'Count: ${count}';
});


/* toggle Background colors between two colors*/

document.getElementById("clickMe").addEventListener("click", function() {
document.body.style.backgroundColor =
document.body.style.backgroundColor === "Grey" ? "lightcoral": "Grey";
} );

/* chnage button color whenever clicked*/

const button = document.getElementById("clickMe");

button.addEventListener("mousehover", function() {
    button.style.backgroundColor = "Red";
});

button.addEventListener("mouseout", function (){
    button.style.backgroundColor = "Yellow";
});

button.addEventListener("click", function (){
    button.style.backgroundColor = "Violet";
    button.textContent = "ClickedbutHow";
});

/* toggle between color*/
document.getElementById("clickMe").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

/* bouncing ball animation*/
const ball = document.createElement("div"); 
ball.style.width = "50px"; 
ball.style.height = "50px"; 
ball.style.backgroundColor = "brown"; 
ball.style.position = "absolute"; 
ball.style.borderRadius = "50%"; 
ball.style.top = "50%"; 
ball.style.left = "50%"; 
ball.style.transform = "translate(-50%, -50%)"; 

document.body.appendChild(ball); 

let dx = 5, dy = 5; 

function moveBall() {
     const rect = ball.getBoundingClientRect(); 
     if (rect.top <= 0 || rect.bottom >= window.innerHeight) dy *= -1; 
     if (rect.left <= 0 || rect.right >= window.innerWidth) dx *= -1; 
     
     ball.style.top = ball.offsetTop + dy + "px"; 
     ball.style.left = ball.offsetLeft + dx + "px"; 
     requestAnimationFrame(moveBall); 
}

moveBall();
    