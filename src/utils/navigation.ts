// An array of links for navigation bar
const navBarLinks = [
  { name: 'โฟโต้บูธ', url: '/' },
  //{ name: 'ตู้สติกเกอร์', url: '/sticker-booth' },
  { name: '360 องศา', url: '/360' },
  { name: 'วีดีโออวยพร', url: '/guestbook' },
  //{ name: 'AI Photobooth', url: '/ai-photobooth' },
  //{ name: 'ฉากหลัง', url: '/backdrop' },
  //{ name: 'Services', url: '/services' },
  { name: 'ติดต่อเรา', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'บริการของเรา',
    links: [
      { name: '360 Photo Booth', url: '/360' },
      { name: 'วีดีโออวยพร', url: '/guestbook' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '#' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/snapafoto',
  x: 'https://twitter.com/',
  github: 'https://github.com/',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
