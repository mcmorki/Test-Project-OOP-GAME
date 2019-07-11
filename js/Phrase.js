/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//            S T E P  2
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }



    /**         S T E P  6
    * Display phrase on game board
    */
    addPhraseToDisplay() { // METHOD WHICH ADDS LETTER PLACEHOLDERS (BOXES) TO THE GAMEBOARD AT THE START

        for (let x = 0, c = ''; c = this.phrase.charAt(x); x++) {
            if (this.phrase.charAt(x) === ' ') {
                $('#phrase ul').append("<li class='hide space'</li>");
            } else {
                $('#phrase ul').append("<li class='hide letter'" + c + '>' + c + '</li>');
            }
        }

        // Go through the phrase and create <li> tags holding each letter and space. (I used a for loop)
        // Use the "hide letter" class for letters and the "space" class for spaces
        // Append each character to the #phrase ul (See below for how it will look as per example_phrase_html)

        /******************************************************************
            <div id="phrase" class="section">
                <ul>
                    <li class="hide letter h">h</li>
                    <li class="hide letter o">o</li>
                    <li class="hide letter w">w</li>
                    <li class="space"> </li>
                    <li class="hide letter a">a</li>
                    <li class="hide letter r">r</li>
                    <li class="hide letter e">e</li>
                    <li class="space"> </li>
                    <li class="hide letter y">y</li>
                    <li class="hide letter o">o</li>
                    <li class="hide letter u">u</li>
                </ul>
            </div>
        *******************************************************************/
    }

    /**                 S T E P   9
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {

        return this.phrase.include(letter);
    }






    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter() {
        $('.rightLetter').css('color', 'black');
    }


}



















    //     checkLetter() {
    //     let show = this;
    //     $('#qwerty button').click(function () {
    //         let letter = $('#phrase li')
    //         for (let i = 0; i < letter.length; i++) {
    //             if ($(this).text() === letter[i].innerHTML) {
    //                 $(this).addClass('letters in phrase');
    //                 letter[i].classList.add("rightLetter");
    //                 show.showMatchedLetter();
    //             }
    //         }
    //     })
    // };
