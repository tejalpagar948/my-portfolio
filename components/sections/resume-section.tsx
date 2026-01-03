'use client';
import React from 'react';
import ResumeContentList from '../resume-content-list';
import { ResumeSection as ResumeSectionType } from '@/sanity.types';
import AOS from 'aos';
import { useEffect } from 'react';

interface ResumeSectionProps {
  value: ResumeSectionType;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ value }) => {
  useEffect(() => {
    AOS.refresh();
  }, [value]);

  if (!value) return null;

  return (
    <section className="resume" id="resume">
      <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
        <h3 data-aos="fade-up" data-aos-delay="100">
          {value.sectionTitle}
        </h3>
        <ResumeContentList resumeData={value.items || []} />
      </div>
    </section>
  );
};

export default ResumeSection;
