
var colors = ["black","grey","lime", "orange" , "indigo", "violet", "red" , "blue", "green", "yellow","cyan"];

for (var i = 0, n = colors.length; i < n; i++) 
{
	var swatch = document.createElement("li");
	swatch.className = "swatch"; 
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click',setSwatch);
	document.getElementById('colors').appendChild(swatch);
}
function setColor(color) {
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if (active){
		active.className = 'swatch';
	}
}
function setSwatch(e) {
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += " active";


}