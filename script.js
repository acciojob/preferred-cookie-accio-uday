//your JS code here. If required.
function setCookie(name, value, days = 365) {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
	return document.cookie.split('; ').reduce((r, v) => {
		const [key, val] = v.split('=');
		return key === name ? decodeURIComponent(val) : r;
	}, '');
}

function applyPreferences() {
	const savedSize = getCookie('fontsize');
	const savedColor = getCookie('fontcolor');

	if (savedSize) {
		document.documentElement.style.setProperty('--fontsize', `${savedSize}px`);
		document.getElementById('fontsize').value = savedSize;
	}
	if (savedColor) {
		document.documentElement.style.setProperty('--fontcolor', savedColor);
		document.getElementById('fontcolor').value = savedColor;
	}
}

document.getElementById('settingsForm').addEventListener('submit', function (e) {
	e.preventDefault();

	const fontSize = document.getElementById('fontsize').value;
	const fontColor = document.getElementById('fontcolor').value;

	setCookie('fontsize', fontSize);
	setCookie('fontcolor', fontColor);

	document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
	document.documentElement.style.setProperty('--fontcolor', fontColor);
});

//
applyPreferences();