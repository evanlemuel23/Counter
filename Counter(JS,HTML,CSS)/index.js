// COUNTER PROGRAM

// Select elements by their IDs
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countlabel");

// Initialize count
let count = 0;

// Increase button functionality
increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
};

// Decrease button functionality
decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
};

// Reset button functionality
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};
