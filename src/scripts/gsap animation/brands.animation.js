gsap.registerPlugin(ScrollTrigger);

gsap.to(".brands-list", {
    x: '100%',
    scrollTrigger: {
        trigger: ".brands",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})