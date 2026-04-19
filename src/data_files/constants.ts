import ogImageSrc from '@images/social.webp';
import client10 from '@images/clients/10.webp';
import client3 from '@images/clients/3.webp';
import client6 from '@images/clients/6.webp';
import client8 from '@images/clients/8.webp';

export const SITE = {
  title: 'SNAP a FOTO',
  tagline: 'โฟโต้บูธและตู้ถ่ายรูป สำหรับงานแต่งงานและอีเว้นท์',
  description: 'SNAP a FOTO บริการเช่าโฟโต้บูธและตู้ถ่ายรูปสำหรับงานแต่ง อีเว้นท์ ปาร์ตี้ ถ่ายไม่อั้น ปริ้นรูปไม่จำกัด กล้อง DSLR คมชัด แชร์โซเชียลได้ทันที',
  description_short: 'SNAP a FOTO เช่าโฟโต้บูธงานแต่ง อีเว้นท์ ถ่ายไม่อั้น ปริ้นรูปไม่จำกัด พร้อมพร็อพและกรอบรูปออกแบบเอง',
  url: 'https://snapafoto.com',
  author: 'Worawuth S.',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'th_TH',
  type: 'website',
  url: SITE.url,
  title: SITE.title,
  description: SITE.description,
  image: ogImageSrc,
};

export const partnersData = [
  {
    imageSrc: client10.src,
    alt: 'OTANI logo',
    name: 'OTANI',
    href: '#',
  },
  {
    imageSrc: client3.src,
    alt: 'Tiger logo',
    name: 'Tiger',
    href: '#',
  },
  {
    imageSrc: client6.src,
    alt: 'SCG logo',
    name: 'SCG',
    href: '#',
  },
  {
    imageSrc: client8.src,
    alt: 'Lays logo',
    name: 'Lays',
    href: '#',
  },
];
