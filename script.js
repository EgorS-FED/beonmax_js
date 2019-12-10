'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let expense_1 = prompt("Введите обязательную статью расходов в этом месяце", "Статья расходов 1");
// let expenseAnswer_1 = prompt("Во сколько обойдется", "Сумма 1");
// let expense_2 = prompt("Введите обязательную статью расходов в этом месяце", "Статья расходов 2");
// let expenseAnswer_2 = prompt("Во сколько обойдется", "Сумма 2");

let expenses = {
    'expense_1': prompt("Введите обязательную статью расходов в этом месяце", "Статья расходов 1"),
    'expenseAnswer_1': prompt("Во сколько обойдется", "Сумма 1"),
    'expense_2': prompt("Введите обязательную статью расходов в этом месяце", "Статья расходов 2"),
    'expenseAnswer_2': prompt("Во сколько обойдется", "Сумма 2")
};

let appData = {
    "money": money,
    "timeData": time,
    "expenses": expenses,
    "optionalExpenses": "",
    "income": "",
    'saving': false
};

let onedayMoney = money / 30;
alert("Ваш бюджет на 1 день составляет - " + onedayMoney);