/* Quiz tutorial found on webdevtrick (https://webdevtrick.com) and followed/customized by developer for this project */
var $ = document.readyState;

$.noConflict();

function Quiz() {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function quizTest(questions) {
    if (typeof (questions) === "string") {
        return questions;
    } else {
       alert("Error!");
    }
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
    this.answerModal(this.questionIndex);
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};

Quiz.prototype.answerModal = function (questionIndex) {
    $(".modal-title").text(questions[questionIndex].answer);
    $("#description").html(questions[questionIndex].description);
    $("#image").attr("src", questions[questionIndex].image).attr("alt", questions[questionIndex].answer);
    $(".modal-footer").text(questions[questionIndex].footer);
    $("#modal").modal("show");
};

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
};

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
};

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
            element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

// This function creates the submit onclick event while populating the score
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        play();
    };
}

/* The showProgress function shows the user what question they are currently answering 
out of the total number of questions in the game */
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

// The showScores function uses jQuery to display the scores of the quiz upon completion
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    $("#modal").hide();
    $("div.answer-column").hide();
    $("div.col-md-6").removeClass("col-md-6").addClass("col-12");
    $("div#results").css({ "width": "100vw", "height": "100vh", "overflow": "hidden", "padding-left": "0", "padding-right": "0" });
}


// The questions array is defined here
var questions = [
    new Question(
        "Where were the Winterfell castle scenes in Game Of Thrones' first/pilot episode filmed?",
        [
            "Windsor Castle",
            "Kilkenny Castle",
            "Doune Castle"
        ],
        "Doune Castle",
        "In the first few episodes of Game of Thrones, the Winterfell scenes were filmed at Doune Castle in Scotland, which was originally built in the 13th century as a medieval stronghold",
        "https://media.giphy.com/media/26BRQTezZrKak4BeE/giphy.gif"
    ),

    new Question(
        "Who was the, 'Mad King' (Aerys Targaryen) inspired by?",
        [
            "Henry VI of England",
            "Charles VI of France",
            "Ivan the Terrible"
        ],
        "Charles VI of France",
        "Charles VI of France is remembered as Charles the Mad. Much like King Aerys Targaryen, Charles VI was popular, charming & successful before going crazy.",
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
        "In the show it was the, 'Thenns'. In the books it was the, 'Ice-River Clans'. In 16h century Scotland it was The Sawney Bean Cave Family, a cave-dwelling Scottish clan that attacked, murdered and ultimately ate their victims.",
        "https://media.giphy.com/media/3o7qDSozG0KG6RmtBS/giphy.gif"

    ),

    new Question(
        "Which historical landmark inspired George R.R Martin to create 'The Wall?'",
        [
            "The Great Wall Of China, China",
            "Hadrian’s Wall, England",
            "Wall of Babylon, Iraq"
        ],
        "Hadrian’s Wall, England",
        "In, 'Game of Thrones', 'The Wall' was built by Brandon The Builder and has been, 'guarding the realms of men for centuries'. In 122 AD, Hadrian's Wall was built between England and Scotland by the Roman Empire to keep, ‘barbarians’ out of reach.",
        "https://media.giphy.com/media/3ohzdQKOgNdvjvz09q/giphy.gif"
    ),

    new Question(
        "Which religion was Martin's, 'Red Faith' and, 'The Lord of Light' based on?",
        [
            "Zoroastrianism",
            "Christianity",
            "Paganism"
        ],
        "Zoroastrianism",
        "The faith of the R’hllor appears to be based on the ancient Persian religion Zoroastrianism. Similar to, 'The Red Faith', Zoroastrianism emphasized a great struggle between good and evil and accepted fire as a medium for spiritual awareness and wisdom.",
        "https://media.giphy.com/media/3o6ozteedImmRyP7Lq/giphy.gif"
    ),

    new Question(
        "Who was Jeoffrey Baratheon and the, 'Purple Wedding' inspired by?",
        [
            "Henry VII of Luxembourg, the Holy Roman Emperor",
            "King Charles I of England",
            "Eustace IV, Count of Boulogne"
        ],
        "Eustace IV, Count of Boulogne",
        "The inspiration for Jeoffrey Baratheon and his catastrophic wedding actually came from the death of King Eustace IV, Count of Boulogne who, much like Jeoffrey, had a very cruel nature. There are various accounts of his death, though most believe he was poisoned.",
        "https://media.giphy.com/media/3o6ozjzLLCjc4AoBEY/giphy.gif"
    ),

    new Question(
        "Which war from history inspired Game Of Thrones', 'The War of Five Kings?",
        [
            "The War of the Roses",
            "Vietnam",
            "World War I"
        ],
        "The War of the Roses",
        "The War of the Roses was a series of battles that ultimately led to the installation of Henry Tudor as king. In the same way King Robert Baratheon's death kicked off the, 'War of Five Kings', the death of King Edward III in 1377 started The War Of the Roses. The battle was fought between the Lancasters and The Yorks, who can be compared to House Lannister and House Stark.",
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
        "George R.R. Martin has frequently compared the ironborn to Vikings from the real-life Middle Ages. Given the analogy that the entire continent of Westeros is supposed to be an oversized version of the British Isles, the ironborn also loosely correspond to celtic raiders from medieval Ireland, as well as raiders from other outer islands in the group.",
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