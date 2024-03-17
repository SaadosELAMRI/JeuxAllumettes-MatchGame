let currentPlayer = 1; // Initialize current player
let lastPlayer = 0; // Initialize last player who deducted the last number
let cumulativeNumber = 13; // Initialize cumulative number

updateAllumettes();

document.getElementById("mysub").onclick = function () {
    let inputNumber = parseInt(document.getElementById("text1").value); // Get the current value of the input field as a number
    if (!isNaN(inputNumber)) { // Check if the input is a valid number
        if (inputNumber <= 3) { // Check if the input number is less than or equal to 3
            if (inputNumber <= cumulativeNumber) { // Check if the input number is less than or equal to the cumulative number
                cumulativeNumber -= inputNumber; // Subtract the input number from the cumulative number
                switchPlayer(); // Switch to the other player and check if the last value is reached
                updateAllumettes(); // Update displayed allumettes
            } else {
                document.getElementById("text").textContent = "You can't deduct more than what's left. Please try again."; // Display error message
            }
        } else {
            document.getElementById("text").textContent = "You can't deduct more than 3 at a time. Please try again."; // Display error message
        }
    }
};

document.getElementById("mysub1").onclick = function () {
    let inputNumber = parseInt(document.getElementById("text2").value); // Get the current value of the input field as a number
    if (!isNaN(inputNumber)) { // Check if the input is a valid number
        if (inputNumber <= 3) { // Check if the input number is less than or equal to 3
            if (inputNumber <= cumulativeNumber) { // Check if the input number is less than or equal to the cumulative number
                cumulativeNumber -= inputNumber; // Subtract the input number from the cumulative number
                switchPlayer(); // Switch to the other player and check if the last value is reached
                updateAllumettes(); // Update displayed allumettes
            } else {
                document.getElementById("text").textContent = "You can't deduct more than what's left. Please try again."; // Display error message
            }
        } else {
            document.getElementById("text").textContent = "You can't deduct more than 3 at a time. Please try again."; // Display error message
        }
    }
};

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch to the other player
    document.getElementById("text").textContent = "Joueur " + currentPlayer + "'s turn"; // Display current player's turn
    checkLastValue(); // Check if the last value is reached
}

function updateAllumettes() {
    let allumettes = '';
    for (let i = 0; i < cumulativeNumber; i++) {
        allumettes += '| ';
    }
    document.getElementById("first").textContent = allumettes;
}

function checkLastValue() {
    if (cumulativeNumber === 0) {
        document.getElementById("text").textContent = "Joueur " + lastPlayer + " loses!"; // Display losing message for the player who deducted the last number
        // You can add further actions here such as ending the game
    } else {
        lastPlayer = currentPlayer; // Update last player if the game is still ongoing
    }
}
