import {
  PortableText as BasePortableText,
  PortableTextComponents,
} from '@portabletext/react';
import { TypedObject } from '@portabletext/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-us-section';
import KeySkillsSection from '@/components/sections/key-skills-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectSection from '@/components/sections/project-section';
import ResumeSection from '@/components/sections/resume-section';
import ContactSection from '@/components/sections/contactSection';
import ReviewSection from '@/components/sections/review-section';
import Link from 'next/link';

const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      return (
        <Link href={value.url} passHref>
          {children}
        </Link>
      );
    },
    highlight: ({ children }) => <mark>{children}</mark>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Image'}
          width={400}
          height={400}
          className="mb-4"
        />
      );
    },
    heroSection: ({ value }) => <HeroSection value={value} />,
    aboutSection: ({ value }) => <AboutSection value={value} />,
    skillSection: ({ value }) => <KeySkillsSection value={value} />,
    skillProficiencySection: ({ value }) => <SkillsSection value={value} />,
    reviewsSection: ({ value }) => <ReviewSection value={value} />,
    projectSection: ({ value }) => <ProjectSection value={value} />,
    resumeSection: ({ value }) => <ResumeSection value={value} />,
    contactSection: ({ value }) => <ContactSection value={value} />,
    // ctaObject: ({ value }: { value: CtaObject }) => {
    //   // If no type is defined, don't render anything
    //   if (!value.type) return null;

    //   // Determine the URL for the link
    //   const href = urlForLink(value as CtaObject);

    //   // If no URL could be determined, don't render anything
    //   if (!href) return null;

    //   // Determine if the link should open in a new tab
    //   const isExternal = value.type === 'external';
    //   const target = isExternal ? '_blank' : '_self';
    //   const rel = isExternal ? 'noopener noreferrer' : undefined;

    //   // Map CTA style to button variant
    //   const buttonVariant = value.style === 'primary' ? 'default' : 'link';

    //   return (
    //     <div>
    //       <Link
    //         href={href}
    //         target={target}
    //         rel={rel}
    //         passHref
    //         className={cn('my-5', buttonVariants({ variant: buttonVariant }))}>
    //         {value.text}
    //       </Link>
    //     </div>
    //   );
    // },
  },
};

export function PortableText({
  value,
}: {
  value: TypedObject[] | TypedObject;
}) {
  return <BasePortableText value={value} components={components} />;
}
