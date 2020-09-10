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
    this.setupAnswerModal(this.questionIndex);
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
} 

Quiz.prototype.setupAnswerModal = function (questionIndex) {
    $(".modal-title").text(questions[questionIndex].answer);
    $("#description").html(questions[questionIndex].description);
    $("#image").attr("src", questions[questionIndex].image);
    $(".modal-footer").text(questions[questionIndex].footer);
    $("#modal").modal("show");
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer, description, image, footer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.description = description;
    this.image = image;
    this.footer = footer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}

function play() {
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

// This function creates the submit onclick event while populating the score
function guess(id, guess) {
    console.log(id, guess);
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        play();
    }
};

// The showProgress function shows the user what question they are currently answering out of the total number of questions in the game  
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// The showScores function uses jQuery to display the scores of the quiz upon completion
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    $("#modal").hide();
    $("div.answer-column").hide();
    $("div.quiz-column").css("width", "100vw");
};

// The questions array is defined here
let questions = [
    new Question(
        "Where were the Winterfell castle scenes in Game Of Thrones' first/pilot episode filmed?",
        [
            "Windsor Castle, Windsor",
            "Kilkenny Castle, Ireland",
            "Doune Castle, Scotland"
        ],
        "Doune Castle",
        "In the first few episodes of Game of Thrones, the Winterfell scenes were filmed at Doune Castle in Scotland, which was originally built in the 13th century as a medieval stronghold",
        "https://media.giphy.com/media/26BRQTezZrKak4BeE/giphy.gif",
    ),

    new Question(
        "Who was the, 'Mad King' (Aerys Targaryen) inspired by?",
        [
            "Henry VI of England",
            "Charles VI of France",
            "Ivan the Terrible"
        ],
        "Charles VI of France",
        "Charles VI of France is remembered as Charles the Mad. Much like King Aerys Targaryen, Charles VI was popular, charming & successful prior to going crazy.",
        "https://media.giphy.com/media/cI6Qfr0bWjDWM/giphy.gif"
        ),

    new Question(
        "Which of these events inspired George R.R Martin's Red Wedding?",
        [
            "The Black Massacre of 1430",
            "The Red Banquet of 1610",
            "The Black Dinner of 1440"
        ],
        "The Black Dinner of 1440",
        "The inspiration for the, 'Red Wedding,' came from Scotland's Black Dinner of 1440, where the Earl, William Douglas, was tricked into attending a feast that ultimately led to his murder.",
        "https://media.giphy.com/media/3oEjHJYwFLAPyMx128/giphy.gif"
    ),

    new Question(
        "Which real family in history were the cannibal wildlings inspired by?",
        [
            "The Bloodthirsty Thenns",
            "The Sawney Bean Family",
            "The Hungry Hungarians"
        ],
        "The Sawney Bean Family",
        "In the show it was the, 'Thenns'. In the books it was the ice-river clans. In 16h century Scotland it was The Sawney Bean Cave Family, a cave-dwelling Scottish clan that attacked, murdered and ultimately ate their victims.",
        "https://media.giphy.com/media/3o7qDSozG0KG6RmtBS/giphy.gif"

    ),

    new Question(
        "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
        [
            "The Great Wall Of China, China",
            "Hadrian’s Wall, England",
            "Wall of Babylon, Iraq",
            "https://media.giphy.com/media/3ohzdQKOgNdvjvz09q/giphy.gif"
        ],
        "Hadrian’s Wall, England",
        "In Game of Thrones, 'The Wall' protected The Seven for centuries. In 122 AD Hadrian's Wall was built between England and Scotland by the Roman Empire to keep, ‘barbarians’ out of reach.",
        "https://media.giphy.com/media/3ohzdQKOgNdvjvz09q/giphy.gif"
    ),

    new Question(
        "Which location was used to film the iconic, 'King's Landing' for the television series, Game Of Thrones?",
        [
            "Crete, Greece",
            "Vis, Croatia",
            "Dubrovnik, Croatia"
        ],
        "Dubrovnik, Croatia",
        "ENTER NEW TEXT HERE",
        "https://media.giphy.com/media/aARbAkgq690xG/giphy.gif"
    ),

    new Question(
        "Which King's death inspired King Jeoffrey Baratheon's deadly, 'Purple Wedding'?",
        [
            "Henry VII of Luxembourg, the Holy Roman Emperor",
            "King Charles I of England",
            "Eustace IV, Count of Boulogne"
        ],
        "Eustace IV, Count of Boulogne",
        "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy.",
        "https://media.giphy.com/media/Az8qq276ke2BO/giphy.gif"
    ),

    new Question(
        "Which war from history inspired Game Of Thrones', 'The War of Five Kings?",
        [
            "The War of the Roses",
            "Vietnam",
            "World War I"
        ],
        "The War of the Roses",
        "The War of Roses was a series of civil wars fought between two prominent families, the House of Lancaster (red rose) and House of York (white rose) for the throne of England.",
        "https://media.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif"
    ),

    new Question(
        "When creating, 'The Ironborn', George R.R Martin drew inspiration from which of these groups?",
        [
            "The Vikings",
            "The Nok",
            "The Ironmade"
        ],
        "The Vikings",
        "Considering Westeros is a fictional version of medieval England, it makes sense that the, 'Ironborn' resemble the seafaring Vikings.",
        "https://media.giphy.com/media/xT1XGC8nIdwGgjgpa0/giphy.gif"
    ),

    new Question(
        "Which of these historical war tactics inspired George R.R. Martin to create 'Wildfire'?",
        [
            "Greek Fire",
            "Wild West Gunpowder",
            "Ancient Arsen"
        ],
        "Greek Fire",
        "Wildfire was inspired by Greek Fire, a compound used by the Byzantine Greeks in the 7th Century. Just like wildfire, Greek Fire ignited upon contact with water, effectively destorying enemy ships before they reached land.",
        "https://media.giphy.com/media/5iU39jxwwq3oQ/giphy.gif"
    )];

// create quizs
var quiz = new Quiz(questions);

// call the play function here to display quiz to users
play();