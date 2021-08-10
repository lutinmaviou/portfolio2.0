import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const TheaterCurtain = () => {
  const repo = 'portfolio/home-page/';
  const TheaterCurtain = buildUrl(`${repo}theater-curtain_jk2nlj.png`, cloudName);
  return (
    <>
      <div id="theater-curtain">
        <Image
          src={TheaterCurtain}
          alt="Rideau de théatre"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
    </>
  );
};

export default TheaterCurtain;
