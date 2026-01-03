import React from 'react';
import KeySkillsCard from './key-skills-card';
import type { SkillSection as SkillSectionType } from '@/sanity.types';

type SkillItem = {
  _id: string;
  title?: string;
  description?: string;
  icon?: any;
};

type SkillSectionUI = {
  sectionTitle?: string;
  skills: SkillItem[];
};

interface KeySkillsSectionProps {
  value: SkillSectionUI;
}

const KeySkillsSection: React.FC<KeySkillsSectionProps> = ({ value }) => {
  return (
    <section className="key-skills">
      <div className="wrapper">
        <h3 className="all-caps">{value?.sectionTitle}</h3>
        <KeySkillsCard skills={value?.skills || []} />
      </div>
    </section>
  );
};

export default KeySkillsSection;
