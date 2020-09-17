describe("Quiz Test", function () {
    describe('Quiz()', function () {
        it('Should accept the questions object as a parameter', function () {
            expect(Quiz()).toBe(questions);
        });
    });
    describe('Quiz()', function () {
        it('Should generate a score when called with showScores', function () {
            expect(Quiz()).toBe(quiz.scores);
        });
    });
});