(function() {
    function buildQuiz() {
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
          output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
        let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      if(numCorrect == 3){
      resultsContainer.innerHTML = "I'm the employee for you!";
      }
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Driven?",
        answers: {
            a: "Yes!",
            b: "No",
        },
        correctAnswer: "a"
      },
      {
        question: "Fast-learning?",
        answers: {
            a: "Yes!",
            b: "No",
        },
        correctAnswer: "a"
      },
      {
        question: "Passionate?",
        answers: {
          a: "Yes!",
          b: "No",
         
        },
        correctAnswer: "a"
      }
    ];
  
    buildQuiz();
  
    submitButton.addEventListener("click", showResults);
  })();