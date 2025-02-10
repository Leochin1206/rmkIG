/* NAVBAR */
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i')

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}



const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let currentIndex = 2; // Initial index of the central card.
let isCardClicked = false;

function updateCarousel() {
  cards.forEach((card, index) => {
    const distanceToCenter = index - currentIndex;
    const scale = 1 - Math.min(Math.abs(distanceToCenter), 1) * 0.1;
    card.style.transform = `scale(${scale})`;
  });
}

updateCarousel();

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPosition = e.clientX - currentTranslate;
  isCardClicked = false;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging || isCardClicked) return;
  const newPosition = e.clientX - startPosition;
  carousel.style.transform = `translateX(${newPosition}px)`;
  currentIndex = Math.round(-currentTranslate / 200); // Adjust according to the card size
  updateCarousel();
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
  currentTranslate = parseInt(carousel.style.transform.split("translateX(")[1]) || 0;
  updateCarousel();
});

cards.forEach((card, index) => {
  card.addEventListener("mousedown", () => {
    isCardClicked = true;
    currentIndex = index;
    updateCarousel();
  });

  card.addEventListener("mouseenter", () => {
    if (!isDragging) {
      currentIndex = index;
      updateCarousel();
    }
  });
});



function filtrarCards() {
  const filtro = document.getElementById("cidade").value;
  const cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    const cardCidade = cards[i].getAttribute("data-cidade");
    
    if (filtro === "todas" || cardCidade === filtro) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

const select = document.getElementById("cidade");
select.addEventListener("change", filtrarCards);

window.onload = filtrarCards;
