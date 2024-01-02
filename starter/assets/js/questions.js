// // first we need to have questions as array of objects

// let quizQuestions = [
//     {
//         question: "Which language runs in a web browser?",
//         opt1: "Java",
//         opt2: "C",
//         opt3: "Python",
//         opt4: "JavaScript",
//         correct: "opt4",
//     },
//     {
//         question : "Which of the following is NOT a valid variable name in JavaScript?",
//         opt1 : "myVar",
//         opt2 : "_variable",
//         opt3 : "123variable",
//         opt4 : "$var",
//         correct: "opt3",
//     },
//     {
//         question: "What does the acronym 'API' stand for in programming?",
//         opt1: "Advanced Programming Interface",
//         opt2 : "Application Programming Interface",
//         opt3 : "Advanced Python Interpreter",
//         opt4 : "Application Process Integration",
//         correct: "opt2",
//     },
//     {
//         question: "What is the purpose of the 'git clone' command in Git?",
//         opt1 : "Create a new Git repository",
//         opt2 : "Copy files from one branch to another",
//         opt3 : "Clone a remote repository to the local machine",
//         opt4 : "Delete a Git repository",
//         correct: "opt3",
//     }
// ];


// let start = document.getElementById("start");
// let time = document.getElementById("time");
// let startScreen = document.querySelector("#start-screen");
// let questions = document.querySelector("#questions");
// let questionTitle = document.querySelector("#question-title");
// let choices = document.querySelector("#choices");
// let endScreen = document.querySelector("#end-screen");
// let finalScore = document.querySelector("#final-score");
// let initials = document.querySelector("#initials");
// let submit = document.querySelector("#submit");
// let feedback = document.querySelector("#feedback");


// let currentQuestion = 0;
// let timeLeft = 10;
// let score = 0;
// const total_time = 10;
// let sec = total_time;

// start.addEventListener("click", startQuiz);
// submit.addEventListener("click", submitScore);

// function displayQuestion(){
//     const currentQuestion = questions[currentQuestion];
//     questionTitle.textContent = currentQuestion.question;
// }