const account = {
    name : 'AndreasTang',
    expense : [],
    income : [],
    addExpense : function(expenseDescription, amount) {
        this.expense.push({
            description :　expenseDescription,
            expenseMoney : amount
        })
    },
    addIncome :function (incomeDescription, amount) {
        this.income.push({
            description :　incomeDescription,
            incomeMoney : amount
        })
    },
    getTotalSummary : function () {
        let expenseSummary = 0
        let incomeSummary = 0
        for (let i  = 0; i < this.expense.length; i++) {
            expenseSummary = expenseSummary + this.expense[i].expenseMoney
                if (i + 1 === this.expense.length) {
            }
        }

        for (let i  = 0; i < this.income.length; i++) {
            incomeSummary = incomeSummary + this.income[i].incomeMoney
                if (i + 1 === this.income.length) {
            }
        }
        return console.log(`${this.name} have total a balance of ${incomeSummary - expenseSummary}$, ${incomeSummary}$ in  income and ${expenseSummary}$ in expense`)
    }
}

account.addIncome('workhard', 2000)
account.addExpense('buy a loli slave', 1500)
account.addExpense('buy food', 250)
account.addIncome('part time job', 500)
account.addExpense('order spear', 500)

account.getTotalSummary()