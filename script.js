// Select elements
const title = document.querySelector('.title');
const images = document.querySelectorAll('.image-gallery img');
// Title animation
gsap.from(title, { 
    duration: 1.5, 
    y: -100, 
    opacity: 0, 
    ease: "bounce.out"
});
// Images animation
images.forEach((image, index) => {
    gsap.from(image, { 
        duration: 1, 
        scale: 0, 
        delay: index * 0.5, 
        opacity: 0, 
        ease: "back.out(1.7)"
    });
});
