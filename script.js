// $( "#button1" ).click(function() {
//     alert( "You did the click!" );
//     $( "button" ).slideUp();
//   });
var time = 120;

function timer(){
    time--;
    $("#time").text(time)
    $("#time").attr("font-size", "20px")
}

$("#quiz").hide();


$("#notReady").click(function () {
    alert("Coward");
})



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

var currentQuestion =0;
var score =0;


$("#ready").click(function () {
    $("#Ready").slideUp();
    $("#quiz").show();
    display();
    setInterval(timer, 1000);
    })



var answer = 0;

$("#button1").on("click", function(){
        answer = 0;
        console.log(answer)});

$("#button2").on("click", function(){
        answer = 1;
        console.log(answer)});

$("#button3").on("click", function(){
        answer = 2;
        console.log(answer)});

$("#button4").on("click", function(){
        answer = 3
        console.log(answer)});


// function isCorrect(){
    
// }



if (answer == 2) {
    display("YOU RIGHT");
    score++;
    console.log(score);
}



// function addScore(){



    // if correct plus 1 and next ?
    //  if wrong -time and next ?



   
   
   
    // check if answer right/wrong
    // if correct add one to score

    // next question
    // currentQuestion++;
    // display();
    
