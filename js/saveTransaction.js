import { transactions } from "./index.js"
import render from "./render.js"
import updateBalance from "./updateBalance.js"

export default async function (ev) { // submit do formulário (POST)
    ev.preventDefault()

    const form = document.querySelector('form')

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    if(id) { // se existir id, ou seja, está na parte de edição
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transactionData = await response.json()
        const indexToRemove = transactions.findIndex(transaction => transaction.id === id)

        transactions.splice(indexToRemove, 1, transactionData) // exclui o objeto antigo e insere o novo objeto
        document.querySelector(`#transaction-${id}`).remove()

        render(transactionData)
    } else {
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transactionData = await response.json()
        transactions.push(transactionData)
        render(transactionData)
    }

    form.reset()
    updateBalance()
}