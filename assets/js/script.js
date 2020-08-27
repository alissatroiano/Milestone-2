
var successOne = 'That is Correct, Your Grace! <strong>The Doune Castle</strong> was used as the set for Winterfell in the TV series Game of Thrones (2011–present), an adaptation of the A Song of Ice and Fire series of novels by George R. R. Martin. Doune featured in the pilot episode and episode one of Game of Thrones. ... Doune is one of the best preserved medieval castles in Scotland.';
var failOne = 'Shame! <strong>The Doune Castle</strong> was used as the set for Winterfell in the TV series Game of Thrones (2011–present), an adaptation of the A Song of Ice and Fire series of novels by George R. R. Martin. Doune featured in the pilot episode and episode one of Game of Thrones. ... Doune is one of the best preserved medieval castles in Scotland.';

var successc = 'That is Correct, Your Grace! <strong>The Doune Castle</strong> was used as the set for Winterfell in the TV series Game of Thrones (2011–present), an adaptation of the A Song of Ice and Fire series of novels by George R. R. Martin. Doune featured in the pilot episode and episode one of Game of Thrones. ... Doune is one of the best preserved medieval castles in Scotland.';
var failTwo = '';

function showAnswers() {
    if (slide.index() === 0 && questions.index() === 2) {
        alert('The castle was used as the set for Winterfell in the TV series Game of Thrones(2011–present), an adaptation of the A Song of Ice and Fire series of novels by George R.R.Martin.Doune featured in the pilot episode and episode one of Game of Thrones. ...Doune is one of the best preserved medieval castles in Scotland.');
    } else {
        alert("You suck!");
    }
}

function myFunction() {
    if (question.index(0) && isCorrectAnswer(answer)) {
        alert(successOne);
    }
    this.questionIndex++;
}

$(document).ready(function () {
    $("button").onclick(function () {
        alert(successOne);
    });
});