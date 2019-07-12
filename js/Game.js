/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// CREATING GAME GLASS. (Entire Javascript file is this one class)

// Track the number of missed guesses, initially set to 0
// Store array of phrases
// Initially there is no phrase chosen

//                          S T E P  2 / 3
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.phrase;

    }

    //                      S T E P   4
    createPhrases() {
        let phrasesList = [];
        let phraseOne = new Phrase("Doris Longwing");
        phrasesList.push(phraseOne);
        let phraseTwo = new Phrase("Doris Longwing");
        phrasesList.push(phraseTwo);


        // new Phrase("Doris Longwing"),
        // new Phrase("Blue Morpho"),
        // new Phrase("Banded Peacock"),
        // new Phrase("Ceylon Rose"),
        // new Phrase("Island Marble"),
        // new Phrase("Luzon Giant Swallowtail"),
        // new Phrase("glasswinged butterfly"),
        // new Phrase("Jamaican Giant Swallowtail")];

        // phraseList.push(phraseTwo);
        return phrasesList;
    }
    /**                 S T E P  5
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };

    /**                 S T E P  7
   /**
   * Begins game by selecting a random phrase and displaying it to user
   */
    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handleInteraction()
    };
    /**                 S T E P   9
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't
   won
   */
    checkForWin() {

        if ($('.letter').length) {
            $('#game-over-message').text('You Win!');
            $('#overlay').prop('className', 'win');
            $('#overlay').show();
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        this.missed += 1
        $('.tries').eq([this.missed]).hide();
        if (this.missed === 5) {
            this.gameOver();
        }

    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

        $('#game-over-message').text('You Lose!');
        $('#overlay').prop('className', 'lose');
        $('#overlay').show();

    };
    handleInteraction(letter) {

        if (this.activePhrase.checkLetter(letter)) {

            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
        else {
            this.removeLife();
        }

    };



}




