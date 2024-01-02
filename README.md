# quiz-app
Coding Quiz App with coding questions. Test your coding knowledge against the clock, and save your high scores.

Screenshorts link


# Set of questions
// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

  # Then Initialized variables

// Landing page:
// Explanation of the quiz
// Start button
# Click the start button:
// Landing page goes away
// Timer starts
// The first question appears (with its answers)

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer

 Correct answer logic
    // can display a message, update score, etc.

Incorrect answer logic
    // can display a message, deduct time, etc.

    / Move to the next question or end the quiz

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page

// Redirect to high scores page