# Testing

The following tests have been conducted by the developer. Each test described below was accompanied by the steps detailed below it to ensure the test ultimately pass.

## JSHint Tests

1. JSHint Test:
    * Visit JSHint.com in browser.
    * Paste contents of assets/scripts/question.js.
    * Repair all errors.
    * Declare test, ‘pass’.

2. JSHint Test 2:
    * Visit JSHint.com in browser.
    * Paste contents of assets/scripts/question.js.
    * Repair all errors.
    * Declare test, ‘pass’.

## Console Tests

1. Console Test 1 - TypeError
    * Add a line of code.
    * Open Chrome Developer Tools and visit the console.
    * Identify a 'TypeError' on line 58.
    * Inspect code and repair error.
    * Declare test, ‘pass’.

2. Console Test 2 - Quiz Test
    * Open game in browser.
    * Open Chrome Developer Tools and visit the console.
    * Type, 'quiz' into console and inspect log.
    * Answer a question correctly and move on to next question.
    * Call quiz in console again to ensure the score and questionIndex are incremented by 1 and questions array remains 10.
    * Get a question wrong and repeat step.
    * Declare test, ‘pass’.

3. Console Test 3 - Questions Test
    * Open game in browser.
    * Open Chrome Developer Tools and visit the console.
    * Type, 'questions' into console and inspect log.
    * Review array after it is logged to the console.
    * Declare test, ‘pass’.

4. Console Test 4 - `console.log(typeof Quiz)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof Quiz)`.
    * Observe that console returns `function`.
    * Declare test, ‘pass’.

5. Console Test 5 - `console.log(typeof questions)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof questions)`.
    * Observe that console returns `object`.
    * Declare test, ‘pass’.

6. Console Test 6 - `console.log(typeof guess)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof guess)`.
    * Observe that console returns `function`.
    * Declare test, ‘pass’.

7. Console Test 7 - `console.log(typeof play)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof play)`.
    * Observe that console returns `function`.
    * Declare test, ‘pass’.

8. Console Test 8 - `console.log(typeof Question)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof Question)`.
    * Observe that console returns `function`.
    * Declare test, ‘pass’.

9. Console Test 9 - `console.log(typeof showProgress)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof showProgress)`.
    * Observe that console returns `function`.
    * Declare test, ‘pass’.

10. Console Test 10 - `console.log(typeof showScores)` Test
    * Open deployed project in browser.
    * Press F12 to open Chrome Dev Tools.
    * Visit Console.
    * Type `console.log(typeof showScores)`.
    * Observe that console returns `function`.
    * Declare test, ‘pass’.

## Navigation

1. Navigation Test 1 - Modal Title
    * Open web application in browser.
    * Navigate to navbar links.
    * Click, 'How to Play'.
    * Close modal.
    * Answer a question and close modal.
    * Click on, 'How to Play'.
    * **Discover a bug:** This modal's title is changing because class `modal-title` is being manipulated by jQuery.
    * Change the class name to `directions-title`.
    * Save and commit code.
    * Reload browser and ensure error is resolved.
    * Declare test, ‘pass’.

2. Navigation Test 2 - Remove Active State
    * Open web application on mobile device.
    * Click on navbar toggle icon.
    * Click on, 'play'.
    * Acknowledge that the anchor link works.
    * **Discover a bug:**  Expanded navigation does not automatically close after clicking on a link.
    * Refer to Milestone 1 (where this also happened) for solution code.
    * Add the `Remove Active State Script` to index.html.
    * Save and commit updated code.
    * Check on mobile again.
    * Declare test, ‘pass’.

3. Navigation Test 3 - Toggler Icon Test

## WC3 Jigsaw Validator

1. WC3 Jigsaw Validator
    * Visit W3C HTML Validator.
    * Upload the entire stylesheet.
    * Make all changes.
    * Run test again to verify no error.
    * Declare test, ‘pass’.

## WC3 HTML Validator Test

1. HTML Validator Test
    * Visit W3C HTML Validator.
    * Paste all contents of index.html.
    * Modify code to repair errors.
    * Visit W3C HTML Validator.
    * Repeated this step after adding any new syntax and/or making changes.
    * Declare test, ‘pass’.

## Test Driven Development with Jasmine

1. TDD with Jasmine - Quiz Test
    * Create new branch named, `jasmine-tdd`.
    * Import Jasmine scripts.
    * Create test.html.
    * Create specs folder.
    * Create `questionSpec.js` file for Jasmine tests.
    * Write first test spec to test that `Quiz` returns numbers array.
    * Fail test.
    * Update test until pass.
    * Declare test, ‘pass’.
