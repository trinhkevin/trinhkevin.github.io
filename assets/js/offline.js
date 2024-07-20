document.addEventListener('DOMContentLoaded', function (event) {
	// If audio source is on, say we're load online
	fetch(AUDIO_SOURCE)
		.then(function (data) {
			window.location.replace('index.html');
		})
		.catch(function (err) {
			console.error(err);
		});

	updateBackgroundImage();
});

function updateBackgroundImage() {
	let idx = Math.floor(Math.random() * 10);
	let div = document.getElementById('div');
	div.style.backgroundImage =
		'url(' + "'../assets/images/ghibli/" + idx + ".gif')";
}
