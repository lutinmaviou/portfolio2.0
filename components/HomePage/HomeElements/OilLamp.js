import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const OilLamp = () => {
  const repo = 'portfolio/home-page/';
  const frame1 = buildUrl(`${repo}lamp_g2bkqy.png`, cloudName);
  return (
    <>
      <div id="shadow-circle">
        <div className="circle"></div>
      </div>
      <div id="oil-lamp">
        <Image src={frame1} alt="Lampe à huile" width={651} height={1716} />
      </div>
    </>
  );
};

export default OilLamp;
