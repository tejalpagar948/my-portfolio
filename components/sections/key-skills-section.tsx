import React from 'react';
import KeySkillsCard from './key-skills-card';

interface KeySkillsSectionProps {}

const KeySkillsSection: React.FC<KeySkillsSectionProps> = ({}) => {
  return (
    <section className="key-skills">
      <div className="wrapper">
        <h3 className="all-caps">key skills</h3>
        <KeySkillsCard />
      </div>
    </section>
  );
};

export default KeySkillsSection;
