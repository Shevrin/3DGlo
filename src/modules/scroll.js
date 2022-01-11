const scroll = (elem) => {
	elem.addEventListener('click', (e) => {
		e.preventDefault()
		const blockId = elem.getAttribute('href')
		document.querySelector(elem.getAttribute('href') + blockId).scrollIntoView({
			behavior: "smooth",
			block: 'start'
		})
	})
}

export default scroll
