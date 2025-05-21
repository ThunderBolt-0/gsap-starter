// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the box when it comes into view
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});
