// $( "#button1" ).click(function() {
//     alert( "You did the click!" );
//     $( "button" ).slideUp();
//   });


$( "#Q1").hide()



$("#ready").click(function(){
    $( "#Ready").slideUp();
    $( "#Q1").show();
})

$("#notReady").click(function(){
    alert("Your training is complete, YOU ARE READY");
})