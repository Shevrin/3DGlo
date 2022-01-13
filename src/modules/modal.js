import { animate } from './helper'

const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const inputs = modal.querySelectorAll('input')
	const widthScreen = document.documentElement.offsetWidth
	let validate = false
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
		inputs.forEach(input => {
			input.classList.remove('success')
			input.value = ''
		})
		console.log('close');
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
		inputs.forEach(input => {
			if (input.classList.contains('success')) {
				validate = true
			} else {
				validate = false
			}
		})
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')
			|| (e.target.classList.contains('form-btn') && validate)) {
			console.log(validate);
			widthScreen >= '768' ? closeModal() : modal.style.display = ''
		}
	})
}

export default modal

