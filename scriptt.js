// app









// question

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}


// Check the answers

Question.prototype.correctAnswer = function (answer) {
  return choice === this.answer;
}

var questions = [
    {
        question: "1. CSS is ______ of a website's anthropromorphic analogy?",
        answers: {
          a: "The Butt",
          b: "The Muscle",
          c: "The Epidermis",
          d: "The Medulla Oblongata"
        },
        correctAnswer: "c"
      },
    {
        question: "2. JS is ______ of a website's anthropromorphic analogy?",
        answers: {
          a: "The Butt",
          b: "The Muscle",
          c: "The Epidermis",
          d: "The Medulla Oblongata"
        },
        correctAnswer: "b"
    },
    {
        question: "3. The term boolean has two possible values called ____ & ____.",
        answers: {
          a: "True & false",
          b: "Big & Small",
          c: "Gif & Gif",
          d: "Butt & Other Butt"
        },
        correctAnswer: "a"
    },
]


// quiz controller

function Quiz(questions) {
  this.score = 0;
  this.questions= questions;
  this.questionIndex = 0;

}

