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

/*Third Section*/
// Sélectionner les éléments
const efrei = document.querySelector('.efrei');
const oc = document.querySelector('.oc');

// Fonction pour afficher le texte du reveal
function showReveal(element) {
    const revealInfo = element.querySelector('.reveal-info');
    revealInfo.style.display = 'block';
    setTimeout(() => {
        revealInfo.style.opacity = '1';
        revealInfo.style.transform = 'translateY(0)';
    }, 10); // Petit délai pour que le transition se déclenche correctement
}

// Fonction pour masquer le texte du reveal
function hideReveal(element) {
    const revealInfo = element.querySelector('.reveal-info');
    revealInfo.style.opacity = '0';
    revealInfo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        revealInfo.style.display = 'none';
    }, 500); // Correspond au délai de l'animation pour cacher après l'animation
}

// Ajouter des événements de survol pour chaque bloc
efrei.addEventListener('mouseover', () => showReveal(efrei));
efrei.addEventListener('mouseout', () => hideReveal(efrei));

oc.addEventListener('mouseover', () => showReveal(oc));
oc.addEventListener('mouseout', () => hideReveal(oc));


/*Third Section*/