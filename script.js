
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
    {
        question: "4. Bootstrap is an example of an:",
        answers: {
          a: "IEI",
          b: "OBI",
          c: "URL",
          d: "API"
        },
        correctAnswer: "d"
    }
]

// Timer function to subract 1 from time of 120 and display in #text element

function timer(){
    time--;
    $("#time").text(time)
    $("#time").attr("font-size", "20px")
    if(time < 1){
        endQuiz();
    }
}

// hide my quiz on launch

$(quiz).hide();
$("#end").hide();

// event listeners for read and not ready buttons

$("#ready").click(function () {
    $("#Ready").hide();
    $(quiz).show();
    currentQuestion = 0;
    display();
    setInterval(timer, 1000);
    })

$("#notReady").click(function () {
    alert("Coward");    
})

$(".answer").click(function(){
// IS ANSWER CORRECT

    var answer = $(this).attr("data-answer");
    console.log(answer)
    if(answer == questions[currentQuestion].correctAnswer){
        score = score + 5
    }
    else {
        time = time-10;
    }
    currentQuestion++;
    if(currentQuestion == questions.length){
        endQuiz();
    }
    else{
        display();
    }
})
// function to render question and answer

function display(){
    
        $(".question").text(questions[currentQuestion].question);
        $("#a").text(questions[currentQuestion].answers.a);
        $("#b").text(questions[currentQuestion].answers.b);
        $("#c").text(questions[currentQuestion].answers.c);
        $("#d").text(questions[currentQuestion].answers.d);
}

function endQuiz(){
    $(quiz).hide();
    $("#score").text("You scored " + score + "/25");
    $("#end").show();
    localStorage.setItem("scores", score);
}

$("#submit").click(function(){
    $("#scores").append(localStorage.getItem("scores"));
})




// My quiz:


// 2. When answer is selected:
//     does user answer = correct answer?
//      true= add 1 to score, next question
//      false= subract 10s from time, next question
//      repeat until all questions answered or time is up.

// 3. End of quiz:
//      Display final score and save to local storage
//          display all scores in descending order on "high scores" link
    
