import{$, buildQuiz};

let myQuestions = [
    {
        question: "What is the easiest way to add a new array element?",
        answers: {
            a: 'push',
            b: 'slice',
            c: 'concat'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which is a string?",
        answers: {
            a: 'cat',
            b: '"cat"',
            c: '965'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is a conditionel statement?",
        answers: {
            a: 'A conditionel statement is used to go make different actions happen throught different conditions.',
            b: 'A conditionel statement is a prompt that alerts you with a statement.',
            c: 'A conditionel statement is something with numbers.'
        },
        correctAnswer: 'a'
    },
    {
        question: "Hello?",
        answers: {
            a: 'cat',
            b: 'world',
            c: 'pizza'
        },
        correctAnswer: 'b'
    },
    {
        question: "What does the 'DOM' stand for in HTML DOM?",
        answers: {
            a: 'Date Object Method',
            b: 'Drag Object Method',
            c: 'Document Object Method'
        },
        correctAnswer: 'c'
    }
];

// tager min div fra HTML
let qBox = $("quizBox");

let resultsContainer = $("results");

// laver min submit knap
let btnSub = $("submit");

buildQuiz(myQuestions, qBox, resultsContainer, btnSub);

export{myQuestions, qBox, resultsContainer, btnSub, question, answers, correctAnswer};