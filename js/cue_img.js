// JavaScript Document

(function(){
	"use strict";
	
	var hint = document.querySelector("#cueImg");
	var screenPOS;
	var dist;

	function activate(){
		screenPOS = window.scrollY;
		dist = hint.offsetTop;
		console.log(dist);
		if(screenPOS+500>dist){
			document.querySelector("#promoImg").style.opacity=1;
			}
	}


	window.addEventListener("scroll", activate, false);
	
	})();