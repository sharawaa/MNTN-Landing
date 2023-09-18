


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

  