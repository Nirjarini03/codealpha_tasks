let score = 0;

function playAudio() {
  const audio = document.getElementById("audio");
  audio.play();
}

function checkAnswer(button, isCorrect) {
  const result = document.getElementById("result");
  if (isCorrect) {
    score++;
    result.textContent = "Correct! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Oops! Try again.";
    result.style.color = "red";
  }

  document.getElementById("score").textContent = score;
}