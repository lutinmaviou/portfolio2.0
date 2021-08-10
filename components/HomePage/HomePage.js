import cursor from '../../utils/cursor';
import Couch from './HomeElements/Couch';
import Frames from './HomeElements/Frames';
import Name from './HomeElements/Name';
import SpiderWeb from './HomeElements/SpiderWeb';
import OilLamp from './HomeElements/OilLamp';
import WelcomeText from './HomeElements/WelcomeText';
import PresentationText from './HomeElements/PresentationText';
import comingTitle from '../../gsap/AboutPage/comingTitle';
import lampMove from '../../gsap/AboutPage/lampMove';
import { useEffect} from 'react';
import ArrowText from './HomeElements/ArrowText';
import textFade from '../../gsap/AboutPage/textFade';
import { motion } from 'framer-motion';

const HomePage = () => {
  useEffect(() => {
    cursor();
    comingTitle();
    textFade();
    lampMove();
    document.body.style.overflowY = 'visible';
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behaviour: 'smooth',
    });
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <motion.div
        exit={{ translateX: '-100%' }}
        transition={{ duration: 1.5, delay: 0.1 }}
        id="about-container"
      >
        <div className="couch-container flex-col">
          <Frames />
          <Couch />
        </div>
        <Name />
        <ArrowText />
        <SpiderWeb />
        <WelcomeText />
        <OilLamp />
        <PresentationText />
      </motion.div>
    </>
  );
};

export default HomePage;
