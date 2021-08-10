import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../cloudinary/cloudName';
import Link from 'next/link';
import { useEffect } from 'react';
import atticParallax from '../../gsap/PortfolioPage/atticParallax';

export default function Attic() {
  useEffect(() => {
    atticParallax();
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behaviour: 'smooth',
    });
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.trap-cursor');
    cursor.addEventListener('mouseenter', () => {
      cursor.style.opacity = 1;
      cursor.style.animation = 'bounce 1s infinite';
      cursor.style.cursor = 'pointer';
    });
    cursor.addEventListener('mouseleave', () => {
      cursor.style.opacity = 0.8;
      cursor.style.animation = 'none';
    });
  });

  const repo = 'portfolio/portfolio/';
  const attic = buildUrl(`${repo}attic-dark-full-min_voxzdf.jpg`, cloudName);
  const panel1 = buildUrl(`${repo}panel1-min_nlwgbh.png`, cloudName);
  const panel2 = buildUrl(`${repo}panel2-min_mcpi04.png`, cloudName);
  const suitCases1 = buildUrl(`${repo}cases_exxuwu.png`, cloudName);
  const suitCases2 = buildUrl(`${repo}cases2_y2yydp.png`, cloudName);
  const atticTrap = buildUrl(`${repo}attic-trap_fwfdis.png`, cloudName);
  const cursor = buildUrl(`${repo}reverse-cursor_yynylg.png`, cloudName);

  return (
    <motion.div exit={{ translateY: '-100%' }} transition={{ duration: 1.5, delay: 0.1 }}>
      <section className="attic-container">
        <div className="attic-panels flex-row around">
          <div className="attic-panel1">
            <Image src={panel1} width={606} height={570} />
          </div>
          <div className="attic-panel2">
            <Image src={panel2} width={431} height={598} />
          </div>
        </div>
        <h1 className="attic-title owl">Le grenier</h1>
        <div className="attic-bg">
          <Image src={attic} layout="fill" />
        </div>
        <div className="suitCases1">
          <Image src={suitCases1} width={1200} height={800} />
        </div>
        <div className="suitCases2">
          <Image src={suitCases2} width={1200} height={600} />
        </div>
        <div className="attic-trap">
          <Image src={atticTrap} width={526} height={300} />
        </div>
        <Link href="/portfolio/[year]" as={`/portfolio/2019`} passHref scroll={false}>
          <div className="trap-cursor">
            <Image src={cursor} width={300} height={200} />
          </div>
        </Link>
      </section>
      <div className="attic-description fred">
        <p className="attic-text">
          C'est ici que sont stockés mes idées, mes travaux.
          <br />
          Les principaux sont affichés en bas, sur le{' '}
          <Link href="/portfolio/[year]" as={`/portfolio/2019`} passHref scroll={false}>
            <span>mur des projets.</span>
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
