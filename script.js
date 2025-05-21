gsap.to("#myElement", {
  scrollTrigger: {
    trigger: "#myElement",
    start: "top 20%", // Start the animation when the element enters 20% from the top
    end: "bottom 80%", // End when the element is 80% from the bottom
    once: true, // Only trigger once
    pin: true,  // Pin the element to the viewport (optional)
    // Add more ScrollTrigger options as needed
  },
  x: 200,
  duration: 1
});