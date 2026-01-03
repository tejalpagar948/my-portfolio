'use client';
import React, { use } from 'react';
import KeySkillsCard from './key-skills-card';
import type { SkillSection as SkillSectionType } from '@/sanity.types';
import AOS from 'aos';
import { useEffect } from 'react';

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
      <div className="wrapper">
        <h3 className="all-caps" data-aos="fade-up" data-aos-delay="100">
          {value?.sectionTitle}
        </h3>
        <KeySkillsCard skills={value?.skills || []} />
      </div>
    </section>
  );
};

export default KeySkillsSection;
