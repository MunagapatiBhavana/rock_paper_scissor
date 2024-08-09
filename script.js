const choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('button');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.querySelector('img').alt;
        userChoiceDisplay.textContent = `You chose: ${userChoice}`;
        
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
        
        let result = '';
        if (userChoice === computerChoice) {
            result = "It's a draw!";
        } else if ((userChoice === 'Rock' && computerChoice === 'Scissors') || 
                   (userChoice === 'Paper' && computerChoice === 'Rock') || 
                   (userChoice === 'Scissors' && computerChoice === 'Paper')) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }
        
        resultDisplay.textContent = result;
    });
});
