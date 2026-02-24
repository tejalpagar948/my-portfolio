'use client';

import FeedbackForm from '@/components/feedback';
import { useSession, signIn } from 'next-auth/react';

interface ReviewPeopleProps {
  token?: string;
}

export default function ReviewPeople({ token }: ReviewPeopleProps) {
  const { data: session } = useSession();

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Invalid Link</h1>
          <p className="text-gray-400">
            This review link is invalid or expired.
          </p>
        </div>
      </div>
    );
  }

  if (session) {
    return <FeedbackForm />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex items-center justify-center bg-[#0a101e]">
        <div className="bg-[#121826] p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Welcome</h1>
          <p className="text-gray-300 mb-8">Please sign in via Google</p>

          <button
            className="flex items-center justify-center w-full px-4 py-3 bg-[#fec544] text-[#0a101e] font-semibold rounded-lg shadow-md hover:brightness-110 transition-all mb-6 gap-1.5"
            onClick={() => signIn('google')}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
