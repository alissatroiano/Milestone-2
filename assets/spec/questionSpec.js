describe("Game Of Facts Test Suite", function () {
    describe('Quiz()', function () {
        it('Should use this keyword to create questions array of objects', function () {
            expect(Quiz()).toBe(questions);
        });
    });
    describe('Quiz()', function () {
        it('Should use this to create quiz.score', function () {
            expect(Quiz()).toBe(this.scores);
        });
    });
    describe('Quiz()', function () {
        it('Should use this to create quiz.questionIndex', function () {
            expect(Quiz()).toBe(this.questionIndex);
        });
    });
    describe('Quiz()', function () {
        it('Should return an error if questions are not strings', function () {
            expect(quizTest()).toBe(alert());
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
    describe('$', function () {
        it('to be defined', function () {
            expect($).toBeDefined();
        });
    });
});
