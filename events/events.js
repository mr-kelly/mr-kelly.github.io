(() => {
  const buttons = Array.from(document.querySelectorAll('[data-filter]'));
  const events = Array.from(document.querySelectorAll('[data-event]'));
  const count = document.querySelector('[data-result-count]');
  const validFilters = new Set(buttons.map((button) => button.dataset.filter));

  function applyFilter(filter, updateUrl = true) {
    const selected = validFilters.has(filter) ? filter : 'all';
    let visible = 0;

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === selected));
    });

    events.forEach((event) => {
      const matches = selected === 'all' || event.dataset.type.split(' ').includes(selected);
      event.hidden = !matches;
      if (matches) visible += 1;
    });

    document.querySelectorAll('[data-year-group]').forEach((group) => {
      group.hidden = !group.querySelector('[data-event]:not([hidden])');
    });

    if (count) count.textContent = count.dataset.template.replace('{count}', visible);
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (selected === 'all') url.searchParams.delete('type');
      else url.searchParams.set('type', selected);
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    }
  }

  buttons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  applyFilter(new URLSearchParams(window.location.search).get('type') || 'all', false);
})();
