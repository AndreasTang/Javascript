let myAccount ={
    name: 'Andreas',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 100)
console.log(myAccount)