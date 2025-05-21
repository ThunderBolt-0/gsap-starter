gsap.registerPlugin(ScrollTrigger);

// Animate hero text
gsap.to(".hero-text", {
  opacity: 1,
  duration: 1.5,
  delay: 0.5,
  ease: "power2.out",
  y: -20
});

// Animate each panel on scroll
gsap.utils.toArray(".panel").forEach(panel => {
  gsap.to(panel, {
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });
});
