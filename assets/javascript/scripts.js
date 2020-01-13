const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var userScore = 0;
var currentQuestionIndex = 0;


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++
    setNextQuestion()
});

function startGame(){
    console.log("started")
    //hides start button when after clicked//
    startButton.classList.add("hide");
    //generates questions after start is hit
    
    
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetQuestions();
    showQuestion();
  
};
//function will show next question and increment score
function showQuestion(question) {
    questionElement.innerText = question.question;
    questions.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add =("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            userScore++;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}
//clears out previous answers from buttons
function resetQuestions(){
    nextButton.classList.add("hide")
    while(answerButtons.firstChild){
        answerButtons.removeChild;
        (answerButtons.firstChild);
    }
}

//gives correct answer its correct value
function choseAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
}
if (questions.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide");
 } else {
     startButton.innerText = "Restart";
     startButton.classList.remove("hide");
 }
nextButton.classList.remove("hide");

