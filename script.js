var startBtn = document.getElementById('Start-Game');
var timeSpan = document.getElementById('timer');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');


var questions = [
    {
        question: 'What is CSS short for?',
        choices: ['Cascading Style Sheets', 'Canvasing Systems & Styles', 'Concatting Style Systems', 'Concentrated Style Solutions'],
        correctAnswer: 'Cascading Style Sheets'
    },
    {
        question: 'What function is used to turn an event on?',
        choices: ['.onNow', 'addEventListener', 'Return function', 'functionRender'],
        correctAnswer: 'addEventListener'
    },
    {
        question: 'Where do you access local files in the Inspector',
        choices: ['Console', 'CSS', 'Elements', 'Application'],
        correctAnswer: 'Application'
    },
    {
        question: 'Where do you go in the Inspector to ensure a function is rendering the output correctly?',
        choices: ['Console', 'Memory', 'Elements', 'Application'],
        correctAnswer: 'Console'
    },
    {
        question: 'How do you change the text color in a document using CSS?',
        choices: ['text.color', 'background-color', 'color', 'text-color'],
        correctAnswer: 'color'
    }];




var time = 45;
var timer;
var indexPosition = 0;




function startQuiz(){
//hide start game button
startBtn.style.display = 'none';
//start the timer
timeSpan.innerHTML = time
timer = setInterval(function(){
    if(time === 0){
        alert('game over, time oup');
        //calls the function to end the game
    }
    time--;
    timeSpan.innerHTML = time;


}, 1000)

//call the fucntion to render questions
    renderQuestions()
}

function renderQuestions(){
  //  console.log(questions[indexPosition].question)
    questionEl.innerHTML =questions[indexPosition].question;

   var choicesArr = questions[indexPosition].choices;

    for (let i = 0; i < choicesArr.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = choicesArr[i];
        btn.setAttribute('value', choicesArr[i]);
        btn.onclick = checkAnswer;
        choicesEl.append(btn)
    }
};
//Bel

function checkAnswer(){
    if (this.value = correctAnswer){
        return questionEl;
    }
    else
        time=-5;
        console.log('sucks')
};






//event listern for start button
startBtn.addEventListener('click', startQuiz)