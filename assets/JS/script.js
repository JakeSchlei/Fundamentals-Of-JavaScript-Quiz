const startPage = document.querySelector(".start-page");
const startBtn = document.querySelector(".start-btn");
const questionBox = document.querySelector(".question-box");
const timer = document.querySelector(".timer");






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



// When start button is clicked, the quiz begins 

startBtn.addEventListener(onclick, () => {
    timer.textContent = time;
    startPage.style.display = 'none'
    
    
})