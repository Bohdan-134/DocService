gsap.registerPlugin(ScrollTrigger);

// scroll to bottom bg
gsap.to(".bg-header__wrap", {
    y: '-20%',
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

function animationTextHeader(htmlElement, parentHtmlElememnt) {
    const element = document.querySelector(`${htmlElement}`);
    const parentElement = document.querySelector(`${parentHtmlElememnt}`);
    return (
        gsap.to(element, {
            y: "-20%",
            opacity: 0,
            scrollTrigger: {
                trigger: parentElement,
                start: "-100% top",
                end: "bottom top",
                scrub: true
            }
        })
    )
}

animationTextHeader('.header-title', '.header-title');
animationTextHeader('.header-text', '.header-title');