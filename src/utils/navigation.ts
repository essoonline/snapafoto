// An array of links for navigation bar
const navBarLinks = [
  { name: 'โฟโต้บูธ', url: '/' },
  //{ name: 'ตู้สติกเกอร์', url: '/sticker-booth' },
  { name: '360 องศา', url: '/360' },
  { name: 'วีดีโออวยพร', url: '/guestbook' },
  { name: 'AI Photobooth', url: 'https://ai.snapafoto.com' },
  //{ name: 'ฉากหลัง', url: '/backdrop' },
  //{ name: 'Services', url: '/services' },
  { name: 'ติดต่อเรา', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Our Services',
    links: [
      { name: 'โฟโต้บูธ', url: '/' },
      { name: 'AI Photobooth', url: 'https://ai.snapafoto.com' },
      { name: '360 องศา', url: '/360' },
      { name: 'วีดีโออวยพร', url: '/guestbook' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'Contact', url: '/contact' },
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
