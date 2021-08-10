import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../cloudinary/cloudName';
import Link from 'next/link';
import showLp from '../../gsap/PortfolioPage/showLp';
import TimeMachine from '../../components/PortfolioPage/TimeMachine/TimeMachine';

const Portfo3 = (properties) => {
  const router = useRouter();
  'router year : ' + router.query.year;
  const props = properties.props;
  const year = router.query.year;
  const [actualData, setActualData] = useState([]);

  const repo = 'portfolio/portfolio/';
  const shelf = buildUrl(`${repo}lp-shelf_rjptrf.png`, cloudName);

  useEffect(() => {
    const array = props.filter((i) => i.year === year);
    return setActualData(array);
  }, [year]);

  useEffect(() => {
    showLp();
  });

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div id="portfolio-border" className="ms-500">
      <h1 id="projects-title" className="surfer">
        Mur des projets
      </h1>

      <div id="main-section">
        <h2 id="h2" className="ms-600">
          {year}
        </h2>
        <main>
          {actualData &&
            actualData.map((item) => (
              <div key={item._id} className="project-item">
                <div className="project-title-wrapper">
                  <p className="ms-500 project-title">{item.title}</p>
                </div>
                <div id="lp-shelf" className="flex-col">
                  <div className={`flex-row center lp-container ${item._id}`}>
                    <div className="lp">
                      <Image
                        src={buildUrl(`${repo}${item.lp}`, cloudName)}
                        width={350}
                        height={350}
                      />
                    </div>
                    <Link
                      href="/portfolio/[year]/[slug]"
                      as={`/portfolio/${item.year}/${item.slug}`}
                      passHref
                    >
                      <div className="cover">
                        <Image
                          src={buildUrl(`${repo}${item.cover}`, cloudName)}
                          width={360}
                          height={360}
                        />
                      </div>
                    </Link>
                  </div>
                  <div id="shelf">
                    <Image src={shelf} width={900} height={104} />
                  </div>
                </div>
              </div>
            ))}
        </main>
      </div>

      <TimeMachine year={router.query.year} />
    </div>
  );
};

export default Portfo3;
