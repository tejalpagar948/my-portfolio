import Button from '../button';
import DiscoverSectionTop from './discover-section-top';
import PortfolioGallery from './discover-section-middle';
import TestimonialCard from './discover-section-bottom';

const DiscoverSection = () => {
  return (
    <section className="w-full bg-[#0b0704]">
      <DiscoverSectionTop />
      <PortfolioGallery />
      <TestimonialCard />
    </section>
  );
};

export default DiscoverSection;
