import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function(data){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
 