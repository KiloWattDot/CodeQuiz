
var qList = [
    {
        question:"Commonly used data types DO NOT include:",
        a:"a.strings",
        b:"b. booleans",
        c:"c. alerts",
        d:"d. numbers",
        correct: "c. alerts",
    },
    {
        question:"The condition in coan if - else statement is enclosed within ____.",
        a: "a. quotes",
        b:"b. curly brackets",
        c:"c. parentheses",
        d:"d. square brackets",
        correct: "d. all of the above",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        a: "a. numbers and strings",
        b:"b. other arrays",
        c:"c.booleans",
        d:"d. all of the above",
        correct: " d. all of the above ",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a:  "a. commas",
        b:"b. curly brackets",
        c:"c. quotes",
        d:"d. parentheses",
        correct: "c.quotes",
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "a. JavaScript",
        b: "b. terminal",
        c: "c./ bash for loops",
        d:  " d. console.log",
        correct:  " d. console.log",
        
    },

 ];

var score = 0;
var i = 0;
startTime = 60;


// var qList = Array.from(qList);
var qTest = document.querySelector('#question-text');
var atext = document.querySelector('#atext')
var btext = document.querySelector('#btext')
var ctext = document.querySelector('#ctext')
var dtext = document.querySelector('#dtext')
var qAnswers = document.querySelectorAll('.answer')

var timerEl = document.querySelector('#countdown');


var NextQuestion_btn = document.querySelector('#PressIt');



function Next() {
    
    console.log('running code')
    console.log(qList[i].question)
    console.log(qList[i].a)
    console.log(qList[i].b)
    console.log(qList[i].c)
    console.log(qList[i].d)
     
    i++;
    console.log(i);
    Game();
    countdown();
}
    
function Game() {
    if (i < 5) {
        qTest.innerHTML = qList[i].question;
        atext.innerHTML = qList[i].a;
        btext.innerHTML = qList[i].b;
        ctext.innerHTML = qList[i].c;
        dtext.innerHTML = qList[i].d;
        
        
    }

}

function  ClearAnswers() {
    qAnswers.forEach(qAnswer => qAnswer.checked = false)
}

function getUserSelection() {
    let answer
    qAnswers.forEach(qAnswer => {
        if(qAnswer.checked) {
            answer = qAnswer.id;
        }
    })
    return answer

}

function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds left till colorsplosion.";
    
        if(timeLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          
        }
    
    }, 1000);
  }

  
function CheckAnswer() {
    

}

function Score() {

}

function Scoreboard() {
    
}





    // return "Next question displays"

NextQuestion_btn.addEventListener("click", () => {}
Game();
countdown();