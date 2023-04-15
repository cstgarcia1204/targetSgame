    let screen = document.querySelector('canvas');
	let paint = screen.getContext('2d');		
	paint.fillStyle = 'lightgrey';
	paint.fillRect(0,0,600,400); 

	let radio = 10;
	let xRandom;
	let yRandom;
	let x = 0

	const grithDesign = (x, y, radio, color) => {
		paint.fillStyle = color;
		paint.beginPath();
		paint.arc(x, y, radio, 0, 2*Math.PI);
		paint.fill();
	}	

	const cleanScreen = () => {
		paint.clearRect(0,0,600,400);
	}

	const targetDesign = (x, y) => {
		grithDesign(x, y, radio + 20, 'red');
		grithDesign(x, y, radio + 10, 'white');
		grithDesign(x, y, radio, 'red');
	}

	const randomPosition = (maximum) => {
		return Math.floor(Math.random() * maximum);

	}

	const refreshScreen = () => {
		cleanScreen();
		xRandom = randomPosition(600);
		yRandom = randomPosition(400);
		targetDesign(xRandom, yRandom);
		x++;
	}
	
	setInterval(refreshScreen, 1000);

	const shoot = (event) => {

		let x_event = event.pageX - screen.offsetLeft;
		let y_event = event.pageY - screen.offsetTop;

		if ((x_event < xRandom + radio) && 
			(x_event > xRandom - radio) &&
			(y_event < yRandom + radio) &&
			(y_event > yRandom - radio) ) {
			alert('Succesful Shot!!!!');
		}
	}

	screen.onclick = shoot;