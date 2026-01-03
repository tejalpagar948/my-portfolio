'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { useSliderSettings } from '../useSliderSettings';
import { ProjectSection as ProjectSectionType, Project } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import AOS from 'aos';
import { useEffect } from 'react';

interface ProjectSectionProps {
  value: ProjectSectionType;
}

// ✅ Proper TypeScript fix for react-slick Slider
const SliderComponent = Slider as unknown as React.ComponentType<any>;

const ProjectSection: React.FC<ProjectSectionProps> = ({ value }) => {
  if (!value) return null;

  useEffect(() => {
    AOS.refresh();
  }, [value]);

  const projects = value.projects || [];
  const projectArrayLength = projects.length;

  const settings = useSliderSettings({
    slidesToShow: 3,
    reviewsLength: projectArrayLength,
    autoplay: false,
  });

  return (
    <section className="projects" id="project">
      <div className="wrapper">
        <h3 className="all-caps mb-8" data-aos="fade-up" data-aos-delay="100">
          {value.sectionTitle || 'Projects'}
        </h3>
        {projectArrayLength > 3 ? (
          <SliderComponent {...settings}>
            {projects.map((item, index) => (
              <div
                key={index}
                className="px-5"
                data-aos="fade-up"
                data-aos-delay="100">
                <ProjectCard item={item as unknown as Project} />
              </div>
            ))}
          </SliderComponent>
        ) : (
          <ul
            className="project-list flex flex-wrap md:flex-nowrap gap-8"
            data-aos="fade-up"
            data-aos-delay="100">
            {projects.map((item, index) => (
              <li key={index} className="w-full md:w-1/3">
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

// ⭐ ProjectCard Component
const ProjectCard = ({ item }: { item: Project }) => (
  <Link
    href={item?.cta?.externalUrl || '#'}
    className="group project-list-item flex flex-col gap-3.5">
    <figure className="relative overflow-hidden w-full h-[185px]">
      {item.projectThumbnail && (
        <>
          <Image
            src={urlFor(item.projectThumbnail).url()}
            alt={item.title || 'Project Thumbnail'}
            width={200}
            height={200}
            priority
            unoptimized
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
        </>
      )}
    </figure>

    <span className="pt-2 text-2xl">{item.title}</span>
    {item.description && <p className="text-base">{item.description}</p>}
  </Link>
);
