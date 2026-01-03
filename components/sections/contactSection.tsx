'use client';
import React, { useState } from 'react';
import SocialMediaIcons from '../social-media-icons';
import { ContactSection as ContactSectionType } from '@/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '../portable-text';
import AOS from 'aos';
import { useEffect } from 'react';

type ContactItemWithIcon = {
  label?: string;
  valuePrimary?: string;
  valueSecondary?: string;
  icon?: any;
};

type SocialLink = {
  platform?: string;
  url?: string;
  icon?: any;
};

type SocialItem = {
  socialTitle?: string;
  socialLinks?: SocialLink[];
};

type ContactWithContent = {
  _id?: string;
  title?: string;
  content?: any;
  contactItems?: ContactItemWithIcon[];
  socialTitle?: string;
  socialLinks?: SocialLink[];
};
interface ContactSectionProps {
  value?: ContactSectionType;
}

const ContactSection: React.FC<ContactSectionProps> = ({ value }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    resume: null as File | null,
    resumeBase64: '',
  });

  const formFields = [
    { id: 'name', name: 'name', type: 'text', placeholder: 'Your Name' },
    { id: 'email', name: 'email', type: 'email', placeholder: 'Your Email' },
    {
      id: 'subject',
      name: 'subject',
      type: 'text',
      placeholder: 'Your Subject',
    },
    {
      id: 'message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Your Message',
      rows: 10,
      cols: 20,
    },
    // { id: 'resume', name: 'resume', type: 'file', accept: '.pdf' },
  ];

  // Convert file to Base64
  const convertToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'resume' && e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0] || null;
      if (file) {
        const base64 = await convertToBase64(file);
        setFormData((prev) => ({
          ...prev,
          resume: file,
          resumeBase64: base64,
        }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        resumeBase64: formData.resumeBase64 || '',
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.status === 'success') {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          resume: null,
          resumeBase64: '',
        });
      } else {
        alert('Error: ' + JSON.stringify(json));
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Submit failed — check console.');
    }
  };

  useEffect(() => {
    AOS.refresh();
  }, [value]);

  return (
    <section className="contact-me" id="contact">
      <div className="wrapper">
        <h3 data-aos="fade-up" data-aos-delay="100">
          {value?.sectiontitle}
        </h3>
        <div className="contact-me-content flex flex-col md:flex-row gap-13">
          {/* Left side - Form */}
          <div
            className="contact-form w-full md:w-1/2"
            data-aos="fade-up"
            data-aos-delay="100">
            <h4>Just say Hello</h4>

            <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-5">
              {formFields.map((field) => (
                <div key={field.id}>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      cols={field.cols}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-3.5 md:py-4.5 px-5"
                    />
                  ) : field.type === 'file' ? (
                    <input
                      type="file"
                      id={field.id}
                      name={field.name}
                      // accept={field.accept}
                      onChange={handleChange}
                      className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-3.5 md:py-4.5 px-5"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-3.5 md:py-4.5 px-5"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="capitalize bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl">
                Submit
              </button>
            </form>
          </div>

          {/* Right side - Contact info */}
          {value?.contacts?.map((contactRef, index) => {
            const contact = contactRef as ContactWithContent;

            return (
              <div
                key={index}
                className="contact-info w-full md:w-1/2 flex flex-col gap-4"
                data-aos="fade-up"
                data-aos-delay="100">
                {/* Portable Text */}
                {contact.content && <PortableText value={contact.content} />}
                {/* Contact Items */}
                <ul className="info-list flex flex-col gap-5">
                  {contact?.contactItems?.map((contactItem, idx) => (
                    <li key={idx} className="info-list-item flex gap-5">
                      {contactItem?.icon && (
                        <Image
                          src={urlFor(contactItem.icon).url()}
                          alt={contactItem.label || 'icon'}
                          width={20}
                          height={20}
                          priority
                          unoptimized
                          className="rounded-full w-11 h-11 border border-custom-grayish-blue py-2 px-3"
                        />
                      )}
                      <div className="info-content flex flex-col">
                        <h6 className="mb-1">{contactItem?.label}</h6>
                        <span className="info leading-6 text-custom-light-gray">
                          {contactItem?.valuePrimary}
                        </span>
                        <span className="info leading-6 text-custom-light-gray">
                          {contactItem?.valueSecondary}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Social Items */}
                <div className="social-media pt-6 px-0 pb-5">
                  <span className="optional-para text-xl text-custom-light-gray">
                    {contact?.socialTitle}
                  </span>
                  <SocialMediaIcons
                    className={`pt-6 px-0 pb-5`}
                    childClassName={`w-auto md:w-[53px]`}
                    socialLinks={contact?.socialLinks || []}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
