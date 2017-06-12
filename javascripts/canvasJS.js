

var canvas, context,radius, putPoint, dragging ,lastX,lastY,lastFillStyle, lastStrokeStrike;

window.addEventListener('load',init);

var pen = document.getElementById('pen');
var paint = document.getElementById('paint');
var eraseContent = document.getElementById('eraser');
var spray = document.getElementById('spray');




pen.addEventListener('click',function(){
	canvas.removeEventListener('mousemove', drawRoundLine);
	canvas.removeEventListener('mousemove', putSpray);
	canvas.removeEventListener('mousemove', erase);
	//canvas.removeEventListener('touchmove', drawLine);
	canvas.removeEventListener('touchmove', putSpray);
	canvas.removeEventListener('touchmove', drawRoundLine);
	canvas.removeEventListener('touchmove', erase);
	canvas.addEventListener('mousedown', engage);
	canvas.addEventListener('mousemove', drawLine);
	canvas.addEventListener('mouseup', disengage);
	canvas.addEventListener('touchstart',engage);
	canvas.addEventListener('touchmove',drawLine);
	canvas.addEventListener('touchend',disengage);

	canvas.addEventListener("touchmove",function(e)
        { 
        	var touch = e.touches[0];
  			var mouseEvent = new MouseEvent("mousemove", {
    		clientX: touch.clientX,
    		clientY: touch.clientY
 			 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchstart",function(e)
        {

        var mousePos = getTouchPos(canvas, e);
  		var  touch = e.touches[0];
  		var mouseEvent = new MouseEvent("mousedown", {
    	clientX: touch.clientX,
    	clientY: touch.clientY
 		 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchend", function (e) {
  		var mouseEvent = new MouseEvent("mouseup", {});
  		canvas.dispatchEvent(mouseEvent);
		}, false);


});

paint.addEventListener('click',function(){
	canvas.removeEventListener('mousemove', drawLine);
	canvas.removeEventListener('mousemove', putSpray);
	canvas.removeEventListener('mousemove', erase);
	canvas.removeEventListener('touchmove', drawLine);
	canvas.removeEventListener('touchmove', putSpray);
	//canvas.removeEventListener('touchmove', drawRoundLine);
	canvas.removeEventListener('touchmove', erase);
	canvas.addEventListener('mousedown', engage);
	canvas.addEventListener('mousemove', drawRoundLine);	
	canvas.addEventListener('mouseup', disengage);
	canvas.addEventListener('touchstart',engage);
	canvas.addEventListener('touchmove',drawRoundLine);
	canvas.addEventListener('touchend',disengage);

	canvas.addEventListener("touchmove",function(e)
        { 
        	var touch = e.touches[0];
  			var mouseEvent = new MouseEvent("mousemove", {
    		clientX: touch.clientX,
    		clientY: touch.clientY
 			 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchstart",function(e)
        {

        var mousePos = getTouchPos(canvas, e);
  		var  touch = e.touches[0];
  		var mouseEvent = new MouseEvent("mousedown", {
    	clientX: touch.clientX,
    	clientY: touch.clientY
 		 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchend", function (e) {
  		var mouseEvent = new MouseEvent("mouseup", {});
  		canvas.dispatchEvent(mouseEvent);
		}, false);

});
spray.addEventListener('click',function(){
	canvas.removeEventListener('mousemove', drawRoundLine);
	canvas.removeEventListener('mousemove', drawLine);
	canvas.removeEventListener('mousemove', erase);
	canvas.removeEventListener('touchmove', drawLine);
	//canvas.removeEventListener('touchmove', putSpray);
	canvas.removeEventListener('touchmove', drawRoundLine);
	canvas.removeEventListener('touchmove', erase);
	canvas.addEventListener('mousedown', engage);
	canvas.addEventListener('mousemove', putSpray);
	canvas.addEventListener('mouseup', disengage);
	canvas.addEventListener('touchstart',engage);
	canvas.addEventListener('touchmove',putSpray);
	canvas.addEventListener('touchend',disengage);

	canvas.addEventListener("touchmove",function(e)
        { 
        	var touch = e.touches[0];
  			var mouseEvent = new MouseEvent("mousemove", {
    		clientX: touch.clientX,
    		clientY: touch.clientY
 			 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchstart",function(e)
        {

        var mousePos = getTouchPos(canvas, e);
  		var  touch = e.touches[0];
  		var mouseEvent = new MouseEvent("mousedown", {
    	clientX: touch.clientX,
    	clientY: touch.clientY
 		 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchend", function (e) {
  		var mouseEvent = new MouseEvent("mouseup", {});
  		canvas.dispatchEvent(mouseEvent);
		}, false);
});
eraseContent.addEventListener('click',function(){
	canvas.removeEventListener('mousemove', drawRoundLine);
	canvas.removeEventListener('mousemove', drawLine);
	canvas.removeEventListener('mousemove', putSpray);
	canvas.removeEventListener('touchmove', drawLine);
	canvas.removeEventListener('touchmove', putSpray);
	canvas.removeEventListener('touchmove', drawRoundLine);
	//canvas.removeEventListener('touchmove', erase);
	canvas.addEventListener('mousedown', engageEraser);
	canvas.addEventListener('mousemove', erase);
	canvas.addEventListener('mouseup', disengageEraser);
	canvas.addEventListener('touchstart',engageEraser);
	canvas.addEventListener('touchmove',erase);
	canvas.addEventListener('touchend',disengageEraser);
	canvas.addEventListener("touchmove",function(e)
        { 
        	var touch = e.touches[0];
  			var mouseEvent = new MouseEvent("mousemove", {
    		clientX: touch.clientX,
    		clientY: touch.clientY
 			 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchstart",function(e)
        {

        var mousePos = getTouchPos(canvas, e);
  		var  touch = e.touches[0];
  		var mouseEvent = new MouseEvent("mousedown", {
    	clientX: touch.clientX,
    	clientY: touch.clientY
 		 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchend", function (e) {
  		var mouseEvent = new MouseEvent("mouseup", {});
  		canvas.dispatchEvent(mouseEvent);
		}, false);
});

document.body.addEventListener("touchstart", preventer, false);
document.body.addEventListener("touchend", preventer ,false);
document.body.addEventListener("touchmove", preventer, false);


	


function init() 
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	radius = 1;
	context.lineWidth = radius * 2;

	canvas.addEventListener('mousedown', engage);
	canvas.addEventListener('mousemove', drawRoundLine);
	canvas.addEventListener('mouseup', disengage);

	canvas.addEventListener("touchmove",function(e)
        { 
        	var touch = e.touches[0];
  			var mouseEvent = new MouseEvent("mousemove", {
    		clientX: touch.clientX,
    		clientY: touch.clientY
 			 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchstart",function(e)
        {

        var mousePos = getTouchPos(canvas, e);
  		var  touch = e.touches[0];
  		var mouseEvent = new MouseEvent("mousedown", {
    	clientX: touch.clientX,
    	clientY: touch.clientY
 		 });
  			canvas.dispatchEvent(mouseEvent);
		}, false);

        canvas.addEventListener("touchend", function (e) {
  		var mouseEvent = new MouseEvent("mouseup", {});
  		canvas.dispatchEvent(mouseEvent);
		}, false);

}

function putSpray(e)
{
	if (dragging)
	{
		context.beginPath();
		context.arc(e.clientX+Math.random()*100, e.clientY+Math.random()*100, radius, 0, Math.PI * 2);
		//context.fill();
		context.stroke();
		context.beginPath();
	}
}

function drawLine(e)
{
	if (dragging)
	{
	    context.beginPath();
	    context.moveTo(lastX, lastY);
	    context.lineTo(e.clientX, e.clientY);
	    context.stroke();
	    lastX = e.clientX;
	    lastY = e.clientY
	   
	}
	
}

function drawRoundLine(e) 
{
	if (dragging) 
	{
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
	    context.beginPath();
	    context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
	    context.fill();
	    context.beginPath();
	    context.moveTo(e.clientX, e.clientY);
    }
}

function erase(e) 
{
	if (lastStrokeStrike !== 'white' && lastFillStyle !== 'white') 
	{

		lastFillStyle = context.fillStyle;
		lastStrokeStrike = context.strokeStyle;
	}

	if (dragging) 
	{
		context.fillStyle = 'white';
		context.strokeStyle ='white';
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
	    context.beginPath();
	    context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
	    context.fill();
	    context.beginPath();
	    context.moveTo(e.clientX, e.clientY);
	    context.fillStyle = lastFillStyle;
		context.strokeStyle = lastStrokeStrike;
    }
}
function engage(e)
{
	dragging = true;
	lastX = e.clientX;
	lastY = e.clientY;
	//putSpray(e);e.touches[0].clientX or e.touches[0].clientY
        	
}
function disengage(e)
{
	dragging = false;
	context.beginPath();
}

function engageEraser(e){
	dragging = true;
	lastX = e.clientX;
	lastY = e.clientY;
	
}
function disengageEraser(e){
	dragging = false;
	context.beginPath();
}


function preventer(e){
if (e.target == canvas) {
   	e.preventDefault();
  }
}
















