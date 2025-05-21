gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".rectangle").forEach((rect, i) => {
  const direction = i % 2 === 0 ? -200 : 200; // alternate direction

  gsap.fromTo(rect,
    {
      x: direction,
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: rect,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }
  );
});
