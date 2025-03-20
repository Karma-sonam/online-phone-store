const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

let index = 0;

// Clone the first slide and append it at the end
const firstClone = slides[0].cloneNode(true);
carouselContainer.appendChild(firstClone);

function moveSlide() {
    index++;

    // When reaching the last (cloned) slide, reset to the real first slide
    if (index > totalSlides) {
        setTimeout(() => {
            carouselContainer.style.transition = "none"; // Disable animation for instant reset
            index = 0;
            carouselContainer.style.transform = `translateX(${-index * 100}%)`;
        }, 500); // Delay the reset for smooth effect
    }

    carouselContainer.style.transition = "transform 1s ease-in-out";
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Move slides every 3 seconds
setInterval(moveSlide, 3000);

