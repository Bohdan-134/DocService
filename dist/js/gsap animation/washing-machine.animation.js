
gsap.registerPlugin(ScrollTrigger);const topPositionWashingMachine=document.querySelector('.wrap-img.wrap-img__blue').getBoundingClientRect().top-document.querySelector('.container-map__washing-machine').getBoundingClientRect().top-50;const WhyWeItemBlue=document.querySelector('.wrap-img.wrap-img__blue');const WhyWeItemOrangeSvg=document.querySelector('.washing-machine')
console.log(WhyWeItemOrangeSvg)
const mapSvg=document.querySelector('.map-svg');gsap.to(".washing-machine__container",{y:()=>`-${topPositionWashingMachine}`,x:"center",})
gsap.to(".washing-machine__container svg",{width:'41vh'})
gsap.from(".why-we .washing-machine__container",{y:`-${topPositionWashingMachine}`,x:"center",scrollTrigger:{trigger:".header",start:"40% top",end:"bottom top",scrub:true,}})
gsap.fromTo(".washing-machine__container .washing-machine",{width:'41vh'},{width:()=>mapSvg.getBoundingClientRect().width,height:()=>mapSvg.getBoundingClientRect().height,scrollTrigger:{trigger:".header",start:"40% top",end:"bottom top",scrub:true,}})
gsap.to(".why-we .washing-machine__container",{width:()=>WhyWeItemBlue.offsetWidth,height:()=>WhyWeItemBlue.offsetHeight,borderRadius:'50%',backgroundColor:'#01A1DF',scrollTrigger:{trigger:".header",start:"30% top",end:"bottom top",scrub:true,}})