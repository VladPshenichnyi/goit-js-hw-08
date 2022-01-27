import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe')
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (time) {
    console.log(`Просмотр на : ${time.seconds} секунде`)
    localStorage.setItem("videoplayer-current-time", time.seconds);
    }, 1000),
);

let currentTime;
try {
    currentTime = localStorage.getItem("videoplayer-current-time");
    console.log(currentTime)
} catch (error) {
    console.error("Get state error: ", error.message);
}

player.setCurrentTime(currentTime)