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
        it('Should return an error', function () {
            spyOn(window, "alert");
            quizTest();
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create text object', function () {
            expect(Question()).toBe(this.text);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create choices object', function () {
            expect(Question()).toBe(this.choices);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create answer object', function () {
            expect(Question()).toBe(this.answer);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create description object', function () {
            expect(Question()).toBe(this.description);
        });
    });
    describe('Question()', function () {
        it('Should use this keyword to create image object', function () {
            expect(Question()).toBe(this.image);
        });
    });

    describe('Question()', function () {
        it('Should use this keyword to create footer object', function () {
            expect(Question()).toBe(this.footer);
        });
    });

    describe('$', function () {
        it('to be defined', function () {
            expect($).toBeDefined();
        });
    });

    describe('Scores()', function () {
        it('Scores() to return a number', function () {
            expect(Scores()).toBe();
        });
    });

});
