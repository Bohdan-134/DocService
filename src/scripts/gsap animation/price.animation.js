gsap.registerPlugin(ScrollTrigger);

const priceItems = gsap.utils.toArray('.price__item');

gsap.to('.price', {
    scrollTrigger: {
        trigger: '.price',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
    }
})


priceItems.forEach(element => {
    gsap.from(element, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
        }
    })
});