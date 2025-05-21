gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".rectangle",
  {
    y: 100,
    scale: 0.8,
    opacity: 0
  },
  {
    scrollTrigger: {
      trigger: ".rectangle",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  }
);
