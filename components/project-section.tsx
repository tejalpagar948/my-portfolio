import React from 'react';
import Image from 'next/image';
import ProjectImage from '../public/assets/images/project1.jpg';

interface ProjectSectionProps {
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
}) => {
  const projects = [
    {
      title: "Proguardpalns",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.",
      linkText: "Read More",
      linkHref: "",
    },
    {
      title: "Proguardpalns",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.",
      linkText: "Read More",
      linkHref: "",
    },
    {
      title: "Proguardpalns",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, excepturi.",
      linkText: "Read More",
      linkHref: "",
    }
  ];
  
  return (
    <section className="projects pb-24">
    <div className="wrapper">
      <h3 className="all-caps">projects</h3>
        <ul className="project-list flex gap-8">
        { projects.map((item,index)=>(
          <li key={index} className="project-list-item flex-1/3 flex flex-col gap-3.5">
            <Image
            src={ProjectImage}
            alt=""
            width="20"
            height="20"
            className=""
            />
            <h6 className="pt-2 text-2xl">{item.title}</h6>
            <p className="text-base">{item.description}</p>
            <a href={item.linkHref}target='_self' className="underline text-custom-yellow" >{item.linkText}</a>
          </li>
         ))} 
        </ul>
    </div>
  </section>  
  );
};

export default ProjectSection;
