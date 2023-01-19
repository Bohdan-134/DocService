gsap.registerPlugin(ScrollTrigger);

gsap.to('.malfunctions', {
    scrollTrigger: {
        trigger: '.malfunctions',
        start: 'top top',
        end: 'bottom top',
        duration: 1,
        scrub: true,
        pin: true,
    }
})

function animationScrollWashingMachine(htmlElement, parentHtmlElement, positionY) {
    const element = document.querySelector(`${htmlElement}`);
    const parentElement = document.querySelector(`${parentHtmlElement}`);
    return (
        gsap.from(element, {
            y: positionY,
            scrollTrigger: {
                trigger: parentElement,
                start: 'top top',
                end: 'center top',
                duration: 1,
                scrub: true,
            }
        })
    )
}

animationScrollWashingMachine('.malfunctions-washing-machine__main', '.malfunctions', 35);
animationScrollWashingMachine('.malfunctions-washing-machine__footer', '.malfunctions', 60);
animationScrollWashingMachine('.malfunctions-washing-machine__box', '.malfunctions', 40);
animationScrollWashingMachine('.malfunctions-washing-machine__button-center', '.malfunctions', 50);
animationScrollWashingMachine('.malfunctions-washing-machine__header-bg-center', '.malfunctions', 30);
animationScrollWashingMachine('.malfunctions-washing-machine__buttons-item', '.malfunctions', 40);
animationScrollWashingMachine('.malfunctions-washing-machine-drum__back-bg', '.malfunctions', 40);


let watTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.malfunctions',
        start: 'top top',
        end: 'center top',
        duration: 1,
        scrub: true,
    }
})

watTl.from('.malfunctions-washing-machine-drum__handle', {
    y: 60
})

watTl.from('.malfunctions-washing-machine-drum-water', {
    y: '100%'
})

gsap.from('.swiper-button-next', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.malfunctions',
        start: 'center center',
        end: 'bottom center',
        duration: 1,
        scrub: true,
    }
})

gsap.from('.swiper-button-prev', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.malfunctions',
        start: 'center center',
        end: 'bottom center',
        duration: 1,
        scrub: true,
    }
})

gsap.from('.swiper', {
    y: 100,
    scrollTrigger: {
        trigger: '.malfunctions',
        start: 'top top',
        end: 'bottom top',
        duration: 1,
        scrub: true,
    }
})

// swiper
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperPrevBtn = document.querySelector('.swiper-button-prev');
const swiperNextBtn = document.querySelector('.swiper-button-next');

swiper.on('slideChange', function() {
    const slideActive = swiper.activeIndex;
    arrAnimation.forEach(element => {
        element.progress(1).kill()
    });
    arrAnimation[slideActive].restart();
});

// не сливает воду

const animation1 = gsap.timeline(2);

animation1.to('.malfunctions-washing-machine-drum-water svg', {
    opacity: 0,
});

animation1.fromTo('.malfunctions-washing-machine-drum-water', {
    y: 0,
}, {
    y: '70%'
})

animation1.to('.malfunctions-washing-machine__button-center .fa-arrow-down', {
    opacity: 1,
    repeat: 3
})

animation1.to('.malfunctions-washing-machine__button-center .fa-arrow-down', {
    opacity: 0,
})

animation1.pause();

// не набирает воду
const animation2 = gsap.timeline();

animation2.fromTo('.malfunctions-washing-machine-drum-water', {
    y: '100%',
}, {
    y: '70%',
})

animation2.to('.malfunctions-washing-machine__button-center .fa-arrow-up', {
    opacity: 1,
    repeat: 3
})

animation2.to('.malfunctions-washing-machine__button-center .fa-arrow-up', {
    opacity: 0,
})

animation2.pause();

// не включается
const animation3 = gsap.timeline();

animation3.to('.malfunctions-washing-machine-drum-water', {
    y: '100%',
}, )

animation3.to('.malfunctions-washing-machine__button-center .fa-sharp', {
    opacity: 1,
    repeat: 3
})

animation3.to('.malfunctions-washing-machine__button-center .fa-sharp', {
    opacity: 0,
})

animation3.pause();

// не крутит барабан
const animation4 = gsap.timeline();

animation4.to('.malfunctions-washing-machine-drum-water', {
    y: 0,
});

animation4.to('.malfunctions-washing-machine-drum-water svg', {
    opacity: 1,
    rotate: 200,
    fill: '#FF6939',
});

animation4.to('.malfunctions-washing-machine-drum-water svg', {
    fill: '#4dc0ed',
    rotate: 0,
});

animation4.to('.malfunctions-washing-machine__button-center .fa-rotate', {
    opacity: 1,
    repeat: 3
})

animation4.to('.malfunctions-washing-machine__button-center .fa-rotate', {
    opacity: 0,
})

animation4.pause();

// не греет воду
const animation5 = gsap.timeline();

animation5.to('.malfunctions-washing-machine-drum-water', {
    opacity: 0.5,
    repeat: 2,
})

animation5.to('.malfunctions-washing-machine-drum-water', {
    opacity: 1,
})

animation5.to('.malfunctions-washing-machine__button-center i.fa-solid.fa-temperature-quarter', {
    opacity: 1,
    repeat: 3
})

animation5.to('.malfunctions-washing-machine__button-center i.fa-solid.fa-temperature-quarter', {
    opacity: 0,

})

animation5.pause()

// шумит или стучит
const animation6 = gsap.timeline();

animation6.to('.malfunctions-washing-machine__wrapp', {
    rotate: 5,
})

animation6.to('.malfunctions-washing-machine__wrapp', {
    rotate: -5,
})

animation6.to('.malfunctions-washing-machine__wrapp', {
    rotate: 0,
})

animation6.to('.malfunctions-washing-machine__button-center .fa-arrow-right-arrow-left', {
    opacity: 1,
    repeat: 3,
})

animation6.to('.malfunctions-washing-machine__button-center .fa-arrow-right-arrow-left', {
    opacity: 0,
})

animation6.pause();

// поламалась кнопка

const animation7 = gsap.timeline();

animation7.to('#broken', {
    backgroundColor: '#FF6939',
    repeat: 3,
});

animation7.to('#broken', {
    backgroundColor: '#FFB600'
});

animation7.to('.malfunctions-washing-machine__button-center .fa-play', {
    opacity: 1,
    repeat: 3,
})

animation7.to('.malfunctions-washing-machine__button-center .fa-play', {
    opacity: 0,
})

animation7.pause();

const arrAnimation = [animation1, animation2, animation3, animation4, animation5, animation6, animation7];