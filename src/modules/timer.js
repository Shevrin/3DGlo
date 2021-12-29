const timer = (deadline) => {
	const timerDays = document.getElementById('timer-days')
	const timerHours = document.getElementById('timer-hours')
	const timerMinutes = document.getElementById('timer-minutes')
	const timerSeconds = document.getElementById('timer-seconds')

	const getTimeRemaining = () => {
		let dateStop = new Date(deadline).getTime()
		let dateNow = new Date().getTime()
		let timeRemaining = (dateStop - dateNow) / 1000

		let days = ~~((timeRemaining / 3600 / 24))
		let houres = ~~((timeRemaining / 3600) % 24)
		let minutes = ~~((timeRemaining / 60) % 60)
		let seconds = ~~(timeRemaining % 60)

		return (timeRemaining > 0) ? {
			days,
			houres,
			minutes,
			seconds,
			timeRemaining
		} : {
			days: 0,
			houres: 0,
			minutes: 0,
			seconds: 0,
		}
	}
	// countTimer(deadline)
	// setInterval(countTimer, 1000, deadline)

	const updateClock = () => {
		let getTime = getTimeRemaining()
		timerDays.textContent = getTime.days
		timerHours.textContent = (getTime.houres < 10) ? '0' + getTime.houres : getTime.houres
		timerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes
		timerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds

		/**setTimeout*/
		// if (getTime.timeRemaining > 0) {
		// 	setTimeout(updateClock, 1000)
		// }

		/**setInterval */
		let interval = setInterval(() => {
			if (getTime.seconds > 0) {
				updateClock()
				clearInterval(interval)
			}
		}, 1000)
	}
	updateClock()
}
export default timer