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
        question: "What does EAL stand for?",
        answers: [
            {
                text: "Equine Action Learning",
                correct: false,
            },
            {
                text: "Equine Assisted Learning",
                correct: true,
            },
            {
                text: "Event Action Learning",
                correct: false,
            },
            {
                text: "Equine All Levels",
                correct: false,
            },
        ],
    },
    {
        question: "Your horse has just had his dinner, which of these must you NOT do now ?",
        answers: [
            {
                text: "Put him in the field",
                correct: false,
            },
            {
                text: "Ride him",
                correct: true,
            },
            {
                text: "Groom him",
                correct: false,
            },
            {
                text: "Muck out his stable",
                correct: false,
            },
        ],
    },
    {
        question: "A young female horse under the age of three or four is referred to as?",
        answers: [
            {
                text: "Mare",
                correct: false,
            },
            {
                text: "Stallion",
                correct: false,
            },
            {
                text: "Filly",
                correct: true,
            },
            {
                text: "Colt",
                correct: false,
            },
        ],
    },
    {
        question: "Which of these should your horse be fed the most of?",
        answers: [
            {
                text: "Hay",
                correct: true,
            },
            {
                text: "Sugar Beet",
                correct: true,
            },
            {
                text: "Carrots",
                correct: false,
            },
            {
                text: "Oats",
                correct: false,
            },
        ],
    },
    {
        question: "Ragwort is safe for horses to eat?",
        answers: [
            {
                text: "Yes",
                correct: false,
            },
            {
                text: "No",
                correct: true,
            },
            
        ],
    },
    {
        question: "Azoturia is also known as 'Monday Morning Disease' and what other name?",
        answers: [
            {
                text: "Winding down",
                correct: false,
            },
            {
                text: "Tiring out",
                correct: false,
            },
            {
                text: "Tying down",
                correct: false,
            },
            {
                text: "Tying up",
                correct: true,
            },
        ],
    },
  ];

  // Create the Quiz Functions & event listners 

  
  // Start quiz - click on play quiz button to exe this function
  function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = questionBank.sort(() => Math.random() - 0.5);
    setNextQuestion();
  }
  