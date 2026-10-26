document.addEventListener('DOMContentLoaded', event => {
    const submitButton = document.getElementById('submit-answer');

    function checkAnswer() {
        const correctAnswer = "4";
        const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
        const feedback = document.getElementById("feedback");

        if (correctAnswer === userAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = 'green';
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = 'red';
        }
    }
    submitButton.addEventListener('click', checkAnswer);
});
