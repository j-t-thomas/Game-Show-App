/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            new Phrase('The Land of Oz'),
            new Phrase('Planet Krypton'),
            new Phrase('Gotham City'),
            new Phrase('Enchanted Forest'),
            new Phrase('Metropolis')
        ];
        this.activePhrase = null;
    }

    startGame() {
        const overlay = document.querySelector('#overlay');
        
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    handleInteraction(button) {
        const chosenLetters = button.textContent;
        button.disabled = true;
    
        if (this.activePhrase.checkLetter(chosenLetters)) {
            // Correct guess
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(chosenLetters);
    
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            // Incorrect guess
            button.classList.add('wrong');
            this.removeLife();
        }
    }
    
    removeLife() {
        // Selects heart elements
        const hearts = document.querySelectorAll('#scoreboard li');

        this.missed++;
    
        // Update hearts based on the number of misses
        for (let i = 0; i < this.missed; i++) {
            hearts[i].classList.remove('tries');
            hearts[i].firstChild.src = 'images/lostHeart.png';
        }
    
        if (this.missed === 5) {
            this.gameOver();
        }
    }
    
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('#phrase li.hide').length;
        return (!hiddenLetters);
    }

    gameOver(winGame) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
    
        overlay.style.display = 'block';
        overlay.classList.remove('start');
    
        //Check if game is won
        if (winGame) {
            overlay.className = 'win';
            gameOverMessage.innerText = 'You won!';
        } else {
            overlay.className = 'lose';
            gameOverMessage.innerText = 'Try Again!';
        }
    
        this.resetGame();
    }
    
    resetGame() {
        // Clear the displayed phrase
        document.querySelector('#phrase ul').innerHTML = "";
    
        // Reset keyboard keys
        document.querySelectorAll('.key').forEach(key => {
            key.disabled = false;
            key.classList.remove('chosen', 'wrong');
        })
    
        // Reset heart icons
        document.querySelectorAll('#scoreboard ol li').forEach(heart => {
            // Reset and set the image to a live heart
            heart.classList.add('tries');
            heart.firstChild.src = 'images/liveHeart.png';
        })
    }

}
