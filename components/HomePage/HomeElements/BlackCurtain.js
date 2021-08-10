import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const BlackCurtain = () => {
  const repo = 'portfolio/home-page/';
  const BlackCurtain = buildUrl(`${repo}black-curtains_rv0ofs.png`, cloudName);
  return (
    <>
      <div id="red-curtain">
        <Image
          src={BlackCurtain}
          alt="Rideau de théatre"
          layout="fill"
          //objectFit="cover"
        />
      </div>
    </>
  );
};

export default BlackCurtain;
