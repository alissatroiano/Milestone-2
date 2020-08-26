// Quiz tutorial found on webdevtrick (https://webdevtrick.com) and followed/customized by developer for this project

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}

function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question(
        "Where were the Winterfell castle scenes in Game Of Thrones' first/pilot episode filmed?",
        [
            "Windsor Castle, Windsor", 
            "Kilkenny Castle, Ireland", 
            "Doune Castle, Scotland"
        ],
        "Doune Castle, Scotland"
        ),
    new Question(
        "Who was the, 'Mad King' (Aerys Targaryen) inspired by?",
        ["Henry VI of England", "Charles VI of France", "Ivan the Terrible"],
        "Charles VI of France"),
    new Question(
        "Which of these events inspired George R.R Martin's Red Wedding?",
        ["The Black Massacre of 1430", "The Red Banquet of 1610", "The Black Dinner of 1440"],
        "The Black Dinner of 1440"),
    new Question(
        "Which real family in history were the cannibal wildlings inspired by?",
        ["The Bloodthirsty Thenns", "The Sawney Bean Family", "The Hungry Hungarians"],
        "The Sawney Bean Family"),
    new Question(
        "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
        ["The Bloodthirsty Thenns", "The Sawney Bean Family", "The Hungry Hungarians"],
        "The Sawney Bean Family"),
    new Question(
        "King's Landing' was filmed in which location",
        ["Crete, Greece", "Vis, Croatia", "Dubrovnik, Croatia"],
        "Dubrovnik, Croatia"),
    new Question(
        "Which King's death inspired King Jeoffrey Baratheon's deadly, 'Purple Wedding'?",
        ["Henry VII of Luxembourg, the Holy Roman Emperor", "King Charles I of England", "Eustace IV, Count of Boulogne"],
        "Eustace IV, Count of Boulogne"),

    new Question("Which war from history inspired Game Of Thrones', 'The War of Five Kings?", ["The War of Roses", "Vietnam", "World War I"], "War Of Roses")
];

// create quizs
var quiz = new Quiz(questions);

// display quiz
populate();