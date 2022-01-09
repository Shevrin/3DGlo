const menu = () => {
	// const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const body = document.querySelector('body')
	// const closeBrn = menu.querySelector('.close-btn')
	// const menuItems = menu.querySelectorAll('ul>li>a')

	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	body.addEventListener('click', (e) => {

		if (e.target.classList.contains('close-btn') || e.target.matches('a') ||
			e.target.classList.contains('.menu') || !e.target.matches('menu')) {
			handleMenu();
		}
	})
}

export default menu