export default function lampMove() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#oil-lamp', {
    scrollTrigger: {
      trigger: '.top-text',
      start: 'bottom 30%',
      endTrigger: '.bottom-text',
      end: 'top -=10%',
      scrub: 1,
    },
    left: '5%',
    ease: 'none',
  });

  gsap.to('#shadow-circle', {
    scrollTrigger: {
      trigger: '.top-text',
      start: 'bottom 30%',
      endTrigger: '.bottom-text',
      end: 'top -=10%',
      scrub: 1,
    },
    left: '5%',
    ease: 'none',
  });

  /* gsap.to('#oil-lamp', {
    scrollTrigger: {
      trigger: '.bottom-text',
      start: 'bottom 20%',
      end: '+=80%',
      scrub: true,
    },
    opacity: 0,
  });

  gsap.to('#shadow-circle', {
    scrollTrigger: {
      trigger: '.bottom-text',
      start: 'bottom 20%',
      end: '+=80%',
      scrub: true,
    },
    opacity: 0,
  });

  gsap.to('#oil-lamp', {
    scrollTrigger: {
      trigger: '#theater-curtain',
      start: '20%',
      end: '10%',
      scrub: true,
    },
    position: 'absolute',
    immediateRender: false,
  });

  gsap.to('#shadow-circle', {
    scrollTrigger: {
      trigger: '#theater-curtain',
      start: '20%',
      end: '10%',
      scrub: true,
    },
    position: 'absolute',
    immediateRender: false,
  }); */
}
