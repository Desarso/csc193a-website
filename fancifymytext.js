// Initial Test Alert (as requested in instructions - can be commented out later)
// alert("Hello, world!"); 

/* 
 * Function called when the "Bigger!" button is clicked.
 * Makes the text in the text area font size 24pt.
 */
function makeBigger() {
    // alert("Bigger button clicked!"); // Test alert for the button click
    let textArea = document.getElementById("textBox");
    if (textArea) {
        textArea.style.fontSize = "24pt"; 
    } else {
        console.error("Text area element not found!");
    }
}

/*
 * Function called when either radio button's selection changes.
 * Applies or removes styles based on which button is checked.
 */
function applyStyles() {
    // alert("Radio button changed!"); // Test alert for radio change
    let textArea = document.getElementById("textBox");
    let fancyRadio = document.getElementById("fancyRadio");
    // We don't strictly need boringRadio variable if we just use an else condition

    if (!textArea || !fancyRadio) {
        console.error("Required elements not found!");
        return; // Exit if elements are missing
    }

    if (fancyRadio.checked) {
        // FancyShmancy selected
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else { 
        // BoringBetty must be selected (or neither, default state)
        textArea.style.fontWeight = "normal";
        textArea.style.color = ""; // Reset to default color
        textArea.style.textDecoration = "none"; // Remove underline
    }
}

/*
 * Function called when the "Moo" button is clicked.
 * Uppercases the text and adds "-Moo" to the end of sentences.
 */
function mooifyText() {
    let textArea = document.getElementById("textBox");
    if (!textArea) {
        console.error("Text area element not found!");
        return;
    }

    let text = textArea.value;
    let upperText = text.toUpperCase(); // Uppercase the whole text first

    // Split the text into sentences using the period as a delimiter
    let sentences = upperText.split(".");

    // Process each part (sentence)
    for (let i = 0; i < sentences.length; i++) {
        // Trim whitespace from the current part to check if it's empty
        // and handle cases like "Sentence one.  Sentence two."
        let currentSentence = sentences[i].trim(); 

        if (currentSentence.length > 0) {
            // If it's not just whitespace or an empty string from splitting
            let words = currentSentence.split(" "); // Split into words
            words[words.length - 1] = words[words.length - 1] + "-Moo"; // Add "-Moo" to the last word
            sentences[i] = words.join(" "); // Join the words back into the sentence part
        }
        // If currentSentence was empty (e.g., from a trailing period), 
        // sentences[i] remains empty or whitespace, which is fine.
    }

    // Join the modified sentences back together with periods.
    // This handles cases where the original text might not have ended with a period.
    textArea.value = sentences.join("."); 
}


// --- Important Note for HTML File ---
// Remember to place the <script src="fancifymytext.js"></script> tag 
// either right before the closing </body> tag in your HTML, 
// OR inside the <head> tag with the 'defer' attribute added:
// <script src="fancifymytext.js" defer></script>