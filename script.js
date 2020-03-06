// $( "#button1" ).click(function() {
//     alert( "You did the click!" );
//     $( "button" ).slideUp();
//   });


$("#Q1").hide();


$("#notReady").click(function () {
    alert("Your training is complete, YOU ARE READY");
})



var questions = [
    {
        question: "CSS is ______ of a website's anthropromorphic analogy?",
        answers: ["The Butt", "The Muscle", "The Epidermis", "The Medulla Oblongata"],
        correct: 2
    },
    {
        question: "JS is ______ of a website's anthropromorphic analogy?",
        answers: ["The Butt", "The Muscle", "The Epidermis", "The Medulla Oblongata"],
        correct: 1
    },
    {
        question: "The term boolean has two possible values called ____ & ____.",
        answers: ["True & false.", "Big & Small", "Gif & Gif", "Butt & Other Butt"],
        correct: 0
    },
    {
        question: "JS is ______ of a website's anthropromorphic analogy?",
        answers: ["The Butt", "The Muscle", "The Epidermis", "The Medulla Oblongata"],
        correct: 1
    },
    {
        question: "JS is ______ of a website's anthropromorphic analogy?",
        answers: ["The Butt", "The Muscle", "The Epidermis", "The Medulla Oblongata"],
        correct: 1
    },
]


var currentQuestion =0;
var score =0;


$("#ready").click(function () {
    $("#Ready").slideUp();
    $("#Q1").show();
    display();
    })

function display(){
    for ( i = 0 ; i < questions.length ; i++){
        $(".question").text(questions[i].question);
        $("#button1").text(questions[i].answers[0]);
        $("#button2").text(questions[i].answers[1]);
        $("#button3").text(questions[i].answers[2]);
        $("#button4").text(questions[i].answers[3]);
    }
    // render the current question
    // render the curret answers
}

function isCorrect(){
    // will return boolean
    
}

function addScore

    // if correct plus 1 and next ?
    //  if wrong -time and next ?

$(".answers").on("click", function(){

   
   
   
    // check if answer right/wrong
    // if correct add one to score

    // next questioc
    currentQuestion++;
    display();

})