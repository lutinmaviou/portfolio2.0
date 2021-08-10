import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';

const Couch = () => {
  const repo = 'portfolio/home-page/';
  const couch = buildUrl(`${repo}couch_at67dh.png`, cloudName);
  return (
      <div className="couch">
        <Image src={couch} alt="Canapé" width={1500} height={500} />
      </div>
  );
};

export default Couch;
