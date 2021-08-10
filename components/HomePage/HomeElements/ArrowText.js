import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../cloudinary/cloudName';
import Link from 'next/link';

const ArrowText = () => {
 
  const repo = 'portfolio/home-page/';
  const triangle = buildUrl(`${repo}triangle_vd5g82.png`, cloudName);
  const brokenTriangle = buildUrl(`${repo}broken-head_uzfvia.png`, cloudName);
  return (
    <div className="flex-row" id="arrow">
      <Link href="/attic" passHref  scroll={false}>
        <h2 id="arrow-title" className="ms-600">
          Portfolio
        </h2>
      </Link>
      <div id="triangle">
        <Image
          src={triangle}
          alt="Flèche du panneau portfolio"
          width={594}
          height={816}
        />
      </div>
      <div id="triangle-out">
        <Image
          src={brokenTriangle}
          alt="Flèche du panneau portfolio cassée"
          width={792}
          height={816}
        />
      </div>
    </div>
  );
};

export default ArrowText;
