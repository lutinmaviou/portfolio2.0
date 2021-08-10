import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const RedCurtain = () => {
  const repo = 'portfolio/home-page/';
  const RedCurtain = buildUrl(`${repo}red-curtain_vvn3fk.png`, cloudName);
  return (
    <>
      <div id="black-curtain">
        <Image
          src={RedCurtain}
          alt="Rideau de théatre"
          layout="fill"
          //objectFit="cover"
        />
      </div>
    </>
  );
};

export default RedCurtain;
