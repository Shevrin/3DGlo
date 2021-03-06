const menu = () => {

	const menu = document.querySelector('menu')
	const body = document.querySelector('body')


	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	body.addEventListener('click', (e) => {

		if (e.target.classList.contains('close-btn') || e.target.matches('menu>a')
			|| e.target.closest('.menu')) {
			handleMenu();
		}
		else if (menu.classList.contains('active-menu') && !e.target.matches('menu') && !e.target.matches('li')) {
			handleMenu()
		}
	})
}

export default menu