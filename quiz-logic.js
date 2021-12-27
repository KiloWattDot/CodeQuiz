
const quizData = [
    {
        question:"Commonly used data types DO NOT include:",
        a:"a.strings",
        b:"b. booleans",
        c:"c. alerts",
        d:"d. numbers",
        correct: "c",
    },
    {
        question:"The condition in an if / else statement is enclosed within ____.",
        a: "a. quotes",
        b:"b. curly brackets",
        c:"c. parentheses",
        d:"d. square brackets",
        correct: "c",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        a: "a. numbers and strings",
        b:"b. other arrays",
        c:"c.booleans",
        d:"d. all of the above",
        correct: " d. all of d above ",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a:  "a. commas",
        b:"b. curly brackets",
        c:"c. quotes",
        d:"d. parentheses",
        correct: "c",
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "a. JavaScript",
        b: "b. terminal",
        c: "c. bash for loops",
        d: " d. console.log",
        correct:  "d",
        
    },

 ];




// var qList = Array.from(qList);
const quiz = document.getElementById('quiz')
const questionsEl = document.getElementById('question-text')
const atext = document.getElementById('atext')
const btext = document.getElementById('btext')
const ctext = document.getElementById('ctext')
const dtext = document.getElementById('dtext')
const answerEls = document.querySelectorAll('.answer')
const Submit_btn = document.getElementById('submit')
const timerEl = document.querySelector('#countdown')

let score = 0
let currentQuiz = 0
let startTime = 60
var timeLeft = 60;
var HighScores = [];

// function IntroPage() {
//     if ()
// }

countdown()
Quiz()

function Quiz() {
    
    ClearAnswers()


    const  currentQuizData = quizData[currentQuiz]
     
 
    questionsEl.innerText = currentQuizData.question;
    atext.innerText = currentQuizData.a;
    btext.innerText = currentQuizData.b;
    ctext.innerText = currentQuizData.c;
    dtext.innerText = currentQuizData.d;

    console.log(currentQuizData.question)
    console.log(currentQuizData.a)
    console.log(currentQuizData.b)
    console.log(currentQuizData.c)
    console.log(currentQuizData.d)
    // console.log('correct answer:' + quizData.correct)
        

}

function  ClearAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getUserSelection() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    // console.log('you selected:' + answer)
    return answer

}

function countdown() {
    // var timeLeft = 60;
    // const answer
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft ;
    
        if(timeLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          
        }
        // console.log("Time is " +timeLeft )

        return timeLeft
    
    
    }, 1000);
}


function SortScores(e) {
    
    
    e.preventDefault();
    // console.log(document.getElementById("initials").value)

  }



    // return "Next question displays"

    Submit_btn.addEventListener('click', (e) => { 
        const answer = getUserSelection()
        
        
        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++ 
                timeLeft += 10
                
            
            } else if (timeLeft < 10) {
                timeLeft -= 1
            }
            else {
                timeLeft -= 10
            }
        
            currentQuiz++
            

            if(currentQuiz < quizData.length) {
                Quiz()

            } else {
                quiz.innerHTML =`
                <h2> You answered ${score}/${quizData.length} answers correctly</h2>

                <form onsubmit= "${SortScores(e)}">
                    <input type="text" id="initials"/> 
                    <button>Submit</button>
                </form>
        
                `
                
            }
        }
        
    })
    

