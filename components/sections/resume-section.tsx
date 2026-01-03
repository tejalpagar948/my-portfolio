import React from 'react';
import ResumeContentList from '../resume-content-list';
import { ResumeSection as ResumeSectionType } from '@/sanity.types';

interface ResumeSectionProps {
  value: ResumeSectionType;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ value }) => {
  if (!value) return null;
  return (
    <section className="resume" id="resume">
      <div className="wrapper">
        <h3 className="">{value.sectionTitle}</h3>
        <ResumeContentList resumeData={value.items || []} />
      </div>
    </section>
  );
};

export default ResumeSection;
