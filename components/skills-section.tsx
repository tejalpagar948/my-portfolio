import React from 'react';

interface SkillsSectionProps {
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
}) => {
  const skills = [
    { name: "Next JS", percentage: "99%" },
    { name: "Next JS", percentage: "99%" },
    { name: "Next JS", percentage: "99%" },
    { name: "Next JS", percentage: "99%" }
  ]

  return (
    <section className="skills">
    <div className="wrapper">
      <h3 className="">MY SKILLS</h3>
      <div className="skills-content flex gap-13">
          <div className="w-1/2 flex flex-col gap-6">
            <h4>All the skills that I have in that field of work are mentioned</h4>
            <p>I'm a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies.</p>
            <p>I'm a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies.</p>
          </div>
          <ul className="skills-list w-1/2 flex flex-col gap-10">
            {skills.map((item,index)=>(
                <li key={index} className="skills-list-item flex">
                <div className="skill-name-percentage flex justify-between relative w-full">
                  <span className="skill-name">{item.name}</span> 
                  <span className="skill-percentage">{item.percentage}</span> 
                </div>
              </li>
            ))}
          </ul>
      </div>
      </div>  
</section>
  );
};

export default SkillsSection;