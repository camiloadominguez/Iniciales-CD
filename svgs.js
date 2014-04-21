Iniciales-CD
============

window.onload = function()
{
	var color = "#2CC533";
	var dibujar = SVG('divsvg').size("100%","100%");

	
	var C = [[600,450],[600,550],[400,550],[400,150],[600,150],[600,250],[550,250],[550,200],[450,200],[450,500],[550,500],[550,450],[600,450]];
	var D= [[400,550],[400,150],[550,150],[580,160],[600,190],[605,240],[605,460],[600,510],[580,540],[550,550],[451,550],[451,500],[550,500],[555,450],[555,250],[550,200],[450,200],[450,550],[400,550]];
	var continua = dibujar.polyline(C).fill(color).stroke({width : 5});
	var animo = false;
	nom_div("cambio").addEventListener('click', function(event)
	{
		if(!animo)
		{
			continua.animate(500).plot(D);
		}
		else
		{
			continua.animate(5000).plot(C);
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
