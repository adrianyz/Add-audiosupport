// JavaScript Document
(function() {
	"use strict";
//variables
	
var current = 0,
    awsomePics = document.querySelectorAll(".galleryImg");
	
	
	
setInterval(function() {
  for (var i = 0; i < awsomePics.length; i++) {
    awsomePics[i].style.opacity = 0;}
  	if (current !== awsomePics.length - 1)
  {current = current + 1;}
	else{current = 0;}
  awsomePics[current].style.opacity = 1;
}, 3500);
	//swap images by changing opacity of the div, actived every 3.5s

})();