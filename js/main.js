// Элементы страницы

const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const preloader = document.querySelector('#preloader')


// Делаем расчеты

// Метка текущего года
const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {
    // Текущая дата
    const currentTime = new Date()
    // Разница между меткой 1 января следующего года и текущим временем
    const diff = nextYear - currentTime

    // Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)

    // Часы без учета полных дней
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24

    // Минуты без учета полных часов
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60

    // Секунды без учета полных минут
    const secondsLeft = Math.floor(diff / 1000) % 60

    days.innerText = daysLeft
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
}

function showCounter() {
    preloader.style.opacity = 0
    countdown.style.opacity = 1
}


setInterval(updateCounter, 1000)
setTimeout(showCounter, 1000)