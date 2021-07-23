var startBtn = document.getElementById('Start-Game');
var timeSpan = document.getElementById('timer');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');


var questions = [
    {
        question: 'The question goes here?',
        choices: ['blue', 'yelloe', 'green', 'white'],
        correctAnswer: 'blue'
    },
    {
        question: 'what color is the sky?',
        choices: ['blue', 'yelloe', 'green', 'white'],
        correctAnswer: 'blue'
    }
];




var time = 75;
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
        //call the function to end the game
    }
    time--;
    timeSpan.innerHTML = time;


}, 1000)

//call teh fucntion to render questions
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
    if (this.value)
        console.log('ok')
};






//event listern for start button
startBtn.addEventListener('click', startQuiz)