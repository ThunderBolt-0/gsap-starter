//use the defaults
gsap.to(element, {duration: 1, scrambleText: "THIS IS NEW TEXT"});//or customize things:

gsap.to(element, {
  duration: 1, 
  scrambleText: {
    text: "THIS IS NEW TEXT", 
    chars: "XO", 
    revealDelay: 0.5, 
    speed: 0.3, 
    newClass: "myClass"
  }
});
