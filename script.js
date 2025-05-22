gsap.registerPlugin(ScrollTrigger) 

gsap.to('.a', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
    x: 500
});
