const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');

let paddleX = gameContainer.offsetWidth / 2 - paddle.offsetWidth / 2;
let ballX = gameContainer.offsetWidth / 2 - ball.offsetWidth / 2;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;
let isGameOver = false;

document.addEventListener('mousemove', (e) => {
    paddleX = e.clientX - gameContainer.offsetLeft - paddle.offsetWidth / 2;
    if (paddleX < 0) paddleX = 0;
    if (paddleX + paddle.offsetWidth > gameContainer.offsetWidth) paddleX = gameContainer.offsetWidth - paddle.offsetWidth;
    paddle.style.left = paddleX + 'px';
});

function moveBall() {
    if (isGameOver) return;

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX <= 0 || ballX + ball.offsetWidth >= gameContainer.offsetWidth) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballY + ball.offsetHeight >= gameContainer.offsetHeight) {
        if (ballX + ball.offsetWidth > paddleX && ballX < paddleX + paddle.offsetWidth) {
            ballSpeedY = -ballSpeedY;
        } else {
            isGameOver = true;
            alert('Game Over!');
        }
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    requestAnimationFrame(moveBall);
}

moveBall();
