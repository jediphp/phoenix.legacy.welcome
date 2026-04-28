import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PresentationFlow } from '@/src/app/components/PresentationFlow';
import { getSiteUrl } from '@/src/lib/site';

type PageProps = {
  params: Promise<{ type: string }>;
};

const baseDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  'Платформа для исторической реконструкции изображений и сохранения культурного наследия, ИИ-реконструкции.';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { type } = await params;

  if (type !== 'author' && type !== 'org') {
    return {};
  }

  const base = getSiteUrl();

  if (type === 'author') {
    const title = 'Авторский сценарий';
    const description =
      'Презентация для авторов: публикация исторических реконструкций, оценка сообщества и развитие в нише. ' +
      baseDescription;

    return {
      title,
      description,
      alternates: {
        canonical: '/author',
      },
      openGraph: {
        url: new URL('/author', base).href,
        title: `${title} · Феникс.Наследие`,
        description,
      },
      twitter: {
        title: `${title} · Феникс.Наследие`,
        description,
      },
    };
  }

  const title = 'Сценарий для организаций';
  const description =
    'Презентация для музеев и институтов: качество материалов, форматы и сотрудничество с платформой. ' +
    baseDescription;

  return {
    title,
    description,
    alternates: {
      canonical: '/org',
    },
    openGraph: {
      url: new URL('/org', base).href,
      title: `${title} · Феникс.Наследие`,
      description,
    },
    twitter: {
      title: `${title} · Феникс.Наследие`,
      description,
    },
  };
}

export default async function TypePage({ params }: PageProps) {
  const { type } = await params;

  if (type !== 'author' && type !== 'org') {
    notFound();
  }

  return <PresentationFlow type={type} />;
}
