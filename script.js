const squares = document.querySelectorAll('.square');
const resetBtn = document.getElementById('resetBtn');

// Toggle text visibility when clicking a square
squares.forEach(square => {
    square.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('hidden');
    });
});

// Reset all squares to hidden state and randomize their positions
resetBtn.addEventListener('click', function() {
    squares.forEach(square => {
        square.classList.add('hidden');
    });
    // Shuffle squares
    const container = document.querySelector('.container');
    const squareArray = Array.from(squares);
    for (let i = squareArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [squareArray[i], squareArray[j]] = [squareArray[j], squareArray[i]];
    }
    // Remove all squares and re-append in shuffled order
    squareArray.forEach(square => container.appendChild(square));
});
