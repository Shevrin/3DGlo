const calc = (price) => {
	const calcSelect = document.querySelector('.calc-item ')
	const inputs = document.querySelectorAll('.calc-block > input[type=text]')
	const total = document.getElementById('total')
	calcSelect.value = ''
	let calcSelectData = 0

	inputs.forEach(element => {
		element.value = ''
	});

	const countCalc = () => {
		let totalValue = 0
		let countOptionalRoom = 1
		let countOptionlDay = 1

		if (inputs[1].value > 1) {
			countOptionalRoom += +inputs[1].value / 10
		}

		if (inputs[2].value && inputs[2].value < 5) {
			countOptionlDay = 2
		} else if (inputs[2].value && inputs[2].value < 10) {
			countOptionlDay = 1.5
		}

		if (calcSelectData && inputs[0].value) {
			totalValue = price * calcSelectData * +inputs[0].value * countOptionalRoom * countOptionlDay
		} else {
			totalValue = 0
		}
		total.textContent = totalValue
	}

	inputs.forEach(item => item.addEventListener('input', (e) => {
		let reg = new RegExp('^[0-9]*$')
		if (reg.test(e.target.value)) {
		} else {
			alert('Введите число')
			item.value = ''
		}
		countCalc()
	}))

	calcSelect.addEventListener('input', (e) => {
		if (e.target.value) {
			calcSelectData = +e.target.value
		} else {
			calcSelectData = 0
		}
		countCalc()
	})
}

export default calc