const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	// const closeBtn = modal.querySelector('.popup-close')
	const widthScreen = document.documentElement.offsetWidth
	// const submitBtn = modal.querySelector('.form-btn')
	let opacity = 0

	const openModal = () => {
		modal.style.display = 'block'
		modal.style.opacity = opacity
		const anim = () => {
			opacity += 0.1
			modal.style.opacity = opacity
			if (opacity < 1) requestAnimationFrame(anim)
		}
		requestAnimationFrame(anim)
	}

	const closeModal = () => {
		const anim = () => {
			opacity -= 0.1
			modal.style.opacity = opacity
			if (opacity > 0) {
				requestAnimationFrame(anim)
			} else {
				modal.style.display = ''
			}
		}
		requestAnimationFrame(anim)
	}

	popupBtn.forEach(item => item.addEventListener('click', () => {
		console.log(widthScreen);
		widthScreen >= '768' ? openModal() : modal.style.display = 'block'
	}
	))

	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			widthScreen >= '768' ? closeModal() : modal.style.display = ''
		}
	})
	// closeBtn.addEventListener('click', () => {
	// 	widthScreen >= '768' ? closeModal() : modal.style.display = ''
	// })

}
export default modal

