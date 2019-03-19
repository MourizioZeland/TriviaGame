$(document).ready(function () {
    var counter = 0;
    var reset = 0;
    var correct = 0;
    var wrong = 0;
    var questionNumber = 0;




    //container for remaining time
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    var interval = setInterval(function () {
        var now = new Date().getTime();
        var t = countDownDate - now;
        var seconds = Math.floor((t % (1000 * 16) - 1) / 1000);
        var counter = 0;

        //countdown on html

        $("#countdown").html("Time Remaining: " + seconds);
        //coditional for counter to stop at zero
        if (seconds === counter) {

            clearInterval(interval);

            document.getElementById("few").src = "https://media.giphy.com/media/10GDCdNoaefngs/giphy.gif";


        }

    }, 1000);

    //questions and array
    var questionBank = [
        {
            question: "How many times does a heart beat in a lifetime?",
            choice: {
                a: "25 million ",
                b: "2.5 billion ",
                c: "3.8 trillion",
                d: "4.9 billion"
            },
            answer: "b"
        },
        {
            question: "A broken heart can:",
            choice: {
                a: "Hurt",
                b: "Heal all time ",
                c: "Really suck!",
                d: "Cause diahrea"
            },
            answer: "a"
        },
        {
            question: "Where in your chest is your heart?",
            choice: {
                a: "left",
                b: "right",
                c: "center",
                d: "middle"
            },
            answer: "c"
        },
        {
            question: "How many gallons of blood does your heart pump each day?",
            choice: {
                a: "2000",
                b: "15,000",
                c: "8",
                d: "25"
            },
            answer: "a"
        },
        {
            question: "When was the first successful human heart transplant?",
            choice: {
                a: "1793",
                b: "1967",
                c: "1982",
                d: "1935"
            },
            answer: "b"
        },
        {
            question: "How many chambers are in the heart??",
            choice: {
                a: "3",
                b: "8",
                c: "4",
                d: "2"
            },
            answer: "c"
        },


    ];


function makeOver(){
     
    var currentQuestion = questionBank[questionNumber];
    
$("#quiz").text(currentQuestion.question);
$("#results").append(currentQuestion.choice.a);
$("#results").append(currentQuestion.choice.b);
$("#results").append(currentQuestion.choice.c);

$("#results").append(currentQuestion.choice.d);

}
makeOver();
 
});