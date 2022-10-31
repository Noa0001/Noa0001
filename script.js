let score = 0;
let balloonImg = document.getElementById("yellowBalloon");
let restart = document.getElementById("button");

balloonImg.addEventListener("mousedown", startGame);
restart.addEventListener("mousedown", restartGame);
document.getElementById("gif").addEventListener("mousedown", photo);

function startGame() {
    balloonImg.style.visibility = "hidden";
    score = score + 1;
    document.getElementById("scoreBoard").textContent = score;

}

function restartGame() {
    balloonImg.style.visibility = "visible";
}

function photo() {
    document.getElementById("gif").style.visibility = "visible";
    alert("Hello! \n My name is Noa and I am a developer! \n I know - Python, HTML, JavaScript & CSS")

}