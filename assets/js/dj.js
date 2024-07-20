const audioSource = 'https://sarsuf1-trinhke.us2.pitunnel.net/rapi.mp3';

$(document).ready(function () {
	fetch(audioSource)
		.then(function (response) {
			console.log(response);
		})
		.then(function (data) {})
		.catch(function (err) {
			window.location.replace('offline.html');
		});
});
