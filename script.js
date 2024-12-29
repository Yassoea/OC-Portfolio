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


/*Second Section*/

const header = document.querySelector('.header');


const stickyOffset = header.offsetTop;


window.addEventListener('scroll', () => {
    if (window.pageYOffset > stickyOffset) {
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }
});

/*Second Section*/


/*Third Section*/
const efrei = document.querySelector('.efrei');
const oc = document.querySelector('.oc');

function showReveal(element) {
    const revealInfo = element.querySelector('.reveal-info');
    revealInfo.style.display = 'block';
    setTimeout(() => {
        revealInfo.style.opacity = '1';
        revealInfo.style.transform = 'translateY(0)';
    }, 10);
}

function hideReveal(element) {
    const revealInfo = element.querySelector('.reveal-info');
    revealInfo.style.opacity = '0';
    revealInfo.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        revealInfo.style.display = 'none';
    }, 300); // Reduced timeout for quicker animation
}

function handleWindowResize() {
    const width = window.innerWidth;

    if (width <= 780) {
        // Disable animation and adjust layout for tablet view
        efrei.classList.add('visible');
        oc.classList.add('visible');
        
        // Make reveal-info always visible in tablet view
        efrei.querySelector('.reveal-info').style.display = 'block';
        efrei.querySelector('.reveal-info').style.opacity = '1';
        efrei.querySelector('.reveal-info').style.transform = 'translateY(0)';

        oc.querySelector('.reveal-info').style.display = 'block';
        oc.querySelector('.reveal-info').style.opacity = '1';
        oc.querySelector('.reveal-info').style.transform = 'translateY(0)';
    } else {
        efrei.classList.remove('visible');
        oc.classList.remove('visible');
        
        // Reset reveal-info for desktop view
        efrei.querySelector('.reveal-info').style.display = 'none';
        oc.querySelector('.reveal-info').style.display = 'none';
    }
}

// Add event listeners for mouseover and mouseout (desktop only)
efrei.addEventListener('mouseover', () => showReveal(efrei));
efrei.addEventListener('mouseout', () => hideReveal(efrei));

oc.addEventListener('mouseover', () => showReveal(oc));
oc.addEventListener('mouseout', () => hideReveal(oc));

// Initial check on page load
handleWindowResize();

// Add event listener to handle window resizing
window.addEventListener('resize', handleWindowResize);


/*Third Section*/

/*Fifth Section*/
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    
    function filterProjects(filter) {
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            if (filter === 'tous' || categories.includes(filter)) {
                card.classList.add('show');
                card.classList.remove('hide');
            } else {
                card.classList.remove('show');
                card.classList.add('hide');
            }
        });
    }

    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');

            
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    
    filterButtons[0].click();
});
/*Fifth Section*/

/*Sixth Section*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
/*Sixth Section*/


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

   
    setTimeout(function () {
      document.getElementById('successMessage').style.display = 'block';
      
      setTimeout(function () {
        document.getElementById('successMessage').style.display = 'none';
      }, 5000);
    }, 1000);
});
  

/* Active Navbar Effect*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});


/* Menu toggle */
const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');
const navbarLinks = navbar.querySelectorAll('a'); 

const media = window.matchMedia("(max-width: 700px)"); 

media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  console.log(isMobile);
  if (isMobile) {
    navbar.setAttribute('inert', '');
  } else {
   
    navbar.removeAttribute('inert');
  }
}

function openSidebar() {
  navbar.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true');
  navbar.removeAttribute('inert');
}

function closeSidebar() {
  navbar.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false');
  navbar.setAttribute('inert', '');
}


navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar(); 
  });
});


updateNavbar(media);
/* Menu toggle */
