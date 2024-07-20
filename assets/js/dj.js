$(document).ready(function () {
	// If audio source is off, say we're offline
	fetch(AUDIO_SOURCE).catch(function (err) {
		console.error(err);
		window.location.replace('offline.html');
	});

	var audio = document.getElementById('audio');
	audio.crossOrigin = 'anonymous';
	audio.src = AUDIO_SOURCE;

	// Update initial listeners
	updateListeners();

	// Set random background
	updateBackgroundImage();

	// Update listeners every 5s
	window.setInterval(updateListeners, 5000);
});

function updateListeners() {
	// Update listeners
	fetch(STATS_SOURCE)
		.then((response) => response.json())
		.then((data) => {
			var listeners = document.getElementById('listeners');
			listeners.innerHTML = 'Listeners: ' + data.icestats.source.listeners;
		})
		.catch((err) => {
			console.log(err);
		});
}

function updateBackgroundImage() {
	let idx = Math.floor(Math.random() * 10);
	let div = document.getElementById('div');
	div.style.backgroundImage =
		'url(' + "'../assets/images/ghibli/" + idx + ".gif')";
}
