const autoTypeElement = document.getElementById("auto-type");
    const phrases = ["a Developer", "an Engineer", "a Designer"]; // Add more phrases if needed
    let phraseIndex = 0;
    let charIndex = 0;
    let isTyping = true; // To track whether typing or erasing
    let typingSpeed = 100; // Speed in milliseconds per character
    let pauseDuration = 1000; // Pause between phrases in milliseconds

    function typePhrase() {
      if (charIndex <= phrases[phraseIndex].length) {
        autoTypeElement.textContent = phrases[phraseIndex].substring(0, charIndex) + "|";
        charIndex++;
        setTimeout(typePhrase, typingSpeed);
      } else {
        isTyping = false;
        setTimeout(erasePhrase, pauseDuration);
      }
    }

    function erasePhrase() {
      if (charIndex > 0) {
        autoTypeElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1) + "|";
        charIndex--;
        setTimeout(erasePhrase, typingSpeed / 2);
      } else {
        isTyping = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
      }
    }

    typePhrase(); // Start the typing effect initially