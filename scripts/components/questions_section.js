const questions = document.querySelectorAll(".question_item");



for (let i = 0; i < questions.length; i++) {
    const questionExpandIcon = questions[i].querySelector(".question_expand_icon");
    questionExpandIcon.addEventListener("click", ()=> {
        questions[i].classList.toggle("expanded");
        for (let j = 0; j < questions.length; j++) {
            if (i != j) {
                questions[j].classList.remove("expanded");
            }
        }
    })
}



