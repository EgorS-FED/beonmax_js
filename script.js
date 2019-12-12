'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let expense_1 = prompt("Введите обязательную статью расходов в этом месяце", "Статья расходов 1"),
    expenseAnswer_1 = prompt("Во сколько обойдется", "Сумма 1"),
    expense_2 = prompt("Введите обязательную статью расходов в этом месяце", "Статья расходов 2"),
    expenseAnswer_2 = prompt("Во сколько обойдется", "Сумма 2");

appData.expenses.expense_1 = expenseAnswer_1;
appData.expenses.expense_2 = expenseAnswer_2;

let onedayMoney = appData.budjet / 30;
alert("Ваш бюджет на 1 день составляет - " + onedayMoney);