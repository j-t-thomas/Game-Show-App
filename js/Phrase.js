/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
        // Finds a place to put the letters
        const phraseLocation = document.querySelector('#phrase ul');
    
        // Creates an empty string to store HTML
        let html = "";
    
        // Goes through each character in the phrase
        this.phrase.split('').forEach(char => {
            
            // If there is a space it adds a space to the phrase
            if (char === " ") {
                html += '<li class = "space"></li>';
            }
            else {
                // Adds the HTML for the li element to the string
                html += `<li class = "hide letter ${char}">${char}</li>`;
            }

        })
        
        phraseLocation.innerHTML = html;
    }
  
    checkLetter(letter) {
      if (this.phrase.includes(letter)) {
        return true;
      } 
      else {
        return false;
      }
    }
  
    showMatchedLetter(letter) {
        const displayLetters = document.querySelectorAll('#phrase ul li');
    
        displayLetters.forEach(li => {
            //Checks if it's the right letter
            if (li.classList.contains(letter)) {
                //Shows the right letter
                li.classList.remove('hide');
                li.classList.add('show');
            }
        })
    }
  }