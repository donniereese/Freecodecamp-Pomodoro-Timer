/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* HTML Trigger Elements
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var startButton = document.getElementById('setTimer');
var stopButton = document.getElementById('stopTimer');
var time = document.getElementById('timers');
// wkr time elements
var wrkTime = document.getElementById('wrkTime');
var wrkTimePlus = document.getElementById('wrkTimePlus');
var wrkTimeMinus = document.getElementById('wrkTimeMinux');
// Break Time elements
var brkTime = document.getElementById('brkTime');
var brkTimePlus = document.getElementById('brkTimePlus');
var brkTimeMinux = document.getElementById('brkTimeMinus');


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* App Object and variables
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var timer = {
  interval  : 100,
  current   : null,
  date      : new Date(),
  display   : {
    workDisplay  : {
      element     : document.getElementById('wrkTimer'),
      startTime   : null,
      curTime     : null,
      endTime     : null,
      countdown   : null,
      counter     : false
    },
    breakDisplay : {
      element     : document.getElementById('brkTimer'),
      startTime   : null,
      curTime     : null,
      endTime     : null,
      countdown   : null,
      counter     : false
    }
  }
};

// Flast function for visual alert
timer.flash = function() {
  console.log('Analog flash. Please learn to flash the screen.');
};


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* Primary application functions
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// Actually set a timer with this.
timer.set = function(name, time, callback) {
  timer.current = name;
  timer.display[name + 'Display'].startTime = timer.date.now();
  timer.display[name + 'Display'].counter = window.setInterval(
    callback(name), time);
};

//
timer.increment = function(name) {
  var timeLeft = timer.display[name + 'Display']
  timer.display[name + 'Display']
};

//
timer.finishTime = function() {
  alert('finish');
  time.innerHTML('timer finished?!');
};

// user-initiated event to start the timer.
timer.start = function() {
  if( timer.current === null ) {
    timer.set('work', 1000 * 60 * 25, timer.increment);
  } else {
    timer.display.flash();
  }
};

// user-initiated event to stop the timer in place.
timer.stop = function() {

};


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* UI Events
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
startButton.addEventListener("click", timer.start, false);
stopButton.addEventListener("click", timer.stop, false);
