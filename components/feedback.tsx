'use client';
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface FeedbackFormProps {
  onClose?: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: '',
    linkedin: '',
    approved: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1️⃣ Insert into Supabase
      const { error } = await supabase.from('feedback_data').insert([
        {
          name: formData.name,
          mail: formData.mail,
          msg: formData.message,
          designation: '',
          linkedin: formData.linkedin,
          approved: false,
        },
      ]);

      if (error) throw error;

      // 2️⃣ Insert into Sanity via server API
      const sanityResponse = await fetch('/api/submitReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.mail,
          message: formData.message,
          linkedin: formData.linkedin,
        }),
      });

      if (!sanityResponse.ok) throw new Error('Sanity submission failed');

      setSubmitStatus('success');

      // 3️⃣ Reset form
      setFormData({
        name: '',
        mail: '',
        message: '',
        linkedin: '',
        approved: false,
      });

      setTimeout(() => onClose?.(), 2000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wrapper bg-custom-blue py-10 rounded-2xl shadow-lg w-full lg:!w-4/12 z-100 relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl">
          ✕
        </button>
      )}

      <h3 className="text-xl font-bold text-white !mb-12">Feedback Form</h3>

      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Thank you for your feedback! It has been submitted successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          Something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5 text-white"
          required
        />

        <input
          type="email"
          name="mail"
          placeholder="Enter Email"
          value={formData.mail}
          onChange={handleChange}
          className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5 text-white"
          required
        />

        <input
          type="url"
          name="linkedin"
          placeholder="Enter LinkedIn Profile URL"
          value={formData.linkedin}
          onChange={handleChange}
          className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5 text-white"
        />

        <textarea
          name="message"
          placeholder="Enter your review"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-[#101624] w-full rounded-lg border border-custom-grayish-blue py-4.5 px-5 text-white"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`capitalize bg-custom-yellow text-custom-black py-3 px-12 rounded-4xl w-full font-medium ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
