const calc = () => {
	const calcSelect = document.querySelector('.calc-item ')
	const inputs = document.querySelectorAll('.calc-block > input[type=text]')
	const total = document.getElementById('total')
	calcSelect.value = ''
	let calcSelectData = 0

	inputs.forEach(element => {
		element.value = ''
	});

	inputs.forEach(item => item.addEventListener('input', (e) => {
		let reg = new RegExp('^[0-9]*$')
		if (reg.test(e.target.value)) {
		} else {
			alert('Введите число')
			item.value = ''
		}
		total.textContent = calcSelectData * inputs[0].value * inputs[1].value * inputs[2].value
	}))

	calcSelect.addEventListener('input', (e) => {
		if (e.target.value) {
			calcSelectData = e.target.value
		} else {
			calcSelectData = 0
		}
		total.textContent = calcSelectData * inputs[0].value * inputs[1].value * inputs[2].value
	})
}

export default calc