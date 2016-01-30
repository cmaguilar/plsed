/* ----------------------------------------------------------------------
Función del script:
	Validación de campos y funciones específicas de la forma de modificación de datos del perfil de la chk

Desarrollado por: Charlie
Copyright (c) 2016 Seductoras TEAM Todos los derechos reservados.
*/
var parentBody = window.parent.document.body;
$(function() {
	$('input#nombre_a_publicar').keypress(function (e) {
		var theVal = $(this).val()+String.fromCharCode(e.keyCode);
		$(this).val(theVal.match(/([\ñ\Ñ\w\d\.\-\_\*\°\s])+/g));
		e.preventDefault();
	});

	$('input#nombre_a_publicar').keyup(function() {
		if ($.trim($('input#nombre_a_publicar').val()) == '') {
			document.getElementById('verifyName').className = 'notEmpty';
			return false;
		}

		if ($('input#nombre_a_publicar').val() !== nomPub) {
			delay(function() {
				nomPub = $('input#nombre_a_publicar').val();
				$('div#verifyName').addClass('verifying');
				$.post('/?j=vNombre', {nom: $('input#nombre_a_publicar').val()}, function(d) {
					document.getElementById('verifyName').className = d[0]?'notAvailable':'available';
					// $('div#verifyName').removeClass('verifying').removeClass('notAvailable').removeClass('available').addClass(d[0]?'notAvailable':'available');
				});
			}, 700);
		}
	});

	$('select#edo').change(function() {
		if ($(this).val() > 0) {
			$('select#ciu').html('<option value="0">cargando ...</option>');
			$.post('./?j=eCius', {edo: $(this).val()}, function(d){
				$('select#ciu').html('<option value="0">selecciona ...</option>');
				$.each(d, function(i, v) {
					$('select#ciu').append('<option value="'+v[0]+'">'+v[1]+'</option>');
				});
			});
		}else $('select#ciu').html('<option value="0">-----</option>');
	});

	$('#telefono').mask('(99) 9999-9999').change(function() {
		var ftl = $(this).val().substring(0, 3);
		if (ftl == '(55' || ftl == '(33' || ftl == '(81') $(this).mask('(99) 9999-9999');
		else $(this).mask('(999) 999-9999');
	});

	$('#estatura').mask('9.99 mts', {autoclear: false});
	$('#peso').mask('999 kgs', {autoclear: false});
	$('#busto').mask('999 cms', {autoclear: false});
	$('#cintura').mask('999 cms', {autoclear: false});
	$('#cadera').mask('999 cms', {autoclear: false});

	/* ----------------------------------------------------------------------
		Submiteando el formulario ...
	*/
	$('#MpanelData').submit(function(e) {
		e.preventDefault();

		console.log($('#ciu').val());

		/* ----------------------------------------------------------------------
			Verifico que los campos obligatorios no estén vacíos
		*/
		var tok = true;
		[['nombre_a_publicar', 'El nombre a publicar en tu perfil es obligatorio', ''], ['telefono', 'El número de teléfono en tu perfil es obligatorio', ''], ['edo', 'Selecciona el Estado donde te encuentras', '0'], ['ciu', 'Selecciona la Ciudad o Población donde te encuentras', '0']].forEach(function(ar) {
			if ($.trim($('#'+ar[0]).val()) == ar[2]) {
				alert(ar[1]);
				$('#'+ar[0]).focus();
				tok = false;
			}
		});
		if (!tok) return false;

		$('#sbmt').attr('disabled', 'disabled').html('...');
		$.post('/?j=pnlDatos', $(this).serialize(), function(d) {
			if (!d.nomPub) {
				$('#sbmt').removeAttr('disabled').html('Hacer Cambios');
				document.getElementById('verifyName').className = 'notAvailable';
				$('#nombre_a_publicar').focus();
				return;
			}


			$(parentBody).removeClass('modalPanel');
			// $('#detalles', parentBody).html(d.gen);
			console.log(d);
			// bootbox.alert(d[0] == 'update'?'Se actualizó la información del usuario':'Se registró el usuario en el sistema', function() {
			// 	location.href = '/?llv='+llv;
			// });
		}, 'json');
	});
});
