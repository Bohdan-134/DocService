gsap.registerPlugin(ScrollTrigger);

function animationContactBlock(htmlElement, parentHtmlElement, positionX) {
    const element = document.querySelector(`${htmlElement}`);
    const parentElement = document.querySelector(`${parentHtmlElement}`);
    return (
        gsap.from(element, {
            x: `${positionX}`,
            scrollTrigger: {
                trigger: parentElement,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            }
        })
    )
}

animationContactBlock('.contact-info', '.contact', '-100%');
animationContactBlock('.contact-form__wrap', '.contact', '100%');