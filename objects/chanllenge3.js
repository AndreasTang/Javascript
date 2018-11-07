// function add income & expense
// function reset account --> reset income and outcome to 0
// function getAccountSummary --> print a list of your account's income outcome and balance
// Ex: Andreas has $500, $1000 from work and expense $500
// Useage: print account --> make sure it's default
//         addincome
//         addexpense
//         print account --> make sure your function work
//         addexpense
//         addincome
//         print account again
//         reset account
//         print account --> make sure it's back to default

let myAccount = {
    name: 'AndreasTang',
    money: 0,
    income: 0,
    expense: 0
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
    account.money = account.money + amount
}

let addExpense = function (account, amount) {
    account.expense = account.expense + amount
    account.money = account.money - amount
}
let resetAccount = function (account) {
    account.expense = 0
    account.income = 0
    account.money = 0
}

let printAccount = function (account) {
    console.log(`${account.name}'s account has $${account.money}. Total income is $${account.income}. Total expense is $${account.expense}`)
}

resetAccount(myAccount)
printAccount(myAccount)
addIncome(myAccount, 500)
addExpense(myAccount, 100)
printAccount(myAccount)
addIncome(myAccount, 50)
addExpense(myAccount, 150)
printAccount(myAccount)
resetAccount(myAccount)
printAccount(myAccount)