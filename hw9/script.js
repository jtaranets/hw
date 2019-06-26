"use strict";

const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
let pauseBtn;

const timer = {
  startTime: null,
  deltaTime: null,
  id: null,
  timerIsActive: false,
  currentTime: null,
  timeAtPause: null,
  difference: null,
  startTimer: function(formatTime, changeClock) {
    this.timerIsActive = true;
    this.startTime = Date.now();
    this.id = setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.currentTime - this.startTime;
      const millisec = this.deltaTime;
      const minutes = this.deltaTime / 60000;
      const seconds = (this.deltaTime - minutes * 60) / 1000;
      let changedTime = formatTime(minutes, seconds, millisec);
      changeClock(clockface, changedTime);
    }, 100);
    // console.log(this.id);
    // console.log("start:", this.timerIsActive);
    startBtn.textContent = "Pause";
  },
  pauseTimer: function(event) {
    // console.log("pause's working");
    // console.log(this.id);
    clearInterval(this.id);
    this.timerIsActive = false;
    startBtn.textContent = "Continue";
    this.timeAtPause = this.startTime + this.deltaTime;
    console.log("pause currentTime", this.currentTime);
    // console.log("pause timeAtPause", this.timeAtPause);
    // console.log("pause startTime", this.startTime);
  },
  continueTimer: function(formatTime, changeClock) {
    this.timerIsActive = true;
    // this is start time which equils to current time at pause
  
    console.log(this.startTime);
    this.currentTimeforDifference = Date.now();
    // console.log('differ', this.difference);
    this.timeElapsed = this.currentTimeforDifference - this.timeAtPause;
    this.id = setInterval(() => {
      // current time every ms
      this.currentTime = Date.now();
      // we need to count difference between current time
      this.deltaTime = this.currentTime - this.timeElapsed - this.startTime;
      // console.log(this.deltaTime);
      const millisec = this.deltaTime;
      const minutes = this.deltaTime / 60000;
      const seconds = (this.deltaTime - minutes * 60) / 1000;
      console.log((this.deltaTime - minutes * 60) / 1000);
      console.log(minutes > 1);
      let changedTime = formatTime(minutes, seconds, millisec);
      changeClock(clockface, changedTime);
    }, 100);
    // console.log(this.id);
    startBtn.textContent = "Pause";
    // console.log("continue currentTime", this.currentTime / 1000);
    // console.log("continue timeAtPause", this.timeAtPause / 1000);
    // console.log("continue startTime", this.startTime / 1000);
    // console.log("continue deltaTime", this.deltaTime / 1000);
  },
  reset: function(){
if (this.timerIsActive){
  resetBtn.disabled = false;

}
else{
  resetBtn.disabled = true;
}
console.log('hey');
  }
};

/*
 * Вспомогательные функции
 */

function getFormattedTime(min, sec, ms) {
  min = Math.floor(min);
  sec = Math.floor(sec);
  if (min.toString().length < 2) {
    min = `0${min}`;
  }
  if (sec.toString().length < 2) {
    sec = `0${sec}`;
  }
  ms = ms.toString()
  // ms = ms.toString().slice(0, length - 2);

  return `${min}:${sec}.${ms}`;
}

function updateClockface(elem, time) {
  elem.textContent = time;
}

window.addEventListener('load', timer.reset.bind(timer));

startBtn.addEventListener("click", timerIsWorking);

function timerIsWorking() {
  if (startBtn.textContent === "Start") {
    // console.log("starting");
    timer.startTimer(getFormattedTime, updateClockface);
  } else if (startBtn.textContent === "Pause") {
    // console.log("pause");
    timer.pauseTimer();
  } else if (startBtn.textContent === "Continue") {
    // console.log("continue");
    timer.continueTimer(getFormattedTime, updateClockface);
  }
}

// startBtn.addEventListener('click', timer.continueTimer.bind(timer, getFormattedTime, updateClockface));
// stopBtn.addEventListener('click', timer.stopTimer.bind(timer));

//  ============================================================

// function funForStart() {
//   if (!btnIsActive) {
//     startBtn.textContent = "Pause";
//     console.log("this is START button");
//     console.log(btnIsActive);
//     console.log(startBtn.textContent);
//     startBtn.classList.add("pauseBtn");
//     btnIsActive = true;
//   }
//   else {
//     funForPause()
//   }
// }

// function funForPause() {
//     startBtn.textContent = "Start";
//     console.log("this is PAUSE button");
//     console.log(btnIsActive);
//     console.log(startBtn.textContent);
//     btnIsActive = false;
//   }

// startBtn.addEventListener("click", funForStart);
