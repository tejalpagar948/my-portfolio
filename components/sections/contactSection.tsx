"use client";
import React, { useEffect, useState } from "react";
import SocialMediaIcons from '../social-media-icons';
import Button from '../button';
import Image from 'next/image';

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const formFields = [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Your Name",
      spanClass: "name-span",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Your Email",
      spanClass: "email-span",
    },
    {
      id: "subject",
      name: "subject",
      type: "text",
      placeholder: "Your Subject",
      spanClass: "subject-span",
    },
    {
      id: "message",
      name: "message",
      type: "textarea",
      placeholder: "Your Message",
      spanClass: "message-span",
      rows: 10,
      cols: 20,
    },
  ];

  const infoList = [
    {
      icon: "./assets/icons/phone.svg",
      iconAlt: "",
      heading: "Email",
      info: ["devis@example.com", "devis@example.com"],
    },
    {
      icon: "./assets/icons/phone.svg",
      iconAlt: "",
      heading: "Email",
      info: ["devis@example.com", "devis@example.com"],
    },
  ];

  // ✅ Initialize state keys from formFields
  useEffect(() => {
    let init: Record<string, string> = {};
    formFields.forEach((f) => {
      init[f.name] = "";
    });
    setFormData(init);
  }, []);

  // ✅ handleChange works for both input + textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const webAppUrl =
      "https://script.google.com/macros/s/AKfycbyn6Bgd3AzUtrhOWMNQiiU3ORYlnKlq00BUOFgGL4Poj6gc4CoChtR2t340XHBS4wIGJg/exec"; // replace with your URL
  
    try {  
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      

      const json = await res.json();
      if (json.status === "success") {
        alert("Saved to Google Sheet ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error: " + JSON.stringify(json));
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Submit failed — check console. (CORS?)");
    }
  };
  

  return (
    <section className="contact-me" id="contact">
      <div className="wrapper pb-24">
        <h3 className="">Contact me</h3>
        <div className="contact-me-content flex flex-col md:flex-row gap-13">
          <div className="contact-form w-full md:w-1/2">
            <h4>Just say Hello</h4>

            {/* ✅ fixed form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-5">
              {formFields.map((field) => (
                <div className={field.name} key={field.id}>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      cols={field.cols}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5"
                    />
                  )}
                  <span className={field.spanClass}></span>
                </div>
              ))}
            <button
                type="submit"
                className="capitalize bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl"
              >Submit
            </button>
            </form>
          </div>

          {/* right side contact info */}
          <div className="contact-info w-full md:w-1/2 flex flex-col gap-4">
            <h4>Contact Info</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, laudantium.
            </p>
            <ul className="info-list flex flex-col gap-5">
              {infoList.map((item, index) => (
                <li key={index} className="info-list-item flex gap-5">
                  <Image
                    src={item.icon}
                    alt={item.iconAlt}
                    width={20}
                    height={20}
                    className="rounded-full w-11 h-11 border border-custom-grayish-blue py-2 px-3"
                  />
                  <div className="info-content flex flex-col">
                    <h6 className="mb-1">{item.heading}</h6>
                    <span className="info leading-6 text-custom-light-gray">
                      {item.info[0]}
                    </span>
                    <span className="info leading-6 text-custom-light-gray">
                      {item.info[1]}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="social-media pt-6 px-0 pb-5">
              <span className="optional-para text-xl text-custom-light-gray">
                Visit my social profile and get connected
              </span>
              <SocialMediaIcons
                className={`pt-6 px-0 pb-5`}
                childClassName={`w-[10%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
