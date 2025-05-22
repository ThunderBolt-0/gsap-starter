gsap.registerPlugin(ScrollTrigger);

// Animate hero text
gsap.to(".hero-text", {
  opacity: 1,
  duration: 3,
  delay: 1,
  ease: "power2.out",
  y: -50
});

// Animate each panel on scroll
gsap.utils.toArray(".panel").forEach(panel => {
  gsap.to(panel, {
    scrollTrigger: {
      trigger: panel,
      start: "top 50%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });
});
