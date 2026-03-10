'use client';
import React, { use } from 'react';
import KeySkillsCard from './key-skills-card';
import type { SkillSection as SkillSectionType } from '@/sanity.types';
import AOS from 'aos';
import { useEffect } from 'react';
import KeySkillsCardMobile from './key-skills-card-mobile';

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
  if (!value) return null;
  useEffect(() => {
    AOS.refresh();
  }, [value]);
  return (
    <section className="key-skills">
      <div className="wrapper !pb-0 md:!pb-10">
        <h3
          className="all-caps !mb-10 md:!mb-16"
          data-aos="fade-up"
          data-aos-delay="100">
          {value?.sectionTitle}
        </h3>
        <KeySkillsCard skills={value?.skills || []} />
        <KeySkillsCardMobile skills={value?.skills || []} />
      </div>
    </section>
  );
};

export default KeySkillsSection;
