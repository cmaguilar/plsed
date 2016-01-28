function validando(kc, que) {
	if (que == 'soloNumeros') {
		if (kc == 8 || kc == 9 || kc == 46 || kc == 37 || kc == 39 || (kc >= 96 && kc <= 105) || (kc >= 48 && kc <= 57)) return true;
	}else if (que == 'numDec') {
		if (kc == 8 || kc == 9 || kc == 46 || kc == 37 || kc == 39 || (kc >= 96 && kc <= 105) || (kc >= 48 && kc <= 57) || kc == 110 || kc == 190) return true;
	}else if (que == 'numLetras') {
		if (kc == 8 || kc == 9 || kc == 46 || kc == 37 || kc == 39 || (kc >= 96 && kc <= 105) || (kc >= 48 && kc <= 57) || (kc >= 65 && kc <= 90)) return true;
	}
	return false;
}
$(function() {
	$('input.valida').keydown(function (e) {
		// console.log(e);
		console.log(String.fromCharCode(e.keyCode));
		// if (!validando(e.keyCode, $(this).attr('que'))) e.preventDefault();
		// if ($(this).val().length == $(this).attr('maxlength') && e.keyCode != 8 && e.keyCode != 9 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 39) e.preventDefault();
	});

	// $('input.validando').keydown(function(e) {
	// 	console.log(String.fromCharCode(e.which));
	// 	console.log(e.which + ' ::: ' + e.keyCode);

		// var ptrn = [];
		// ptrn['soloNumeros'] = /^[a-zA-Z]*$/;
		// ptrn['numLetras'] = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;

		// var cdn = e.target.value;
		// console.log(e);

		// if (!cdn.search(ptrn[$(this).attr('que')])) e.preventDefault();
		// console.log($(this).attr('que'));
		// console.log(e);
	// });;
});