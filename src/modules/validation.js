const validation = () => {
	const inputPhone = document.querySelectorAll('.form-phone')
	const inputEmail = document.querySelectorAll('.form-email')
	const inputName = document.querySelectorAll('.form-name')
	// const submitBtn = document.querySelectorAll('button[type=submit]')
	let regName = /^[а-яА-Я]*\s+$/
	let regEmail = /^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/
	let regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/


	inputName.forEach(item => {
		item.value = ''
		item.addEventListener('input', () => {
			if (!regName.test(item.value)) {
				alert('Введите имя на кирилице')
				item.value = ''
			}
		})
	})

	inputEmail.forEach(item => {
		item.value = ''
		item.addEventListener('change', () => {
			console.log(regEmail.test(item.value));
			if (!regEmail.test(item.value)) {
				alert('Некорректный e-mail')
				item.value = ''
			}
		})
	})

	inputPhone.forEach(item => {
		item.value = ''
		item.addEventListener('input', () => {
			if (!regPhone.test(item.value)) {
				alert('Некорректный номер телефона')
				item.value = ''
			}
		})
	})

}

export default validation
