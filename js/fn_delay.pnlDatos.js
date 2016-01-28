/* ----------------------------------------------------------------------
Función del script:
	Hace un delay enter eventos, útil para esperar un lapso de tiempo antes de enviar por ejemplo un ajax para verificar disponibilidad de nombre o de usuario

Desarrollado por: Charlie
Copyright (c) 2016 Seductoras TEAM Todos los derechos reservados.
*/
var delay = (function(){
  var timer = 0;
  return function(callback, ms) {
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();