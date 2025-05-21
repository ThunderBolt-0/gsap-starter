// GSAP Animation
gsap.to(".box", {
  x: 400, // Move the box 400px to the right
  rotation: 360, // Rotate the box
  duration: 2, // Duration of the animation (in seconds)
  ease: "power2.inOut", // Easing function for smoother animation
  repeat: -1, // Repeat infinitely
  yoyo: true // Make the animation reverse back after completing
});
