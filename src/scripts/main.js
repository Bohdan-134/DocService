import './gsap animation/animation.js';
import './translation/translation.js';
import './tg/telegram.js';

window.onload = () => {
    if (window.outerWidth < 1100) {
        document.body.innerHTML = '';
        document.body.innerHTML = "<div class='container oops-container'><div class='opos-bg-phone'><span class='oops-text'>Ой...</span></div><p>Cторінку, яку ви переглядаєте, доступна тільки на десктопі</p></div>"
    }
}