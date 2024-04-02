var video;

// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

	// function to update video volume
	function updateVolume() {
		var currentVolume = video.volume;
		var volPercent = Math.round(currentVolume * 100);
		document.querySelector("#volume").textContent = volPercent + "%";
	}

	// play button
	document.querySelector("#play").addEventListener("click", function() {
		console.log("play video");
		video.play();
		updateVolume();
	});

	// pause button
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("pause video");
	});

	// slow down
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("new speed is " + video.playbackRate);
	});

	// speed up
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("new speed is " + video.playbackRate);
	});

	// skip ahead
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 > video.duration) video.currentTime = 0;
		else video.currentTime += 10;
		console.log("current time is " + video.currentTime);
	});

	// mute
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
			console.log("unmuted");
		}
		else {
			video.muted = true;
			this.textContent = "Unmute";
			console.log("muted");
		}
	});

	// volume slider
	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		updateVolume();
		console.log("used volume slider");
	});

	// styled - add oldSchool class
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("added oldSchool");
	});

	// original - remove oldSchool class
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("removed oldSchool");
	});
});