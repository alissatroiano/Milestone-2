describe("Game Of Facts Test Suite", function () {
    describe('Quiz()', function () {
        it('Should use this keyword to create questions array of objects', function () {
            expect(Quiz()).toBe(questions);
        });
    });
    describe('Quiz()', function () {
        it('Should use this to create quiz.score', function () {
            expect(Quiz()).toBe(quiz.scores);
        });
    });
    describe('Quiz()', function () {
        it('Should use this to create quiz.questionIndex', function () {
            expect(Quiz()).toBe(quiz.questionIndexs);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create text object', function () {
            expect(Question()).toBe(Question.text);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create choices object', function () {
            expect(Question()).toBe(Question.choices);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create answer object', function () {
            expect(Question()).toBe(Question.answer);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create description object', function () {
            expect(Question()).toBe(Question.description);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create image object', function () {
            expect(Question()).toBe(Question.image);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create footer object', function () {
            expect(Question()).toBe(Question.footer);
        });
    });
    describe('play()', function() {
        it('Should show scores if quiz has ended', function() {
            expect(quiz.isEnded()).toBe(showScores(gameOverHTML))
        })
    })
});