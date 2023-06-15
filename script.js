        // Array of questions and answers
        var quizQuestions = [
            {
                question: "Using what you just learned, how do you say 'twenty-one' in finnish",
                answer: "kaksikymmentäyksi"
            },
            {
                question: "what about one hundred and eight",
                answer: "satakahdeksan"
            },
            // Add more questions here
        ];

        // Function to generate the quiz HTML
        function generateQuiz(startIndex, endIndex) {
    var quizContainer = document.getElementById("quiz-container");
    
    // Validate the range of questions
    if (startIndex < 0 || startIndex >= quizQuestions.length || endIndex < 0 || endIndex >= quizQuestions.length || startIndex > endIndex) {
        console.error("Invalid range of questions.");
        return;
    }
    
    for (var i = startIndex; i <= endIndex; i++) {
        var question = quizQuestions[i].question;
        var answer = quizQuestions[i].answer;
        
        var questionHTML = document.createElement("p");
        questionHTML.textContent = question;
        
        var answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.name = "answer" + i;
        
        var answerLabel = document.createElement("label");
        answerLabel.textContent = "Your answer: ";
        answerLabel.appendChild(answerInput);
        
        quizContainer.appendChild(questionHTML);
        quizContainer.appendChild(answerLabel);
    }
    
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", checkAnswers);
    
    quizContainer.appendChild(submitButton);
}


// Function to check the answers
function checkAnswers() {
    var score = 0;
    var quizContainer = document.getElementById("quiz-container");

    for (var i = 0; i < quizQuestions.length; i++) {
        var userAnswerInput = document.querySelector('input[name="answer' + i + '"]');
        var userAnswer = userAnswerInput.value.toLowerCase();
        var correctAnswer = quizQuestions[i].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            userAnswerInput.classList.add("correct"); // Add "correct" class to input box
            score++;
        } else {
            userAnswerInput.classList.add("incorrect"); // Add "incorrect" class to input box

            var correctAnswerText = document.createElement("p");
            correctAnswerText.textContent = "Correct answer: " + correctAnswer;
            correctAnswerText.classList.add("correct-answer");

            userAnswerInput.parentNode.appendChild(correctAnswerText);
        }
    }

    var scoreText = document.createElement("p");
    scoreText.textContent = "Your score: " + score + " out of " + quizQuestions.length;
    scoreText.classList.add("score");

    quizContainer.appendChild(scoreText);
}

  
