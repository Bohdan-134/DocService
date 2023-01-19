const langBtn = document.getElementById('lang-btn');

function getLangJson() {
    return fetch('../data/lan.json')
        .then((response) => {
            return response.json();
        })
}

langBtn.addEventListener('click', () => {

    const lng = langBtn.getAttribute('data-language');
    langBtn.setAttribute('data-language', `${(lng === 'uk') ? 'ru' : 'uk'}`);
    langBtn.textContent = (lng === 'uk') ? 'Рус' : 'Укр';

    const lang = document.querySelectorAll('.lan');
    gsap.from(lang, {
        y: 10,
        opacity: 0
    })
    gsap.from(langBtn, {
        scale: 0.6
    })

    getLangJson().then((data) => {
        lang.forEach(elem => {
            for (let key in data) {
                for (let key2 in data[key]) {
                    if (elem.getAttribute('data-lan') == key2) elem.innerHTML = data[key][key2][lng]
                    else if (elem.getAttribute('data-lan-placeholder') == key2) elem.placeholder = data[key][key2][lng];
                }
            }
        })
    });

})