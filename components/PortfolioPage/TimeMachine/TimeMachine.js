import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import Link from 'next/link';
import cloudName from '../../../cloudinary/cloudName';
import machine from '../../../gsap/PortfolioPage/timeMachine';

const TimeMachine = ({ year }) => {
  'year : ' + year;
  const [currentYear, setCurrentYear] = useState(parseInt(year, 10));
  const repo = 'portfolio/portfolio/';
  const timeMachine = buildUrl(`${repo}time-machine_xdyjin.png`, cloudName);
  const speed = buildUrl(`${repo}universe_th6cey.png`, cloudName);
  const leftArrow = buildUrl(`${repo}left-arrow_x0pwkk.png`, cloudName);
  const rightArrow = buildUrl(`${repo}right-arrow_eakurl.png`, cloudName);

  const isFirstRun = useRef(true);
  'current year : ' + currentYear;

  useEffect(() => {
    if (isFirstRun.current) {
      gsap.to('.year', { text: currentYear, delay: 0.1 });
      isFirstRun.current = false;
    }
  });

  useEffect(() => {
    machine();
  }, []);

  useEffect(() => {
    goToPastEffect();
    goToFutureEffect();
  }, [currentYear]);

  const goToPastEffect = () => {
    const leftArrowItem = document.querySelector('.left-arrow');
    gsap.from('.left-arrow', { rotationY: 0 });

    leftArrowItem.addEventListener('mousedown', () => {
      gsap.to(leftArrowItem, { rotationY: -20, duration: 0.05 });
    });

    leftArrowItem.addEventListener('mouseup', () => {
      gsap.to(leftArrowItem, { rotationY: 0, duration: 0.05 });
    });

    leftArrowItem.addEventListener('click', () => {
      //Disable click during animation
      leftArrowItem.style.pointerEvents = 'none';
      setTimeout(() => {
        leftArrowItem.style.pointerEvents = 'auto';
      }, 700);

      const universe = document.querySelector('.universe');
      const year = document.querySelector('.year');
      gsap.fromTo(
        universe,
        { rotation: 0 },
        { rotation: -1080, duration: 0.7, delay: 0.1 }
      );

      const prevText = gsap.timeline();
      prevText.fromTo(
        year,
        { opacity: 1, scale: 1, rotation: 0, text: currentYear },
        { opacity: 0, scale: 0.1, duration: 0.1, rotation: -180, delay: 0.1 }
      );
      prevText.to(year, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        text: currentYear - 1,
        duration: 0.01,
        delay: 0.31,
      });
    });
  };

  const goToFutureEffect = () => {
    const rightArrowItem = document.querySelector('.right-arrow');
    gsap.from('.right-arrow', { rotationY: 0 });

    rightArrowItem.addEventListener('mousedown', () => {
      gsap.to(rightArrowItem, { rotationY: 20, duration: 0.05 });
    });

    rightArrowItem.addEventListener('mouseup', () => {
      gsap.to(rightArrowItem, { rotationY: 0, duration: 0.05 });
    });

    rightArrowItem.addEventListener('click', () => {
      //Disable click during animation
      rightArrowItem.style.pointerEvents = 'none';
      setTimeout(() => {
        rightArrowItem.style.pointerEvents = 'auto';
      }, 700);

      const universe = document.querySelector('.universe');
      const year = document.querySelector('.year');
      gsap.fromTo(
        universe,
        { rotation: 0 },
        { rotation: 1080, duration: 0.7, delay: 0.1 }
      );

      const nextText = gsap.timeline();
      nextText.fromTo(
        year,
        { opacity: 1, scale: 1, rotation: 0, text: currentYear },
        { opacity: 0, scale: 0.1, duration: 0.1, rotation: 180, delay: 0.1 }
      );
      nextText.to(year, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        text: currentYear + 1,
        duration: 0.01,
        delay: 0.31,
      });
    });
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <div className="time-machine-container">
      <div className="panel-container">
        <div className="panel-head orbitron-500 flex-row center">
          Année actuelle : {year}
          <span id="blink">_</span>
        </div>
        <div className="panel-trunk"></div>
      </div>
      <div
        className="left-arrow"
        onClick={() => {
          handlePrevYear();
        }}
      >
        <Image src={leftArrow} width={400} height={104} />
      </div>
      <div className="time-machine-wrapper flex-col">
        <div className="time-machine">
          <Image src={timeMachine} width={500} height={500} />
        </div>
        <span className="year digital"></span>
        <div className="universe">
          <Image src={speed} width={300} height={300} />
        </div>
      </div>
      <div
        className="right-arrow"
        onClick={() => {
          handleNextYear();
        }}
      >
        <Image src={rightArrow} width={400} height={104} />
      </div>
      {currentYear < 2019 || currentYear > 2021 ? (
        <div className="time-machine-button-container flex-col center">
          <button className="time-machine-button ms-700" disabled={true}>
            go !
          </button>
        </div>
      ) : (
        <Link href="/portfolio/[year]" as={`/portfolio/${currentYear}`} passHref>
          <div className="time-machine-button-container flex-col center">
            <button className="time-machine-button ms-700">go !</button>
          </div>
        </Link>
      )}
    </div>
  );
};

TimeMachine.propTypes = {
  year: PropTypes.any,
};

export default TimeMachine;
