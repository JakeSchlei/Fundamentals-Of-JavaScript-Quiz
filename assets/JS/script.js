const startPage = document.querySelector("#start");
const rulePage = document.querySelector("#rules");
const exit = document.querySelector("#exit");
const continueBtn = document.querySelector("#continue");
const questionBox = document.querySelector(".question-box");
const timer = document.querySelector("#timer");
const questionText = document.querySelector(".question");
const optionList = document.querySelector(".options");
const resultsEl = document.querySelector("#results");
const questionContainer = document.querySelector("#question-container");
const scoreDisplay = document.querySelector("#score-display");
const submitForm = document.querySelector("#score-submit");
const highScorePage = document.querySelector("#high-scores");
const scoresList = document.querySelector("#scores-list");
const tryAgainBtn = document.querySelector("#try-again-button");

let currentQuestion = 0;
let score = 0;

let timeInterval;
let time = 200;

// Algorithm
// create a variable that stores which question someone is on
// click handler on every option, and on that handler we are going to check if the selected option is = the option that is correct
// check answer
// success increments the question variable
// failure decrements time and still increments
// update the DOM to have next question display

const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: ["<script>", "<scripting>", "<javaScript", "<js>"],
  },

  {
    question: "How to write an IF statement in JavaScript?",
    answer: "if(i==5)",
    options: ["if i==5", "if i=5", "if(i==5)", "if i=5 then"],
  },

  {
    question: "Arrays in JavaScript can be used to store what?",
    answer: "All the Above",
    options: [
      "numbers and strings",
      "booleans",
      "other Arrays",
      "All the Above",
    ],
  },

  {
    question: "How do you call a function named myFunction?",
    answer: "myFunction()",
    options: [
      "myFunction()",
      "call myFunction",
      "call = myFunction()",
      "myFunction",
    ],
  },

  {
    question: "How does a FOR loop start?",
    answer: "for (i=0; i <= 5; i++)",
    options: [
      "for (i = 0; i < 5)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
    ],
  },
];

function showElement(elem) {
  elem.style.display = "block";
}

function hideElement(elem) {
  elem.style.display = "none";
}

// When start button is clicked, the rules show
startPage.addEventListener("click", () => {
  hideElement(highScorePage);
  hideElement(startPage);
  showElement(rulePage);
});

// If the Exit button is clicked
exit.addEventListener("click", () => {
  hideElement(highScorePage);
  showElement(startPage);
  hideElement(rulePage);
});

// When the continue button is clicked
continueBtn.addEventListener("click", () => {
  hideElement(highScorePage);
  showElement(questionBox);
  hideElement(rulePage);
  timeInterval = setInterval(function () {
    timer.innerHTML = time;
    if (time === 0) {
      clearInterval(timeInterval);
    }
    time--;
  }, 1000);

  // multiplying by 1000 because it has to pass milliseconds
  setTimeout(handleQuizFinish, time * 1000);
  displayQuiz();
});

function handleOptionClick(event) {
  if (event.target.innerText === questions[currentQuestion].answer) {
    score += 1;
  } else {
    time -= 5;
  }
  currentQuestion += 1;
  displayQuiz();
}
// how to store objects in local storage https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage
function storePlayerData(playerName, score) {
  let highScores = localStorage.getItem("highScores");
  if (!highScores) highScores = {};
  else highScores = JSON.parse(highScores);

  highScores[playerName] = score;

  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function handleFormSubmit(event) {
  // prevent form from submitting handle client side
  event.preventDefault();
  // grab data from form element
  // pulled from https://www.codegrepper.com/code-examples/javascript/get+form+data+on+submit+javascript
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  storePlayerData(formProps["player-name"], score);
  showHighScorePage();
}

function showHighScorePage() {
  hideElement(resultsEl);
  showElement(highScorePage);
  tryAgainBtn.addEventListener("click", () => {
    location.reload();
  });
  let highScores = localStorage.getItem("highScores");
  if (!highScores) {
    scoresList.innerText = "No High Score Available Yet";
    return;
  }
  highScores = JSON.parse(highScores);
  console.log(highScores);
  for (i = 0; i <= Object.keys(highScores).length - 1; i++) {
    const score = document.createElement("div");
    score.innerText =
      Object.keys(highScores)[i] +
      ": " +
      highScores[Object.keys(highScores)[i]];
    scoresList.appendChild(score);
  }
}

function handleQuizFinish() {
  hideElement(timer);
  hideElement(questionContainer);
  showElement(resultsEl);
  scoreDisplay.innerText =
    "You got " + score + " correct out of " + questions.length + "!";
  // create event listener once high score button is on the page
  submitForm.addEventListener("submit", handleFormSubmit);
}
// function to display questions
function displayQuiz() {
  hideElement(highScorePage);
  if (currentQuestion >= questions.length || time <= 0) {
    // display final score
    handleQuizFinish();
    return;
  }
  optionList.innerHTML = "";
  // set the question to the current question
  questionText.innerHTML = questions[currentQuestion].question;
  // for each option for the current question
  for (let i = 0; i <= questions[currentQuestion].options.length; i++) {
    // create a button for the option
    var optionButtonEl = document.createElement("button");
    // set the button text to be the options
    optionButtonEl.textContent = questions[currentQuestion].options[i];
    // attach click event listener
    optionButtonEl.addEventListener("click", handleOptionClick);
    // add option button to option container
    optionList.appendChild(optionButtonEl);
  }
}
