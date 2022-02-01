// declare the constant variables
// set the variables for the control buttons
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const homeBtn = document.getElementById("home-btn");
const refreshBtn = document.getElementById("refresh-btn");

//set the variables for the quiz, question & answer containers
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerBtnContainer = document.getElementById("answer-buttons");
const results = document.getElementById("results"); // variable for the scoring


// declare the scoped variables 
let shuffledQuestions, currentQuestionIndex;
let score = 0; // Variable to keep track of user's answers

// Set Questions for Quiz - 10 questions set 
const questionBank = [
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
    {
        question: "What do you call a brown horse with a black mane & tail?",
        answers: [
            {
                text: "Bay",
                correct: true,
            },
            {
                text: "Palomino",
                correct: false,
            },
            {
                text: "Chestnut",
                correct: false,
            },
            {
                text: "Dune",
                correct: false,
            },
        ],
    },
    {
        question: "What do you call the person that puts shoes on the horse?",
        answers: [
            {
                text: "Blacksmith",
                correct: false,
            },
            {
                text: "Farrier",
                correct: true,
            },
            {
                text: "Shoemaker",
                correct: false,
            },
            {
                text: "Metalman",
                correct: false,
            },
        ],
    },
    {
        question: "How many beats in Canter",
        answers: [
            {
                text: "4",
                correct: false,
            },
            {
                text: "3",
                correct: true,
            },
        ],
    },
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
        answers: [
            {
                text: "Apollo",
                correct: false,
            },
            {
                text: "Embarr",
                correct: true,
            },
            {
                text: "Bucko",
                correct: false,
            },
            {
                text: "Fionn",
                correct: false,
            },
        ],
    },
  ];
  