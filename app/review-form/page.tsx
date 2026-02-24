import ReviewPeople from '@/components/review-people';

interface ReviewPageProps {
  searchParams: {
    token?: string;
  };
}

export default function ReviewPage({ searchParams }: ReviewPageProps) {
  const token = searchParams?.token;

  return <ReviewPeople token={token} />;
}
