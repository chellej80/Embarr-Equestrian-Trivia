/*Code inspired and adapted from the following tutorials and sources:
https://www.sitepoint.com/simple-javascript-quiz/
https://www.youtube.com/watch?v=f4fB9Xg2JEY&list=WL&index=14
https://www.youtube.com/watch?v=w-OKdSHRlfA&list=WL&index=13
https://flexiple.com/disable-button-javascript/
https://www.youtube.com/watch?v=jvk1pFNqXaw&t=1300s
https://stackoverflow.com/questions/28610365/how-can-i-add-an-event-for-a-one-time-click-to-a-function
https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw
*/


// declare the constant variables
// set the variables for the control buttons
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const refreshBtn = document.getElementById("refresh-btn");

//set the variables for the quiz, question & answer containers
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-buttons");
const results = document.getElementById("results"); // variable for the scoring


// declare the scoped variables 
let shuffledQuestions, currentQuestionIndex; // var for shuffling the questions/ var for knowing which question we are on inside the shuffle and set to undefined 
let score = 0; // Variable to keep track of user's answers

//Set Questions for Quiz - 10 questions set 
const questionBank = [{
    question: "What is the name of Niamh's Mythical Horse that carries her to the land of eternal youth?",
    answers: [{
        text: 'Apollo',
        correct: false
    }, {
        text: 'Embarr',
        correct: true
    }, {
        text: 'Bucko',
        correct: false
    }, {
        text: 'Fionn',
        correct: false
    }, ]
}, {
    question: "What do you call a brown horse with a black mane & tail?",
    answers: [{
        text: 'Bay',
        correct: true
    }, {
        text: 'Palomino',
        correct: false
    }, {
        text: 'Chestnut',
        correct: false
    }, {
        text: 'Dune',
        correct: false
    }]
}, {
    question: "What do you call the person that puts shoes on the horse?",
    answers: [{
        text: 'Blacksmith',
        correct: false
    }, {
        text: 'Farrier',
        correct: true
    }, {
        text: 'Shoemaker',
        correct: false
    }, {
        text: 'Metalman',
        correct: false
    }]
}, {
    question: 'How many beats in Canter?',
    answers: [{
        text: '4',
        correct: false
    }, {
        text: '3',
        correct: true
    }]


}, {
    question: 'What do you call a female horse under 4 years',
    answers: [{
        text: 'Mare',
        correct: false
    }, {
        text: 'Colt',
        correct: false
    }, {
        text: 'Filly',
        correct: true
    }, {
        text: 'Foal',
        correct: false
    }]

}, {
    question: "What is also known as Monday Morning Sickness?",
    answers: [{
        text: 'Colic',
        correct: false
    }, {
        text: 'Lameness',
        correct: false
    }, {
        text: 'Tying up',
        correct: true
    }, {
        text: 'Winding Down',
        correct: false
    }]
}, {
    question: "What do de-wormers do?",
    answers: [{
        text: 'Put worms in your horse',
        correct: false
    }, {
        text: 'Protect your horse from West Nile Virus',
        correct: false
    }, {
        text: 'Cause lameness',
        correct: false
    }, {
        text: 'Kill worms inside your horse',
        correct: true
    }]
}, {
    question: "Your horse has just had his dinner, which of these must you NOT do now?",
    answers: [{
        text: 'Put him in the field',
        correct: false
    }, {
        text: 'Groom Him',
        correct: false
    }, {
        text: 'Ride Him',
        correct: true
    }, {
        text: 'Muck Out',
        correct: false
    }]
}, {
    question: 'How many teeth does a mature horse have?',
    answers: [{
        text: '16-18',
        correct: false
    }, {
        text: '25-30',
        correct: false
    }, {
        text: '50-52',
        correct: false
    }, {
        text: '36-40',
        correct: true
    }]
}, {
    question: ' Which of these should your horse be fed the most of?',
    answers: [{
        text: 'Oats',
        correct: false
    }, {
        text: 'Sugar Beet',
        correct: false
    }, {
        text: 'Hay',
        correct: true
    }, {
        text: 'Straw',
        correct: false
    }]
}];


// Create the event listners 
startBtn.addEventListener("click", startQuiz);
refreshBtn.addEventListener('click', refreshPage);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});


//Create Quiz Functions 13 in total

// Start quiz - click on play quiz button to exe this function
function startQuiz() {
    score = 0; // Set score to 0 at beginning of quiz
    startBtn.classList.add('hide'); // hide the start button once quiz started 
    currentQuestionIndex = 0; // set current quiz question index to 0 at start of quiz
    shuffledQuestions = questionBank.sort(() => Math.random() - 0.5); //shuffle the questions so they are displayed randomly
    questionContainer.classList.remove('hide'); // on starting the game show the quiz questions
    setNextQuestion(); //Function called to populate the quiz question

}

// Function to reset the answer variable & display the next Question

function setNextQuestion() {
    resetStatus();// resets the questions/ answers each time you move to the next one
    displayQuestion(shuffledQuestions[currentQuestionIndex]); // shuffle & display next question
}

//Function to display the questions & answers in the question container - code adapted from https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw

function displayQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", onOptionClick);
        answerContainer.appendChild(button); // clear out and set next questions 

    });
}


// function for selecting the answer

function onOptionClick(event) {

    const selectedButton = event.target;

    const correct = selectedButton.dataset.correct; // check if selected button above is correct answer = true
    if (correct) {
        selectedButton.removeEventListener('click', onOptionClick); // on selection of an answer prevent the ability to select another
        score++; // if answer selected is correct increment the score by 1
    }
    Array.from(answerContainer.children).forEach(button => { // loops through all the rest of the answer buttons and sets their status
        setStatus(button, button.dataset.correct); // set status based on whether the answer is correct 
    });
    results.innerHTML = `Total Score is: ${score} Question(s) Correct out of ${shuffledQuestions.length}`; // Display the score after each answer is selected 


    if (shuffledQuestions.length > currentQuestionIndex + 1) { // check if there are any more questions 


        nextBtn.classList.remove('hide'); //If all questions have not been answers display the next button to move to next question




    } else {

        endQuiz();// If all questions have been answered go to Quiz completed 

    }
}


//clears the status & sets the answer status to correct or incorect on button selection
function setStatus(element, correct) {
    clearStatus(element);
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');
    }
}

// function to reset the answer selections when user clicks the next button
function resetStatus() {

    nextBtn.classList.add('hide');// Hides the next button until answer has been selected 
    while (answerContainer.firstChild) { // loops through the answers in the answer containers removes and replaces them
        answerContainer.removeChild(answerContainer.firstChild); 
	}
}

// clears the answer status selection
function clearStatus(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}




// Function that reloads the page & restarts the quiz
function refreshPage() {
    window.location.reload();
}


//Function to display Restart quiz option and final results, called when all questions have been answered
function endQuiz() {
    questionContainer.innerHTML = `Well Done Quiz completed :)`;
    questionContainer.classList.remove('hide');
    refreshBtn.innerText = 'Try Again ?';
    refreshBtn.classList.remove('hide');

}