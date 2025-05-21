gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.utils.toArray(".fade-in").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    delay: i * 0.2,
    duration: 1,
    ease: "power2.out"
  });
});

// Scroll-triggered animations
gsap.utils.toArray(".slide-left").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".slide-right").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".fly-up").forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    delay: i * 0.1,
    duration: 1,
    ease: "back.out(1.7)"
  });
});

// Scroll progress bar
gsap.to(".progress-bar", {
  width: "100%",
  scrollTrigger: {
    scrub: 0.3
  }
});
