window.addEventListener('load', function() {

	var galeImgMod = document.getElementById('galeImgMod');
	var misfotos = document.getElementById('misfotos');
	var imgMod = misfotos.getElementsByTagName('img');
	var imgModLength = imgMod.length;
	var imgModIndex = 0;
	var srcsImgMod = [];
	var srcImgMod = '';
	var imgModal = document.getElementsByClassName('imgModal');
	var i;
	var dirLR = false;

	/*  Crea un arreglo con los data-href de las imagenes de la galeria  */
	for (i = 0; i < imgModLength; i++) srcsImgMod.push(imgMod[i].getAttribute('data-href'));

	/*  Cierra el modal de la Galeria de fotos  */
	function closeGaleModal(){ 
		document.body.className = document.body.className.replace(/showGale|imgModal/g, '') 
		dirLR = false;
	};

	/*  Cambia las imagenes del modal  */
	function changeImgGalery(d){
		imgModIndex = srcsImgMod.indexOf(galeImgMod.getAttribute('src'));
		(d) ? ((imgModIndex === 0) ? imgModIndex = imgModLength-1 : imgModIndex--) : ((imgModIndex === imgModLength-1) ? imgModIndex = 0 : imgModIndex++);
		galeImgMod.src = srcsImgMod[imgModIndex];
	}

	/*  Activa el modal  */
	function putModalImg(src, classN) {
		galeImgMod.src = src;
		document.body.className = document.body.className + classN;
	}

	/*  Click de las imagenes de la galeria  */
	misfotos.onclick = function(e){
		srcImgMod = e.target.getAttribute('data-href');
		if (srcImgMod) putModalImg(srcImgMod, ' showGale');
		dirLR = true;
	};

	/*  Click de las imagenes del perfil social */
	for (i = 0; i < imgModal.length; i++) {
		imgModal[i].addEventListener('click', function(){ putModalImg(this.getAttribute('data-href'), ' showGale imgModal')}, false);
	};

	/*  Click en el fondo negro para cerrar el modal de la Galeria de fotos  */
	document.getElementById('galeryDialog').onclick = function(e){ if (e.target === this) closeGaleModal() };

	/*  Click en la X para cerrar el modal de la Galeria de fotos  */
	document.getElementById('closeGale').onclick = closeGaleModal;

	/*  Click de las dos flechas de cambiar imagen  */
	document.getElementById('dirL').onclick = function(){ changeImgGalery(true); }
	document.getElementById('dirR').onclick = function(){ changeImgGalery(false); }

	/*  Eventos de teclado  */
	document.onkeyup = function(e){
		if (dirLR && e.keyCode === 37) changeImgGalery(true);
	    if (dirLR && e.keyCode === 39) changeImgGalery(false);
	    if (e.keyCode === 27) closeGaleModal();
	}







	/*  Pone fija la barra de la portada en el detalle cuando es para moviles  */
	var windou = window;
	var body = document.getElementById('bodyDet');
	if (windou.innerWidth < 768) {
		windou.addEventListener('scroll', function(){
			if (windou.scrollY > 50) {
				if (body.className.indexOf('affix') === -1) body.className = body.className + ' affix';
			}else if (body.className.indexOf('affix') !== -1) {
				if (body.className.indexOf('affix') !== -1) body.className = body.className.replace('affix', '');
				
			}
		});
	}







	/*  Quita el scroll del document  */
	var noPageScroll = document.getElementsByClassName('noPageScroll');
	for (var i = 0; i < noPageScroll.length; i++) {
		noPageScroll[i].onmouseenter = function(){ document.body.className = document.body.className + ' noScroll'; }
		noPageScroll[i].onmouseleave = function(){ document.body.className = document.body.className.replace(' noScroll', ''); }
	};


	/*  Modal del panel  */
	function bodyModalPanel(){ document.body.className = document.body.className + ' modalPanel'; }
	document.getElementById('edit-portada').addEventListener('click', bodyModalPanel, false);
	document.getElementById('edit-foto').addEventListener('click', bodyModalPanel, false);
	document.getElementById('edit-data').addEventListener('click', bodyModalPanel, false);
	document.getElementById('edit-gale').addEventListener('click', bodyModalPanel, false);

	document.getElementById('modalPanel').addEventListener('click', function(e){
		document.body.className = document.body.className.replace(' modalPanel', '');
	}, false);





});



