'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется", "");

    if ( (typeof(a)) === "string" && a != "" && a.length < 50 && (typeof(b)) != null && b != "" ) {
        console.log("Done");
        appData.expenses[a] = b;
    } else {

    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на 1 день составляет - " + appData.moneyPerDay);