let answers = {
  q1: "c",
  q2: "b",
  q3: "c",
  q4: "a",
  q5: "b",
  q6: "b",
  q7: "a",
  q8: "c",
  q9: "b",
  q10: "b",
};
let userAnswers = {};

function checkAnswers() {
  let score = 0;
  let answerList = "";

  // Check user's answers against the correct answers
  for (let i = 1; i <= 10; i++) {
    let question = "q" + i;
    let form = document.getElementById("quizForm");
    let selectedAnswer = form["q" + i] ? form["q" + i].value : null;

    if (!selectedAnswer) {
      alert(`Please answer question ${i}`);
      return;
    }

    userAnswers[question] = selectedAnswer;
    if (selectedAnswer === answers[question]) {
      score++;
      answerList += `<p>Question ${i}: Correct</p>`;
    } else {
      answerList += `<p>Question ${i}: Incorrect (You answered ${selectedAnswer}, correct answer was ${answers[question]})</p>`;
    }
  }

  // Display the results
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h2>Your Score: ${score} / 10</h2>`;
  resultDiv.style.display = "block";
  document.getElementById("answerList").innerHTML = answerList;
  document.getElementById("answerList").style.display = "block";
}
