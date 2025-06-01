import React from 'react';
import SocialMediaIcons from './social-media-icons';
import Button from './button';
import Image from 'next/image';

interface ContactSectionProps {
}

const ContactSection: React.FC<ContactSectionProps> = ({
}) => {
  const formFields = [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Your Name",
      spanClass: "name-span"
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Your Email",
      spanClass: "email-span"
    },
    {
      id: "subject",
      name: "subject",
      type: "text",
      placeholder: "Your Subject",
      spanClass: "subject-span"
    },
    {
      id: "message",
      name: "message",
      type: "textarea",
      placeholder: "Your Message",
      spanClass: "message-span",
      rows: 10,
      cols: 20
    }
  ];

  const infoList = [
    {
      icon: "./assets/icons/phone.svg",
      iconAlt: "",
      heading: "Email",
      info: [
        "devis@example.com",
        "devis@example.com"
      ]
    },
    {
      icon: "./assets/icons/phone.svg",
      iconAlt: "",
      heading: "Email",
      info: [
        "devis@example.com",
        "devis@example.com"
      ]
    }
  ];
  
  
  return (
    <section className="contact-me">
    <div className="wrapper pb-24">
      <h3 className="">Contact me</h3>
      <div className="contact-me-content flex gap-7">
      <div className="contact-form w-1/2">
        <h4>Just say Hello</h4>
        <form action="#FIXME" className="flex flex-col gap-7 mt-5">
        {formFields.map((field) => (
        <div className={field.name} key={field.id}>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              className={`bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5`}
              rows={field.rows}
              cols={field.cols}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              className={`bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5`}
            />
          )}
          <span className={field.spanClass}></span>
        </div>
      ))}
          <Button/>
        </form>
      </div>
      <div className="contact-info w-1/2 flex flex-col gap-4">
        <h4>Contact Info</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, laudantium.</p>
        <ul className="info-list">
        {infoList.map((item,index)=>(
          <li key={index} className="info-list-item flex gap-5">
            <Image
            src={item.icon}
            alt={item.iconAlt}
            width="20"
            height="20"
            className="rounded-full w-11 h-11 border border-custom-grayish-blue py-2 px-3"/>
            <div className="info-content flex flex-col">
              <h6 className="mb-1">{item.heading}</h6>
              <span className="info leading-6">{item.info[0]}</span>
              <span className="info leading-6">{item.info[1]}</span>
            </div>
          </li>
         ))}  
        </ul>
        <div className="social-media pt-6 px-0 pb-5">
        <span className="optional-para text-xl text-custom-light-gray">Visite my social profile and get connected</span>
        <SocialMediaIcons/>
      </div>
      </div>
    </div>
    </div>
  </section>
  );
};

export default ContactSection;
