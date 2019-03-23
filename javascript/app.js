$(document).ready(function () {
   
    var counter = 0;
    var reset = 15;
    var clickSound = new Audio();
    var wrong = 0;
    var questionNumber = 0;
    var correctAnswer;
    var userGuess = [];
    var interval;

    
    // Counter
    
    
     interval = setInterval(function () {
       
        questionGenerator();
       
    
    //Counter on DOM

    $("#countdown").html("Time Remaining: " + reset);
        
    //conditional for counter to stop at zero
        if (reset === counter) {
            reset=15;
            document.getElementById("few").src = "https://media.giphy.com/media/10GDCdNoaefngs/giphy.gif";
        }
         else{ 
            reset--;
            document.getElementById("few").src = "https://media.giphy.com/media/3THWzyYHDHpIY/giphy.gif";
        }

    }, 1000);
   
    //questions and array
   
    var questionBank = ["How many times does a heart beat in a lifetime?","A broken heart can:","Where in your chest is your heart?","How many gallons of blood does your heart pump each day?","When was the first successful human heart transplant?","How many chambers are in the heart?"]
    var choice =[{  
            
            choice: {
                a: "25 million ",
                b: "2.5 billion ",
                c: "3.8 trillion",
                d: "4.9 billion"
            },
            answer: "b"
        },
        {
          
            choice: {
                a: "Hurt",
                b: "Heal all time ",
                c: "Really suck!",
                d: "Cause diahrea"
            },
            answer: "a"
        },
        {
            
            choice: {
                a: "left",
                b: "right",
                c: "center",
                d: "middle"
            },
            answer: "c"
        },
        {
         
            choice: {
                a: "2000",
                b: "15,000",
                c: "8",
                d: "25"
            },
            answer: "a"
        },
        {
            
            choice: {
                a: "1793",
                b: "1967",
                c: "1982",
                d: "1935"
            },
            answer: "b"
        },
        {
            
            choice: {
                a: "3",
                b: "8",
                c: "4",
                d: "2"
            },
            answer: "c"
        },


    ];
   

   
    //ClickBank  
   $(".btn").click(function(){
   
   });
    //Choice A
    $("#a").click(function(){
        var answer = $("#a");
        answer = "a";
        if(answer === correctAnswer){
            document.getElementById("few").src = "https://media.giphy.com/media/Go30VSSpSm0c8/giphy.gif";
            }
        else{
            document.getElementById("few").src = "https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif";
        
        }
        
    });
    //Choice B
    $("#b").click(function(userGuess){
        var answer = $("#b");
        answer = "b";
        if(answer === correctAnswer){
            
            document.getElementById("few").src = "https://media.giphy.com/media/Go30VSSpSm0c8/giphy.gif";
        }
        else{
            document.getElementById("few").src = "https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif";
        }
        
    });
    //Choice C
    $("#c").click(function(userGuess){
        var answer = $("#c");
        answer = "c";
        if(answer === correctAnswer){
            document.getElementById("few").src = "https://media.giphy.com/media/Go30VSSpSm0c8/giphy.gif";
        }
        else{
            document.getElementById("few").src = "https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif";
        }
    });
    //Choice D
    $("#d").click(function(userGuess){
        var answer = $("#d");
        answer = "d";
        if(answer === correctAnswer){
            document.getElementById("few").src = "https://media.giphy.com/media/Go30VSSpSm0c8/giphy.gif";
        }
        else{
            document.getElementById("few").src = "https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif";  
            
        }
    });
     

  
    $("#Intiate").click(function(){
        
        questionGenerator();
        reset=15;
        
        questionCounter++;
    });
    
    
    //Where the questions generator and are put to DOM
    function questionGenerator() {
        
        correctAnswer = (choice[questionCounter].answer);
        $('#gameQuestion').text(questionBank[questionCounter]);
        $("#a").text(choice[questionCounter].choice.a);
        $("#b").text(choice[questionCounter].choice.b);
        $("#c").text(choice[questionCounter].choice.c);
        $("#d").text(choice[questionCounter].choice.d);
    
  
  
    }
   

    function reset(){
        reset --;

    }


    function nextQuestion(){
        
      
    }
    var questionCounter=0;
    function questionCounter(){
    if(questionCounter > 5){
    questionBank++;
    
    }
}

 
});