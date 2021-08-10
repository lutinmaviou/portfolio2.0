export default function textFade() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.top-text', {
    scrollTrigger: {
      trigger: '.top-text',
      start: 'top bottom',
      end: 'bottom center',
      scrub: true,
    },
    opacity: 1,
  });

  gsap.to('.bottom-text', {
    scrollTrigger: {
      trigger: '.bottom-text',
      start: '+=70% center',
      end: '150% top',
      scrub: true,
    },
    opacity: 0,
  });
}
