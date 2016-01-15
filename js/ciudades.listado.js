window.addEventListener('load', function() {
	var cities = document.getElementById('cities');
	var citiesItems = cities.getElementsByTagName('div');
	var citiesHeight = cities.clientHeight;
	var city = document.getElementById('city');
	var windou = window;
	var saparatorList = document.getElementsByClassName('saparatorList');
	var spyPointsLength = saparatorList.length;
	var lastCity = 0;
	var oldLastCity = 0;
	var scrollOld = 0;
	var scrolly = 0;

	var spyPoints = [0];
	for (var i = 0; i < spyPointsLength; i++) spyPoints.push(saparatorList[i].offsetTop);

	city.setAttribute('style','height: '+citiesHeight+'px;');

	var changeCity = function(el){
		for (i = 0; i < citiesItems.length; i++) citiesItems[i].className = '';
		citiesItems[el].className = 'active';
	};

	windou.addEventListener('scroll', function(){
		scrolly = window.pageYOffset;

		/*  Oculta y muestra la barra de ciudades  */
		if (scrolly > citiesHeight) {
			(scrolly > scrollOld) ? cities.className = 'onlyCity' : cities.className = '';
		}
		scrollOld = windou.pageYOffset;

		/*  Establece en que ciudad se esta en la viewport  */
		for (i = 0; i < spyPointsLength+1; i++) if (scrolly > spyPoints[i]+28) lastCity = i;

		/*  Evalua si la ciudad cambio para cambiar la clase  */
		if (oldLastCity !== lastCity) changeCity(lastCity);
		oldLastCity = lastCity;

	});
});