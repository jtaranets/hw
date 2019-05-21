// "use strict";

// const clockface = document.querySelector(".js-time");
// const startBtn = document.querySelector(".js-start");
// const resetBtn = document.querySelector(".js-reset");
// const lapBtn = document.querySelector(".js-take-lap");
// let pauseBtn;

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null,
//   timerIsActive: false,
//   currentTime: null,
//   timeAtPause: null,
//   deltaTimeAfterPause: null,
//   startTimer: function(formatTime, changeClock) {
//     this.timerIsActive = true;
//     this.startTime = Date.now();
//     this.id = setInterval(() => {
//       this.currentTime = Date.now();
//       this.deltaTime = this.currentTime - this.startTime;
//       const millisec = this.deltaTime;
//       const minutes = this.deltaTime / 60000;
//       const seconds = (this.deltaTime - minutes * 60) / 1000;
//       let changedTime = formatTime(minutes, seconds, millisec);
//       changeClock(clockface, changedTime);
//     }, 100);
//     console.log(this.id);
//     console.log("start:", this.timerIsActive);
//     startBtn.textContent = "Pause";
//   },
//   pauseTimer: function(event) {
//     console.log("pause's working");
//     // pauseBtn.classList.toggle("js-pause", false);
//     // startBtn.classList.toggle("js-start", true);
//     console.log(this.id);
//     clearInterval(this.id);
//     this.timerIsActive = false;
//     startBtn.textContent = "Continue";
//     this.timeAtPause = this.deltaTime;
//     console.log("pause:", this.timerIsActive);
//     console.log("currentTime", this.currentTime);
//     console.log("timeAtPause", this.timeAtPause);
//     console.log("startTime", this.startTime);
//   },
//   continueTimer: function(formatTime, changeClock) {
//     this.timerIsActive = true;
//     this.startTime += this.timeAtPause;
//     this.id = setInterval(() => {
//       this.currentTime = Date.now();
//       this.deltaTime = this.currentTime - this.startTime;
//       const millisec = this.deltaTime;
//       const minutes = this.deltaTime / 60000;
//       const seconds = (this.deltaTime - minutes * 60) / 1000;
//       let changedTime = formatTime(minutes, seconds, millisec);
//       changeClock(clockface, changedTime);
//     }, 100);
//     console.log(this.id);
//     startBtn.textContent = "Pause";
//     console.log("continue");
//     console.log("continue:", this.timerIsActive);
//     console.log("currentTime", this.currentTime);
//     console.log("timeAtPause", this.timeAtPause);
//     console.log("startTime", this.startTime);
//     console.log("deltaTimeAfterPause", this.deltaTimeAfterPause);
//   }
//   // continueTimer: function(){
//   //     if(startBtn.textContent === "Continue"){
//   //         this.startTimer(formatTime, changeClock);
//   //     }
//   // }
// };

// // timer.startTimer(getFormattedTime, updateClockface);

// // setTimeout(timer.stopTimer(), 5000);

// /*
//  * Вспомогательные функции
//  */

// function getFormattedTime(min, sec, ms) {
//   min = Math.floor(min);
//   sec = Math.floor(sec);
//   if (min.toString().length < 2) {
//     min = `0${min}`;
//   }
//   if (sec.toString().length < 2) {
//     sec = `0${sec}`;
//   }
//   ms = ms.toString().slice(0, length - 2);

//   return `${min}:${sec}.${ms}`;
// }

// function updateClockface(elem, time) {
//   elem.textContent = time;
// }

// startBtn.addEventListener("click", starting);

// function starting() {
//   if (!timer.timerIsActive && startBtn.textContent === "Start") {
//     console.log("starting");
//     timer.startTimer(getFormattedTime, updateClockface);
//   }
// }

// setTimeout(() => {
//   // console.log(pauseBtn);
//   startBtn.addEventListener("click", pausing);
// }, 5000);

// function pausing() {
//   if (timer.timerIsActive && startBtn.textContent === "Pause") {
//     timer.pauseTimer();
//   }
// }

// function continuing() {
//   if (!timer.timerIsActive && startBtn.textContent === "Continue") {
//     timer.continueTimer(getFormattedTime, updateClockface);
//   }
// }

// setTimeout(() => {
//   // console.log(pauseBtn);
//   startBtn.addEventListener("click", continuing);
// }, 7000);

// // startBtn.addEventListener('click', timer.continueTimer.bind(timer, getFormattedTime, updateClockface));
// // stopBtn.addEventListener('click', timer.stopTimer.bind(timer));

const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
let btnIsActive = false;

startBtn.addEventListener("click", funForStart);
startBtn.addEventListener("click", funForPause);

function funForStart(evt) {
  if (!btnIsActive) {
    startBtn.textContent = "Pause";
    console.log("this is start button");
    console.log(btnIsActive);
    console.log(startBtn.textContent);
  }
  btnIsActive = true;
}

function funForPause(evt) {
  if (btnIsActive) {
    startBtn.textContent = "Start";
    console.log("this is pause button");
    console.log(btnIsActive);
    console.log(startBtn.textContent);
  }
  btnIsActive = false;
}
