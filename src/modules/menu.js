const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	// const closeBrn = menu.querySelector('.close-btn')
	// const menuItems = menu.querySelectorAll('ul>li>a')

	const handleMenu = () => {
		// if (!menu.style.transform) {
		// 	menu.style.transform = `translateX(00%)`
		// } else {
		// 	menu.style.transform = ''
		// }
		menu.classList.toggle('active-menu')
	}

	menuBtn.addEventListener('click', handleMenu)

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('close-btn') || e.target.matches('a')) {
			handleMenu()
		} else {

		}
	})


	// closeBrn.addEventListener('click', handleMenu)

	// menuItems.forEach(item => item.addEventListener('click', handleMenu))
}

export default menu