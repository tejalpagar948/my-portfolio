import React from 'react';
import Image from 'next/image';
import ProjectImage from '../../public/assets/images/project1.jpg';
import Project1 from '../../public/assets/images/proguard.png';
import Link from 'next/link';

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const projects = [
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.',
      linkText: 'Read More',
      href: ProjectImage.src,
    },
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.',
      linkText: 'Read More',
      href: ProjectImage.src,
    },
    {
      title: 'Proguardpalns',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,  excepturi excepturi.',
      linkText: 'Read More',
      href: Project1.src,
    },
  ];

  return (
    <section className="projects pb-24" id="project">
      <div className="wrapper">
        <h3 className="all-caps">projects</h3>
        <ul className="project-list flex flex-wrap md:flex-nowrap gap-8">
          {projects.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="project-list-item flex-1/3 flex flex-col gap-3.5 ">
                <figure className="overflow-hidden w-full h-[185px]">
                  <Image
                    src={item.href}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full object-cover transition-all duration-200 ease-in-out hover:scale-105 h-full"
                  />
                </figure>
                <span className="pt-2 text-2xl">{item.title}</span>
                <p className="text-base">{item.description}</p>
                <span className="underline text-custom-yellow">
                  {item.title} {/* OR your button / span / text */}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
