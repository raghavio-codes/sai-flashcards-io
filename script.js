const flashcardData = {
    "8th Grade": {
        Science: [
            "What is the process of photosynthesis?",
            "Name the three states of matter.",
            "What is the chemical formula for water?",
            "What is Newton's Third Law of Motion?",
            "What organelle is known as the powerhouse of the cell?",
            "What is the basic unit of life?",
            "What is the boiling point of water in Celsius?",
            "What gas do humans breathe in to survive?",
            "What is the function of the heart in the human body?",
            "What planet is known as the Red Planet?",
            "What type of energy is stored in food?",
            "What is the main source of energy for the Earth?",
            "What causes seasons on Earth?",
            "What is the difference between a conductor and an insulator?",
            "What is the difference between a physical and a chemical change?"

        ],
        Math: [
            "What is the value of π (pi) approximately?",
            "What is the formula for the area of a triangle?",
            "What is the Pythagorean Theorem?",
            "What is 25% of 200?",
            "What is the square root of 144?",
            "How many degrees are there in a triangle?",
            "What is the formula for the volume of a cube?",
            "What is the perimeter of a rectangle?",
            "What does LCM stand for?",
            "What is the difference between mean, median, and mode?",
            "What is the formula for simple interest?",
            "What is the value of 2^5?",
            "What is the slope of a line?",
            "What is an equation?",
            "What is the order of operations (BODMAS)?"

        ]
    },
    "9th Grade": {
        Science: [
            "What is the law of conservation of mass?",
            "What is an atom made up of?",
            "What are the differences between metals and non-metals?",
            "What is the formula for calculating speed?",
            "What is a chemical reaction?",
            "What is the structure of the atom according to Bohr's model?",
            "What is the difference between isotopes and isobars?",
            "What are Newton’s three laws of motion?",
            "What is acceleration?",
            "What is the function of the nucleus in a cell?",
            "What is osmosis?",
            "What is the difference between diffusion and osmosis?",
            "What is a balanced chemical equation?",
            "What is force? Give its SI unit.",
            "What is the difference between mass and weight?"

        ],
        Math: [
            "What is the formula for the area of a circle?",
            "What is the standard form of a linear equation in two variables?",
            "What is the value of √2 (approximately)?",
            "What is a polynomial?",
            "What is the formula for surface area of a sphere?",
            "What is the difference between rational and irrational numbers?",
            "What is a quadratic equation?",
            "What is the midpoint formula in coordinate geometry?",
            "What is the sum of the angles in a quadrilateral?",
            "What is the formula to find the distance between two points?",
            "What is a linear pair of angles?",
            "What is the Euclid's Division Lemma?",
            "What is the difference between arithmetic and geometric progression?",
            "What is the formula for the volume of a cylinder?",
            "What is the Pythagorean triplet?"

        ]
    }
};

let currentCardIndex = 0;
let selectedFlashcards = [];

function handleSubmit() {
    const userClass = document.getElementById('classInput').value.trim();
    const subject = document.getElementById('subjectInput').value.trim();

    if (!userClass || !subject) {
        alert("Please enter both class and subject.");
        return;
    }

    if (
        flashcardData[userClass] &&
        flashcardData[userClass][subject]
    ) {
        selectedFlashcards = flashcardData[userClass][subject];
    } else {
        alert("No flashcards found for this class and subject.");
        return;
    }

    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.flashcard-section').style.display = 'block';

    currentCardIndex = 0;
    showNextCard();
}

function showNextCard() {
    const cardText = document.getElementById('flashcard-text');
    const nextBtn = document.getElementById('next-btn');

    if (currentCardIndex < selectedFlashcards.length) {
        cardText.textContent = selectedFlashcards[currentCardIndex];
        currentCardIndex++;
    } else {
        cardText.textContent = "🎉 You're done! Great job.";
        nextBtn.disabled = true;
    }
}
