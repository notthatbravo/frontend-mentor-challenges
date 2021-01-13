let questionContainer = document.querySelectorAll(".question-arrow-container");
let answer = document.querySelectorAll(".answer");

questionContainer.forEach(question => question.addEventListener("click",toggleAnswer))


function toggleAnswer() {
    answer.forEach(answer => answer.style.display = "block")
};