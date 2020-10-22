const video = document.getElementById('video');
const controls = document.querySelector('.controls');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');

// Play & pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
    updatePlayIcon()
  } else {
    video.pause();
    updatePlayIcon()
  }
};

const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    // play.querySelector('i').className = 'fa fa-play fa-2x'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    // play.querySelector('i').className = 'fa fa-pause fa-2x';
  }
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get mins
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins = '0' + String(mins)
  }

  // Get secs
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs)
  }

  timeStamp.innerHTML = `${mins}:${secs}`
};

const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);










