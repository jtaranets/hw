'use strict'

class Stopwatch {
  constructor(parent) {
    this.parent = parent;
    this.clockface = null;
    this.startBtn = null;
    this.resetBtn = null;
    this.lapBtn = null;
    this.list = null;
    this.item = null;
    this.pauseBtn = null;
    this.startTime = null;
    this.deltaTime = null;
    this.id = null;
    this.stopwatchIsActive = false;
    this.currentTime = null;
    this.timeAtPause = null;
    this.difference = null;
    // this.resetBtn.disabled = true;
    this.minutes = null;
    this.seconds = null;
    this.millisec = null;
    this.createStopwatch();
    this.eventListeners();
  }
  createStopwatch(){
    this.stopwatchCont = document.createElement('div');
    this.stopwatchCont.classList.add('stopwatch');
    this.parent.prepend(this.stopwatchCont);
    this.clockface = document.createElement('p');
    this.clockface.classList.add('js-take-lap');
    this.stopwatchCont.append(this.clockface);
    this.clockface.textContent = "00:00.0"
    this.startBtn = document.createElement('button');
    this.startBtn.classList.add('js-start');
    this.startBtn.textContent = "Start";
    this.stopwatchCont.append(this.startBtn);
    this.lapBtn = document.createElement('button');
    this.lapBtn.classList.add('js-take-lap');
    this.lapBtn.textContent = "Lap"
    this.stopwatchCont.append(this.lapBtn);
    this.resetBtn = document.createElement('button');
    this.resetBtn.classList.add('js-reset');
    this.stopwatchCont.append(this.resetBtn);
    this.resetBtn.textContent = "Reset";
    this.list = document.createElement('ul');
    this.list.classList.add('js-laps');
    this.parent.append(this.list);

  }
  startStopwatch() {
    this.stopwatchIsActive = true;
    this.startTime = Date.now();
    this.id = setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.currentTime - this.startTime;
      this.millisec = this.deltaTime;
      this.minutes = this.deltaTime / 60000;
      this.seconds = (this.deltaTime - this.minutes * 60) / 1000;
      let changedTime = this.getFormattedTime(
        this.minutes,
        this.seconds,
        this.millisec
      );
      this.updateClockface(this.clockface, changedTime);
    }, 100);
    this.startBtn.textContent = "Pause";
    this.resetBtn.disabled = false;
  }
  pauseStopwatch() {
    clearInterval(this.id);
    this.stopwatchIsActive = false;
    this.startBtn.textContent = "Continue";
    this.timeAtPause = this.startTime + this.deltaTime;
    this.resetBtn.disabled = false;
  }
  continueStopwatch() {
    this.currentTimeforDifference = Date.now();
    this.timeElapsed = this.currentTimeforDifference - this.timeAtPause;
    this.id = setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.currentTime - this.timeElapsed - this.startTime;
      this.millisec = this.deltaTime;
      this.minutes = this.deltaTime / 60000;
      this.seconds = (this.deltaTime - this.minutes * 60) / 1000;
      let changedTime = this.getFormattedTime(
        this.minutes,
        this.seconds,
        this.millisec
      );
      this.updateClockface(this.clockface, changedTime);
    }, 100);
    this.startBtn.textContent = "Pause";
    this.resetBtn.disabled = false;
  }
  resetStopwatch() {
    clearInterval(this.id);
    this.startBtn.textContent = "Start";
    this.startTime = null;
    this.deltaTime = null;
    this.currentTime = null;
    this.timeAtPause = null;
    this.difference = null;
    let changedTime = this.getFormattedTime(0, 0, 0);
    this.updateClockface(this.clockface, changedTime);
  }
  takeLap() {
    this.item = document.createElement("li");
    this.list.prepend(this.item);
    let currentTime = this.getFormattedTime(
      this.minutes,
      this.seconds,
      this.millisec
    );
    this.updateClockface(this.item, currentTime);
  }
  getFormattedTime(min, sec, ms) {
    min = Math.floor(min);
    sec = Math.floor(sec);
    if (min.toString().length < 2) {
      min = `0${min}`;
    }
    if (sec.toString().length < 2) {
      sec = `0${sec}`;
    }
    ms = ms.toString().slice(-3);

    return `${min}:${sec}.${ms}`;
  }
  updateClockface(elem, time) {
    elem.textContent = time;
  }
  stopwatchIsWorking() {
    if (this.startBtn.textContent === "Start") {
      this.startStopwatch();
    } else if (this.startBtn.textContent === "Pause") {
      this.pauseStopwatch();
    } else if (this.startBtn.textContent === "Continue") {
      this.continueStopwatch();
    }
  }
  eventListeners() {
    this.startBtn.addEventListener("click", this.stopwatchIsWorking.bind(this));
    this.resetBtn.addEventListener("click", this.resetStopwatch.bind(this));
    this.lapBtn.addEventListener("click", this.takeLap.bind(this));
    // window.onload = this.resetstopwatch.bind(this);
  }
}

const stopwatch = new Stopwatch(document.querySelector('.containerForTheFirstStopwatch'));
const anotStopwatch = new Stopwatch(document.querySelector('.containerForTheSecondStopwatch'))

// stopwatch.eventListeners();
// stopwatch.createStopwatch();

// window.addEventListener('load', stopwatch.reset.bind(stopwatch));
