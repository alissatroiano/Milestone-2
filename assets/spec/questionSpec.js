describe("Quiz", function () {
    describe("Quiz Test", function () {
        it("Should start with a quiz score of 0", function () {
            expect(myScore()).toBe(0);
        });

        it("Should trigger questions", function () {
            expect(myQuestions()).toBe(questions);
        });
    });

    describe("Quiz Test", function () {
        it("Should start with a quiz score of 0", function () {
            expect(myScore()).toBe(0);
        });

        it("Should trigger questions", function () {
            expect(myQuestions()).toBe(questions);
        });
    });
    describe("myIndex Test", function () {
        it("Should return an error if score is not a number", function() {
            expect(myIndex()).toBe("Error!")
        });
    });
    describe("quizTest test", function() {
        it("Should return all quiz contents", function() {
            expect(quizTest()).toBe(Quiz)
        })
    })
});
