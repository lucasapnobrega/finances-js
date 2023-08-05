import { createTransaction, createTransactionName, createTransactionAmount, createEditTransactionBtn, createDeleteTransactionBtn, createCopyButton } from './creates.js'

export default (transaction) => {
    const container = createTransaction(transaction.id)
    const title = createTransactionName(transaction.name)
    const amount = createTransactionAmount(transaction.amount, transaction.id)
    const editBtn = createEditTransactionBtn(transaction)
    const removeBtn = createDeleteTransactionBtn(transaction.id)
    const copyBtn = createCopyButton(transaction.id)

    const groupAmountBtns = document.createElement('div')
    groupAmountBtns.classList.add('group-amount-btns')
    groupAmountBtns.append(amount, editBtn, removeBtn, copyBtn)

    container.append(title, groupAmountBtns)
    document.querySelector('#transactions').append(container)
}