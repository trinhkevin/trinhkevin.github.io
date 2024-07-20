const source = 'https://hlzyvkl-trinhke.us2.pitunnel.net';

var audioSource = source + '/rapi.mp3';
var statsSource = source + '/status-json.xsl';

var visualizerBarColor = 'rgb(211,211,211)';

$(document).ready(function () {
	// If audio source is off, say we're offline
	fetch(audioSource).catch(function (err) {
		window.location.replace('offline.html');
	});

	// Animation
	var canvas = document.getElementById('canvas');
	clicked = false;
	canvas.onclick = function () {
		if (clicked) {
			clicked = true;
			return;
		}
		var audio = document.getElementById('audio');
		audio.crossOrigin = 'anonymous';
		audio.src = audioSource;
		audio.play();

		audio.onplay = function () {
			var context = new (window.AudioContext || window.webkitAudioContext)();
			var src = context.createMediaElementSource(audio);
			var analyser = context.createAnalyser();
			var canvas = document.getElementById('canvas');
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			var ctx = canvas.getContext('2d');

			src.connect(analyser);
			analyser.connect(context.destination);
			analyser.fftSize = 256;

			var bufferLength = analyser.frequencyBinCount;
			var dataArray = new Uint8Array(bufferLength);
			var WIDTH = canvas.width;
			var HEIGHT = canvas.height;
			var barWidth = (WIDTH / bufferLength) * 2.5;
			var barHeight;
			var x = 0;

			function renderFrame() {
				requestAnimationFrame(renderFrame);
				x = 0;
				analyser.getByteFrequencyData(dataArray);
				ctx.fillStyle = '#000';
				ctx.fillRect(0, 0, WIDTH, HEIGHT);
				for (var i = 0; i < bufferLength; i++) {
					barHeight = dataArray[i];
					ctx.fillStyle = visualizerBarColor;
					ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
					x += barWidth + 1;
				}
			}
			renderFrame();
		};
	};

	// Update initial listeners
	updateListeners();

	// Update listeners every min
	window.setInterval(updateListeners, 60000);
});

function updateListeners() {
	// Update listeners
	fetch(statsSource)
		.then((response) => response.json())
		.then((data) => {
			var listeners = document.getElementById('listeners');
			listeners.innerHTML = 'Listeners: ' + data.icestats.source.listeners;
		})
		.catch((err) => {
			console.log(err);
		});
}
