describe("Game Of Facts Test Suite", function () {
    describe('Quiz()', function () {
        it('Should use this keyword to create questions array of objects', function () {
            expect(Quiz()).toBe(questions);
        });
    });
    describe('Quiz()', function () {
        it('Should use this to create quiz.score ', function () {
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

});