import Image from 'next/image';
import playButton from '../../../public/assets/icons/play-button.svg';
import SecurityIcon from '../../../public/assets/icons/security.svg';

const features = [
  {
    title: 'Safe Traveling',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    icon: SecurityIcon,
  },
  {
    title: 'Affordable Price',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    icon: SecurityIcon,
  },
  {
    title: 'Comfort Accommodation',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    icon: SecurityIcon,
  },
];

const videoCards = [
  {
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada',
    alt: 'Temple',
  },
  {
    src: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    alt: 'Market',
  },
];

const ExperienceAdventure = () => {
  return (
    <section className="w-full bg-white my-30">
      <div className="wrapper mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-5">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-5xl text-black">
            Experience The <br /> New Adventure
          </h3>
          <p className="mt-5 max-w-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="mt-7 space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                <figure className="flex h-12 w-22 items-center justify-center rounded-full bg-black text-white mt-[6px]">
                  <Image
                    src={item.icon.src}
                    alt="icon"
                    width={28}
                    height={28}
                  />
                </figure>
                <div>
                  <h4 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative lg:col-span-3 overflow-hidden rounded-3xl h-[570px]">
          {/* Main Image */}
          <figure className="h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Adventure"
              fill
              className="object-cover"
            />
          </figure>

          {/* VIDEO CARDS */}
          <div className="absolute transform -translate-x-1/2 left-1/2 bottom-5 flex gap-5 w-full z-10 px-5 justify-end">
            {videoCards.map((card, index) => (
              <div
                key={index}
                className="relative w-[39%] overflow-hidden rounded-3xl h-39 border-13 border-[#ffffff2b]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="rounded-full bg-white p-3">
                    <Image
                      src={playButton.src}
                      alt="Play Button"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAdventure;
