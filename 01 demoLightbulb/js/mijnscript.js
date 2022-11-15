// Initiele status van de lamp, boolean waarde -->
let bulbIsOn = false;
//let bulbison = "eenstring";
console.log('loaded');
function toggleBulb() {
	if (bulbIsOn) {
		// de output van console zie je in de inspector van de browser
		// gebruik dit voor jezelf om feedback uit je programma te krijgen
		console.log('Bulb was on, turning it off');
		bulbIsOn = false;
		document.getElementById('myImage').src = './images/pic_bulboff.gif';
		document.getElementById('btnBulb').innerHTML = 'Turn on the light';
	}
	else {
		console.log('Bulb was off, turning it on');
		bulbIsOn = true;
		document.getElementById('myImage').src = './images/pic_bulbon.gif';
		document.getElementById('btnBulb').innerHTML = 'Turn the light off';
		
	}

}

function asyncDemo() {
	setTimeout(function() {
		console.log('Hello ');
	}, 2000);
	console.log('World!');
}

function syncDemo() {
	console.log("Hello");
	console.log("World");
}