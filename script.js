
//Init element refeneces DOMS

const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const restart = document.getElementById("restart");

const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreSheet = document.getElementById("score");
var nameform = document.getElementById("nameform");
var submitbtn = document.getElementById("submit");




//add event litsener for Start button
start.addEventListener("click", Qstart);
restart.addEventListener("click", Qrestart);


//create our questions as ojbects in an array
let questions = [
    {
        question: "Q1:  1+1=?",
        choiceA:"2",
        choiceB:"1",
        choiceC:"3",
        correct:"A",
        
    }, {
        question: "Q2:  1+2=?",
        choiceA:"1",
        choiceB:"3",
        choiceC:"5",
        correct:"B",
        
    }, {
        question: "Q3:  1+3=?",
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
let count = 11;

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


    


function Qstart(){
    count = 10;
    clock = setInterval(Qcounter,1000); // repeate Qcounter ever 1sec
    scoreSheet.style.display = "none";
    console.log("game started");
    start.style.display = "none";  //removes the start button from screen  
    // showScore();
    Qrender(); //move though the questions array to get new questions
    quiz.style.display= "block"; // makes the quiz section appear
    submit();

};
function Qrestart(){
    nameform.style.display = "none";
    scoreSheet.style.display = "none";
    score = 0;
    count = 10;
    questionIndex =0;
    console.log("game started");
    restart.style.display = "none";  //removes the start button from screen  
    // showScore();
    Qrender(); //move though the questions array to get new questions
    quiz.style.display= "block"; // makes the quiz section appear

};
//
function checkAnswer(clicked){

    
    if(clicked === questions[questionIndex].correct){ //If userinput is the same as the correct attributte in obj run...
        score++; // add score by 1
        console.log("score:" + score);
    }else{
        count = count - 3; // if not the correct attribute then add count by 3
    };
    
    if(questionIndex < lastQ){
        //console.log(questionIndex);
        questionIndex++; // moves to the next question in questions array
        console.log(questionIndex);
        console.log(lastQ);
        Qrender()
        
    }else{
        count = 11;
        endOfGame();
    };
};
    
//Mark up counter and decress by 1 
function Qcounter(){
    if(count <= 10 ){
        if(count >= 0){
            counter.innerHTML = "Timer: " + count;
            count = count-1;
        }else{
            count = 11;
            endOfGame();

        }

    }
    
};

function endOfGame(){
    console.log("game has ended");
    nameform.style.display = "block";
    quiz.style.display= "none";
    restart.style.display="block";
    scoreSheet.innerText = "Score :" + score;
    scoreSheet.style.display = "block";



}

function submit(){
    var namebox = document.createElement("input")
    namebox.setAttribute("placeholder","enter name");
    nameform.appendChild(namebox);
    namebox.addEventListener("input", function(e){
        currenttxt = e.target.value
    });
    submitbtn.addEventListener("click", function(){
        localStorage.setItem("name",currenttxt);
        name = localStorage.getItem("name");
        console.log(name);
    });
 
}