const day = document.getElementById('day')
const dayWweek = document.getElementById('day-week')
const time = document.getElementById('time')
const newYear = document.getElementById('new-year')
const week = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье'
]

const updateClock = () => {

	let thisDate = new Date()
	let pm = 'ooo'
	let endTime = new Date('01 january 2022 00:00:00')


	switch (true) {
		case (thisDate.getHours() > 5):
			day.textContent = 'Доброе утро'
			break;
		case (thisDate.getHours() > 11):
			day.textContent = 'Добрый день'
			break;
		case (thisDate.getHours() > 18):
			day.textContent = 'Добрый вечер'
			break;
		case (thisDate.getHours() > 23):
		case (thisDate.getHours() < 5):
			day.textContent = 'Доброй ночи'
			break;
	}

	time.textContent = thisDate.toLocaleTimeString("en-US")
	dayWweek.textContent = week[thisDate.getDay() - 1]
	newYear.textContent = ~~((endTime - thisDate) / 1000 / 3600 / 24)

	setTimeout(updateClock, 1000)
}

updateClock()