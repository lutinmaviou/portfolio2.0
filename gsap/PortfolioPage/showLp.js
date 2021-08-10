export default function showLp() {
  gsap.registerPlugin(ScrollTrigger);

  // Show lp
  const sections = gsap.utils.toArray('.lp');
  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'bottom bottom',
        end: 'bottom +=90%',
        scrub: 1,
      },
      xPercent: 90,
      rotation: 120,
    });
  });

  // Main title effect
  let tl = gsap.timeline({ delay: 0.5 });
  tl.to('#projects-title', {
    duration: 2.5,
    opacity: 0.8,
    rotation: 360,
    ease: 'elastic',
  });

  // Project title reveal
  const titles = gsap.utils.toArray('.project-title');
  titles.forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'bottom bottom',
        end: 'bottom +=90%',
        toggleActions: 'restart none none none',
        scrub: 1,
      },
      ease: 'power1.out',
      y: 200,
      skewY: 10,
      opacity: 0,
    });
  });

  // todo: Projects panels snapping
}
