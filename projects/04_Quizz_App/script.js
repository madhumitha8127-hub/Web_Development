// ==========================================
// WEB DEVELOPMENT QUIZ
// 40 QUESTIONS
// RANDOM + NO REPEAT USING LOCAL STORAGE
// ==========================================


// ==========================================
// QUESTION BANK
// ==========================================

const questionBank = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        correctAnswer: 0
    },


    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correctAnswer: 1
    },


    {
        question: "Which language makes webpages interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correctAnswer: 2
    },


    {
        question: "Which HTML tag is used to create a paragraph?",
        answers: [
            "<h1>",
            "<p>",
            "<div>",
            "<br>"
        ],
        correctAnswer: 1
    },


    {
        question: "Which CSS property changes text color?",
        answers: [
            "background",
            "font-size",
            "color",
            "text-style"
        ],
        correctAnswer: 2
    },


    {
        question: "Which keyword creates a constant in JavaScript?",
        answers: [
            "var",
            "let",
            "constant",
            "const"
        ],
        correctAnswer: 3
    },


    {
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "queryId()"
        ],
        correctAnswer: 0
    },


    {
        question: "Which symbol creates a single-line comment in JavaScript?",
        answers: [
            "<!-- -->",
            "//",
            "#",
            "/* */"
        ],
        correctAnswer: 1
    },


    {
        question: "Which CSS layout system arranges items in rows or columns?",
        answers: [
            "Flexbox",
            "Console",
            "DOM",
            "Variable"
        ],
        correctAnswer: 0
    },


    {
        question: "Which HTML element creates a button?",
        answers: [
            "<input>",
            "<click>",
            "<button>",
            "<btn>"
        ],
        correctAnswer: 2
    },


    {
        question: "Which HTML tag is used for the largest heading?",
        answers: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        correctAnswer: 2
    },


    {
        question: "Which CSS property changes the background color?",
        answers: [
            "color",
            "background-color",
            "bgcolor",
            "background-style"
        ],
        correctAnswer: 1
    },


    {
        question: "Which keyword declares a variable that can be reassigned?",
        answers: [
            "let",
            "constant",
            "fixed",
            "define"
        ],
        correctAnswer: 0
    },


    {
        question: "Which operator checks strict equality in JavaScript?",
        answers: [
            "=",
            "==",
            "===",
            "!="
        ],
        correctAnswer: 2
    },


    {
        question: "Which method prints information to the browser console?",
        answers: [
            "print()",
            "console.log()",
            "display()",
            "writeConsole()"
        ],
        correctAnswer: 1
    },


    {
        question: "Which HTML attribute specifies an image source?",
        answers: [
            "href",
            "src",
            "link",
            "source"
        ],
        correctAnswer: 1
    },


    {
        question: "Which HTML attribute provides alternative text for an image?",
        answers: [
            "title",
            "alt",
            "text",
            "description"
        ],
        correctAnswer: 1
    },


    {
        question: "Which CSS property changes the size of text?",
        answers: [
            "font-size",
            "text-size",
            "font-style",
            "size"
        ],
        correctAnswer: 0
    },


    {
        question: "Which CSS property makes text bold?",
        answers: [
            "font-weight",
            "text-bold",
            "font-bold",
            "weight"
        ],
        correctAnswer: 0
    },


    {
        question: "Which loop is commonly used when the number of iterations is known?",
        answers: [
            "if",
            "for",
            "switch",
            "try"
        ],
        correctAnswer: 1
    },


    {
        question: "Which statement is used to make a decision in JavaScript?",
        answers: [
            "if",
            "loop",
            "print",
            "define"
        ],
        correctAnswer: 0
    },


    {
        question: "Which method adds an element to the end of an array?",
        answers: [
            "pop()",
            "push()",
            "shift()",
            "add()"
        ],
        correctAnswer: 1
    },


    {
        question: "Which method removes the last element from an array?",
        answers: [
            "remove()",
            "delete()",
            "pop()",
            "shift()"
        ],
        correctAnswer: 2
    },


    {
        question: "Which method removes the first element from an array?",
        answers: [
            "shift()",
            "pop()",
            "removeFirst()",
            "delete()"
        ],
        correctAnswer: 0
    },


    {
        question: "Which method adds an element to the beginning of an array?",
        answers: [
            "push()",
            "addFirst()",
            "unshift()",
            "start()"
        ],
        correctAnswer: 2
    },


    {
        question: "What does DOM stand for?",
        answers: [
            "Document Object Model",
            "Data Object Method",
            "Document Oriented Model",
            "Digital Object Model"
        ],
        correctAnswer: 0
    },


    {
        question: "Which method selects the first matching CSS selector?",
        answers: [
            "querySelector()",
            "getSelector()",
            "select()",
            "queryFirst()"
        ],
        correctAnswer: 0
    },


    {
        question: "Which property can change the text of an HTML element?",
        answers: [
            "textContent",
            "changeText",
            "innerTextOnly",
            "textChange"
        ],
        correctAnswer: 0
    },


    {
        question: "Which method is used to listen for an event?",
        answers: [
            "listen()",
            "addEventListener()",
            "eventListener()",
            "onEvent()"
        ],
        correctAnswer: 1
    },


    {
        question: "Which event occurs when a button is clicked?",
        answers: [
            "hover",
            "change",
            "click",
            "press"
        ],
        correctAnswer: 2
    },


    {
        question: "Which CSS property creates space inside an element?",
        answers: [
            "margin",
            "padding",
            "spacing",
            "border"
        ],
        correctAnswer: 1
    },


    {
        question: "Which CSS property creates space outside an element?",
        answers: [
            "padding",
            "margin",
            "spacing",
            "outside"
        ],
        correctAnswer: 1
    },


    {
        question: "Which CSS property controls rounded corners?",
        answers: [
            "corner-radius",
            "border-radius",
            "radius",
            "round-border"
        ],
        correctAnswer: 1
    },


    {
        question: "Which CSS property is used to create animations?",
        answers: [
            "animation",
            "motion",
            "move",
            "transition-only"
        ],
        correctAnswer: 0
    },


    {
        question: "Which HTML tag is used to create a link?",
        answers: [
            "<link>",
            "<a>",
            "<url>",
            "<href>"
        ],
        correctAnswer: 1
    },


    {
        question: "Which attribute specifies the destination of a link?",
        answers: [
            "src",
            "href",
            "link",
            "url"
        ],
        correctAnswer: 1
    },


    {
        question: "Which JavaScript data type represents true or false?",
        answers: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ],
        correctAnswer: 2
    },


    {
        question: "Which JavaScript data type stores text?",
        answers: [
            "String",
            "Number",
            "Boolean",
            "Object"
        ],
        correctAnswer: 0
    },


    {
        question: "Which JavaScript data type stores numbers?",
        answers: [
            "Text",
            "Number",
            "Boolean",
            "String"
        ],
        correctAnswer: 1
    },


    {
        question: "Which loop executes its code at least once?",
        answers: [
            "for",
            "while",
            "do...while",
            "foreach"
        ],
        correctAnswer: 2
    },


    {
        question: "Which keyword is used to define a function?",
        answers: [
            "function",
            "define",
            "fun",
            "method"
        ],
        correctAnswer: 0
    }

];


// ==========================================
// SETTINGS
// ==========================================

const QUESTIONS_PER_QUIZ = 10;

const STORAGE_KEY = "usedQuizQuestions";


// ==========================================
// HTML ELEMENTS
// ==========================================

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const question =
    document.getElementById("question");

const answerButtons =
    document.querySelectorAll(".answer-button");

const nextButton =
    document.getElementById("nextButton");

const result =
    document.getElementById("result");

const score =
    document.getElementById("score");

const message =
    document.getElementById("message");

const remainingQuestions =
    document.getElementById("remainingQuestions");

const restartButton =
    document.getElementById("restartButton");


// ==========================================
// VARIABLES
// ==========================================

let quizQuestions = [];

let currentQuestion = 0;

let currentScore = 0;


// ==========================================
// GET USED QUESTIONS
// ==========================================

function getUsedQuestions() {

    const savedQuestions =
        localStorage.getItem(STORAGE_KEY);


    if (savedQuestions === null) {

        return [];

    }


    return JSON.parse(savedQuestions);
}


// ==========================================
// SAVE USED QUESTIONS
// ==========================================

function saveUsedQuestions(usedQuestions) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(usedQuestions)
    );
}


// ==========================================
// SHUFFLE ARRAY
// ==========================================

function shuffleArray(array) {

    const shuffled = [...array];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }


    return shuffled;
}


// ==========================================
// CREATE NEW QUIZ
// ==========================================

function createQuiz() {

    let usedQuestions =
        getUsedQuestions();


    // If not enough unused questions
    // remain for a complete quiz,
    // start a new cycle.

    if (
        questionBank.length -
        usedQuestions.length <
        QUESTIONS_PER_QUIZ
    ) {

        usedQuestions = [];

        saveUsedQuestions([]);

    }


    // Get unused question indexes

    const availableIndexes = [];


    for (
        let i = 0;
        i < questionBank.length;
        i++
    ) {

        if (
            !usedQuestions.includes(i)
        ) {

            availableIndexes.push(i);

        }

    }


    // Randomize available indexes

    const randomIndexes =
        shuffleArray(availableIndexes);


    // Select 10 questions

    const selectedIndexes =
        randomIndexes.slice(
            0,
            QUESTIONS_PER_QUIZ
        );


    // Save these questions as used

    usedQuestions =
        usedQuestions.concat(
            selectedIndexes
        );


    saveUsedQuestions(
        usedQuestions
    );


    // Create quiz questions

    quizQuestions =
        selectedIndexes.map(
            function(index) {

                const original =
                    questionBank[index];


                // Randomize answers

                const answerObjects =
                    original.answers.map(
                        function(answer, index) {

                            return {

                                text: answer,

                                originalIndex: index

                            };

                        }
                    );


                const shuffledAnswers =
                    shuffleArray(
                        answerObjects
                    );


                const newCorrectAnswer =
                    shuffledAnswers.findIndex(
                        function(answer) {

                            return (
                                answer.originalIndex ===
                                original.correctAnswer
                            );

                        }
                    );


                return {

                    question:
                        original.question,

                    answers:
                        shuffledAnswers.map(
                            function(answer) {

                                return answer.text;

                            }
                        ),

                    correctAnswer:
                        newCorrectAnswer

                };

            }
        );


    currentQuestion = 0;

    currentScore = 0;

}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    const current =
        quizQuestions[currentQuestion];


    // Question number

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        QUESTIONS_PER_QUIZ;


    // Progress

    const percentage =
        Math.round(
            (
                (currentQuestion + 1) /
                QUESTIONS_PER_QUIZ
            ) * 100
        );


    progressPercent.textContent =
        percentage + "%";


    progressFill.style.width =
        percentage + "%";


    // Question text

    question.textContent =
        current.question;


    // Answer buttons

    answerButtons.forEach(
        function(button, index) {

            button.textContent =
                current.answers[index];


            button.classList.remove(
                "correct"
            );


            button.classList.remove(
                "wrong"
            );


            button.disabled = false;

        }
    );


    nextButton.style.display =
        "none";

}


// ==========================================
// CHECK ANSWER
// ==========================================

function checkAnswer(
    selectedIndex
) {

    const current =
        quizQuestions[currentQuestion];


    // Disable buttons

    answerButtons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    // Correct answer

    if (
        selectedIndex ===
        current.correctAnswer
    ) {

        answerButtons[selectedIndex]
            .classList.add("correct");


        currentScore++;

    }


    // Wrong answer

    else {

        answerButtons[selectedIndex]
            .classList.add("wrong");


        answerButtons[
            current.correctAnswer
        ]
            .classList.add("correct");

    }


    nextButton.style.display =
        "block";

}


// ==========================================
// ANSWER BUTTON EVENTS
// ==========================================

answerButtons.forEach(
    function(button, index) {

        button.addEventListener(
            "click",
            function() {

                checkAnswer(index);

            }
        );

    }
);


// ==========================================
// NEXT QUESTION
// ==========================================

nextButton.addEventListener(
    "click",
    function() {

        currentQuestion++;


        if (
            currentQuestion <
            QUESTIONS_PER_QUIZ
        ) {

            showQuestion();

        }

        else {

            showResult();

        }

    }
);


// ==========================================
// SHOW RESULT
// ==========================================

function showResult() {

    question.style.display =
        "none";


    questionNumber.style.display =
        "none";


    document.querySelector(
        ".progress-section"
    ).style.display =
        "none";


    document.getElementById(
        "answerButtons"
    ).style.display =
        "none";


    nextButton.style.display =
        "none";


    result.style.display =
        "block";


    // Score

    score.textContent =
        "Your Score: " +
        currentScore +
        " / " +
        QUESTIONS_PER_QUIZ;


    // Percentage

    const percentage =
        (
            currentScore /
            QUESTIONS_PER_QUIZ
        ) * 100;


    // Message

    if (percentage === 100) {

        message.textContent =
            "Perfect score! Excellent work! 🌟";

    }

    else if (percentage >= 80) {

        message.textContent =
            "Great job! Keep learning! 🎉";

    }

    else if (percentage >= 50) {

        message.textContent =
            "Good effort! Practice a little more. 💪";

    }

    else {

        message.textContent =
            "Keep practicing. You can do it! 📚";

    }


    // Remaining questions

    const usedQuestions =
        getUsedQuestions();


    const remaining =
        questionBank.length -
        usedQuestions.length;


    if (remaining > 0) {

        remainingQuestions.textContent =
            remaining +
            " questions are still unused. Your next quiz will contain different questions.";

    }

    else {

        remainingQuestions.textContent =
            "You have completed all questions! The next quiz will start a new question cycle.";

    }

}


// ==========================================
// START NEW QUIZ
// ==========================================

restartButton.addEventListener(
    "click",
    function() {

        // Hide result

        result.style.display =
            "none";


        // Show quiz

        question.style.display =
            "block";


        questionNumber.style.display =
            "block";


        document.querySelector(
            ".progress-section"
        ).style.display =
            "block";


        document.getElementById(
            "answerButtons"
        ).style.display =
            "flex";


        // Create new quiz

        createQuiz();


        // Show first question

        showQuestion();

    }
);


// ==========================================
// START FIRST QUIZ
// ==========================================

createQuiz();

showQuestion();