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

let currentQuestion = 0;
let score = 0;


let timeInterval;
let time = 10;

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
        options: [
            "<script>",
            "<scripting>",
            "<javaScript",
            "<js>"

        ]
    },

    {
        question: "How to write an IF statement in JavaScript?",
        answer: "if(i==5)",
        options: [
            "if i==5",
            "if i=5",
            "if(i==5)",
            "if i=5 then"
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store what?",
        answer: "All the Above",
        options: [
            "numbers and strings",
            "booleans",
            "other Arrays",
            "All the Above"
        ]
    },

    {
        question: "How do you call a function named myFunction?",
        answer: "myFunction()",
        options: [
            "myFunction()",
            "call myFunction",
            "call = myFunction()",
            "myFunction"
        ]
    },

    {
        question: "How does a FOR loop start?",
        answer: "for (i=0; i <= 5; i++)",
        options: [
            "for (i = 0; i < 5)",
            "for i = 1 to 5",
            "for (i = 0; i <= 5; i++)",
            "for (i <= 5; i++)"
        ]
    },
];



// When start button is clicked, the rules show 
startPage.addEventListener("click", () => {
    startPage.style.display = "none";
    rulePage.style.display = "block";

});

// If the Exit button is clicked 
exit.addEventListener("click", () => {
    startPage.style.display = "block";
    rulePage.style.display = "none";
});

// When the continue button is clicked
continueBtn.addEventListener("click", () => {
    questionBox.style.display = "block";
    rulePage.style.display = "none";
    timeInterval = setInterval(function () {
        timer.innerHTML = time;
        if (time === 0) {
            clearInterval(timeInterval);
        }
        time--;
    }, 1000);
    
    // multiplying by 100 because it has to pass milliseconds
    setTimeout(handleQuizFinish, time * 1000);
    displayQuiz();
});

function handleOptionClick(event) {
   if (event.target.innerText === questions[currentQuestion].answer) {
    score += 1;
   }else {
    time -= 5;
   }
   console.log(score);
    currentQuestion += 1;
    
    displayQuiz();
};



function handleFormSubmit(event) {
    // prevent form from submitting handle client side 
    event.preventDefault();
    // grab data from form element 
    // pulled from https://www.codegrepper.com/code-examples/javascript/get+form+data+on+submit+javascript
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    
}

function handleQuizFinish() {
    questionContainer.style.display = "none";
    resultsEl.style.display = "block";
    scoreDisplay.innerText = "You got " + score + " correct out of " + questions.length + "!";
    // create event listener once high score button is on the page
    submitForm.addEventListener("submit", handleFormSubmit)

};
// function to display questions
function displayQuiz() {
    if (currentQuestion >= questions.length) {
        // display final score
        handleQuizFinish();
       

        return
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
        

    };
}

