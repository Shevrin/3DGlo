const menu = () => {
	// const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const body = document.querySelector('body')
	// const closeBtn = menu.querySelector('.close-btn')
	// const menuItems = menu.querySelectorAll('ul>li>a')

	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	body.addEventListener('click', (e) => {

		if (e.target.classList.contains('close-btn') || e.target.matches('menu>ul>li>a')
			|| e.target.closest('.menu')) {
			handleMenu();
		}
		else if (menu.classList.contains('active-menu') && !e.target.matches('menu') && !e.target.matches('li')) {
			handleMenu()
		}
	})
}

export default menu