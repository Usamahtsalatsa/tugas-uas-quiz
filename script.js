const correctAnswers = {
  q1: "A",
  q2: "C",
  q3: "B",
  q4: "D",
  q5: "B"
};

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");
const quizForm = document.getElementById("quizForm");

submitBtn.addEventListener("click", function () {
  let score = 0;

  for (let key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correctAnswers[key]) {
      score += 20;
    }
  }

  document.getElementById("scoreText").innerText = `Skor Anda: ${score}`;

  if (score >= 70) {
    document.getElementById("statusText").innerText = "Status: LULUS";
  } else {
    document.getElementById("statusText").innerText = "Status: TIDAK LULUS";
  }

  quizForm.style.display = "none";
  resultDiv.classList.remove("hidden");
});

resetBtn.addEventListener("click", function () {
  quizForm.reset();
  quizForm.style.display = "block";
  resultDiv.classList.add("hidden");
});
