import '@styles/lenis.css';

import Lenis from 'lenis';

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
document.documentElement.classList.add('lenis', 'lenis-smooth');

new Lenis({
  autoRaf: true,
});
