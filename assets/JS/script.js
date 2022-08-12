const startPage = document.querySelector("#start");
const rulePage = document.querySelector("#rules");
const exit = document.querySelector("#exit");
const continueBtn = document.querySelector("#continue");
const questionBox = document.querySelector(".question-box");
const timer = document.querySelector("#timer");
const questionText = document.querySelector(".question");
const optionList = document.querySelector(".options")

let currentQuestion = 0

let timeInterval;
let time = 100;

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
    displayQuiz();
});

function handleOptionClick() {
    currentQuestion += 1;
    optionList.innerHTML = ""
    displayQuiz();
};


// function to display questions
function displayQuiz() {
    if (currentQuestion >= questions.length) {
        // display final score
        console.log("Quiz Finished")

        return
    }
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
