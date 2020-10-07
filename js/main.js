// document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#image-slider' , {
//         	type: 'loop',
//             padding: {
//                 right: '5rem',
//                 left: '5rem',
//         	    },
//     }).mount();
// });


// let currentSlide = document.querySelector('#image-slider')
// let activeSlide = currentSlide.querySelector('is-visible')

let media = document.querySelector('video');
let controls = document.querySelector('.video__controls');
let play = document.querySelector('.play');
let timer = document.querySelector('.timer span');

play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
    if (media.paused) {
        play.setAttribute('data-icon', 'u');
        play.classList.toggle('pause');
        controls.classList.toggle('video__controls-disable');

        media.play();
    } else {
        play.setAttribute('data-icon', 'P');
        play.classList.toggle('pause');
         controls.classList.toggle('video__controls-disable');
        media.pause();
    }
}
media.addEventListener('timeupdate', setTime);

function setTime() {
    let minutes = Math.floor(media.currentTime / 60);
    let seconds = Math.floor(media.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes > 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = '0' + seconds;
    } else {
        secondValue = seconds;
    }

    let mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;

    // let barLength = timerWrapper.clientWidth * (media.currentTime / media.duration);
    // timerBar.style.width = barLength + 'px';
}


// play.forEach( item => {
//     item.addEventListener('click', playPauseMedia);
//     function playPauseMedia() {
//             if (media.paused) {
//                 item.setAttribute('data-icon', 'u');
//                 item.classList.toggle('pause');
//                 controls.classList.add('video__controls-disable');

//                 media.play();
//             } else {
//                 item.setAttribute('data-icon', 'P');
//                 item.classList.toggle('pause');
//                 media.pause();
//             }
//         }
// });