describe("Quiz Test", function () {
    describe('Quiz()', function () {
        it('Should use this keyword to create questions object', function () {
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
    
});