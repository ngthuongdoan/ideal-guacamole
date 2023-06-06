setInterval(function () {
	const today = new Date()
	const endDate = new Date(2023, 5, 13, 0, 0, 0)
	console.log({ today, endDate })
	const date = endDate.getDate() - today.getDate()

	console.log({
		a: endDate.getHours(),
		b: today.getHours(),
	})
	let hours, minutes, seconds
	if (endDate.getHours() === 0) {
		hours = 24 - today.getHours()
	}
	if (endDate.getMinutes() === 0) {
		minutes = 60 - today.getMinutes()
	}
	if (endDate.getSeconds() === 0) {
		seconds = 60 - today.getSeconds()
	}
	const dateNode = document.getElementById("days")
	const hoursNode = document.getElementById("hours")
	const minutesNode = document.getElementById("minutes")
	const secondsNode = document.getElementById("seconds")
	dateNode.textContent = date + "d"
	hoursNode.textContent = hours + "h"
	minutesNode.textContent = minutes + "m"
	secondsNode.textContent = seconds + "s"
}, 1000)
