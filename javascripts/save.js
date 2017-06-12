

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
	context.fillText("Mayur's Assignment",10,20, 500);
    downloadCanvas(this, 'canvas', 'myCanvas.png');
}, true);
