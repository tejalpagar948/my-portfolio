"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Feedback {
  id: number;
  name: string;
  subject: string;
  message: string;
  created_at: string;
}

const FeedbackDisplay: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('id, name, subject, message, created_at')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedback:', error);
      } else {
        setFeedbacks(data || []);
      }
      setLoading(false);
    };

    fetchFeedbacks();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading feedback...</div>;
  }

  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No feedback yet. Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{feedback.subject}</h3>
            <p className="text-gray-700 mb-4 italic">"{feedback.message}"</p>
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-900">— {feedback.name}</p>
              <span className="text-sm text-gray-500">
                {new Date(feedback.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackDisplay;