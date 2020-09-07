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
    $("#modal").modal("show");
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer, description, image) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.description = description;
    this.image = image;
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
    console.log(id, guess);
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
        "Doune Castle, Scotland",
        "Doune Castle is one of several sites in the UK being transformed into the world of Westeros to celebrate the legacy of the hit HBO series. The medieval stronghold, north of Stirling, was used as a filming location for the pilot episode, doubling as the Stark family home.",
        "assets/images/dounecastle.jpg"
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
        "assets/images/madkings.jpg"
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
        "assets/images/charlesvi.jpg"
    ),

    new Question(
        "Which real family in history were the cannibal wildlings inspired by?",
        [
            "The Bloodthirsty Thenns",
            "The Sawney Bean Family",
            "The Hungry Hungarians"
        ],
        "The Sawney Bean Family",
        "Much like the cannibal wildlings, The Sawney Bean family were a cave-dwelling, cannibalistic Scottish clan that made a living by hiding in bushes and jumping out on passers-by, hacking them to death, feasting on their flesh, and stealing their possessions."
    ),

    new Question(
        "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
        [
            "The Great Wall Of China, China",
            "Hadrian’s Wall, England",
            "Wall of Babylon, Iraq"
        ],
        "Hadrian’s Wall, England",
        "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
    ),

    new Question(
        "Which location was used to film the iconic, 'King's Landing' for the television series, Game Of Thrones?",
        [
            "Crete, Greece",
            "Vis, Croatia",
            "Dubrovnik, Croatia"
        ],
        "Dubrovnik, Croatia",
        "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
    ),

    new Question(
        "Which King's death inspired King Jeoffrey Baratheon's deadly, 'Purple Wedding'?",
        [
            "Henry VII of Luxembourg, the Holy Roman Emperor",
            "King Charles I of England",
            "Eustace IV, Count of Boulogne"
        ],
        "Eustace IV, Count of Boulogne",
        "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy."
    ),

    new Question(
        "Which war from history inspired Game Of Thrones', 'The War of Five Kings?",
        [
            "The War of the Roses",
            "Vietnam",
            "World War I"
        ],
        "The War of the Roses",
        "The War of Roses was a series of civil wars fought between two prominent families, the House of Lancaster (red rose) and House of York (white rose) for the throne of England."
    ),

    new Question(
        "In which location did Game Of Thrones film the, 'Water Gardens of Dorne?",
        [
            "Gardens of Versailles - Versailles, France",
            "Alcázar of Seville - Seville, Spain",
            "Powerscourt Gardens - Enniskerry, County Wicklow, Ireland"
        ],
        "Alcázar of Seville - Seville, Spain", 
        "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy."
    ),

    new Question(
        "Which of these historical war tactics inspired George R.R. Martin to create 'Wildfire'?",
        [
            "Greek Fire",
            "Wild West Gunpowder",
            "Ancient Arsen"
        ],
        "Greek Fire",
        "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy."
    )];

// create quizs
var quiz = new Quiz(questions);

// display quiz
populate();