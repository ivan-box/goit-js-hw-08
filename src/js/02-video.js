import Player from '@vimeo/player';
import lodashThr from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  lodashThr(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

localStorage.getItem('videoplayer-current-time') &&
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
