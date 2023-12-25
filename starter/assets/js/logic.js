let start = document.querySelector("#start");
let time = document.querySelector("#time");
let startScreen = document.querySelector("#start-screen");
let questions = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submit = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");


let currentQuestion = 0;
let timeLeft = 10;

start.addEventListener("click", startQuiz);
submit.addEventListener("click", submitScore);

function displayQuestion(){
    const currentQuestion = questions[currentQuestion];
    questionTitle.textContent = currentQuestion.question;
}