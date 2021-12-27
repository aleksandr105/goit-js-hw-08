import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const saveTime = localStorage.getItem('videoplayer-current-time');

const onData = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onData, 1000));

if (saveTime) {
  player.setCurrentTime(saveTime);
}
