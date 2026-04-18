import { notFound } from 'next/navigation';
import { PresentationFlow } from '@/src/app/components/PresentationFlow';

type PageProps = {
  params: Promise<{ type: string }>;
};

export default async function TypePage({ params }: PageProps) {
  const { type } = await params;

  if (type !== 'author' && type !== 'org') {
    notFound();
  }

  return <PresentationFlow type={type} />;
}
