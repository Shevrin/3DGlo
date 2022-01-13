import { animate } from './helper'

const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const inputs = modal.querySelectorAll('input')
	const widthScreen = document.documentElement.offsetWidth
	let validate = 0
	const openModal = () => {
		modal.style.display = 'block'
		modal.style.opacity = 0

		animate({
			duration: 130,
			timing(timeFraction) {
				return timeFraction
			},
			draw(progress) {
				modal.style.opacity = 0 + progress
			}
		})
		// const anim = () => {
		// 	opacity += 0.1
		// 	modal.style.opacity = opacity
		// 	if (opacity < 1) requestAnimationFrame(anim)
		// }
		// requestAnimationFrame(anim)
	}

	const closeModal = () => {
		console.log(validate);
		inputs.forEach(input => {
			input.classList.remove('success')
			input.value = ''
		})
		animate({
			duration: 130,
			timing(timeFraction) {
				return timeFraction
			},
			draw(progress) {
				if (Math.floor(modal.style.opacity * 10) > 0) {
					modal.style.opacity = 1 - progress
				} else {
					modal.style.display = ''
				}
			}
		})

		// 	const anim = () => {
		// 		opacity -= 0.1
		// 		modal.style.opacity = opacity
		// 		if (opacity > 0) {
		// 			requestAnimationFrame(anim)
		// 		} else {
		// 			modal.style.display = ''
		// 		}
		// 	}
		// 	requestAnimationFrame(anim)
	}

	popupBtn.forEach(item => item.addEventListener('click', () => {
		widthScreen >= '768' ? openModal() : modal.style.display = 'block'
	}
	))

	modal.addEventListener('click', (e) => {
		validate = 0
		console.log(inputs.length);
		inputs.length
		inputs.forEach(input => {
			if (input.classList.contains('success')) {
				validate++
			} else if (!input.value) {
				validate--
			} else {
				validate--
			}
		})
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')
			|| (e.target.classList.contains('form-btn') && validate === inputs.length)) {
			widthScreen >= '768' ? closeModal() : modal.style.display = ''
		}
	})
}

export default modal

