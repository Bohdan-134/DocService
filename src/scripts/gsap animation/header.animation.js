gsap.registerPlugin(ScrollTrigger);

// slide to bottom (start bg-header animation)
gsap.to(".bg-header", {
    y: '62%',
    x: 'center',
    borderRadius: '50%',
    duration: 3,
}, 3.5)

// scroll to bottom bg
gsap.to(".bg-header__wrap", {
    y: '-20%',
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "bottom top",
        scrub: true,
        //markers: true,
        id: "scrub"
    }
});

// header h1
gsap.to(".header-title", {
    y: "-20%",
    opacity: "0",
    scrollTrigger: {
        trigger: ".header-title",
        start: "-100% top",
        end: "bottom top",
        scrub: true,
        //markers: true,
        id: "scrub"
    }
})

// header text
gsap.to(".header-text", {
    y: "-20%",
    opacity: "0",
    scrollTrigger: {
        trigger: ".header-title",
        start: "-100% top",
        end: "bottom top",
        scrub: true,
        //markers: true,
        id: "scrub"
    }
})