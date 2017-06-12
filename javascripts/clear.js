var clear = document.getElementById('clear');

clear.addEventListener("click", clearCanvas);


function clearCanvas()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
}
