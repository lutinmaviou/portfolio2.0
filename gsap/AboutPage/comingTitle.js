export default function comingTitle() {

  const arrow = document.querySelector('#arrow');
  const triangle = document.querySelector('#triangle');
  const triangleOut = document.querySelector('#triangle-out');

  ScrollTrigger.matchMedia({
    '(max-width: 1000px)': function () {
      let tl = gsap.timeline({ delay: 0.5 });
      tl.from('.title, #arrow', {
        duration: 2,
        delay: 0.5,
        y: -700,
        ease: 'elastic',
      });
      tl.to('#arrow', {
        duration: 1.6,
        delay: -0.4,
        rotation: 80,
        transformOrigin: '0 28%',
        ease: 'elastic',
      });
      tl.to('#arrow', {
        duration: 1,
        delay: -0.8,
        yPercent: 1200,
      });
      tl.to('h1', {
        duration: 2,
        delay: -0.5,
        color: 'white',
        textShadow: '0 0 100px red',
        boxShadow: '0 0 30px',
      });
      tl.to(triangle, {
        duration: 0.01,
        delay: -1.6,
        display: 'none',
      });
      tl.to(triangleOut, {
        duration: 0.01,
        delay: -1.6,
        display: 'block',
      });
    },
    '(min-width: 1001px)': () => {
      let tl = gsap.timeline({ delay: 0.5 });
      tl.from('.title, #arrow', {
        duration: 2,
        delay: 0.5,
        y: -700,
        ease: 'elastic',
      });
      tl.to('#arrow', {
        duration: 1.6,
        delay: -0.4,
        rotation: 80,
        transformOrigin: '0 28%',
        ease: 'elastic',
      });
      tl.to('#arrow', {
        duration: 1,
        delay: -0.8,
        yPercent: 800,
      });
      tl.to('h1', {
        duration: 2,
        delay: -0.5,
        color: 'white',
        textShadow: '0 0 100px red',
        boxShadow: '0 0 30px',
      });
      tl.to(triangle, {
        duration: 0.01,
        delay: -1.6,
        display: 'none',
      });
      tl.to(triangleOut, {
        duration: 0.01,
        delay: -1.6,
        display: 'block',
      });
    },
  });
  ScrollTrigger.matchMedia({
    '(max-width: 500px)': () => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.top-text',
          start: 'bottom bottom',
          endTrigger: '.bottom-text',
          end: '+=400% top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      tl2.to('#arrow', {
        yPercent: 4200,
        rotation: 360,
        xPercent: -30,
      });
      tl2.to(triangleOut, {
        xPercent: 140,
      });
      tl2.to(triangleOut, {
        display: 'none',
      });
    },
    '(min-width: 501px) and (max-width: 1023px)': () => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.top-text',
          start: 'bottom bottom',
          endTrigger: '.bottom-text',
          end: '+=400% top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      tl2.to('#arrow', {
        yPercent: 3200,
        rotation: 360,
        xPercent: -30,
      });
      tl2.to(triangleOut, {
        xPercent: 140,
      });
      tl2.to(triangleOut, {
        display: 'none',
      });
    },
    '(min-width: 1024px)': function () {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.top-text',
          start: 'top bottom',
          endTrigger: '.bottom-text',
          end: '+=500% top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      tl2.to('#arrow', {
        yPercent: 2500,
        rotation: 360,
        xPercent: -15,
      });
      tl2.to(triangleOut, {
        xPercent: 140,
      });
      tl2.to(triangleOut, {
        display: 'none',
      });
    },
  });

  // dyfunctionnement of the falled neon
  const dysfunc = new gsap.timeline({ delay: 4.5, repeat: -1 });

  dysfunc.to(
    '#arrow, h2',
    {
      duration: 0.01,
      color: 'black',
      textShadow: '0 0 10px',
    },
    '+=0.8'
  );
  dysfunc.to(
    '#arrow, h2',
    {
      duration: 0.01,
      color: 'white',
    },
    '+=0.05'
  );
  dysfunc.to(
    '#arrow',
    {
      duration: 0.05,
      opacity: 0.4,
    },
    '+=1'
  );
  dysfunc.to(
    '#arrow',
    {
      duration: 0.3,
      opacity: 0.7,
    },
    '+=0.4'
  );
  dysfunc.to(
    '#arrow, h2',
    {
      duration: 0.01,
      color: 'black',
    },
    '+=0.4'
  );
  dysfunc.to(
    '#arrow, h2',
    {
      duration: 0.01,
      color: 'white',
      opacity: 1,
    },
    '+=0.4'
  );
  dysfunc.to('#arrow, h2', {
    duration: 0.01,
    color: 'black',
  });
  dysfunc.to(
    '#arrow, h2',
    {
      duration: 0.01,
      color: 'white',
    },
    '+=0.05'
  );
  dysfunc.to('#arrow, h2', {
    duration: 0.05,
    color: 'black',
  });
  dysfunc.to(
    '#arrow, h2',
    {
      duration: 0.01,
      color: 'white',
    },
    '+=0.05'
  );
  dysfunc.to(
    '#arrow',
    {
      duration: 0.02,
      opacity: 0.1,
    },
    '+=1'
  );
  dysfunc.to(
    '#arrow',
    {
      duration: 0.3,
      opacity: 0.7,
      textShadow: '0 0 100px',
    },
    '+=0.4'
  );
  dysfunc.to(
    '#arrow',
    {
      duration: 0.01,
      color: 'black',
      textShadow: '0 0 10px',
    },
    '+=0.4'
  );
  dysfunc.to(
    '#arrow',
    {
      duration: 0.01,
      color: 'white',
      opacity: 1,
    },
    '+=0.4'
  );
}
