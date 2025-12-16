'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import ProjectImage from '../../public/assets/images/project1.jpg';
import Project1 from '../../public/assets/images/proguard.png';
import { useSliderSettings } from '../useSliderSettings';

interface Project {
  href: string;
  title: string;
  description: string;
  imgSrc: string;
}

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.',
      href: ProjectImage.src,
      imgSrc: ProjectImage.src,
    },
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.',
      href: ProjectImage.src,
      imgSrc: ProjectImage.src,
    },
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi excepturi.',
      href: Project1.src,
      imgSrc: Project1.src,
    },
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.',
      href: ProjectImage.src,
      imgSrc: ProjectImage.src,
    },
  ];

  const settings = useSliderSettings({
    slidesToShow: 3,
    reviewsLength: projects.length,
    autoplay: false,
  });

  return (
    <section className="projects" id="project">
      <div className="wrapper">
        <h3 className="all-caps mb-8">projects</h3>

        {projects.length > 3 ? (
          <Slider {...settings}>
            {projects.map((item, index) => (
              <div key={index} className="px-3">
                <ProjectCard item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <ul className="project-list flex flex-wrap md:flex-nowrap gap-8">
            {projects.map((item, index) => (
              <li key={index} className="w-full md:w-1/3">
                <ProjectCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;

// ⭐ ProjectCard Component
const ProjectCard = ({ item }: { item: Project }) => (
  <Link href={item.href} className="project-list-item flex flex-col gap-3.5">
    <figure className="overflow-hidden w-full h-[185px]">
      <Image
        src={item.imgSrc}
        alt={item.title}
        width={200}
        height={200}
        className="w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-105"
      />
    </figure>
    <span className="pt-2 text-2xl">{item.title}</span>
    <p className="text-base">{item.description}</p>
    <span className="underline text-custom-yellow">{item.title}</span>
  </Link>
);
