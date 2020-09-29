
//Init element refeneces

const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");


//add event litseners
start.addEventListener("click", Qstart);

//create our questions
let questions = [
    {
        question: "1+1=?",
        choiceA:"correct",
        choiceB:"wrong",
        choiceC:"wrong",
        correct:"A",
        
    }, {
        question: "1+2=?",
        choiceA:"wrong",
        choiceB:"correct",
        choiceC:"wrong",
        correct:"B",
        
    }, {
        question: "1+3=?",
        choiceA:"wrong",
        choiceB:"wrong",
        choiceC:"correct",
        correct:"C",
        
    }
];

// create some vars
const lastQ = questions.length-1;
let questionIndex = 0;
const startTime = 10;
let timer;
let score = 0;
let count = 0;

// Question render function
function Qrender(){
    let thisQuestion = questions[questionIndex];

    question.innerHTML = "<p>" + thisQuestion.question + "</p>";
    choiceA.innerHTML = thisQuestion.choiceA;
    choiceB.innerHTML = thisQuestion.choiceB;
    choiceC.innerHTML = thisQuestion.choiceC;
};

function Qstart(){
    console.log("game started");
    start.style.display = "none";
    Qrender();
    quiz.style.display= "block";
    Qcounter();
};

function checkAnswer(answer){
    if(answer == question[questionIndex].correct){
        score++;
    }else{
        timer - 3;
    }

    count = 0;
    if(questionIndex < lastQ){
        questionIndex++;
        Qrender();
    }else{
    }
}

function Qcounter(){
    if(count <= startTime){
        counter.innerHTML = count;
        count++;
    }
}