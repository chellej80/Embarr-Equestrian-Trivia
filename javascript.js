// declare the constant variables
// set the variables for the control buttons
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const homeBtn = document.getElementById("home-btn");
const refreshBtn = document.getElementById("refresh-btn");

//set the variables for the quiz, question & answer containers
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-buttons");
const results = document.getElementById("results"); // variable for the scoring


// declare the scoped variables 
let shuffledQuestions, currentQuestionIndex;
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
	question: 'How many beats in Canter',
	answers: [{
		text: '4',
		correct: false
	}, {
		text: '3',
		correct: true
	}]
}];

  // Create the Quiz Functions & event listners 
  startBtn.addEventListener("click", startQuiz);
  refreshBtn.addEventListener('click', refreshPage);

  nextBtn.addEventListener('click', () => {
	currentQuestionIndex++;
	setNextQuestion();
});


  
  // Start quiz - click on play quiz button to exe this function
  function startQuiz() {
    score = 0;
    startBtn.classList.add('hide');
	currentQuestionIndex = 0;
	shuffledQuestions = questionBank.sort(() => Math.random() - 0.5);
	questionContainer.classList.remove('hide');
	setNextQuestion();
  }

  // Function to reset the answer variable & display the next Question

  function setNextQuestion() {
    resetStatus();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  //Function to display the question in the question container 

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
        answerContainer.appendChild(button);
		
    });
}


  // function for selecting the answer

  function onOptionClick(event) {
	
	
    const selectedButton = event.target;
	

    const correct = selectedButton.dataset.correct;
	if (correct) {
		
		score++; // if answer is correct increment the result by 1 
		results.innerHTML = `${score} questions correct out of ${shuffledQuestions.length}`; 

		
    
	      
    Array.from(answerContainer.children).forEach(button => {
      setStatus(button, button.dataset.correct);
	  button.removeEventListener("click", onOptionClick);// disables the click event for the answer buttons 
    });

	
	}

	
	
    if (shuffledQuestions.length > currentQuestionIndex + 1) {

		
	
      nextBtn.classList.remove('hide');
      
	  
	  

    } else {
  
      endQuiz();
      
      }
    }


  // 
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
	
	nextBtn.classList.add('hide');
	while (answerContainer.firstChild) {
		answerContainer.removeChild(answerContainer.firstChild);
	}
}


function clearStatus(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}




  // Function that reloads the page
    function refreshPage() {
        window.location.reload();
    }

    // Function that when clicked takes the user to the homepage of the website
    /*function goHome(){
	
        window.location.href = "index.html"; 
    }*/
  
    function endQuiz(){
        questionContainer.classList.remove('hide');
        refreshBtn.innerText = 'Restart';
        refreshBtn.classList.remove('hide');
        homeBtn.innerText = 'Go Home';
        homeBtn.classList.remove('hide');
        questionContainer.innerHTML = `Quiz completed`;
        
    }