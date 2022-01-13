const validation = () => {
	const inputPhone = document.querySelectorAll('.form-phone')
	const inputEmail = document.querySelectorAll('.form-email')
	const inputName = document.querySelectorAll('.form-name')
	const topForm = document.getElementById('form2-name')
	const formMessage = document.getElementById('form2-message')
	// const submitBtn = document.querySelectorAll('button[type=submit]')
	let regName = /^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/
	let regMessage = /^[:;'"()?!,.а-яА-ЯёЁ0-9\s]+$/
	let regEmail = /^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/
	let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/


	inputName.forEach(item => {
		item.value = ''
		item.addEventListener('input', () => {
			if (!regName.test(item.value)) {
				alert('Введите имя на кирилице')
				item.value = ''
			}
			if (regName.test(item.value)) {
				item.classList.add('success')
			}
		})
	})

	topForm.addEventListener('input', () => {
		if (!regName.test(topForm.value)) {
			alert('Введите имя на кирилице')
			topForm.value = ''
		}
		if (regName.test(topForm.value)) {
			topForm.classList.add('success')
		}
	})

	formMessage.addEventListener('input', () => {
		if (!regMessage.test(formMessage.value)) {
			alert('Введите текст на кирилице')
			formMessage.value = ''
		}
		if (regMessage.test(formMessage.value)) {
			formMessage.classList.add('success')
		}
	})

	inputEmail.forEach(item => {
		item.value = ''
		item.addEventListener('change', () => {
			if (!regEmail.test(item.value)) {
				alert('Некорректный e-mail')
				item.value = ''
			}
			if (regEmail.test(item.value)) {
				item.classList.add('success')
			}
		})
	})

	inputPhone.forEach(item => {
		item.value = ''
		item.addEventListener('change', () => {
			if (!regPhone.test(item.value) || inputPhone.value) {
				alert('Некорректный номер телефона')
				item.value = ''
			}
			if (regPhone.test(item.value)) {
				item.classList.add('success')
			}
		})
	})

}

export default validation
