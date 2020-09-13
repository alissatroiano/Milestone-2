describe("Quiz", function () {
    describe("Quiz Test", function () {
        it("Should start with a quiz score of 0", function () {
            expect(myScore()).toBe(0);
        });
        it("Should trigger questions", function() {
            expect(myQuestions()).toBe(questions);
        
        })
    });
});
      