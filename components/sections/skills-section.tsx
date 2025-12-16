'use client';
import React, { useEffect, useRef, useState } from 'react';

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  const skills = [
    { name: 'Next JS', percentage: 99 },
    { name: 'React', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Node JS', percentage: 95 },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // animate only once
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="skills py-16">
      <div className="wrapper mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8">MY SKILLS</h3>
        <div className="skills-content flex flex-col md:flex-row gap-7 md:gap-13">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h4 className="text-xl font-semibold">
              All the skills that I have in that field of work are mentioned
            </h4>
            <p>
              I'm a software developer with a passion for creating innovative
              solutions. I have experience in various programming languages and
              frameworks, and I'm always eager to learn new technologies.
            </p>
          </div>

          <ul className="skills-list w-full md:w-1/2 flex flex-col gap-10">
            {skills.map((item, index) => (
              <li
                key={index}
                className="skills-list-item flex flex-col relative">
                <div className="skill-name-percentage flex justify-between relative w-full mb-2">
                  <span className="skill-name">{item.name}</span>
                  <span className="skill-percentage">{item.percentage}%</span>

                  {/* Animated "before" element */}
                  <div
                    className="absolute bottom-[-10px] left-0 h-[2.5px] bg-custom-yellow z-50 rounded-full transition-all duration-2000"
                    style={{
                      width: visible ? `${item.percentage}%` : '0%',
                    }}></div>
                  {/* Background line */}
                  <div className="absolute bottom-[-10px] left-0 h-[2.5px] w-full bg-custom-dark-gray rounded-full"></div>
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
