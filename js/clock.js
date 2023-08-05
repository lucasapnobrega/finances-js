export default () => {
    const hoursElement = document.querySelector('.hours')
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')

    const currentDate = new Date()
    const hours = currentDate.getHours().toString().padStart(2, "0")
    const minutes = currentDate.getMinutes().toString().padStart(2, "0")
    const seconds = currentDate.getSeconds().toString().padStart(2, "0")

    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
}

