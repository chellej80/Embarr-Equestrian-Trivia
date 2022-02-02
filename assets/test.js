
// declare variables 
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const homeBtn = document.getElementById('home-btn')
const questContainerEle = document.getElementById('question-container');
const questionEle = document.getElementById('question');
const answerBtnEle = document.getElementById('answer-buttons');
const results = document.getElementById('results');
const refreshBtn = document.getElementById('refresh-btn');
let shuffleQuest, currentQuestionIndex;
let scoreQuest = 0; // keep track of user's answers

//Event Listners for Button Actions
homeBtn.addEventListener('click', goHome);
startBtn.addEventListener('click', startQuiz);
refreshBtn.addEventListener('click', refreshPage);
nextBtn.addEventListener('click', () => {
	currentQuestionIndex++;
	setNextQuestion();
});

function goHome(){
	
	window.location.href = "index.html"; 
}

/*function userName() {
  var input = document.getElementById("userInput").value;
  alert(input.value);
}*/

function startQuiz() {
	startBtn.classList.add('hide');
	scoreQuest = 0;
	currentQuestionIndex = 0;
	shuffleQuest = questionBank.sort(() => Math.random() - 0.5);
	questContainerEle.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	resetStatus();
	showQuestion(shuffleQuest[currentQuestionIndex]);
}

function showQuestion(question) {
	questionEle.innerText = question.question;
	question.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;

		}
		button.addEventListener('click', selectAnswer);
		answerBtnEle.appendChild(button);
	});
}

function resetStatus() {
	nextBtn.classList.add('hide');
	while (answerBtnEle.firstChild) {
		answerBtnEle.removeChild(answerBtnEle.firstChild);
	}
}

function refreshPage() {
	window.location.reload();
}


function selectAnswer(ans) {
  const selectedButton = ans.target;
  const correct = selectedButton.dataset.correct;
  
  
  if (correct) {
    scoreQuest++;
  }
  Array.from(answerBtnEle.children).forEach(button => {
    setStatus(button, button.dataset.correct);
  });
  results.innerHTML = `${scoreQuest} questions correct out of ${shuffleQuest.length}`;
  if (shuffleQuest.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
    
  
  } else {

	endQuiz();
	 
    //refreshBtn.innerText = 'Restart';
    //refreshBtn.classList.remove('hide');
    //saveScore.innerText = 'Save Results'
    //saveScore.innerText.remove('hide')
  }
  //show number of correct answers out of total
 
  /*document.getElementById('right-answers').innerHTML=quizScore;*/
}



function setStatus(element, correct) {
	clearStatus(element);
	if (correct) {
		element.classList.add('correct');
	} else {
		element.classList.add('wrong');
	}
}

function clearStatus(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}

function endQuiz(){
	questContainerEle.classList.remove('hide');
	refreshBtn.innerText = 'Restart';
    refreshBtn.classList.remove('hide');
	homeBtn.innerText = 'Go Home';
    homeBtn.classList.remove('hide');
	questContainerEle.innerHTML = `Well Done ! Quiz completed`;
	
}
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