describe("Game Of Facts Test Suite", function () {
    describe('Quiz()', function () {
        it('Should return an error', function () {
            spyOn(window, "alert");
            quizTest();
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });

    // Show that the game can end
    describe('showScores test', function () {
        it('Should be called when game has ended', function () {
            spyOn(window, "showScores")
            quiz.questions = [];
            quiz.questionIndex = 0;
            play();
            expect(window.showScores).toHaveBeenCalled();
        });
    });

    describe('showScores()', function () {
        it('that game has ended and showScores method is called', function () {
            spyOn(window, "showScores")
            quiz.questions = [];
            quiz.questionIndex = 0;
            play();
            expect(window.showScores).toHaveBeenCalled();
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

    describe('showProgress()', function () {
        it('showProgress() to display progress by using the quiz array index', function () {
            expect(Quiz()).toBe(this.questionIndex);
        });
    });

    describe('showScores()', function () {
        it('showScores() to display scores at the end of the game', function () {
            expect(Quiz(showScores)).toBe(this.score);
        });
    });

    describe('answerModal test', function () {
        it('should accept answer as a parameter', function () {
            expect(Quiz(guess)).toBe(this.answer);
        });
    });

});
