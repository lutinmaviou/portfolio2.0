import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const SpiderWeb = () => {
  const repo = 'portfolio/home-page/';
  const spiderWeb = buildUrl(`${repo}spider-web_ppbg67.png`, cloudName);
  const spider = buildUrl(`${repo}spider_g0cxfy.png`, cloudName);
  return (
    <div className="spider-web">
      <Image src={spiderWeb} alt="Toile d'araignée" width={803} height={739} />
      <div id="spider">
        <Image src={spider} alt="Araignée" width={220} height={219} />
      </div>
    </div>
  );
};

export default SpiderWeb;
