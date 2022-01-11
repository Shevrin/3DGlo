const sendForm = ({ formId, someElement = [] }) => {
	const form = document.getElementById(formId)

	const statusBlock = document.createElement('div')

	// const loadText = 'Загрузка...'
	const errorText = 'Ошибка!'
	const successText = 'Благодарим, наш менеджер свяжется с Вами!'

	const validate = (list) => {
		let success = true
		list.forEach(input => {
			if (!input.classList.contains('success')) {
				success = false
			}
		})
		return success
	}

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			// body: data,
			headers: {
				// 'Content-type': 'multipart/form-data'
				'Content-type': 'application/json; charset=UTF-8',
			}
		}).then((res) => res.json())
	}

	const submitForm = () => {
		const formElements = form.querySelectorAll('input')
		const formData = new FormData(form)
		const formBody = {}

		statusBlock.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="158px" 
height="24px" viewBox="0 0 158 24" xml:space="preserve">
<path fill="#ffffff" d="M64 4h10v10H64V4zm20 0h10v10H84V4zm20 0h10v10h-10V4zm20 
0h10v10h-10V4zm20 0h10v10h-10V4zM4 4h10v10H4V4zm20 0h10v10H24V4zm20 0h10v10H44V4z"/>
<path fill="#ffffff" d="M144 14V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10h-10zm9-9h-8v8h8V5zm-29 
9V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10H84zm9-9h-8v8h8V5zm-29 9V4h10v10H64zm9-9h-8v8h8V5zm-29 
9V4h10v10H44zm9-9h-8v8h8V5zm-29 9V4h10v10H24zm9-9h-8v8h8V5zM4 14V4h10v10H4zm9-9H5v8h8V5z"/><g>
<path fill="#ffffff" d="M-58 16V2h14v14h-14zm13-13h-12v12h12V3z"/>
<path fill="#ffffff" fill-opacity="0.3" d="M-40 0h18v18h-18z"/>
<path fill="#ffffff" d="M-40 18V0h18v18h-18zm17-17h-16v16h16V1z"/>
<path fill="#ffffff" fill-opacity="0.7" d="M-20 0h18v18h-18z"/>
<path fill="#ffffff" d="M-20 18V0h18v18h-18zM-3 1h-16v16h16V1z"/>
<animateTransform attributeName="transform" type="translate" 
values="20 0;40 0;60 0;80 0;100 0;120 0;140 0;160 0;180 0;200 0" calcMode="discrete" 
dur="800ms" repeatCount="indefinite"/></g>
</svg>`
		// statusBlock.textContent = loadText
		form.append(statusBlock)

		formData.forEach((val, key) => {
			formBody[key] = val
		})

		someElement.forEach(elem => {
			const element = document.getElementById(elem.id)

			if (elem.type === 'block') {
				formBody[elem.id] = element.textContent
			} else if (elem.type === 'input') {
				formBody[elem.id] = element.value
			}
		})

		if (validate(formElements)) {
			sendData(formBody)
				.then((data) => {
					// console.log(data)
					statusBlock.textContent = successText
					// statusBlock.textContent = successText
					formElements.forEach(input => {
						input.value = ''
						input.classList.remove('success')
					})
				})
				.catch(err => {
					statusBlock.textContent = errorText
				})
		} else {
			alert('Данные не валидны!')
		}
	}

	try {
		if (!form) {
			throw new Error('Верните форму на место')
		}
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			submitForm()
		})
	} catch (error) {
		console.log(error.message);
	}

}

export default sendForm

