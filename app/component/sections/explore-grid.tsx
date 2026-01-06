import Image from 'next/image';
import ArrowTopRight from '../../../public/assets/icons/arrow-top-right.svg';
import Link from 'next/link';

type ExploreItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  wrapperClass?: string;
};

const exploreData: ExploreItem[] = [
  {
    id: 1,
    title: 'Kelingking Beach',
    subtitle: 'Nusa Penida, Bali',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b',
    wrapperClass: 'md:row-span-2', // tall
  },
  {
    id: 2,
    title: 'Grand Palace',
    subtitle: 'Bangkok, Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    wrapperClass: 'md:h-[280px]', // slightly smaller
  },
  {
    id: 3,
    title: 'Cappadocia',
    subtitle: 'Turkey',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    wrapperClass: 'md:h-[280px]', // slightly smaller
  },
  {
    id: 4,
    title: 'Padar Island',
    subtitle: 'East Nusa Tenggara',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    wrapperClass: 'md:col-span-2 md:h-[400px]', // a little larger
  },
];

const Card = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) => {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <p className="text-white/80 text-sm mt-1">{subtitle}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm">
          <Image
            src={ArrowTopRight.src}
            alt="Arrow Right"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default function ExploreGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-30">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-11">
        {exploreData.map((item) => (
          <div key={item.id} className={item.wrapperClass ?? ''}>
            <Link href="./" className="" target="_self">
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
