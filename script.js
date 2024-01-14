const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minsE1 = document.getElementById('mins')
const secondsE1 = document.getElementById('seconds')

const newYears = '1 Jan 2025'

function countdow(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdow();

//Updates every second 
setInterval(countdow, 1000);

