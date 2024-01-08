const quizData = [
    {
        question: "1. Candy was first made in which country between the 6th and 4th centuries BC?",
        options: ["China", "India", "Egypt"],
        correctIndex: 1
    },
    {
        question: "2. Before sugar was available, which ingredient was used to make candy?",
        options: ["Maple syrup", "Coconut", "Honey"],
        correctIndex: 2
    },
    {
        question: "3. Twizzlers is a brand of which candy manufacturer??",
        options: ["Hershey", "Mars", "Nestle"],
        correctIndex: 0
    },
    {
        question: "4. What does the name “M&M” stand for?",
        options: ["Moon and Mars", "Mars and Murrie", "Matcha and Milk"],
        correctIndex: 1
    },
    {
        question: "5. Chocolate melts at which temperature?",
        options: ["Around 34 Celsius degrees", "Around 44 Celsius degrees", "Around 54 Celsius degrees"],
        correctIndex: 0
    },
    {
        question: "6. Which country invented milk chocolate?",
        options: ["Germany", "Sweden", "Switzerland"],
        correctIndex: 2
    },
    {
        question: "7. After which the lollipop was named?",
        options: ["A racehorse", "A village", "A dish"],
        correctIndex: 0
    },
    {
        question: "8. What was the profession of the inventor of candy floss?",
        options: ["Doctor", "Engineer", "Dentist"],
        correctIndex: 2
    },
    {
        question: "9. Which of the following candies is not chewy?",
        options: ["Jujubes","Hot Tamales","Jolly Ranchers"],
        correctIndex: 2
    },
    {
        question: "10. Which flavour is used to manufacture circus peanuts?",
        options: ["Apple", "Pear", "Banana"],
        correctIndex: 2
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("questions");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next");
    const scoreElement = document.getElementById("score");

    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];

        questionElement.innerHTML = `<h3>${currentQuestion.question}</h3>`;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.className = "option";
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });

        nextButton.style.display = "none"; // Hide the "Next" button until an option is selected
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // Display the final score
        questionElement.innerHTML = "<h3>Quiz Completed!</h3>";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none"; // Hide the "Next" button when quiz is completed
        scoreElement.innerHTML = `<p>Total Score: ${score}/10</p>`;
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    options[currentQuestion.correctIndex].style.backgroundColor = "#4CAF50"; // Correct answer turns green

    if (selectedIndex === currentQuestion.correctIndex) {
        score++;
    } else {
        options[selectedIndex].style.backgroundColor = "#FF0000"; // Incorrect answer turns red
    }

    currentQuestionIndex++;

    const nextButton = document.getElementById("next");
    nextButton.style.display = "block"; // Show the "Next" button after an option is selected
}

function nextbtn() {
    const nextButton = document.getElementById("next");
    nextButton.style.display = "none"; // Hide the "Next" button before loading the next question
    loadQuestion();
}

// Initial load
loadQuestion();