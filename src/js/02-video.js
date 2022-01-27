import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe')
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(function (time) {
    console.log(`Просмотр на : ${time.seconds} секунде`)
    localStorage.setItem("LOCALSTORAGE_KEY", time.seconds);
    }, 1000),
);

let currentTime;
try {
    currentTime = localStorage.getItem('LOCALSTORAGE_KEY');
    console.log(currentTime)
} catch (error) {
    console.error("Get state error: ", error.message);
}

player.setCurrentTime(currentTime)