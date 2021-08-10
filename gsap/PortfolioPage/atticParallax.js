export default function atticParallax() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.attic-container', {
    scrollTrigger: {
      scrub: true,
    },
    yPercent: 100,
    ease: 'linear',
  });

  gsap.to('.attic-bg', {
    scrollTrigger: {
      scrub: true,
    },
    opacity: 1,
    ease: 'linear',
  });

  gsap.to('.suitCases1', {
    scrollTrigger: {
      scrub: true,
    },
    yPercent: 25,
    xPercent: 30,
    scale: 0.4,
  });

  gsap.to('.suitCases2', {
    scrollTrigger: {
      scrub: true,
    },
    yPercent: 15,
    xPercent: -30,
    scale: 0.6,
  });

  gsap.to('.attic-title', {
    scrollTrigger: {
      scrub: 1,
      duration: 2,
    },
    yPercent: -110,
    opacity: 0.9,
  });

  gsap.to('.attic-trap', {
    scrollTrigger: {
      scrub: true,
    },
    opacity: 1,
  });

  gsap.from('.attic-panels', {
    yPercent: -80,
    duration: 1,
    ease: 'power3',
  });

  const panels = gsap.timeline({
    scrollTrigger: {
      trigger: '.attic-panels',
      start: 'bottom',
      scrub: 1,
    },
  });
  panels.fromTo(
    '.attic-panels',
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
  );
}
