
// Declare and assign variable used in functions later

var quiz= $("#quiz")
var time = 120;
var currentQuestion =0;
var score =0;
var nameValue = document.querySelector("#nameValue");
var highScores = $("#scoreList");
var interval;




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
    },
    {
        question: "5. DOM is an abbreviation for:",
        answers: {
          a: "Don't Open Mustard",
          b: "Documents Optional, Man",
          c: "Document Object Model",
          d: "Dunk On Me"
        },
        correctAnswer: "c"
    }
]

// Timer function to subract 1 from time of 120 and display in #text element

function  timer(){
    setInterval(function() {
    time--;
    if (time <= 0) {
        clearInterval(interval)
    }
    }, 1000);
    $("#time").text(time)
    $("#time").attr("font-size", "20px")
    if(time < 1){
        endQuiz();
        $("#time").hide();
    }
}

// function timer(){
    
//     interval;
    
// }

// hide my quiz on launch
function init(){
$(quiz).hide();
$("#end").hide();
$("#showScores").hide();
$("#time").hide();
}

init()
// event listeners for read and not ready buttons


$("#ready").click(function () {
    $("#readySplash").hide();
    $(quiz).show();
    $("#time").show();
    currentQuestion = 0;
    display();
    interval = setInterval(timer, 1000);
    })
    timer();

$("#notReady").click(function () {
    alert("Coward");    
})

$(".answer").click(function(){

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
    $("#time").hide();
    clearInterval(interval);

}

function saveName() {
    localStorage.setItem("Score List" , JSON.stringify(scoreList));
    localStorage.setItem("Name List" , JSON.stringify(nameList));
}

function renderScores(){

    // for (var i = 0; i <allScores.length; i++) {
        highScores.text(JSON.stringify(allScores));
    
}

$("#end").submit(function(){
    event.preventDefault();
    $("#end").hide();
    var scoreList = [];
    var nameList = [];
    nameList.push(nameValue.value.trim());
    scoreList.push(score);
    $("#showScores").show(); 
    highScores.text(nameList + ": " + scoreList);
    localStorage.setItem("Name List" , [JSON.stringify(nameValue.value.trim())]);
    localStorage.setItem("Score List" , JSON.stringify(score));
    console.log(nameList);
    console.log(scoreList);
    // renderScores();
})


$("#highScores").click(function(){
    init();
    $("#readySplash").hide();
    $("#showScores").show();
    clearInterval(interval);
})

$("#back").click(function(){
    location.reload();
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
    
