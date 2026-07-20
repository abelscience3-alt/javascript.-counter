// Initialize the count
let count = 0;

// Select elements from the DOM
const counterValue = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

// Function to update the display
function updateDisplay() {
    counterValue.textContent = count;
}

// Add click event listeners to buttons
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});


console.log(Math.E);
