var setRadius = function(newRadius){
	if (newRadius<minRad) {
		newRadius = minRad;
	}else if (newRadius>maxRad) {
		newRadius = maxRad;
	}
	radius = newRadius
	context.lineWidth = radius*2;
	radspan.innerHTML = radius;
}

var minRad = 1,
	maxRad = 100,
	defualtRad = 20,
	interval = 1;
	radspan = document.getElementById('radval'),
	decRad = document.getElementById('decRad'),
	incRad = document.getElementById('incRad');


decRad.addEventListener('click',function(){
	setRadius(radius - interval);
});
incRad.addEventListener('click',function(){
	setRadius(radius + interval);
})