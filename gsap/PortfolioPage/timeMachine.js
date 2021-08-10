export default function timeMachine() {
  gsap.registerPlugin(ScrollTrigger);

  //Deploy head panel
  gsap.to('.panel-container', {
    scrollTrigger: {
      trigger: '.panel-container',
      start: 'center center',
      end: 'bottom bottom',
      scrub: 2,
    },
    rotationX: 0,
  });

  //Deploy arrows
  gsap.from('.left-arrow', {
    x: '+=50%',
  });

  gsap.from('.right-arrow', {
    x: '-=50%',
  });

  gsap.to('.left-arrow', {
    scrollTrigger: {
      trigger: '.left-arrow',
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub: 2,
    },
    x: '-=60%',
  });

  gsap.to('.right-arrow', {
    scrollTrigger: {
      trigger: '.right-arrow',
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub: 2,
    },
    x: '+=60%',
  });
}
