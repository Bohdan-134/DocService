gsap.registerPlugin(ScrollTrigger);

const itemText = document.querySelectorAll('.why-we__item .h3');

// why-we
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.why-we',
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
});

tl.from('.wrap-img.wrap-img__yellow', {
    x: "130%",
    opacity: 0,
    scrollTrigger: {
        trigger: '.why-we',
        start: "top top",
        end: "center top",
        scrub: true,
    }
});

tl.from('.wrap-img.wrap-img__orange', {
    x: "-130%",
    opacity: 0,
    scrollTrigger: {
        trigger: '.why-we',
        start: "top top",
        end: "center top",
        scrub: true,
    }
});

tl.from(itemText, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.why-we',
        start: "center center",
        end: "bottom center",
        scrub: true,
    }
});

tl.from('.why-we .h2', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: '.why-we',
        start: "center center",
        end: "bottom cennter",
        scrub: true,
    }
})