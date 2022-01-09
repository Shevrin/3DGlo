import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import validation from './modules/validation'
import scroll from './modules/scroll'

const deadline = '13 january 2022 00:00'
const scrollBtn = document.querySelector('a[href="#service-block"]')
const menuItems = document.querySelector('menu').querySelectorAll('ul>li>a')

timer(deadline)
menu()
modal()
calc()
validation()
scroll(scrollBtn)
menuItems.forEach(item => scroll(item))
