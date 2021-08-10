export default function projectCard() {
  gsap.registerPlugin(ScrollTrigger);

  // Elements coming
  gsap.from('.project-img', {
    xPercent: 100,
    duration: 1.5,
    ease: 'power4',
  });

  gsap.from('#project-title', {
    yPercent: -100,
    duration: 1,
    delay: 0.5,
    ease: 'power4',
  });

  gsap.from('.project-desc', {
    opacity: 0,
    duration: 1,
    delay: 1.2,
  });
}
