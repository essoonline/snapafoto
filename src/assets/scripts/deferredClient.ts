type RequestIdleCallbackFn = (
  callback: () => void,
  options?: { timeout: number }
) => number;

const requestIdle = (window as Window & { requestIdleCallback?: RequestIdleCallbackFn })
  .requestIdleCallback;

const runWhenIdle = (callback: () => void, timeout: number) => {
  if (typeof requestIdle === 'function') {
    requestIdle(callback, { timeout });
  } else {
    setTimeout(callback, 0);
  }
};

function initNavbarCollapse(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-nav-toggle]').forEach((button) => {
    if (button.dataset.navReady === 'true') return;
    button.dataset.navReady = 'true';

    const panelId = button.getAttribute('aria-controls');
    if (!panelId) return;

    const panel = document.getElementById(panelId);
    if (!panel) return;

    const openIcon = button.querySelector<SVGElement>('[data-nav-icon="open"]');
    const closeIcon = button.querySelector<SVGElement>('[data-nav-icon="close"]');

    const setOpen = (open: boolean) => {
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('hidden', !open);
      openIcon?.classList.toggle('hidden', open);
      closeIcon?.classList.toggle('hidden', !open);
    };

    button.addEventListener('click', () => {
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    setOpen(false);
  });
}

initNavbarCollapse();

let prelinePromise: Promise<void> | null = null;

const hasPrelineTargets = () =>
  Boolean(
    document.querySelector(
      '.hs-collapse-toggle:not(.--prevent-on-load-init), .hs-dropdown:not(.--prevent-on-load-init), .hs-accordion:not(.--prevent-on-load-init)'
    )
  );

const loadPreline = () => {
  if (!hasPrelineTargets()) return Promise.resolve();

  if (!prelinePromise) {
    prelinePromise = import('@scripts/prelineLite.js')
      .then(({ initPrelineLite }) => initPrelineLite())
      .catch(() => {
        prelinePromise = null;
      });
  }

  return prelinePromise;
};

const loadWebMcp = () => {
  if (!('modelContext' in document)) return;
  void import('@scripts/webmcpTools.ts');
};

const loadLenis = async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(min-width: 1024px)').matches) return;
  await import('@scripts/lenisSmoothScroll.js');
};

const loadOnInteraction = () => {
  void loadPreline();
  loadWebMcp();
};

window.addEventListener('pointerdown', loadOnInteraction, { once: true, passive: true });
window.addEventListener('keydown', loadOnInteraction, { once: true });

runWhenIdle(() => {
  void loadLenis();
}, 2500);

export {};
