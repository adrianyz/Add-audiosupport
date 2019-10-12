(function() {
var play = document.querySelector("#playBtn");

play.onclick = function(){
    var audioBox = document.querySelector("#audio"), 
    initPlay = document.querySelector("#initPlay");
    initPlay.style.display = 'none';
    audio.play();

    window.setTimeout(function () {
		audioBox.style.display = 'inline-block';
	}, 100);
}

 })();
 
 