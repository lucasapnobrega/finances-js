import switchTheme from './switchTheme.js'
import updateBalance from './updateBalance.js'
import render from './render.js'
import saveTransaction from './saveTransaction.js'
import clock from './clock.js'

export let transactions = []

async function fetchTransaction() {
    const response = await fetch('http://localhost:3000/transactions').then(response => response.json())

    return response
}

async function initialization() {
    const results = await fetchTransaction()

    transactions.push(...results)
    transactions.forEach(transaction => render(transaction))

    updateBalance()
}

document.addEventListener('DOMContentLoaded', initialization)
document.querySelector('.switch-theme-btn').addEventListener('click', switchTheme)
document.querySelector('.form').addEventListener('submit', saveTransaction)

setInterval(() => clock(), 1000)
