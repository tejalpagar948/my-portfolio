'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import AOS from 'aos';

import { useSliderSettings } from '../useSliderSettings';
import { ProjectSection as ProjectSectionType, Project } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';

//////////////////////////////////////////////////////
// TYPES
//////////////////////////////////////////////////////

interface ProjectSectionProps {
  value: ProjectSectionType;
}

const itemTabs: string[] = ['html', 'css', 'javascript', 'react'];

// react-slick typing fix
const SliderComponent = Slider as unknown as React.ComponentType<any>;

//////////////////////////////////////////////////////
// MAIN COMPONENT
//////////////////////////////////////////////////////

const ProjectSection: React.FC<ProjectSectionProps> = ({ value }) => {
  if (!value) return null;

  const projects = value.projects || [];
  const projectArrayLength = projects.length;

  const settings = useSliderSettings({
    slidesToShow: 3,
    reviewsLength: projectArrayLength,
    autoplay: false,
  });

  return (
    <section className="projects py-16" id="project">
      <div className="wrapper max-w-6xl mx-auto px-5">
        <h3
          className="all-caps mb-10 text-2xl font-bold"
          data-aos="fade-up"
          data-aos-delay="100">
          {value.sectionTitle || 'Projects'}
        </h3>

        {projectArrayLength > 3 ? (
          //////////////////////////////////////////////////////
          // ⭐ SLIDER VIEW
          //////////////////////////////////////////////////////
          <SliderComponent {...settings}>
            {projects.map((item, index) => (
              <div
                key={index}
                className="px-3 h-full flex"
                data-aos="fade-up"
                data-aos-delay="100">
                <ProjectCard item={item as unknown as Project} />
              </div>
            ))}
          </SliderComponent>
        ) : (
          //////////////////////////////////////////////////////
          // ⭐ GRID VIEW (Equal height)
          //////////////////////////////////////////////////////
          <ul
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="100">
            {projects.map((item, index) => (
              <li key={index}>
                <ProjectCard item={item as unknown as Project} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;

//////////////////////////////////////////////////////
// ⭐ PROJECT CARD COMPONENT
//////////////////////////////////////////////////////

interface ProjectCardProps {
  item: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => (
  <Link
    href={item?.cta?.externalUrl ?? '#'}
    className="group flex flex-col h-full
bg-[#0f1b2d]
rounded-xl
shadow-[0_8px_25px_rgba(0,0,0,0.35)]
transition-all duration-300">
    {/* IMAGE */}
    <figure className="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl">
      {item.projectThumbnail && (
        <>
          <Image
            src={urlFor(item.projectThumbnail).url()}
            alt={item.title ?? 'Project Thumbnail'}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </>
      )}
    </figure>

    {/* CONTENT */}
    <div className="flex flex-col flex-1 p-5 gap-3">
      <span className="text-lg font-bold">{item.title}</span>

      {item.description && (
        <p className="text-[15px] text-gray-300 leading-relaxed">
          {item.description}
        </p>
      )}

      {/* TAGS */}
      {/* <ul className="flex flex-wrap gap-2 mt-auto">
        {itemTabs.map((tech) => (
          <li
            key={tech}
            className="bg-[#202a34] px-3 py-1 rounded-full text-sm border border-[#2a3446]">
            {tech}
          </li>
        ))}
      </ul> */}
    </div>
  </Link>
);
