document.body.className = 'noScroll';

/*  Mostrar en grande las imagens del panel cuando se les da click  */
var modalImgPanelCont = document.getElementById('modalImgPanelCont');
var modalImgPanel = document.getElementById('modalImgPanel');
var imgRef;
document.getElementById('panelPhoto').onclick = function(e){
	imgRef = e.target.getAttribute('data-href');
	if (imgRef) {
		modalImgPanel.src = imgRef;
		modalImgPanelCont.className = '';
		setTimeout(function(){ modalImgPanelCont.className = 'show'; }, 100)
	}
}

document.getElementById('modalImgPanelCont').onclick = function(){
	modalImgPanelCont.className = '';
	setTimeout(function(){ modalImgPanelCont.className = 'hidden'; }, 300)
}