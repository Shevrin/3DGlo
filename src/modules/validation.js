const validation = () => {
	const inputPhone = document.querySelectorAll('.form-phone')
	const inputEmail = document.querySelectorAll('.form-email')
	const inputName = document.querySelectorAll('.form-name')
	// const submitBtn = document.querySelectorAll('button[type=submit]')
	let regName = /^([а-яА-Я]+\s)*[а-яА-Я]*$/
	let regEmail = /^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/
	let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/


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
		item.addEventListener('change', () => {
			if (!regPhone.test(item.value)) {
				alert('Некорректный номер телефона')
				item.value = ''
			}
		})
	})

}

export default validation
