
//Init element refeneces DOMS

const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreSheet = document.getElementById("score");


//add event litsener for Start button
start.addEventListener("click", Qstart);

//create our questions as ojbects in an array
let questions = [
    {
        question: "1+1=?",
        choiceA:"2",
        choiceB:"1",
        choiceC:"3",
        correct:"A",
        
    }, {
        question: "1+2=?",
        choiceA:"1",
        choiceB:"3",
        choiceC:"5",
        correct:"B",
        
    }, {
        question: "1+3=?",
        choiceA:"3",
        choiceB:"5",
        choiceC:"4",
        correct:"C",
        
    }
];

// init variables that we will uses in our functions
const lastQ = questions.length -1;
let questionIndex = 0;
let clock;
let score = 0;
let count = 10;

// Question render function
function Qrender(){
    let thisQuestion = questions[questionIndex];//assign each question object to thisQuestion
    //Mark up obj information in their respective DOM element
    console.log(thisQuestion);
    question.innerHTML = "<p>" + thisQuestion.question + "</p>"; 
    choiceA.innerHTML = thisQuestion.choiceA;
    choiceB.innerHTML = thisQuestion.choiceB;
    choiceC.innerHTML = thisQuestion.choiceC;
    
};


//Mark up counter and decress by 1 
function Qcounter(){
    if(count >= 0){
        counter.innerHTML = count;
        count = count-1; 
    };
};


function Qstart(){
    console.log("game started");
    start.style.display = "none";  //removes the start button from screen  
    Qcounter(); // initate the timer
    // showScore();
    Qrender(); //move though the questions array to get new questions
    quiz.style.display= "block"; // makes the quiz section appear
    clock = setInterval(Qcounter,1000); // repeate Qcounter ever 1sec

};
//
function checkAnswer(clicked){

    if(count > 0){ // If counter is is still running allow for next next question
        if(clicked === questions[questionIndex].correct){ //If userinput is the same as the correct attributte in obj run...
            score++; // add score by 1
            console.log("score:" + score);
        }else{
            count = count + 3; // if not the correct attribute then add count by 3
        };
        
        if(questionIndex < lastQ){
            //console.log(questionIndex);
            questionIndex++; // moves to the next question in questions array
            console.log(questionIndex);
            console.log(lastQ);
            Qrender()
            
        }else{
            endOfGame();
        };
    }else if(count = 0 ){
        endOfGame();
    }else{
        console.log("error");
    };

    
};


function endOfGame(){
   console.log("end of game");
   //console.log(questions.length);
   scoreSheet.innerHTML = "Your score: " + score;
   quiz.style.display = "none";
   scoreSheet.style.display = "none";
   scoreSheet.style.display = "block";
    } 
