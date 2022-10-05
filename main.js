console.log('hello');
let displayScreen = document.getElementById('display');
console.log(displayScreen);
let buttons = Array.from(document.getElementsByClassName('button'));
console.log('all buttons:', buttons);

buttons.map((button) =>
	button.addEventListener('click', (e) => {
		console.log('inner text:', e.target.innerText);
		switch (e.target.innerText) {
			case 'CLR':
				display.innerText = '';
				break;
			case 'DEL':
				if (display.innerText) {
					display.innerText = display.innerText.slice(0, -1);
					console.log(display.innerText);
				}
				break;
			case '=':
				try {
					console.log(typeof display.innerText);
					display.innerText = eval(display.innerText);
					console.log(eval(display.innerText));
				} catch {
					display.innerText = 'Error syntax found !';
				}
				break;
			default:
				display.innerText += e.target.innerText;
		}
	})
);
