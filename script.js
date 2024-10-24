// script.js
  const tl=gsap.timeline();
tl.from("#nav-1 h5", {
    y: -10,
    duration: .5,
    delay: .2,
    stagger: 0.3,
    opacity: 0,
});
tl.from("#nav-2 img", {
    y: -10,
    duration: 0.5,
    delay: 0.2,
    opacity: 0,
    ease: "power1.out",
    onStart: function() {
        const img = document.querySelector("#nav-2 img");
        img.onload = function() {
            gsap.from("#nav-2 img", { // Ensure to animate once the image is loaded
                y: -10,
                duration: 0.5,
                opacity: 0,
                ease: "power1.out"
            });
        };
    }
})

tl.from("#nav-3 h5,input", {
    y: -10,
    duration: .4,
    stagger: 0.3,
    opacity: 0,

});

