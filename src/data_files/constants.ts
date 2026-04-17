import ogImageSrc from '@images/social.png';
import client10 from '@images/clients/10.png';
import client3 from '@images/clients/3.png';
import client6 from '@images/clients/6.png';
import client8 from '@images/clients/8.png';

export const SITE = {
  title: 'ScrewFast',
  tagline: 'Top-quality Hardware Tools',
  description:
    'ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.',
  description_short:
    'ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.',
  url: 'https://screwfast.uk',
  author: 'Emil Gulamov',
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
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Hardware Tools & Construction Services`,
  description:
    "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
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
