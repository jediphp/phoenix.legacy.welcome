export type AiService = {
  id: string;
  title: string;
  url: string;
  logoPath: string;
  fallbackLogoUrl: string;
  description: string;
  order: number;
  isAvailableInRu: boolean;
};

export const AI_SERVICES: AiService[] = [
  {
    id: 'kandinsky',
    title: 'Kandinsky',
    url: 'https://www.sberbank.ru/ru/person/kandinsky',
    logoPath: '/images/newby-flow/ai-services/kandinsky.png',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=sberbank.ru&sz=128',
    description: 'Быстрые варианты',
    order: 10,
    isAvailableInRu: true,
  },
  {
    id: 'gigachat',
    title: 'GigaChat',
    url: 'https://giga.chat/',
    logoPath: '/images/newby-flow/ai-services/gigachat.svg',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=giga.chat&sz=128',
    description: 'Русские промпты',
    order: 20,
    isAvailableInRu: true,
  },
  {
    id: 'yandex-art',
    title: 'YandexART',
    url: 'https://ya.ru/ai/art',
    logoPath: '/images/newby-flow/ai-services/yandex-art.png',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=ya.ru&sz=128',
    description: 'Изображения и видео',
    order: 30,
    isAvailableInRu: true,
  },
  {
    id: 'shedevrum',
    title: 'Шедеврум',
    url: 'https://shedevrum.ai/',
    logoPath: '/images/newby-flow/ai-services/shedevrum.png',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=shedevrum.ai&sz=128',
    description: 'Простая генерация',
    order: 40,
    isAvailableInRu: true,
  },
  {
    id: 'neuro-holst',
    title: 'НейроХолст',
    url: 'https://neuro-holst.ru/',
    logoPath: '/images/newby-flow/ai-services/neuro-holst.svg',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=neuro-holst.ru&sz=128',
    description: 'Альтернативные модели',
    order: 50,
    isAvailableInRu: true,
  },
  {
    id: 'turbotext',
    title: 'TurboText',
    url: 'https://www.turbotext.ru/photo_ai',
    logoPath: '/images/newby-flow/ai-services/turbotext.svg',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=turbotext.ru&sz=128',
    description: 'Простая генерация',
    order: 60,
    isAvailableInRu: true,
  },
  {
    id: 'gemini-image',
    title: 'Gemini Image',
    url: 'https://gemini.google/overview/image-generation/',
    logoPath: '/images/newby-flow/ai-services/gemini.svg',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128',
    description: 'Точные правки',
    order: 70,
    isAvailableInRu: false,
  },
].sort((a, b) => a.order - b.order);
