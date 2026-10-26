document.addEventListener('DOMContentLoaded', event => {
    const result = document.getElementById('calculation-result');

    document.getElementById('add').addEventListener('click', (event) => {
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;

        result.textContent = add(num1, num2);
        result.style.color = "green";
    });

    document.getElementById('subtract').addEventListener('click', (event) => {
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;

        result.textContent = subtract(num1, num2);
        result.style.color = "green";
    });

    document.getElementById('multiply').addEventListener('click', (event) => {
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;

        result.textContent = multiply(num1, num2);
        result.style.color = "gree";
    });

    document.getElementById('divide').addEventListener('click', (event) => {
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;

        if (num2 === 0) {
            result.textContent = "Can not divide by 0";
            result.style.color = "red";
            return;
        }
        result.textContent = divide(num1, num2);
        result.style.color = "green";
    });
});

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}
