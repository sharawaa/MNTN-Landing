const ac1 = document.querySelector('.unActive1');    
const ac2 = document.querySelector('.unActive2');    
const ac3 = document.querySelector('.unActive3');    
const ac4 = document.querySelector('.unActive4');    
const ac5 = document.querySelector('.unActive5');    

window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;
  

    if (scrollPercentage < 20) {
        ac1.style.borderColor = '#ffffff';
        ac2.style.borderColor = '#ffffff80';
    } else if (scrollPercentage >= 20 && scrollPercentage < 40) {
        ac2.style.borderColor = '#ffffff';
        ac1.style.borderColor = '#ffffff80';
        ac3.style.borderColor = '#ffffff80';
    } else if (scrollPercentage >= 40 && scrollPercentage < 70) {
        ac2.style.borderColor = '#ffffff80';
        ac3.style.borderColor = '#ffffff';
        ac4.style.borderColor = '#ffffff80';
    } else if (scrollPercentage >= 70 && scrollPercentage < 95) {
        ac3.style.borderColor = '#ffffff80';
        ac4.style.borderColor = '#ffffff';
        ac5.style.borderColor = '#ffffff80';
    } else if (scrollPercentage >= 95) {
        ac4.style.borderColor = '#ffffff80';
        ac5.style.borderColor = '#ffffff';
    }
    console.log(window.innerWidth);


});


function scrollTriggerFunction(element, x, y, start, end) {
  gsap.from(element, {
    x,
    y,
    opacity:0,

    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: 4,
      // markers:true,
      opacity:1
    },
    
   
  });
}

gsap.registerPlugin(ScrollTrigger);

  const smallScreen = () => window.innerWidth < 821; 


const animations = [
  { element: document.querySelector('.block_1'), x: smallScreen() ? 100 : -200, y:  0, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.image_1'), x: smallScreen() ? 0 : 200, y: 0, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.block_2'), x: smallScreen() ? 30 : 500, y:  0, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.image_2'), x: smallScreen() ? 0 : -200, y: 0, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.block_3'), x: smallScreen() ? 60 : -200, y: 0, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.image_3'), x: smallScreen() ? 0 : 200, y: 0, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.footer_right'), x: 0, y: smallScreen() ? 10 : 50, start: 'top 80%', end: 'top 30%' },
  { element: document.querySelector('.footer_left'), x: smallScreen() ? 0 : 100, y: smallScreen() ? 0 : 50, start: 'top bottom', end: 'center 10%' }
];

animations.forEach((animation) => {
  scrollTriggerFunction(animation.element, animation.x, animation.y, animation.start, animation.end);
});

window.addEventListener("resize", () => {
  animations.forEach((animation) => {
    scrollTriggerFunction(animation.element, animation.x, animation.y, animation.start, animation.end);
  });
});

  