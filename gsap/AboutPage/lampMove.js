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
}
