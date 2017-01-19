// Test that files is linked to html
// alert('Working!!');

/* log things to the console */
// console.log("Hi! I'll print to the console");
//
// var aNumber = 10; // intiger
// var secondNumber = 20;
// var resultNumber;
//
// // math operators
// resultNumber = aNumber + secondNumber;
//
// console.log('resultNumber: ', resultNumber);
//
// var dogsName = 'Kepler'; //string
//
// var isCoffeeHot = true; // boolean
//
// // Logic
// if(dogsName === 'rover'){
//   //alert("That's a terrible name!");
// }else{
//   //alert('Cool!');
// }

/**
 * Stop watch
 */
(function(){
  "use strict";

  var startButton = document.querySelector('.start');

  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  var startTime;
  var currentTime;

  function millisecondsToInterval(ms){
    var msLeft = ms;

    var msInHour = 60000 * 60;
    var msInMinute = 60000;
    var msInSecond = 1000;

    var hourCount = Math.floor(msLeft / msInHour);

    msLeft = msLeft % msInHour;

    var minutesCount = Math.floor(msLeft / msInMinute);

    msLeft = msLeft % msInMinute;

    var secondsCount = Math.floor(msLeft / msInSecond);

    return [hourCount, minutesCount, secondsCount];
  }

  function printToScreen(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  function logElapsedTime(){
    currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elapsed = millisecondsToInterval(elapsedTime);

    printToScreen(elapsed);
  }

  function toggleButton(){
    var currentText = startButton.textContent;

    if(currentText == 'Start'){
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = 'red';
    }else{
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = 'green';
    }
  }

  function startButtonHandler(){
      console.log('Hey, you clicked the button!');

      startTime = new Date();
      toggleButton();

      window.setInterval(logElapsedTime, 1000);
  }

  startButton.addEventListener('click', startButtonHandler)

}());














//
