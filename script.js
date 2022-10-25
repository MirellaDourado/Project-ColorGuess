//  https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return color;
}

const circles = document.querySelector('#circles');
function ballsGenerator() {
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    circles.appendChild(circle);
    circle.style.backgroundColor = randomColor();
  }
}
ballsGenerator();

const answer = document.querySelector('#answer');
const rgbColor = document.querySelector('#rgb-color');
const ballsColors = document.querySelectorAll('.ball');
const resetBtn = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function creatingRgbColor() {
  rgbColor.innerText = ballsColors[random(6)].style.backgroundColor;
}
creatingRgbColor();

function resetGame() {
  for (let index = 0; index < 6; index += 1) {
    ballsColors[index].style.backgroundColor = randomColor();
  }
  answer.innerText = 'Escolha uma cor';
  creatingRgbColor();
}
resetBtn.addEventListener('click', resetGame);

function gameAnswer(color) {
  if (color.target.className === 'ball') {
    if (rgbColor.innerHTML === color.target.style.backgroundColor) {
      answer.innerText = 'Acertou!';
      score.innerText = parseInt(score.innerText, 10) + 3;
    } else if (rgbColor.textContent !== color.target.style.backgroundColor) {
      answer.innerText = 'Errou! Tente novamente!';
    } else {
      answer.innerText = 'Escolha uma cor';
    }
  }
}
circles.addEventListener('click', gameAnswer);

function scorePoints() {
  let count = 0;
  if (answer.innerText === 'Acertou!') {
    count += 3;
  }
  score.innerText = count;
}
scorePoints();
