
// Declare and assign variable used in functions later

var quiz= $("#quiz")
var time = 120;
var currentQuestion =0;
var score =0;


// Creat an array of objects for question bank

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


function timer(){
    time--;
    $("#time").text(time)
    $("#time").attr("font-size", "20px")
}

$(quiz).hide();

$("#ready").click(function () {
    $("#Ready").hide();
    $("#quiz").show();
    display();
    setInterval(timer, 1000);
    })

$("#notReady").click(function () {
    alert("Coward");    
})



function display(){
    for ( i = 0 ; i < questions.length ; i++){
        $(".question").text(questions[i].question);
        $("#button1").text(questions[i].answers.a);
        $("#button2").text(questions[i].answers.b);
        $("#button3").text(questions[i].answers.c);
        $("#button4").text(questions[i].answers.d);

    }
    // render the current question
    // render the curret answers
}


function endQuiz(){
    
}




// My quiz:

// 1. Prompt user if they want to start the quiz   
//     true= display 1st question and answers, begin timer
//     false= "coward"


// 2. When answer is selected:
//     does user answer = correct answer?
//      true= add 1 to score, next question
//      false= subract 10s from time, next question
//      repeat until all questions answered or time is up.

// 3. End of quiz:
//      Display final score and save to local storage
//          display all scores in descending order on "high scores" link
    
