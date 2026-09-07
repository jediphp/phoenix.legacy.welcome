import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PresentationFlow } from '@/src/app/components/PresentationFlow';
import { GettingStartedFlow } from '@/src/app/components/getting-started/GettingStartedFlow';
import { getSiteUrl } from '@/src/lib/site';

export function generateStaticParams() {
  return ['author', 'org', 'start'].map((type) => ({ type }));
}

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

  if (type !== 'author' && type !== 'org' && type !== 'start') {
    return {};
  }

  const base = getSiteUrl();

  if (type === 'start') {
    const title = 'С чего начать';
    const description =
      'Пошаговая инструкция: выберите исторический оригинал в разделе «Исследовать», сделайте реконструкцию в ИИ-сервисе и загрузите результат на платформу. ' +
      baseDescription;

    return {
      title,
      description,
      alternates: { canonical: '/start' },
      openGraph: {
        url: new URL('/start', base).href,
        title: `${title} · Феникс.Наследие`,
        description,
      },
      twitter: {
        title: `${title} · Феникс.Наследие`,
        description,
      },
    };
  }

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

  if (type !== 'author' && type !== 'org' && type !== 'start') {
    notFound();
  }

  if (type === 'start') {
    return <GettingStartedFlow />;
  }

  return <PresentationFlow type={type} />;
}
