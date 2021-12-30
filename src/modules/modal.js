const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const closeBtn = modal.querySelector('.popup-close')
	const submitBtn = modal.querySelector('.form-btn')

	popupBtn.forEach(item => item.addEventListener('click', () => {
		modal.style.display = 'block'
	}))

	closeBtn.addEventListener('click', () => {
		modal.style.display = ''
	})

	// submitBtn.addEventListener('click', () => {
	// 	modal.style.display = ''
	// })


	console.log(modal);
	console.log(popupBtn);

}
export default modal