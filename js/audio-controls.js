(function() {
var play = document.querySelector("#playBtn");
//click the original play button will hide the button and play the audio
play.onclick = function(){
    var audioBox = document.querySelector("#audio"), 
    initPlay = document.querySelector("#initPlay");
    initPlay.style.display = 'none';
    audio.play();

//set delay to show audio control
    window.setTimeout(function () {
		audioBox.style.display = 'inline-block';
	}, 100);
}

 })();
 
 