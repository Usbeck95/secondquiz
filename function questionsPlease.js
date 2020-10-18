import{questions, qbox, answers, question, output};

function questionsPlease(questions, qBox){
    // Her bliver svarene og output deklareret så de kan indeholde ja svar og output
    let output = [];
    let answers;
    // For hvert spørgsmål
    for(let i =0; i<questions.length; i++){

        //starter man med at resette svar arrayen
        answers = [];
    
        //For hvert muligt svar sker der hvad der står fra push
        for(letter in questions[i].answers){

            // De skal have en radio button så man kan klikke dem
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }
        // så her tilføjer man et spørgsmål og dets svar til outputtet
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    // så nu kombinerer man outputlisterne og skriver dem ud i htmlen
    qBox.innerHTML = output.join('');
}

export{questionsPlease, output, answers};