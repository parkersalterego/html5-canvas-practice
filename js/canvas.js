let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c.fillRect(x, y, width, height);
c.fillStyle = '#47b3ed';
c.fillRect(100, 100, 100, 100);
c.fillStyle = '#fff';
c.fillRect(500, 500, 100, 100);
c.fillStyle = '#f100ed';
c.fillRect(300, 300, 100, 100);


// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(500, 500);
c.strokeStyle = '#fff';
c.stroke();

// arc/circle 
// c.arc(300, 300, 30, 0, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));

c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = '#000';
c.stroke();



