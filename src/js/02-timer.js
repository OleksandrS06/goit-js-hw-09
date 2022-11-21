// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// бібліотека повідомлення
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtnEl = document.querySelector("button[data-start]");
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");

startBtnEl.disabled = true;
let deadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
     deadline = selectedDates[0].getTime();
    if (selectedDates[0] <= options.defaultDate) {
    return Notify.failure('Please choose a date in the future');
    } else {
      startBtnEl.disabled = false;
      deadline = selectedDates[0]
     }
    // console.log(selectedDates[0]);
  },
};
     
flatpickr("#datetime-picker", options);

const onStBntTimerStart = event => {
  startBtnEl.disabled = true;
  
    const timerId = setInterval(() => {
    let diff = deadline - Date.now();
    if (diff <= 0) {
      clearInterval(timerId);
      return Notify.info('Time is over');;
    }
    const { days, hours, minutes, seconds } = convertMs(diff)
    daysEl.textContent = addingZero(days);
    hoursEl.textContent = addingZero(hours);
    minutesEl.textContent = addingZero(minutes);
    secondsEl.textContent = addingZero(seconds);
   }, 1000)
}
 
startBtnEl.addEventListener("click", onStBntTimerStart);

function addingZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

