# Testing

The following tests have been conducted by the developer. Each test described below was accompanied by the steps detailed below it to ensure the test ultimately passed.

## JSHint Tests

1. JSHint Test:
    * Visit JSHint.com in browser
    * Paste contents of assets/scripts/question.js
    * Repair all errors
    * Declared test, ‘passed’

2. JSHint Test 2:
    * Visit JSHint.com in browser
    * Paste contents of assets/scripts/question.js
    * Repair all errors
    * Declared test, ‘passed’

## Console Tests

1. Test 1 - Console:
    * Add a line of cod
    * Open Chrome Developer Tools and visit the console
    * Identify a 'TypeError' on line 58.
    * Inspect code and repair error.
    * Declared test, ‘passed’

2. Console Test 2 - Quiz Test
    * Open game in browser
    * Open Chrome Developer Tools and visit the console
    * Type, 'quiz' into console and inspect log
    * Answer a question correctly and move on to next question
    * Call quiz in console again to ensure the score and questionIndex are incremented by 1 and questions array remains 10.
    * Get a question wrong and repeat step
    * Declared test, ‘passed’

3. Console Test 2 - Questions Test
    * Open game in browser
    * Open Chrome Developer Tools and visit the console
    * Type, 'questions' into console and inspect log
    * Review array after it is logged to the console
    * Declared test, ‘passed’

4. Console Test 3 - jQuery noConflict()
    * Open game in browser
    * Open Chrome Developer Tools and visit the console
    * Call each function from the game
    * Notice a Type Error on line 78
    * Research the issue and determine the cause to be conflicting versions of jQuery (most likely as a result of Bootstrap)
    * Add `var $ = jQuery.noConflict();` to the top of question.js
    * Refresh browser and open Chrome Dev Tools Console
    * Type showProgress and showScores to ensure error warning is now eliminated
    * Declared test, ‘passed’
