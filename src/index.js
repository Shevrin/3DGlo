import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendForm from './modules/sendForm'

const deadline = '13 january 2022 00:00'
const price = 100

timer(deadline)
menu()
modal()
calc(price)
validation()
tabs()
slider()
sendForm({
	formId: 'form1',
	someElement: [
		{
			type: 'block',
			id: 'total'
		}
	]
})
sendForm({
	formId: 'form3',

})