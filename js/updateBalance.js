import { transactions } from "./index.js"

export default () => {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0) // soma total das transações 

    const formaterBalance = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    }).format(balance)

    balanceSpan.textContent = formaterBalance
}