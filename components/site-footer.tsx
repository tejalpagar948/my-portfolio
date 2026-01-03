import React from 'react';
import type { Footer } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
interface SiteFooterProps {
  value?: Footer | null;
}
const SiteFooter: React.FC<SiteFooterProps> = ({ value }) => {
  if (!value) return null;
  console.log('value in footer', value.content);
  return (
    <>
      {/* <!--footer section start--> */}
      <footer className="bg-custom-blue text-custom-white w-full text-center py-7">
        <div className="wrapper">
          <PortableText
            value={value.content ?? []}
            components={{
              marks: {
                normalSpan: ({ children }) => (
                  <span className="text-white">{children}</span>
                ),
              },
            }}
          />
        </div>
      </footer>
      {/* <!--footer section end--> */}
    </>
  );
};
export default SiteFooter;
