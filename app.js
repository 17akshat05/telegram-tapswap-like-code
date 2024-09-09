// JavaScript to handle the tap and score system
const tapButton = document.getElementById('tap-button');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Handle tap button click
tapButton.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = score;
    
    // Optional: Add animation or effects to make tapping more engaging
    tapButton.classList.add('tapped');
    setTimeout(() => tapButton.classList.remove('tapped'), 200);
});
