// An array of links for navigation bar
const navBarLinks = [
  { name: 'โฟโต้บูธ', url: '/' },
  { name: '360 องศา', url: '/360' },
  { name: 'วีดีโออวยพร', url: '/guestbook' },
  { name: 'AI Photobooth', url: '/ai-photobooth' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Construction Services', url: '/services' },
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
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
