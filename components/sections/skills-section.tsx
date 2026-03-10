'use client';
import React, { useEffect, useRef, useState } from 'react';
import { SkillProficiencySection as SkillProficiencySectionType } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface SkillsSectionProps {
  value: SkillProficiencySectionType;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ value }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true); // animate when visible
          } else {
            setVisible(false); // reset when leaving viewport
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="skills py-8 md:py-16">
      <div className="wrapper mx-auto px-4">
        <h3
          className="text-3xl font-bold mb-8"
          data-aos="fade-up"
          data-aos-delay="100">
          {value.sectionTitle}
        </h3>

        <div className="skills-content flex flex-col md:flex-row gap-7 md:gap-13">
          {/* Left Content */}
          <div
            className="w-full md:w-1/2 flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="100">
            <PortableText value={value.content ?? []} />
          </div>

          {/* Skills List */}
          <ul
            className="skills-list w-full md:w-1/2 flex flex-col gap-7"
            data-aos="fade-up"
            data-aos-delay="100">
            {(value.skills || []).map((item, index) => (
              <li
                key={index}
                className="skills-list-item flex flex-col relative">
                <div className="skill-name-percentage flex justify-between relative w-full mb-2">
                  <span className="skill-name">{item.skillName}</span>

                  <span className="skill-percentage">
                    {item.proficiencyPercentage}%
                  </span>

                  {/* Animated Progress Line */}
                  <div
                    className="absolute bottom-[-10px] left-0 h-[2.5px] bg-custom-yellow z-50 rounded-full transition-all duration-[2000ms] ease-out"
                    style={{
                      width: visible ? `${item.proficiencyPercentage}%` : '0%',
                    }}
                  />

                  {/* Background Line */}
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
