import Image from 'next/image';

type TestimonialCardProps = {
  text: string;
  name: string;
  designation: string;
  image: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  designation,
  image,
}) => {
  return (
    <div className="flex flex-col justify-between h-full rounded-3xl bg-[#1b1b1b] px-8 py-10 text-gray-400">
      {/* Text */}
      <p className="text-base leading-relaxed">{text}</p>

      {/* Profile */}
      <div className="flex items-center gap-4 mt-5">
        <div className="h-15 w-15 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-white leading-tight text-[22px] ">
            {name}
          </p>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
