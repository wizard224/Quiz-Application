const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Go", "Au", "Pb"],
      answer: "Ag"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "George Orwell"],
      answer: "Harper Lee"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      answersElement.innerHTML = "";
      feedbackElement.textContent = "";
  
      currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(option));
        answersElement.appendChild(button);
      });
    } else {
      endQuiz();
    }
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
      score++;
    } else {
      feedbackElement.textContent = `Wrong! The correct answer was: ${currentQuestion.answer}`;
      feedbackElement.style.color = "red";
    }
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
    currentQuestionIndex++;
    setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
  }
  
  function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    answersElement.innerHTML = "";
    feedbackElement.textContent = `Final Score: ${score}/${questions.length}`;
    feedbackElement.style.color = "blue";
  }
  
  // Initialize the quiz
  loadQuestion();
  