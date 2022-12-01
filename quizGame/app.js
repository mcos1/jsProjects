const score = document.getElementsByClassName("score");
const question = document.getElementById("question");
let questionNumber = document.getElementById("question-number");
const aButton = document.getElementById("a");
const answerA = document.getElementById("answer-a");
const bButton = document.getElementById("b");
const answerB = document.getElementById("answer-b");
const cButton = document.getElementById("c");
const answerC = document.getElementById("answer-c");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const answerBox = Array.from(document.getElementsByClassName("answer-box"));

leftArrow.addEventListener("click", () => {
  if (questionNumber.innerHTML > 1) {
    questionNumber.innerHTML--;
  }
});

rightArrow.addEventListener("click", () => {
  if (questionNumber.innerHTML < 3) {
    questionNumber.innerHTML++;
  }
});

if (questionNumber.innerHTML === 2) {
    question.innerHTML === "What season did Jon Snow die?"
}
