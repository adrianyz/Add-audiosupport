(function() {
	"use strict";
var redo = document.querySelector("#restart"), back = document.querySelector("#bwd"), go = document.querySelector("#play"), forward = document.querySelector("#fwd");
var redo2 = document.querySelector("#restart2"), back2 = document.querySelector("#bwd2"), go2 = document.querySelector("#play2"), forward2 = document.querySelector("#fwd2");
var video = document.querySelector("#myTrailer1"), video2 = document.querySelector("#myTrailer2");
	
var startBtn = "url(images/media_icon_play.svg)", stopBtn = "url(images/media_icon_pause.svg)";

var fullSB = document.querySelector("#fsBtn"),fullSB2 = document.querySelector("#fsBtn2");
	
	
function vidplay() {
       if (video.paused) {
          video.play();
          go.style.backgroundImage=stopBtn;
       } else {
          video.pause();
          go.style.backgroundImage=startBtn;
       }
}
	function vidplay2() {
       if (video2.paused) {
          video2.play();
          go2.style.backgroundImage=stopBtn;
       } else {
          video2.pause();
          go2.style.backgroundImage=startBtn;
       }
}

function restart() {
        video.currentTime = 0;
}

function fwd() {
        video.currentTime += 5;}
	
function bwd() {
        video.currentTime += -5;}
	
function restart2() {
        video2.currentTime = 0;
}

function fwd2() {
        video2.currentTime += 5;}
	
function bwd2() {
        video2.currentTime += -5;}
	
	function toggleFS(){
		if(video.requestFullScreen){
			video.requestFullScreen();
		} else if(video.webkitRequestFullScreen){
			video.webkitRequestFullScreen();
		}  else if(video.mozRequestFullScreen){
			video.mozRequestFullScreen();
		}
	}
	
		function toggleFS2(){
		if(video2.requestFullScreen){
			video2.requestFullScreen();
		} else if(video2.webkitRequestFullScreen){
			video2.webkitRequestFullScreen();
		}  else if(video2.mozRequestFullScreen){
			video2.mozRequestFullScreen();
		}
	}

	
	go.addEventListener("click", vidplay, false);
	redo.addEventListener("click", restart, false);
	forward.addEventListener("click", fwd, false);
	back.addEventListener("click", bwd, false);
	fullSB2.addEventListener("click", toggleFS2, false);

go2.addEventListener("click", vidplay2, false);
	redo2.addEventListener("click", restart2, false);
	forward2.addEventListener("click", fwd2, false);
	back2.addEventListener("click", bwd2, false);
	fullSB.addEventListener("click", toggleFS, false);
})();