var gblUsersProf = {};

var vLogued = function(logued) {
	if (logued) {
		document.getElementById('logued').style.display = 'block';
		document.getElementById('LogReg').style.display = 'none';
		if (logued.tp === 'chk') document.getElementById('photo-bar').style.backgroundImage = 'url(\'/fotosv2/'+logued.id+'/ico/'+logued.img+'\')';
	}else {
		document.getElementById('login').value = '';
		document.getElementById('pass').value = '';
		document.getElementById('errMessaje').innerHTML = '';
		document.getElementById('LogReg').style.display = 'block';
		document.getElementById('logued').style.display = 'none';
	}
};

window.addEventListener('load', function() {

	/* ----------------------------------------------------------------------
		Submiteando logueo
	*/
	var loginForm = document.getElementById('loginForm');
	loginForm.onsubmit = function(e) {
		e.preventDefault();

		var valid = true;
		var elements = loginForm.getElementsByTagName('input');
		var elementsLength = elements.length;
		var params = '';

		for (var i = 0; i < elementsLength; i++) if (elements[i].value.trim() === '') valid = false;

		if (valid) {
			for (i = 0; i < elementsLength; i++) params += elements[i].name + '=' + encodeURIComponent(elements[i].value) + '&';

			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
					var ret = JSON.parse(xmlhttp.responseText);
					if (ret.aut > 0) {
						document.getElementById('errMessaje').innerText = 'Bienvenid@ '+ret.nfo.name;
						vLogued({'id': ret.nfo.id, 'tp': (ret.aut === 1 ? 'chk' : 'pkt'), 'img': ret.nfo.img});
						location.href = '#';
						startSocket();
					}else document.getElementById('errMessaje').innerText = ret.msg;
				}
			};

			xmlhttp.open('POST', '/?j=logueo&'+params, true);
			xmlhttp.send();
		}else{
			document.getElementById('errMessaje').innerText = 'Faltan datos';
		}
	};

	/* ----------------------------------------------------------------------
		Cerrando session
	*/
	document.getElementById('salir').onclick = function() {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				vLogued(false);
				stopSocket();
			}
		};

		xmlhttp.open('GET', '/?j=n&q', true);
		xmlhttp.send();
	};
});
