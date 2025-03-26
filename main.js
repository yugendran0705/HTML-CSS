const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const carousel = button.closest("[data-carousel]");
        const slides = carousel.querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll("[data-carousel]");
    
    carousels.forEach(carousel => {
        const nextButton = carousel.querySelector("[data-carousel-button='next']");
        
        const autoAdvanceInterval = setInterval(() => {
            if (document.visibilityState === 'visible') {
                nextButton.click();
            }
        }, 3000);

        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvanceInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            setInterval(() => {
                if (document.visibilityState === 'visible') {
                    nextButton.click();
                }
            }, 3000);
        });
    });
});