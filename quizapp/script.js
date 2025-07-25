const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let questions = [];
let score = 0;

// Fetch questions from Open Trivia API (using Promises)
function fetchQuestions() {
  return fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => {
      console.error("Error fetching questions:", error);
      questionEl.innerText = "Failed to load quiz.";
    });
}

// Display a question
function showQuestion(questionData) {
  questionEl.innerHTML = questionData.question;
  answersEl.innerHTML = '';
  const correctAnswer = questionData.correct_answer;
  const allAnswers = [...questionData.incorrect_answers, correctAnswer].sort(() => 0.5 - Math.random());

  allAnswers.forEach(answer => {
    const btn = document.createElement('button');
    btn.innerText = answer;
    btn.onclick = () => {
      if (answer === correctAnswer) {
        btn.style.backgroundColor = 'lightgreen';
        score++;
      } else {
        btn.style.backgroundColor = 'tomato';
      }
      nextBtn.style.display = 'block';
      disableButtons();
    };
    answersEl.appendChild(btn);
  });
}

function disableButtons() {
  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true;
  });
}

// Load the next question
function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    nextBtn.style.display = 'none';
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionEl.innerText = `Quiz finished! You scored ${score}/${questions.length}`;
  answersEl.innerHTML = '';
  nextBtn.style.display = 'none';
}

// Initialize Quiz
fetchQuestions().then(fetchedQuestions => {
  questions = fetchedQuestions;
  showQuestion(questions[currentQuestionIndex]);
});

nextBtn.addEventListener('click', loadNextQuestion);
