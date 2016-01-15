window.addEventListener('load', function() {

	/*/  Campanita de Santa  /*/
	var shakeBell = document.getElementById('shakeBell');
	var shakeOn = function(){
		shakeBell.className = 'pd15 shakeBell';
		setTimeout(function(){shakeBell.className = 'pd15';}, 1000);
	};
	if (shakeBell) {
		setInterval(shakeOn , 15000);
		shakeOn();	
	}
});
