import ReviewPeople from '@/components/review-people';

export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  const token = params?.token;

  return <ReviewPeople token={token} />;
}
