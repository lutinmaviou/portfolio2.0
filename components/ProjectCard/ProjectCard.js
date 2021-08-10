import { useEffect } from 'react';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../cloudinary/cloudName';
import Button from '../Utils/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import projectCard from '../../gsap/PortfolioPage/projectCard';

const ProjectCard = ({ property }) => {
  const repo = 'portfolio/portfolio/';
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    const effect = document.querySelector('.fa-caret-square-left');
    effect.addEventListener('mouseenter', () => {
      gsap.to('.projects-wall', {
        scale: 1,
        ease: 'elastic',
        duration: 0.5,
      });
    });
    effect.addEventListener('mouseleave', () => {
      gsap.to('.projects-wall', {
        scale: 0,
        ease: 'linear',
        duration: 0.1,
      });
    });
  });

  useEffect(() => {
    projectCard();
  }, []);

  return (
    <div className="project-container ms-400">
      <div className="icon-back">
        <p className="projects-wall">Mur des projets</p>
        <Button
          content={
            <Link
              href="/portfolio/[year]"
              as={`/portfolio/${router.query.year}`}
              scroll={false}
            >
              <i className="far fa-caret-square-left fa-6x"></i>
            </Link>
          }
        />
      </div>
      <h1 id="project-title">{property.title}</h1>
      <div className="flex-row between project-wrapper">
        <div className="text">
          <p className="project-desc">{property.about}</p>
        </div>
        <div className="project-img">
          <Image
            src={buildUrl(`${repo}${property.cover}`, cloudName)}
            width={550}
            height={550}
          />
        </div>
      </div>
      <div className="project-spec ms-500">
        <h2>Spécificités :</h2>
        <ul className="project-spec-list">
          {property.descriptions.map((item, index = 0) => (
            <li key={index}>&rarr; {item}</li>
          ))}
        </ul>
      </div>
      {property.year === '2019' && (
        <p className="project-text">
          Chaque projet d'OpenClassrooms était exposé devant un mentor sous forme de
          soutenance, avec un support de présentation (Power Point) afin de le valider.
        </p>
      )}

      {property.quote && (
        <div className="quote-container">
          <h2>Citation du mentor :</h2>
          <div className="quote-wrapper flex-row center">
            <i className="fas fa-quote-left"></i>
            <blockquote>{property.quote}</blockquote>
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
