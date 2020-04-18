// Select element
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var count = document.getElementById("counter");
var result = document.getElementById("result");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");

//  create questions in Array objects
var questions = [
  {
    question: "1.Australia's Capital City is ?",
    choiceA: " Sydney",
    choiceB: " Canbera",
    choiceC: " Melbourne",
    correct: "B",
  },
  {
    question: "2.How Many States are in Australia ?",
    choiceA: "8",
    choiceB: "9",
    choiceC: "7",
    correct: "C",
  },
  {
    question: "3.Who is the Prime Minister of Australia ?",
    choiceA: " Scott Morisson",
    choiceB: "Tony  Abbott",
    choiceC: "Bill Shorton",
    correct: "A",
  },
  {
    question: "4.The national gemstone of Australiais ?",
    choiceA: "Diamond",
    choiceB: "Opal",
    choiceC: "Kangroo",
    correct: "B",
  },
  {
    question: "5.ATO stand for ?",
    choiceA: "Australian Taxation Office",
    choiceB: "Australiain Tennis Organisation",
    choiceC: "Australian Tourist Organisation",
    correct: "A",
  },
  {
    question: "6.Which day is Australia Day?",
    choiceA: "1 June",
    choiceB: "26 April",
    choiceC: "26 January",
    correct: "C",
  },
  {
    question: "7.Where is Opera House located?",
    choiceA: "Sydney",
    choiceB: "Melbourne",
    choiceC: "Canbera",
    correct: "A",
  },
  {
    question: "8.Who maintains peace and order in Australia?",
    choiceA: "Lawers",
    choiceB: "Police",
    choiceC: "Public Servant",
    correct: "B",
  },
  {
    question: "9.Which people are Indigenous Australians?",
    choiceA: "Aborginal",
    choiceB: "European",
    choiceC: "Greek",
    correct: "A",
  },
  {
    question: "10.Where is Great Barrier Reef is located?",
    choiceA: "Gold Coast",
    choiceB: "Perth",
    choiceC: "Cairns",
    correct: "C",
  },
];

var runningQuestion = 0;
var count = 75;
var Timer;

start.addEventListener("click", startQuiz);

// start quiz fuction
function startQuiz() {
  start.style.display = "none";
  choices.style.display = "block";
  renderQuestion();
  quiz.style.display = "block";
  renderCounter();
  Timer = setInterval(renderCounter, 1000);
}

// render a question
function renderQuestion() {
  var q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

// counter render function
function renderCounter() {
  if (count > 0) {
    counter.innerHTML = count;
    count--;
  } else {
    clearInterval(Timer);
    showResult();
  }
}

// check answer function
function checkAnswer(answer) {
  if (runningQuestion <questions.length) {
    if (answer !== questions[runningQuestion].correct) {
      console.log("inside");
      console.log(answer);
      console.log(questions[runningQuestion].correct);
      console.log(runningQuestion);
      incorrect.style.display = "block";
      correct.style.display = "none";
      count = count - 5;
    } else{
      correct.style.display = "block";
      incorrect.style.display = "none";
    }
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(Timer);
    showResult();
  }
  
}
// Show result function
function showResult() {
  quiz.style.display = "none";
  result.style.display = "block";
  var score = document.getElementById("score");
  score.innerHTML = count;
}
// submit function event listener
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  var newInitials = document.getElementById("initials").value;
  var finalResult = { initials: newInitials, score: count };
  var highscores = JSON.parse(localStorage.getItem("highscores"));
  if (!highscores) {
    highscores = [];
  }
  highscores.push(finalResult);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.assign("highscore.html");
});
