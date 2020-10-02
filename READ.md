

## Application##

We were given the task to make a Quiz that completes the criteria given below:

This assignment tests our unerstanding of Creating DOM elements and eventlitseners.
using fuctions and accessing Local storages.  

required files:(index.html, script.js, style.css)

## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## PsuedoCode ##

Create HTML framework 

add dom elements into js

create an array with questions and answers

add event litsener for start button initates start funciton

create start functon that starts the quiz
    change displays to show quiz
    start timer
    start questions
create a questions render function to display messages
    use indexing to add questions to the page
create a cheack answer fucntion that checks the answer
    use conditional statements to check button values
    add score and - time
    end function if index is last in array
create a counter funtion
    display time when quiz is happening
    minus the count - 1
    user setinterval to minus by -1 every 1 sec
create a restart function:
    similat to start function but reset vars
create end game funciton:
    change the display to show end of game elements
    home message,submitlable,restart,score
create a submit fucntion
    create lable and save to local storge


## Imporvements ##

Improve styling!

functionality:

> Improve timer so that we can chose any start time
> Make the quesitons generate randomly
> change color of the button to respond to right and worng answer\





## Developer ##

Beni Mahat
date: 10/1/2020