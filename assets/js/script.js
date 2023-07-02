let hr = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');

function curentTime() {

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hr.innerHTML = verify(hours);
    min.innerHTML = verify(minutes);
    sec.innerHTML = verify(seconds);

}

curentTime();

setInterval(curentTime, 1000);

function verify(time) {
    return time < 10 ? `0${time}` : time;
}
