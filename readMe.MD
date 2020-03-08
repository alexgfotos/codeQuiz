For this homework we had to create a quiz that:
    1. displayed a prompt to start the quiz
    2. when confirmed, displayed the first question and answers and started a timer.
    3. when an answer is selected, the next question is displayed along with one of two outcomes:
        correct answer = score++
        incorrect answer = time - 10
    4. At the end of the quiz users will:
        see their high score
        submit their name and store their score.
    5. User can view high scores at any point.


I feel like I am becoming a lot more comfortable with writing JS, looking at my script I can now see many places where I can simplify the code by creating a single function rater than repeating .hide and .display with jquery.

My timer works but keeps going.  I need help correctly inplement clearInterval.

My scores overwrite themselves in localStorage, I tried pushing to a declared empty array, allScores.  I imagine I am missing something small.

My high score list populates as an object with like this: 
    "[{"name":"Looks Stupid","points":15}]"

This is the hardest thing I have done and am enjoying the process but have so much practicing to do!