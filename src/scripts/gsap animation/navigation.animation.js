gsap.registerPlugin(ScrollToPlugin);

const linkWhyWe = document.getElementById('why-we');
const linkMalfunctions = document.getElementById('malfunctions');
const linkPrice = document.getElementById('price');
const linkContact = document.getElementById('contact');

linkWhyWe.addEventListener('click', (e) => scrollTo('.why-we', e, 2, true))
linkMalfunctions.addEventListener('click', (e) => scrollTo('.malfunctions', e, 3, true))
linkPrice.addEventListener('click', (e) => scrollTo('.price', e, 4, true))
linkContact.addEventListener('click', (e) => scrollTo('.contact', e, 5, false))

function scrollTo(nameElement, e, timeAnimation, heightBool) {
    e.preventDefault();
    const element = document.querySelector(nameElement);
    const topPositionEl = element.getBoundingClientRect().top;
    const heightEl = (heightBool) ? element.offsetHeight : 0;
    gsap.to(window, { duration: timeAnimation, scrollTo: () => topPositionEl + heightEl })
}