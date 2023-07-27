var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
var clickSound = document.getElementById("click-sound");
var gentleClickSound = document.getElementById("gentle-click-sound");

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");
var circle5 = document.getElementById("circle5");

circle1.addEventListener("click", function() {
  audio1.currentTime = 0;
  audio1.play();
  gentleClickSound.currentTime = 0;
  gentleClickSound.play();
});

circle2.addEventListener("click", function() {
  audio2.currentTime = 0;
  audio2.play();
  gentleClickSound.currentTime = 0;
  gentleClickSound.play();
});

circle3.addEventListener("click", function() {
  audio3.currentTime = 0;
  audio3.play();
  gentleClickSound.currentTime = 0;
  gentleClickSound.play();
});

circle4.addEventListener("click", function() {
  audio4.currentTime = 0;
  audio4.play();
  gentleClickSound.currentTime = 0;
  gentleClickSound.play();
});

circle5.addEventListener("click", function() {
  audio5.currentTime = 0;
  audio5.play();
  gentleClickSound.currentTime = 0;
  gentleClickSound.play();
});