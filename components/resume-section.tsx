import React from 'react';
import ResumeContentList from './resume-content-list';

interface ResumeSectionProps {
}

const ResumeSection: React.FC<ResumeSectionProps> = ({
}) => {
  return (
    <section className="resume pb-24">
      <div className="wrapper">
        <h3 className="">Resume</h3>
        <div className="resume-content flex gap-6">
        <ResumeContentList/>
        <ResumeContentList/>
      </div>
      </div>
    </section>
  );
};

export default ResumeSection;