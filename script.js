
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

// create some vars
const lastQ = questions.length;
let questionIndex = 0;
let clock;
let score = 0;
let count = 10;

// Question render function
function Qrender(){
    let thisQuestion = questions[questionIndex];

    question.innerHTML = "<p>" + thisQuestion.question + "</p>";
    choiceA.innerHTML = thisQuestion.choiceA;
    choiceB.innerHTML = thisQuestion.choiceB;
    choiceC.innerHTML = thisQuestion.choiceC;
};

function Qstart(){
    console.log(lastQ)
    console.log("game started");
    start.style.display = "none";    
    Qcounter();
    Qrender();
    quiz.style.display= "block";
    clock = setInterval(Qcounter,1000);

};

function checkAnswer(answer){
    if (count > 0 ){
        if(answer == questions[questionIndex].correct){
            score++;
            console.log(score);
        }else{
            count = count + 3;
        };


        if(questionIndex <= lastQ){
            console.log(questionIndex);
            questionIndex++;
            Qrender();
        }else{
            quiz.style.display = "block";
            start.style.display = "none";
        };
    }

};

function Qcounter(){
    if(count >= 0){
        counter.innerHTML = count;
        count = count-1;
    };
};