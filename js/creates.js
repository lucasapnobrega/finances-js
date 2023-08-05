import { transactions } from "./index.js"
import updateBalance from './updateBalance.js'

function createTransaction(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`

    return container
}

function createTransactionName(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-name')
    title.textContent = name

    return title
}

function createTransactionAmount(amount, id) {
    const amountSpan = document.createElement('span')

    // formatar os números/dígitos para as características BR
    const formaterAmount = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    }).format(amount)

    amountSpan.textContent = `${formaterAmount}`
    amountSpan.classList.add('transaction-amount',`transaction-amount-${id}`)

    if(amount > 0) { 
        amountSpan.classList.add('credit')
    } else {
        amountSpan.classList.add('debit')
    }

    return amountSpan
}

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn', 'btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })

    return editBtn
}

function createDeleteTransactionBtn(id) {
    const deleteBtn = document.createElement('button')
    
    deleteBtn.classList.add('delete-btn', 'btn')
    deleteBtn.textContent = 'Remover'

    deleteBtn.addEventListener('click', async () => {
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'DELETE'
        })

        const containerTransaction = document.querySelector(`#transaction-${id}`)

        containerTransaction.remove()
        const indexToRemove = transactions.findIndex(transaction => transaction.id === id)
        transactions.splice(indexToRemove, 1)

        updateBalance()
    })

    return deleteBtn
}

function createCopyButton(id) {
    const copyBtn = document.createElement('button')
    copyBtn.classList.add('copy-btn', 'btn')
    copyBtn.textContent = 'Copiar'

    copyBtn.addEventListener('click', () => {
        const valueToCopy = document.querySelector(`.transaction-amount-${id}`).textContent
        navigator.clipboard.writeText(valueToCopy)

        copyBtn.textContent = 'Copiado!'
        copyBtn.classList.add('copy-btn-on')
        setTimeout(() => {
            copyBtn.textContent = 'Copiar'
            copyBtn.classList.remove('copy-btn-on')
        }, 1250)
 
    })

    return copyBtn
}


export { createTransaction, createTransactionName, createTransactionAmount, createEditTransactionBtn, createDeleteTransactionBtn, createCopyButton }