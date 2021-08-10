import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const Frames = () => {
  const repo = 'portfolio/home-page/';
  const frame1 = buildUrl(`${repo}frame1_gcbtpk.png`, cloudName);
  const frame2 = buildUrl(`${repo}frame2_tcn7or.png`, cloudName);
  const frame3 = buildUrl(`${repo}frame3_waolyi.png`, cloudName);
  return (
    <div className="frames flex-row">
      <Image
        src={frame1}
        alt="Premier tableau lettre W"
        width={380}
        height={470}
      />
      <Image
        src={frame2}
        alt="Deuxième tableau lettre E"
        width={380}
        height={470}
      />
      <Image
        src={frame3}
        alt="Troisième tableau lettre B"
        width={380}
        height={470}
      />
    </div>
  );
};

export default Frames;
