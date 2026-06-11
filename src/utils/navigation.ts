export const productLinks = [
  { name: 'AI Faceswap', url: 'https://ai.snapafoto.com' },
  { name: 'AI Photobooth', url: 'https://photobooth.snapafoto.com' },
];

export const productNavLabel = 'Product';

export type NavBarLink = { name: string; url: string };

// An array of links for navigation bar
const navBarLinks: NavBarLink[] = [
  { name: 'Photobooth', url: '/' },
  //{ name: 'ตู้สติกเกอร์', url: '/sticker-booth' },
  { name: '360 VDO Booth', url: '/360' },
  { name: 'Video Guestbook', url: '/guestbook' },
  { name: 'AI Photobooth', url: '/ai-photobooth' },
  //{ name: 'ฉากหลัง', url: '/backdrop' },
  //{ name: 'Services', url: '/services' },
  { name: 'Contact Us', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Our Services',
    links: [
      { name: 'Photobooth', url: '/' },
      ...productLinks,
      { name: '360 VDO Booth', url: '/360' },
      { name: 'Video Guestbook', url: '/guestbook' },
      { name: 'AI Photobooth', url: '/ai-photobooth' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'Contact Us', url: '/contact' },
      {
        name: 'Reviews',
        url: 'https://www.facebook.com/snapafoto/reviews',
      },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  email: 'mailto:snapafoto@yahoo.com',
  instagram: 'https://www.instagram.com/snapafoto.th/',
  youtube: 'https://www.youtube.com/@snapafoto-xt1',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
