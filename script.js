/*First Section*/
const textElement = document.getElementById('text');
const cursorElement = document.querySelector('.cursor');

const textArray = [
  "Je suis Yassin El Akhal", 
  "Développeur Web & Application",
];
const typingSpeed = 100; 
const delayBetweenLines = 800; 

let lineIndex = 0;
let charIndex = 0;

function typeText() {
  if (lineIndex < textArray.length) {
    const currentLine = textArray[lineIndex];
    if (charIndex < currentLine.length) {
      textElement.innerHTML += currentLine[charIndex]; 
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      if (lineIndex < textArray.length - 1) {
        textElement.innerHTML += "<br>"; 
      }
      charIndex = 0;
      lineIndex++;
      setTimeout(typeText, delayBetweenLines);
    }
  } else {
    
    setTimeout(() => {
      textElement.innerHTML = ""; 
      lineIndex = 0;
      charIndex = 0;
      typeText(); 
    }, delayBetweenLines);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText();
});
/*First Section*/