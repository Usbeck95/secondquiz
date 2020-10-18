import{question, questions, qBox, resultsContainer, answers};

function resultsPlease(questions, qBox, resultsContainer) {

    // laver en holder til valuesne fra quizzens svar
    let answerContainers = qBox.querySelectorAll('.answers');

    // her skal der holdes styr på brugerens svar
    let userAnswer = '';
    let numCorrect = 0;

    //for hvert svar skal der ske...
    for(let i=0; i<questions.length; i++){

        // den skal kigge efter om der er valgt et svar
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        //hvis det valgte svar er det samme som spørgsmålets korrekte svar...
        if(userAnswer===questions[i].correctAnswer){
            //så bliver der lagt en til hos numCorrect
            numCorrect++;
            
            //Så bliver svaret også grønt for rigtigt
            answerContainers[i].style.color = 'lightgreen';
        }
        // og ellers
        else {
            //så bliver der selvfølgelig ikke lagt til numcorrect og svaret bliver rødt
            answerContainers[i].style.color = 'red';
        }
    }

    // her beder vi den om at den skal skrive i html, og den skal fortælle hvor mange rigtige svar man har fået ud af alle de mulige svar.
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

export{resultsPlease, answerContainers, userAnswer, numCorrect, resultsContainer};