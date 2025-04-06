// Make a Question's Object -: 

// Object Decleared -: In JS, Object store "key:value" pairs. 
// This is an "array of objects". Each object represents a question with multiple answer choices.


// Step 1: Creating the Questions Object
// this is an array -: idx starts from 0. 

const questions = [
  {
    // key : value 
    question: 'Which element is used for or styling HTML5 layout?',
    // key : value in the form of array 
    answers: [{ text: 'CSS', correct: true },{ text: 'JQuery', correct: false },{ text: 'JavaScript', correct: false },{ text: 'PHP', correct: false },]
  },

  {
    question: 'Among the following, which is the HTML paragraph tag?',
    answers: [{ text: 'p', correct: true },{ text: 'pre', correct: false },{ text: 'hr', correct: false },{ text: 'a', correct: false },]
  },

  {
    question: 'The full form of CSS is:',
    answers: [{ text: 'Colored Special Sheets', correct: false },{ text: 'color sheet styles', correct: false },{ text: 'Cascading Style Sheets', correct: true },{ text: 'None', correct: false },]
  },

  {
    question: 'Which tag is used to create a numbered list in HTML?',
    answers: [{ text: 'ul', correct: false },{ text: 'ol', correct: true },{ text: 'li', correct: false },{ text: 'None Of these', correct: false },]
  },

  {
    question: 'What is the default display property for a div element in CSS?',
    answers: [{ text: 'block', correct: true },{ text: 'inline-block', correct: false },{ text: 'inline', correct: false },{ text: 'flex', correct: false },]
  },

  // same question writes again -: 

  {
    // key : value 
    question: 'Which element is used for or styling HTML5 layout?',
    // key : value in the form of array 
    answers: [{ text: 'CSS', correct: true },{ text: 'JQuery', correct: false },{ text: 'JavaScript', correct: false },{ text: 'PHP', correct: false },]
  },

  {
    question: 'Among the following, which is the HTML paragraph tag?',
    answers: [{ text: 'p', correct: true },{ text: 'pre', correct: false },{ text: 'hr', correct: false },{ text: 'a', correct: false },]
  },

  {
    question: 'The full form of CSS is:',
    answers: [{ text: 'Colored Special Sheets', correct: false },{ text: 'color sheet styles', correct: false },{ text: 'Cascading Style Sheets', correct: true },{ text: 'None', correct: false },]
  },

  {
    question: 'Which tag is used to create a numbered list in HTML?',
    answers: [{ text: 'ul', correct: false },{ text: 'ol', correct: true },{ text: 'li', correct: false },{ text: 'None Of these', correct: false },]
  },

  {
    question: 'What is the default display property for a div element in CSS?',
    answers: [{ text: 'block', correct: true },{ text: 'inline-block', correct: false },{ text: 'inline', correct: false },{ text: 'flex', correct: false },]
  }
];




// Step 2: Selecting HTML Elements

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');


// Step 3: Declaring Variables

let currentQuestionIndex = 0;
let score = 0; // correct ans. 


// Step 4: Starting the Quiz -: This function is called to start or restart the quiz

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Move Next'
  showQuestion(); // It calls showQuestion() to display the first question.
}



// Step 5: Displaying a Question

function showQuestion() {
  resetState() // Calls resetState() to clear previous question options before displaying a new one.

  let currentQuestion = questions[currentQuestionIndex] // Gets the current question from the questions array.
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      answerButtons.appendChild(button);

      if (answer.correct) {
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
  });
    // Adds an event listener to each button so that when clicked, the selectAnswer() function is triggered.
}







// Step 6: Resetting the Question State. 

function resetState() {
  nextButton.style.display = "none" // Hides the "Next" button 
  while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
  }
}


// Step 7: Handling Answer Selection. 

function selectAnswer(e) {

  const selectedBtn = e.target;
  
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
      selectedBtn.classList.add('correct');
      score++;
  } else {
      selectedBtn.classList.add('incorrect')
  }

  Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === 'true') {
          button.classList.add('correct');
      }
      button.disabled = true;
  });
  nextButton.style.display = 'block' // Shows the "Next" button.
}


// Step 8: Displaying the Score. 

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`;
  nextButton.innerHTML = "Want to Play Again??"
  nextButton.style.display = 'block'

}



// Step 9: Handling the Next Button Click.

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }

};


// Step 10: Adding Event Listener to Next Button. 

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
      handleNextButton();
  } else {
      startQuiz();
  }
})



// Step 11: Starting the Quiz Initially. 

startQuiz()



// Summary -: 
// This JavaScript code creates a simple quiz game:
// Displays a question with answer options.
// Waits for the user to click an answer.
// Highlights correct/incorrect answers.
// Moves to the next question when "Next" is clicked.
// At the end, shows the final score and allows restarting.

