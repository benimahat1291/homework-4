
//Init element refeneces DOMS

const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const directions = document.getElementById("directions");

const scoreSheet = document.getElementById("score");
const home = document.getElementById("home");
var nameform = document.getElementById("nameform");
var submitbtn = document.getElementById("submit");




//add event litsener for Start & restart button
start.addEventListener("click", Qstart); //when clicked run the function
restart.addEventListener("click", Qrestart);

//create our questions as ojbects in an array
let questions = [
    {
        number : "Question: 1",
        question: "Q1:  1+1=?",
        choiceA:"2",
        choiceB:"1",
        choiceC:"3",
        correct:"A",
        
    }, {
        number : "Question: 2",
        question: "Q2:  1+2=?",
        choiceA:"1",
        choiceB:"3",
        choiceC:"5",
        correct:"B",
        
    }, {
        number : "Question: 3",
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
let count = 11; //set to 11 beaecause timer starts when count = 10

// Question render function
function Qrender(){
    let thisQuestion = questions[questionIndex];//assign each question object to thisQuestion
    //Mark up obj information in their respective DOM element
    home.innerText = thisQuestion.number;
    question.innerHTML = "<p>" + thisQuestion.question + "</p>"; 
    choiceA.innerHTML = thisQuestion.choiceA;
    choiceB.innerHTML = thisQuestion.choiceB;
    choiceC.innerHTML = thisQuestion.choiceC;
};


    


function Qstart(){ // when start button is pressed, run...
    
    home.innerHTML = "QUIZ!";
    count = 10;//reset the cloock to 10sec
    clock = setInterval(Qcounter,1000); // repeate Qcounter ever 1sec
    console.log("game started");
    directions.style.display = "none";
    start.style.display = "none";  //removes the start button from screen  
    // showScore();
    Qrender(); //move though the questions array to get new questions
    quiz.style.display= "block"; // makes the quiz section appear
    submit(); // run submit function

};
function Qrestart(){
    nameform.style.display = "none";
    scoreSheet.style.display = "none";
    score = 0;//reset our variables
    count = 10; //setting to 10 will reactivate the counter
    questionIndex = 0; //go back to the first question
    console.log("game started");
    restart.style.display = "none";  //removes the start button from screen  
    // showScore();
    Qrender(); //move though the questions array to get new questions
    quiz.style.display= "block"; // makes the quiz section appear

};

//This function is called strat from the html. Each button runs with a constant value A B or C
function checkAnswer(ABC){
    if(ABC === questions[questionIndex].correct){ //If userinput is the same as the correct attributte in obj run...
        score++; // add score by 1
        console.log("score:" + score);
        localStorage.setItem("score",score);
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
    
//Mark up counter and decress counter by 1
function Qcounter(){//counter function is always running for most counter values
    if(count <= 10 ){
        if(count >= 0){
            counter.innerHTML = "Timer: " + count; //show the timer on the screen
            count = count-1; 
        }else{
            count = 11;//change the counter value to outside the condition to stop timer
            endOfGame();
        }
    }   
};

//when function is called change displays to show and hide different elements
function endOfGame(){
    home.innerHTML = "QUIZ!";
    console.log("game has ended");
    nameform.style.display = "block";
    quiz.style.display= "none";
    restart.style.display="block";
    scoreSheet.innerText = "Score :" + score;
    scoreSheet.style.display = "block";
}

//Create lable and submit to local storage your score and name
function submit(){
    //create a namebox input with a placeholder to enter name
    var namebox = document.createElement("input"); //create input document
    namebox.setAttribute("placeholder","enter name"); // add placeholder text
    nameform.appendChild(namebox); //appendChild will add new element into nameform ID in mark up
    namebox.addEventListener("input", function(e){ //tell js to litsen for the input text
        currenttxt = e.target.value
    });

    ///add event litsener to submit but to save result in the namebox
    submitbtn.addEventListener("click", function(){//when submitbuttin is pressed submit to local storage
        localStorage.setItem("name",currenttxt); //set currenttxt as name into local storage
        name = localStorage.getItem("name"); // get from local starge and save txt as name
        score = localStorage.getItem("score")// do the same for score
        console.log(name, score);
        var records = document.createElement("p");//create a html element to display the submit results
        records.setAttribute("class", "text");
        nameform.appendChild(records);
        records.innerHTML = "Name: " +name + " :  Score: " + score; 
    });
}
