import{questions, qbox, resultsContainer, btnSub, questionsPlease}

const $ = function (foo) {
    return document.getElementById(foo);
};

export{$};

function buildQuiz(questions, qBox, resultsContainer, btnSub) {
     // Den skal vise spørgsmålene med det samme. 
     questionsPlease(questions, qBox);

     //når man klikker submit, så skal den vise resultaterne
     btnSub.addEventListener("click", function(){
         resultsPlease(questions, qBox, resultsContainer);
     });
}

export{buildQuiz, resultsPlease};