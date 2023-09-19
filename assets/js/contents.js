
// const a = document.querySelectorAll('.quick ul li a')
const ac1 = document.querySelector('.unActive1')    
const ac2 = document.querySelector('.unActive2')    
const ac3 = document.querySelector('.unActive3')    
const ac4 = document.querySelector('.unActive4')    
const ac5 = document.querySelector('.unActive5')    

    window.addEventListener('scroll', () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage = (scrollTop / scrollableHeight) * 100;
    console.log('test',scrollPercentage,'%');
    
    if(scrollPercentage < 20){
        ac1.style.borderColor= '#ffffff'
        ac2.style.borderColor= '#ffffff80'
    }if(20 < scrollPercentage < 40){
        ac2.style.borderColor= '#ffffff'
        ac1.style.borderColor= '#ffffff80'
        ac3.style.borderColor= '#ffffff80'
    }if(40<scrollPercentage < 70){
        ac2.style.borderColor= '#ffffff80'
        ac3.style.borderColor= '#ffffff'
        ac4.style.borderColor= '#ffffff80'
    }if(70<scrollPercentage < 95){
        ac3.style.borderColor= '#ffffff80'
        ac4.style.borderColor= '#ffffff'
        ac5.style.borderColor= '#ffffff80'
    }if(95<scrollPercentage){
        ac4.style.borderColor= '#ffffff80'
        ac5.style.borderColor= '#ffffff'
    }
      });

function scrollTriggerFunction(element, x, y, start, end) {
    gsap.to(element, {
      x,
      y,
      duration: 3,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: 4,
        // markers:true
      },
    });
  }
  
  gsap.registerPlugin(ScrollTrigger);
  

  const animations = [
    { element: document.querySelector('.block_1'), x: 50, y: 0, start: 'top 80%', end: 'top 30%' },
    { element: document.querySelector('.image_1'), x: -50, y: 0, start: 'top 80%', end: 'top 30%' },
    { element: document.querySelector('.block_2'), x: -50, y: 0, start: 'top 80%', end: 'top 30%' },
    { element: document.querySelector('.image_2'), x: 50, y: 0, start: 'top 80%', end: 'top 30%' },
    { element: document.querySelector('.block_3'), x: 50, y: 0, start: 'top 80%', end: 'top 30%' },
    { element: document.querySelector('.image_3'), x: -50, y: 0, start: 'top 80%', end: 'top 30%' },
    {element:document.querySelector('.footer_right'), x:0, y:-50, start:'top 80%', end:'top 30%'},
    {element:document.querySelector('.footer_left'), x:100, y:-50, start:'top 80%', end:'top 30%'}
  ];
  
  animations.forEach((animation) => {
    scrollTriggerFunction(animation.element, animation.x, animation.y, animation.start, animation.end);
  });

  