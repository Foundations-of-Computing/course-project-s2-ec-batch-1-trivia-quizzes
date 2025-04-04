const startButton = document.getElementById("start-btn");
const quizContent = document.getElementById("quiz-content");
const result = document.getElementById("result-container");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");
const questions = document.querySelectorAll(".question");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

let currentQuestion= 0;
let score = 0;


startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    quizContent.style.display = "block";
    questions[currentQuestion].style.display = "block";
});


answerButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const selectedButton = event.target;
        answerButtons.forEach(btn => btn.disabled = true);


        
        if (selectedButton.getAttribute("data-correct") === "true") {
            score++;
            selectedButton.style.backgroundColor="rgb(67, 236, 92)";
        }
      else{
        selectedButton.style.backgroundColor="hsl(350, 100.00%, 53.90%)";

      }
        
        scoreDisplay.innerText = `Score: ${score}`;


        nextButton.style.display = "block";
       

    });
});


nextButton.addEventListener("click", () => {
    questions[currentQuestion].style.display = "none"; 
    currentQuestion++;

    if (currentQuestion< questions.length) {
        questions[currentQuestion].style.display = "block"; 
        answerButtons.forEach(btn => btn.disabled = false);
        nextButton.style.display = "none";
    } else {
        showResult();
    }
});


function showResult() {
    quizContent.style.display = "none";
    result.style.display = "block";
    if(score===5){
        finalScore.innerText = `HURRAY!!!Excellent!!\nYour final score is ${score} out of ${questions.length}`;
    }
    else if(score>=3){
        finalScore.innerText = `HURRAY!!!Good!!\nYour final score is ${score} out of ${questions.length}`;
    }
    else if(score>=1){
        finalScore.innerText = `OHHH!!TRY MORE!!\nYour final score is ${score} out of ${questions.length}`;
    }
    else{
        finalScore.innerText = `OOPS!!!BETTER LUCK NEXT TIME!! \nYour final score is ${score} out of ${questions.length}`;
    }
    
    finalScore.style.fontSize = "25px"; 
}


restartButton.addEventListener("click", () => {
    location.reload();
});
