
// für Funktionen, die beim Laden ausgeführt werden sollen
window.addEventListener('load', (event) => {

});

// Fade-in Funktion
function reveal() {
    var reveals = document.querySelectorAll(".fade-in");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

// Führt Fade-in Funktion beim onScroll aus
window.addEventListener("scroll", reveal);

reveal();