import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const player = new Vimeo.Player(iframe);

// ************************************************************************ 
player.on('timeupdate', throttle(function (currentTime) {
    console.log(`Просмотр на : ${JSON.stringify(currentTime)}`)
    // console.log(currentTime)
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime)   );
    }, 1000),
);

const saveCurrentTime = localStorage.getItem("videoplayer-current-time");
// console.log(saveCurrentTime)
const parsedCurrentTime = JSON.parse(saveCurrentTime)
// console.log(parsedCurrentTime)

player.setCurrentTime(parsedCurrentTime.seconds)


// *************************************************************************
// player.on('timeupdate', throttle(function (time) {
//     console.log(`Просмотр на : ${time.seconds} секунде`)
//     localStorage.setItem("videoplayer-current-time", time.seconds);
//     }, 1000),
// );
// let currentTime;
// try {
//     currentTime = localStorage.getItem("videoplayer-current-time");
//     console.log(currentTime)
// } catch (error) {
//     console.error("Get state error: ", error.message);
// }
// player.setCurrentTime(currentTime)
