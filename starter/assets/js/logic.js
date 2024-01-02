let currentQuestionIndex = 0;
let timer = 0;
let timeRemaining;
let score = 0;

// first we need to have questions as a object with arrays
// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct
 const questions = [
    {
      question: "What is the role of the 'DOCTYPE' declaration in an HTML document?",
      options : ["Specify the HTML version", "Define the document structure", "Declare document styles","Indicate the document title"],
      correctAnswer: "Specify the HTML version"
    },
    {
        question : "Which of the following is NOT a valid variable name in JavaScript?",
        options : ["myVar","_variable","123variable","$var"],
        correctAnswer: "123variable"
    },
    {
        question: "What is the purpose of the 'git clone' command in Git?",
        options : ["Create a new Git repository","Copy files from one branch to another","Clone a remote repository to the local machine","Delete a Git repository"],
        correctAnswer: "Clone a remote repository to the local machine"
    },
    {
        question: "What does the acronym 'API' stand for in programming?",
        options: ["Advanced Programming Interface","Application Programming Interface","Advanced Python Interpreter"," Application Process Integration"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "Which of the following is a dynamically-typed programming language?",
        options:["Java","C++","Python","TypeScript"],
        correctAnswer: "Python"
    }
]
// Then Initialized variables
const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const questionsEl = document.getElementById("questions");
const startScreen = document.getElementById("start-screen");
const choicesContainer = document.getElementById("choices");
const feedbackContainer = document.getElementById("feedback");
const timerElement = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");


// Landing page:
// Explanation of the quiz
// Start button

//Event Listeners
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveScore);

// Click the start button:
// Landing page goes away
// Timer starts
// The first question appears (with its answers)

function startQuiz() {
  startScreen.classList.add("hide");
  questionsEl.classList.remove("hide");
  timeRemaining = 60;
  startTimer();
  displayQuestion();
}

function startTimer() {
  timer = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--;
      timerElement.textContent = timeRemaining;
    } else {
      endQuiz();
    }
  }, 1000);
}

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    let button = document.createElement("button");
    button.textContent = currentQuestion.options[i];
    button.addEventListener("click", function () {
      checkAnswer(currentQuestion.options[i]);
    });
    choicesContainer.append(button);
  }
}

function checkAnswer(userChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  if (userChoice === currentQuestion.correctAnswer) {
    // Correct answer logic
    // can display a message, update score, etc.
    // console.log("Correct!");
    score++;
    feedbackContainer.textContent = "Correct!";
  } else {
    // Incorrect answer logic
    // can display a message, deduct time, etc.
    // console.log("Incorrect!");
    timeRemaining -= 10; // Deduct 10 seconds for incorrect answer
    if(timeRemaining < 0){
      timeRemaining = 0;
    }
    feedbackContainer.textContent = "Incorrecr!";
  }

  // Move to the next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

function endQuiz() {
  clearInterval(timer);
  document.getElementById("questions").classList.add("hide");
  endScreen.classList.remove("hide");
  finalScoreElement.textContent = score;
}

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again
function saveScore(){
  const initials = initialsInput.value.toUpperCase();
  if(initials.trim() !== ""){
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({initials, score});
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Redirect to high scores page
    window.location.href = "highscores.html";
  }
}
