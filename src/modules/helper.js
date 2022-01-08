const animate = ({ timing, draw, duration }) => {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
export { animate }

const browserSupportsCSSProperty = (propertyName) => {
	const elm = document.createElement('div');
	propertyName = propertyName.toLowerCase();

	if (elm.style[propertyName] != undefined)
		return true;

	const propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
		domPrefixes = 'Webkit Moz ms O'.split(' ');

	for (const i = 0; i < domPrefixes.length; i++) {
		if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
			return true;
	}

	return false;
}

// Use it to check for animation support:

if (!browserSupportsCSSProperty('animation')) {
	// fallback…
}

export { browserSupportsCSSProperty }