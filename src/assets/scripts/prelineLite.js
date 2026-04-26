const HAS_PRELINE_TARGETS = {
  accordion: '.hs-accordion:not(.--prevent-on-load-init)',
  collapse: '.hs-collapse-toggle:not(.--prevent-on-load-init)',
  dropdown: '.hs-dropdown:not(.--prevent-on-load-init)',
  tabs: '[role="tablist"]:not(select):not(.--prevent-on-load-init)',
};

export const initPrelineLite = async () => {
  const tasks = [];

  if (document.querySelector(HAS_PRELINE_TARGETS.accordion)) {
    tasks.push(
      import('preline/dist/accordion.js').then(({ default: HSAccordion }) => {
        HSAccordion.autoInit();
      })
    );
  }

  if (document.querySelector(HAS_PRELINE_TARGETS.collapse)) {
    tasks.push(
      import('preline/dist/collapse.js').then(({ default: HSCollapse }) => {
        HSCollapse.autoInit();
      })
    );
  }

  if (document.querySelector(HAS_PRELINE_TARGETS.dropdown)) {
    tasks.push(
      import('preline/dist/dropdown.js').then(({ default: HSDropdown }) => {
        HSDropdown.autoInit();
      })
    );
  }

  if (document.querySelector(HAS_PRELINE_TARGETS.tabs)) {
    tasks.push(
      import('preline/dist/tabs.js').then(({ default: HSTabs }) => {
        HSTabs.autoInit();
      })
    );
  }

  if (!tasks.length) return;
  await Promise.all(tasks);
};
