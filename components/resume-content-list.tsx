import React from 'react';
import Image from 'next/image';

interface ResumeContentListProps {}

const ResumeContentList: React.FC<ResumeContentListProps> = () => {
  const resumeData = [
    {
      sectionTitle: "Experience",
      icon: "./assets/icons/coding.svg",
      items: [
        {
          title: "Senior UX/UI Designer",
          period: "Jan 2020 - Present",
          organisation: "Bergnaum, Hills and Howe",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam optio culpa.",
        },
        {
          title: "Lead Developer",
          period: "Feb 2018 - Dec 2019",
          organisation: "Some Company",
          description:
            "Led the development team to build scalable web apps.",
        },
      ],
    },
    {
      sectionTitle: "Education",
      icon: "./assets/icons/graduation-cap.svg",
      items: [
        {
          title: "Bachelor of Science in Computer Science",
          period: "2014 - 2018",
          organisation: "University of Example",
          description:
            "Graduated with honors focusing on software engineering.",
        },
      ],
    },
  ];

  return (
    <div className="resume-left w-1/2 flex flex-col gap-10">
      {resumeData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="resume-caption flex gap-7">
            <Image
              src={item.icon}
              alt={item.sectionTitle + " icon"}
              width={20}
              height={20}
              className="w-12"
            />
            <h4 className="">{item.sectionTitle}</h4>
          </div>
          <ul className="resume-content-list mt-6 mx-5 mb-0">
            {item.items.map((inneritem) => (
              <li
                key={inneritem.title}
                className="resume-content-list-item pt-[1px] px-10 pb-12 flex flex-col gap-3 border-l-[1.5px] border-custom-grayish-blue relative"
              >
                <h5 className="text-xl mt-[-20px]">{inneritem.title}</h5>
                <span className="period text-[#a9adb8] text-base">
                  {inneritem.period}
                </span>
                <span className="organisation text-xl py-2.5 px-0">
                  {inneritem.organisation}
                </span>
                <p>{inneritem.description}</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResumeContentList;
