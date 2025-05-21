gsap.registerPlugin(ScrollTrigger);

// Box entrance animation with cool effects
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  scale: 1,
  rotate: 360,
  duration: 1.2,
  ease: "back.out(1.7)"
});

// Optional: hero text fade up on page load
gsap.from(".hero h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
